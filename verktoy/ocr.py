"""ocr.py — leser skannede rapporter som ikke har tekstlag.

De eldste NIVA-rapportene er rene skann. NIVA 1919 og 1920 fra 1986 gir 64 og 63
tegn tekst på henholdsvis 65 og 64 sider — det er sidetallene, ingenting mer.
Uten OCR stopper rørledningen på alt som er eldre enn midten av 90-tallet.

Kjøres én gang per rapport. Resultatet legges i hentet/ocr/{nummer}.txt, og
byggeskriptet leser derfra. Sletter du fila, kjøres OCR-en på nytt.

Krever Tesseract med norsk språkdata:
    winget install --id UB-Mannheim.TesseractOCR
    verktoy/tessdata/nor.traineddata  (fra github.com/tesseract-ocr/tessdata)
"""

import io
import os
import sys

HER = os.path.dirname(os.path.abspath(__file__))
TESSDATA = os.path.join(HER, "tessdata")
TESSERACT = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Under dette regner vi sida som uten tekstlag.
TEGN_PER_SIDE = 60


def har_tekstlag(d):
    tegn = sum(len(d[p].get_text()) for p in range(d.page_count))
    return tegn / max(1, d.page_count) >= TEGN_PER_SIDE


def tilgjengelig():
    return os.path.exists(TESSERACT) and os.path.exists(
        os.path.join(TESSDATA, "nor.traineddata"))


def les(sti_pdf, nummer, utmappe, dpi=220, sprak="nor"):
    """OCR-teksten for rapporten, fra hurtiglager hvis den finnes."""
    ut = os.path.join(utmappe, f"{nummer}.txt")
    if os.path.exists(ut) and os.path.getsize(ut) > 500:
        return io.open(ut, encoding="utf-8").read()
    if not tilgjengelig():
        return None
    import pymupdf
    import pytesseract
    from PIL import Image

    pytesseract.pytesseract.tesseract_cmd = TESSERACT
    os.environ["TESSDATA_PREFIX"] = TESSDATA
    os.makedirs(utmappe, exist_ok=True)

    d = pymupdf.open(sti_pdf)
    biter = []
    for pn in range(d.page_count):
        pm = d[pn].get_pixmap(dpi=dpi)
        img = Image.open(io.BytesIO(pm.tobytes("png")))
        biter.append(f"\n===== side {pn + 1} =====\n" + pytesseract.image_to_string(img, lang=sprak))
        if (pn + 1) % 10 == 0:
            print(f"    OCR {nummer}: {pn + 1}/{d.page_count} sider", flush=True)
    tekst = "".join(biter)
    io.open(ut, "w", encoding="utf-8", newline="\n").write(tekst)
    return tekst


if __name__ == "__main__":
    import pymupdf

    inn = os.path.join(HER, "hentet")
    utmappe = os.path.join(inn, "ocr")
    if not tilgjengelig():
        print("Tesseract eller norsk språkdata mangler — se toppkommentaren.")
        sys.exit(1)
    for f in sorted(os.listdir(inn)):
        if not f.lower().endswith(".pdf"):
            continue
        sti = os.path.join(inn, f)
        d = pymupdf.open(sti)
        if har_tekstlag(d):
            continue
        nummer = f.split("_")[0].split("-")[0]
        print(f"  {f}: {d.page_count} sider uten tekstlag — kjører OCR")
        t = les(sti, nummer, utmappe)
        print(f"    ferdig: {len(t)} tegn")
