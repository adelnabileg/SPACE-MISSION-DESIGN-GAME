# NASA Space Mission Design Game - Packaging Script
# NASA International Space Apps Challenge 2026

Write-Host "=====================================================================" -ForegroundColor Cyan
Write-Host " NASA SPACE APPS CHALLENGE 2026 - PROJECT PACKAGER" -ForegroundColor Yellow
Write-Host " Space Mission Design Game" -ForegroundColor White
Write-Host "=====================================================================" -ForegroundColor Cyan

$files = @(
    'index.html',
    'style.css',
    'script.js',
    'README.md',
    'netlify.toml',
    'vercel.json',
    'DEPLOYMENT_GUIDE.md',
    'download-zip.html'
)

$targetZip = "nasa-space-mission-game.zip"

Write-Host "`nCompressing files into $targetZip..." -ForegroundColor Cyan

try {
    Compress-Archive -Path $files -DestinationPath $targetZip -Force
    Write-Host "`n[SUCCESS] Successfully generated: $targetZip" -ForegroundColor Green
    Write-Host "You can now upload this ZIP to NASA Space Apps or drag-and-drop to https://app.netlify.com/drop for an instant live URL!`n" -ForegroundColor Yellow
} catch {
    Write-Host "`n[ERROR] $_" -ForegroundColor Red
    Write-Host "Opening download-zip.html in your default browser as a fallback..." -ForegroundColor Cyan
    Start-Process "download-zip.html"
}
