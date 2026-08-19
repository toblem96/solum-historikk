# Starter Vikkilen-historikkprototypen og åpner den i nettleseren.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
if (-not (Test-Path "node_modules")) {
  Write-Host "Installerer avhengigheter ..." -ForegroundColor Cyan
  npm install --no-audit --no-fund
}
Write-Host "Starter utviklingsserveren pa http://localhost:5183/ ..." -ForegroundColor Cyan
Start-Process "http://localhost:5183/"
npm run dev
