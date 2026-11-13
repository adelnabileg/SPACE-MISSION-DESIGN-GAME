# Space Mission Design Game 🚀🪐
### NASA International Space Apps Challenge 2026

An interactive, web-based space mission architecture and concurrent engineering simulation game built for the **NASA Space Apps Challenge 2026**, featuring an **Embedded NASA AI Mission Advisor**, **Full Arabic/English Bilingual Support**, and **Dynamic Dark/Light Themes**.

---

## 🌟 Overview / نظرة عامة

**English:**
The **Space Mission Design Game** places players in the role of a NASA Mission Director and Chief Spacecraft Architect at NASA Jet Propulsion Laboratory (JPL) and Goddard Space Flight Center. Players must navigate real-world aerospace trade-offs—balancing finite budgets, launch vehicle payload mass capacities, dynamic solar power irradiance ($1/r^2$ law), and environmental hazards across our Solar System. The game includes an embedded **NASA AI Mission Advisor** that actively evaluates spacecraft telemetry and answers user engineering queries in real time.

**العربية:**
تضع لعبة **"تصميم المهمات الفضائية" (Space Mission Design Game)** اللاعب في دور مدير المهمات وكبير مهندسي المركبات الفضائية في وكالة ناسا (مختبر الدفع النفاث JPL ومركز غودارد). يتوجب على اللاعب الموازنة بين القيود الهندسية والمالية الحقيقية للمهمات الفضائية: الميزانية المحددة، سعة الحمولة الصاروخية (الكتلة بالـ kg)، توليد الطاقة الكهربائية المعتمد على قانون التربيع العكسي للشمس ($1/r^2$)، ومخاطر الطقس الفضائي والإشعاع الكوني. يتضمن المشروع **مستشار ناسا الذكي (NASA AI Advisor)** لتحليل أجهزة المركبة فورياً وتقديم نصائح هندسية باللغتين العربية والإنجليزية.

---

## 🛰️ Key Features & Engineering Mechanics / أهم الميزات والمفاهيم الهندسية

### 1. Cinematic Animated Planet Intro Screen (شاشة الافتتاح الفضائية المتحركة)
- **Orbital Cosmic Graphics:** Smooth CSS animations featuring the Sun and orbiting celestial bodies (Moon/Earth, Mars, 16 Psyche, and Europa) with glowing cosmic dust particles.
- **Hero NASA Branding:** Official NASA insignia, NASA Space Apps Challenge 2026 badge, and active Deep Space Network (DSN) telemetry indicator.
- **Glowing "Start Mission" Trigger:** Neon-pulsing CTA button that smoothly fades out the splash screen and transitions directly into the Mission Control workbench. Accessible via keyboard (`Spacebar` / `Enter`) and replayable anytime from the header button.

### 2. Organized Planetary Information Modals (نوافذ تفاصيل الوجهات المنظمة)
- **Uncluttered Interface:** Rather than overwhelming the main workbench, each destination features a dedicated **"Destination Specs / تفاصيل الوجهة"** button on its card and telemetry box.
- **Comprehensive Physics & Environment Telemetry:**
  - Surface Gravity ($m/s^2$ and $g$-ratio)
  - Atmosphere composition & surface pressure ($bar$)
  - Temperature extremes & solar chill
  - Solar Irradiance / Flux ($1/r^2$ law) & Delta-V required ($\text{km/s}$)
  - Round-trip DSN telecommunication latency
- **Structured Scientific Objectives & Recommended Hardware:** 2-column breakdown of mission science goals and recommended payload equipment.
- **Direct Mission Selection:** "Select This Destination & Return to Workbench" button right within the modal.
- **Full Bilingual & Theme Support:** Dynamic instant translation in English and Arabic (RTL) across Dark and Light modes.

### 3. Bilingual Support: Arabic & English (دعم ثنائي اللغة كامل AR / EN)
- **Instant Language Toggle:** Switch between English (LTR, typography using Orbitron & Inter) and Arabic (RTL, typography using Cairo).
- **Comprehensive Localization:** Complete translation of all destination telemetry, subsystem hardware specs, directives, launch HUD, flight debrief logs, and AI chatbot prompts.

### 4. Dark & Light Theme Switcher (الوضع الليلي والنهاري)
- **Cosmic Space Dark Mode (`#0b0d17`):** Deep space nebula background with glowing neon cyan (`#00f3ff`) and purple (`#7b2cbf`) glassmorphism panels.
- **Control Room Light Mode (`#f8fafc`):** High-contrast clean NASA mission control room aesthetic with deep navy blue (`#0b3d91`) accents and crisp typography.

### 5. Embedded NASA AI Mission Advisor (مستشار ناسا الذكي المدمج)
- **ChatGPT-Style Floating Chat Widget:** Sleek floating action button (FAB) that opens an interactive mission advisor window.
- **Real-Time Telemetry Audit:** The AI assistant inspects the player's active spacecraft configuration in real time:
  - Detects budget overruns and excess payload mass.
  - Warns players when solar panels are improperly equipped at Europa ($5.2\text{ AU}$) or Psyche ($2.7\text{ AU}$) where solar irradiance drops by $>86\%$, recommending RTGs or nuclear fission reactors instead.
  - Verifies propulsion delta-V adequacy for orbital insertion.
  - Flags missing countermeasures against destination-specific threats.
- **Quick Action Chips:** Pre-built prompts for instant analysis, power troubleshooting, destination briefings, and budget optimization.

### 6. Authentic Concurrent Aerospace Engineering (الموازنة الهندسية المتزامنة)
- **Budget Cap ($M USD):** Missions must conform to NASA Discovery, New Frontiers, or Flagship class cost envelopes.
- **Payload Mass Limit (kg):** Enforces rocket launch vehicle maximum payload injection capacity.
- **Dynamic Inverse-Square Solar Power Physics ($1/r^2$):** 
  - Earth/Moon (~1.0 AU): 100% solar flux.
  - Mars (~1.52 AU): 43% solar flux.
  - 16 Psyche Asteroid (~2.7 AU): 14% solar flux.
  - Europa (~5.2 AU): 3.7% solar flux (Players must utilize RTG Plutonium or Kilopower Fission reactors).
- **Delta-V & Propulsion Requirements:** Every destination requires specific change in velocity ($\Delta V$) for orbital insertion.

### 7. Five Modular Subsystems (5 أنظمة فرعية للمركبة)
1. **Scientific Payloads (أجهزة البحث العلمي):** Multispectral Raman Spectrometer, Cryogenic Subsurface Drill, Autonomous Scout Drone, Ground-Penetrating Ice Sounder (REASON/SHARAD).
2. **Propulsion Systems (أنظمة الدفع والمحركات):** Hydrolox Chemical Stage, NEXT-C Xenon Gridded Ion Thruster, Bimodal Nuclear Thermal Propulsion (NTP).
3. **Power Generation & Storage (توليد وتخزين الطاقة):** UltraFlex Solar Arrays, Next-Gen Pu-238 RTG, Solid-State Li-S Battery Buffer, Kilopower Fission Reactor.
4. **Thermal & Radiation Protection (الحماية الحرارية والإشعاعية):** Aerogel MLI Thermal Blankets, Whipple Beryllium Micrometeoroid Shield, Polyethylene Radiation Vault, Active Superconducting Magnetic Deflector.
5. **Avionics & Autonomous Communications (الإلكترونيات والاتصالات الذاتية):** High-Gain Ka-Band Antenna, Deep Space Optical Laser Comms (DSOC), Rad-Hard AI Quad Flight Computer, Terrain-Relative Navigation (TRN).

### 8. Real-Time Launch Sequence & Space Weather Simulation (محاكاة الإطلاق والطقس الفضائي)
- **3-Second Visual Launch Countdown:** Dramatic 3... 2... 1... Liftoff! animation with pulsing digits, visual dynamic glow, rocket trajectory canvas, staging indicators, and live telemetry log.
- **Web Audio API Sound Synthesizer:** Fully synthesized countdown beeps, low-pass filtered rocket rumble, launch roar, button clicks, and mission fanfare with zero external sound files.
- **Dynamic Space Weather Encounters:** Class X Solar Flares (CME), Micrometeoroid swarms, and cryogenic eclipses test the player's shielding and autonomy choices.
- **Post-Mission Debriefing:** Detailed engineering post-mortem, letter grade (S, A, B, F), scientific ROI metrics, and JSON telemetry export.

### 9. Presentation & Judging Panel Tools (أدوات العرض التقديمي ولجنة التحكيم)
- **Fullscreen Presentation Mode (`F11` / Header Button):** Dedicated toggle button in the top header that expands the simulator across the entire screen or projector display for a clean presentation.
- **Official NASA Flight Certificate Print/Download:** Direct print button on the post-mission debrief screen formatted via `@media print` as an official, high-contrast NASA Mission Achievement Certificate.
- **1-Click Submission ZIP Generator:** In-browser pure JavaScript ZIP packager that bundles all code and assets into `nasa-space-mission-game.zip` without requiring any external tools.
- **Instant Live Deployment Ready:** Pre-configured for Netlify Drop (15-second zero-install live URL), GitHub Pages (automated GitHub Actions workflow), and Vercel.

---

## 📂 File Structure / بنية الملفات

```text
nasa-space-mission-design/
│
├── index.html            # NASA dashboard layout, telemetry meters, AI Chatbot widget, launch HUD & debrief modals
├── style.css             # Dark & Light modes, RTL Arabic styles ('Cairo'), glassmorphism, countdown FX, print styles
├── script.js             # Physics engine, bilingual i18n, AI Advisor reasoning, Web Audio synthesizer, ZIP generator
├── DEPLOYMENT_GUIDE.md   # Step-by-step guide for Netlify Drop, GitHub Pages, and Vercel
├── download-zip.html     # Offline browser-based project ZIP generator
├── package-zip.bat       # Windows 1-click batch script to create submission ZIP
├── package-zip.ps1       # Windows PowerShell ZIP archiver
├── deploy.bat            # Interactive deployment launcher
├── netlify.toml          # Netlify configuration & security headers
├── vercel.json           # Vercel deployment configuration
├── .github/workflows/    # Automated GitHub Actions workflow for GitHub Pages
└── README.md             # Bilingual project documentation & NASA Open Data references
```

---

## 🚀 How to Run the Project / كيفية تشغيل المشروع

### Option 1: Direct Browser Launch (أسهل طريقة)
Simply double-click `index.html` or open it in any modern web browser:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Apple Safari

*No installations, package managers, or server setup required!*

### Option 2: Local Web Server (اختياري)
You can also run a local lightweight HTTP server:
```bash
# Using Python 3:
python -m http.server 8000

# Using Node.js npx:
npx serve .
```
Then navigate to `http://localhost:8000` in your browser.

---

## 📡 NASA Open Data & Scientific Foundations / بيانات ناسا المفتوحة والأسس العلمية

This simulation utilizes real mission parameters and aerospace models derived from NASA open resources:
1. **NASA Jet Propulsion Laboratory (JPL) Horizons System:** Planetary ephemerides, distance scales (AU), and communication latency.
2. **NASA Planetary Data System (PDS):** Atmospheric compositions, radiation belts, and environmental hazards of Mars, the Moon, Psyche, and Europa.
3. **NASA Space Weather Prediction Center (SWPC):** Coronal Mass Ejections (CMEs) and solar proton event dynamics.
4. **NASA Technology Roadmaps (Subsystems):**
   - Deep Space Optical Communications (DSOC) from the *Psyche* mission.
   - Kilopower Reactor project by NASA Glenn & Los Alamos National Laboratory.
   - Terrain-Relative Navigation (TRN) flight-proven on *Mars 2020 Perseverance*.
   - NEXT-C Gridded Ion Propulsion developed by NASA Glenn Research Center.

---

## 🇸🇦 الدليل باللغة العربية (Arabic Project Guide)

### أهداف التحدي في مسابقة NASA Space Apps 2026:
يهدف المشروع إلى تعزيز فهم مبادئ هندسة الطيران والفضاء وتصميم المهمات الاستكشافية من خلال محاكاة تفاعلية وتجربة مستخدم عصرية ترتكز على بيانات ناسا الحقيقية.

### الميزات المتقدمة:
1. **شاشة افتتاحية سينمائية متحركة (Animated Planet Intro):** شاشة افتتاحية بصرية رائعة تعرض مدارات الكواكب (القمر، المريخ، سايكي، أوروبا) حول الشمس مع جسيمات غبار كوني متوهجة وزر مضيء "ابدأ المهمة / Start Mission" مع إمكانية إعادة تشغيلها من الشريط العلوي.
2. **نوافذ تفاصيل الوجهات المنظمة (Organized Planet Specs Modals):** واجهة خالية من الفوضى تتيح استعراض تفاصيل دقيقة لكل كوكب/قمر بنقرة زر (الجاذبية السطحية، الغلاف الجوي والضغط، درجات الحرارة القصوى، الإشعاع الشمسي، الدلتا-في، الأهداف العلمية، والعتاد الموصى به) مع إمكانية اختيار الوجهة مباشرة من داخل النافذة.
3. **دعم اللغة العربية بالكامل (RTL):** خط عربي عريض وأنيق (Cairo) مع ترجمة دقيقة لكافة المصطلحات الفضائية والهندسية.
4. **التبديل بين الوضع الليلي والنهاري:** تجربة بصرية فضائية مظلمة أو تصميم غرفة تحكم ناسا النهارية الناصعة.
5. **مستشار ناسا الذكي المدمج:** نافذة محادثة ذكية فورية تحلل إعدادات الصاروخ، وتعطيك نصائح لتفادي عجز الطاقة الكهربائية أو تجاوز الميزانية أو مخاطر الإشعاع الكوني.
6. **زر وضع ملء الشاشة (Fullscreen Presentation):** زر مخصص في الشريط العلوي لعرض اللعبة بكامل الشاشة أمام لجان التحكيم وعلى شاشات العرض بدون أي تشتيت.
7. **العد التنازلي الحماسي للإطلاق (3... 2... 1... انطلاق!):** تأثيرات بصرية متوهجة ومؤثرات صوتية اصطناعية تحاكي هبوط وصعود قوة الدفع، يعقبها انطلاق مسار الصاروخ على لوحة الرسم المدارية.
8. **شهادة إنجاز المهمة الرسمية القابلة للطباعة (Print Certificate):** زر طباعة مخصص في نافذة التقرير النهائي يُهيئ الصفحة كشهادة رسمية صادرة من ناسا جاهزة للحفظ بصيغة PDF أو الطباعة.
9. **حزمة التسليم الفوري والرابط الحي (ZIP & Live URL):** حزم كافة ملفات المشروع في ملف `ZIP` بنقرة واحدة مباشرة من المتصفح مع روابط وإرشادات لنشر المشروع على Netlify وGitHub Pages وVercel مجاناً.

### كيفية اللعب:
1. **اختر وجهة المهمة (Target Destination):** المريخ، القاعدة القمرية، كويكب سايكي، أو قمر أوروبا.
2. **تجهيز العتاد والأجهزة (Equip Hardware):** اختر المحركات، الأجهزة العلمية، مصادر الطاقة، والدروع.
3. **استشر الذكاء الاصطناعي (Ask AI):** افتح نافذة "مستشار ناسا الذكي" واضغط على "حلل إعداداتي الحالية" للتأكد من سلامة تصميمك.
4. **إطلاق المهمة ومحاكاة الطيران (Launch Mission):** اضغط على زر الإطلاق لبدء العد التنازلي لمدة 3 ثوانٍ ومواجهة ظواهر الطقس الفضائي.
5. **التقرير النهائي وتصدير البيانات (Debrief & Export):** احصل على تقييمك الهندسي النهائي (A+، S، B، F) وقم بتصدير تقرير القياسات بصيغة `JSON`.

---

## 🛡️ License & Acknowledgements

Created for the **NASA International Space Apps Challenge 2026**.  
Built with pure Web Standards (HTML5, CSS3, Vanilla ES6 JavaScript, Web Audio API, Canvas 2D).  
Open-source under the MIT License.
