@echo off
title NASA Space Mission Design Game - Project Packager
color 0B
echo =====================================================================
echo    NASA SPACE APPS CHALLENGE 2026 - PROJECT PACKAGER
echo    Space Mission Design Game (Concurrent Aerospace Simulation)
echo =====================================================================
echo.
echo Packaging project files into 'nasa-space-mission-game.zip'...
echo Including: index.html, style.css, script.js, README.md, netlify.toml, vercel.json, DEPLOYMENT_GUIDE.md, etc.
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command "Compress-Archive -Path 'index.html', 'style.css', 'script.js', 'README.md', 'netlify.toml', 'vercel.json', 'DEPLOYMENT_GUIDE.md', 'download-zip.html' -DestinationPath 'nasa-space-mission-game.zip' -Force"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =====================================================================
    echo [SUCCESS] Package created successfully!
    echo File: %~dp0nasa-space-mission-game.zip
    echo =====================================================================
    echo.
    echo Next steps:
    echo  1. Upload 'nasa-space-mission-game.zip' to your NASA Space Apps project page.
    echo  2. For a FREE LIVE URL in 15 seconds:
    echo     - Open https://app.netlify.com/drop in your browser
    echo     - Drag and drop 'nasa-space-mission-game.zip' onto the page
    echo.
) else (
    echo.
    echo [NOTICE] PowerShell Compress-Archive command encountered a restriction.
    echo Opening the browser-based packager 'download-zip.html' instead...
    start download-zip.html
)

echo.
pause
