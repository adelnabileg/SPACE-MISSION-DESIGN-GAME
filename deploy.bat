@echo off
title NASA Space Mission Design Game - Live URL Deployment
color 0B
echo =====================================================================
echo    NASA SPACE APPS CHALLENGE 2026 - LIVE DEPLOYMENT HELPER
echo    Space Mission Design Game (Concurrent Aerospace Simulation)
echo =====================================================================
echo.
echo Choose your preferred instant deployment method:
echo.
echo  [1] Netlify Drop (FASTEST: 15 seconds, Zero-CLI, drag-and-drop)
echo  [2] Deploy via Netlify CLI (npx netlify-cli deploy --prod)
echo  [3] Deploy via Vercel CLI (npx vercel --prod)
echo  [4] Push to GitHub & Enable GitHub Pages
echo  [5] Package into ZIP (creates nasa-space-mission-game.zip)
echo  [6] Open Browser ZIP Downloader (download-zip.html)
echo  [7] Exit
echo.

set /p choice="Enter your choice [1-7]: "

if "%choice%"=="1" (
    echo.
    echo Opening Netlify Drop in your web browser...
    start https://app.netlify.com/drop
    echo.
    echo INSTRUCTIONS:
    echo 1. Simply drag and drop this entire project folder (or the ZIP) into Netlify Drop.
    echo 2. Netlify will deploy your game and generate a live HTTPS link in 15 seconds!
    echo.
    pause
    exit
)

if "%choice%"=="2" (
    echo.
    echo Deploying to Netlify Production...
    npx netlify-cli deploy --prod --dir=.
    pause
    exit
)

if "%choice%"=="3" (
    echo.
    echo Deploying to Vercel Production...
    npx vercel --prod
    pause
    exit
)

if "%choice%"=="4" (
    echo.
    echo Initializing Git repository and preparing GitHub Pages branch...
    git init
    git add .
    git commit -m "NASA Space Apps Challenge 2026 - Space Mission Design Game"
    git branch -M main
    echo.
    echo Git repository is ready!
    echo To push to your GitHub account:
    echo   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    echo   git push -u origin main
    echo.
    echo Then in GitHub: Go to Repository Settings -^> Pages -^> Source: GitHub Actions.
    echo.
    pause
    exit
)

if "%choice%"=="5" (
    call package-zip.bat
    exit
)

if "%choice%"=="6" (
    start download-zip.html
    exit
)

if "%choice%"=="7" (
    exit
)
