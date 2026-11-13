# 🚀 Live Deployment & NASA Space Apps Submission Guide
### دليل نشر المشروع على الإنترنت وتسليمه لمسابقة NASA Space Apps Challenge 2026

Welcome! This guide provides **instant, step-by-step instructions** to generate a **live HTTPS URL** for your project and prepare your **downloadable ZIP submission** for the **NASA International Space Apps Challenge**.

---

## ⚡ Option 1: Netlify Drop (FASTEST — 15 Seconds, Zero Setup)
> **Recommended if you need an instant live link right now without installing anything!**

1. **Step 1:** Download your project ZIP:
   - Double-click `package-zip.bat` in this folder, or click the **"PACKAGE ZIP"** button inside the game header.
   - A file named `nasa-space-mission-game.zip` will be created in your folder.
2. **Step 2:** Open **[https://app.netlify.com/drop](https://app.netlify.com/drop)** in your web browser.
3. **Step 3:** Drag and drop the `nasa-space-mission-game.zip` file (or this entire project folder) directly into the upload area on Netlify.
4. **Step 4:** In about 10–15 seconds, Netlify will assign a live HTTPS URL (e.g., `https://nasa-space-mission-design-2026.netlify.app`).
5. **Step 5:** Copy that live URL and paste it into your official NASA Space Apps submission form under **"Project Demo Link"**!

---

## 🪐 Option 2: GitHub Pages (Official NASA Space Apps Standard)
> **Best if you want a public open-source repository + live web demo together.**

1. **Step 1:** Create a new repository on **[GitHub.com](https://github.com/new)** (e.g. `nasa-space-mission-game`).
2. **Step 2:** Open a terminal / command prompt in this folder (or double-click `deploy.bat` and select Option 4):
   ```bash
   git init
   git add .
   git commit -m "NASA Space Apps Challenge 2026 - Space Mission Design Game"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
3. **Step 3:** In your GitHub repository:
   - Click **Settings** (⚙️) → **Pages** (in the left sidebar).
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - The included workflow file (`.github/workflows/deploy.yml`) will automatically deploy your game in ~30 seconds!
4. **Step 4:** Your live URL will be:  
   `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

---

## ▲ Option 3: Vercel (1-Click Hosting)
1. Go to **[https://vercel.com/new](https://vercel.com/new)**.
2. Import your GitHub repository, or if you have the Vercel CLI installed:
   ```bash
   npx vercel --prod
   ```
3. The included `vercel.json` ensures zero-config instant deployment with automated CDN edge routing.

---

## 📦 What is Included in the Downloadable ZIP:
- `index.html`: Modern NASA Dashboard, Wizard Stepper, Telemetry HUD, AI Advisor, Modals.
- `style.css`: Cosmic Dark Mode (`#0b0d17`) & Clean Control Room Light Mode (`#f8fafc`), Cairo RTL Arabic typography.
- `script.js`: Concurrent aerospace physics engine ($1/r^2$ solar flux, launch HUD, space weather, AI logic).
- `README.md`: Bilingual project report, aerospace references, and Open Data concepts.
- `netlify.toml`: Netlify deployment headers and SPA redirect configuration.
- `vercel.json`: Vercel edge deployment configuration.
- `package-zip.bat` / `package-zip.ps1`: Automated 1-click Windows ZIP creation scripts.
- `download-zip.html`: Standalone browser packager.
- `deploy.bat`: Interactive deployment menu.

---

## 🇸🇦 الدليل باللغة العربية (خطوات النشر السريع والتسليم)

### الطريقة الأولى: Netlify Drop (الأسرع خلال 15 ثانية - بدون أي برامج)
1. **الخطوة 1:** اضغط مرتين على ملف `package-zip.bat` في المجلد، أو اضغط زر **"PACKAGE ZIP"** في الشريط العلوي للعبة لتحميل ملف `nasa-space-mission-game.zip`.
2. **الخطوة 2:** افتح الرابط: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**.
3. **الخطوة 3:** اسحب ملف الـ ZIP أو مجلد المشروع بالكامل وأفلته داخل الصفحة.
4. **الخطوة 4:** خلال ثوانٍ معدودة ستحصل على رابط حي ومجاني بميزة HTTPS (مثل: `https://nasa-mission-game.netlify.app`).
5. **الخطوة 5:** انسخ الرابط وضعه في استمارة تسليم مسابقة NASA Space Apps تحت خانة **Project Demo URL**.

### الطريقة الثانية: GitHub Pages (المعيار الرسمي لمسابقة ناسا)
1. أنشئ مستودعاً جديداً على حسابك في GitHub.
2. ارفع ملفات المشروع عبر Git أو عبر سحب الملفات إلى GitHub.
3. توجه إلى **Settings** ثم **Pages** واختر **GitHub Actions**.
4. سيتم نشر موقعك تلقائياً عبر الملف المرفق `.github/workflows/deploy.yml` وستحصل على رابط دائم باسمك.

---
### 🏆 بالتوفيق في مسابقة NASA International Space Apps Challenge 2026!
