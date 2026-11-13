/**
 * SPACE MISSION DESIGN GAME - CORE SIMULATION & AI ENGINE
 * NASA Space Apps Challenge 2026
 * 
 * Features:
 * - Bilingual Support: Full dynamic English (LTR) & Arabic (RTL, 'Cairo')
 * - Theme Switcher: Dark Cosmic (#0b0d17) & Light Control Room (#f8fafc)
 * - Embedded NASA AI Mission Advisor (ChatGPT-Style Real-Time Chatbot)
 * - Concurrent Engineering Trade-Offs ($1/r² Solar Physics, Mass, Budget, Delta-V)
 * - Web Audio API Synthesizer (Zero External Audio Dependencies)
 * - 3-Second Launch HUD & Space Weather Anomaly Simulation
 * - Comprehensive Debrief Report & JSON Telemetry Downlink Exporter
 */

'use strict';

// ==========================================================================
// 1. BILINGUAL DICTIONARY & I18N SYSTEM
// ==========================================================================

const I18N = {
  en: {
    // Header
    tagSpaceApps: 'NASA SPACE APPS 2026',
    dsnStatus: 'DSN TELEMETRY ONLINE',
    mainTitlePart1: 'SPACE MISSION',
    mainTitlePart2: 'DESIGN GAME',
    subtitleText: 'Concurrent Aerospace Engineering & Trade-off Simulator',
    lblFlightTemplate: 'FLIGHT TEMPLATE:',
    optCustom: 'Custom Build',
    optArtemis: 'Artemis Lunar Scout',
    optPerseverance: 'Mars Science Rover',
    optDeepSpace: 'Psyche Asteroid Explorer',
    optEuropa: 'Europa Deep Habitability',
    lblTheme: 'LIGHT MODE',
    lblAudio: 'SFX AUDIO',
    lblReset: 'RESET',
    langBtnLabel: 'العربية (AR)',

    // Columns
    headingCol1: '1. TARGET DESTINATION',
    descCol1: 'Select your flight target and analyze mission constraints',
    headingCol2: '2. SUBSYSTEM PAYLOAD & HARDWARE',
    descCol2: 'Assemble equipment across 5 critical engineering disciplines',
    headingCol3: '3. RESOURCE TRADE-OFF TELEMETRY',
    descCol3: 'Real-time concurrent trade-off balance monitor',

    // Destination telemetry specs
    lblSolarFlux: 'SOLAR FLUX (1/r²)',
    lblCommsDelay: 'ROUND-TRIP DELAY',
    subDirectComm: 'Direct Comm Link',
    lblRadiationHazard: 'RADIATION HAZARD',
    subRadiationRisk: 'Solar Flare Risk',
    lblRequiredDeltaV: 'REQUIRED DELTA-V',
    subInjectionBurn: 'Injection Burn',

    // Subsystem Tabs
    tabAll: 'All Systems',
    tabScience: '🔬 Science',
    tabPropulsion: '🚀 Propulsion',
    tabPower: '⚡ Power',
    tabShielding: '🛡️ Shielding',
    tabComms: '📡 Comms & AI',

    // Telemetry Meters
    lblMissionBudget: 'MISSION BUDGET',
    lblPayloadMass: 'PAYLOAD MASS CAPACITY',
    lblPowerBalance: 'POWER BALANCE (kW)',
    lblGenVs: 'gen vs',
    lblReq: 'req',
    lblViabilityIndex: 'MISSION VIABILITY INDEX',
    pillNoHardware: 'NO HARDWARE',
    pillOptimal: 'SYSTEMS NOMINAL',
    pillWarning: 'MARGINAL RISK',
    pillCritical: 'FLIGHT UNVIABLE',
    lblScienceYield: 'SCIENCE YIELD',
    ptsSmall: 'PTS',
    lblFlightDirectives: 'FLIGHT READINESS DIRECTIVES:',

    // Launch Button
    btnInitiateLaunch: 'INITIATE LAUNCH SIMULATION',
    lblAwaitingStatus: 'Awaiting System Green Status',
    lblLaunchReady: 'Launch Window Open • Ready for',
    lblAbortSafety: 'ABORT: Safety Limits Exceeded (Check Meters)',
    lblHoldPropulsion: 'HOLD: Missing Propulsion System',
    lblHoldScience: 'HOLD: Missing Science Instruments',

    // Footer
    footerChallenge: 'NASA International Space Apps Challenge 2026',
    footerSimName: 'Space Mission Design Simulation',
    footerOpenData: 'Open Data & Concurrent Aerospace Engineering',
    footerPhysicsModel: 'Physics Model: Solar 1/r² Irradiance • Mass Fraction • Space Weather Risk',

    // AI Advisor
    lblAdvisorTooltip: 'NASA AI Advisor',
    aiAdvisorTitle: 'NASA AI Advisor',
    aiStatusAnalyzing: 'Online • Real-Time Telemetry Monitor',
    promptAnalyze: '📊 Analyze Current Setup',
    promptPower: '⚡ How to fix power deficit?',
    promptDest: '🪐 Target destination advice',
    promptBudget: '💰 How to maximize Science ROI?',
    aiInputPlaceholder: 'Ask AI about mass, power, or radiation...',
    aiWelcomeMsg: 'Hello Commander! I am your NASA Mission Advisor AI. I am monitoring your telemetry in real-time. Click "Analyze Current Setup" or ask me anything regarding power, mass, propulsion, or radiation hazards.',

    // Launch Modal
    hudMissionControl: 'MISSION CONTROL CENTER • HOUSTON / JPL',
    hudStatusCountdown: 'T-MINUS SEQUENCE IN PROGRESS',
    hudDownlinkTitle: 'LIVE TELEMETRY DOWNLINK [DSN-43 CANBERRA]',

    // Debrief Modal
    debriefClassification: 'NASA MISSION DEBRIEF REPORT // LEVEL 4',
    lblGrade: 'ENGINEERING GRADE',
    lblTotalBudgetConsumed: 'TOTAL BUDGET CONSUMED',
    lblPayloadMassUtil: 'PAYLOAD MASS UTILIZATION',
    lblPowerGenMargin: 'POWER GENERATION MARGIN',
    lblScienceDataReturned: 'SCIENCE DATA RETURNED',
    lblMissionLogPostMortem: 'MISSION LOG & TRADE-OFF POST-MORTEM:',
    btnReconfigure: 'Reconfigure & Re-Fly Mission',
    btnExportJSON: 'Export Mission Telemetry (JSON)',
    btnShareLog: 'Share Flight Log',

    // Intro Screen & Planet Specs Modal
    lblReplayIntro: 'INTRO SCREEN',
    btnStartMission: 'START MISSION // ENTER SIMULATOR',
    introMissionSubtitle: 'Concurrent Aerospace Engineering & Orbital Architecture Simulation',
    introSystemReady: 'DSN SATELLITE TELEMETRY ONLINE • ALL SYSTEMS GO',
    introHint: 'Press Start or Spacebar to enter Mission Control',
    btnViewFullSpecs: '🔍 Destination Specs & Planetary Telemetry',
    btnPlanetSpecsModalClose: 'Close Specs',
    btnSelectThisDestination: 'Select This Destination & Return to Workbench',
    lblPlanetGravity: 'SURFACE GRAVITY',
    lblPlanetAtmosphere: 'ATMOSPHERE & PRESSURE',
    lblPlanetTemperature: 'SURFACE TEMPERATURE',
    lblKeyObjectives: 'KEY SCIENTIFIC OBJECTIVES:',
    lblRecommendedGear: 'RECOMMENDED SUBSYSTEM GEAR:',
    lblEnvironmentalHazards: 'ENVIRONMENTAL HAZARDS & RISKS',

    // Wizard Stepper & Multi-Step Navigation
    step1Tag: 'STAGE 01',
    step1Name: 'Target Destination',
    step2Tag: 'STAGE 02',
    step2Name: 'Payload & Hardware Specs',
    step3Tag: 'STAGE 03',
    step3Name: 'Launch & Mission Control',
    step1BannerTag: 'MISSION PHASE 1: TARGET DESTINATION',
    step2BannerTag: 'MISSION PHASE 2: SUBSYSTEM CONFIGURATION',
    step3BannerTag: 'MISSION PHASE 3: FLIGHT VERIFICATION & LAUNCH',
    lblSelectDestination: 'SELECT ORBITAL TARGET',
    lblSelectDestinationHint: 'Choose a celestial body to inspect environmental constraints',
    btnNextPayload: 'Next: Configure Payload & Specs',
    btnBackDest: 'Back: Target Destination',
    btnNextLaunch: 'Next: Proceed to Launch Simulation',
    btnBackPayload: 'Back: Modify Payload',
    step3ReadyDesc: 'Review final flight telemetry, verify subsystem integrity, and initiate launch countdown.',
    lblFlightDeckOverview: 'FLIGHT MANIFEST & TELEMETRY',
    lblBudgetSpent: 'BUDGET ALLOCATION',
    lblLaunchMass: 'TOTAL LAUNCH MASS',
    lblElectricalBalance: 'ELECTRICAL MARGIN',
    lblEstimatedScience: 'SCIENCE POTENTIAL',
    lblCockpitAiTitle: 'NASA AI FLIGHT ADVISOR',
    lblCockpitAiStatus: 'Active Flight Telemetry Analysis',
    lblQuickAdviceHint: 'Real-time AI Engineering Tip:',
    btnOpenFullAiChat: 'Open Full AI Conversation',

    // Project Packaging & Live Deployment
    lblDownloadZip: 'PACKAGE ZIP',
    lblLiveUrl: 'LIVE URL',
    btnDownloadSubmissionZip: 'Package Submission ZIP',
    btnDeployLiveOnline: 'Deploy Live URL',
    tagSpaceAppsDeploy: 'NASA SPACE APPS 2026 • SUBMISSION READY',
    titleDeployModal: 'Get Your Live URL & Package Submission',
    descDeployModal: 'Here are the official, 100% free methods to generate a live HTTPS URL for your NASA Space Apps Challenge submission:',
    badgeFastest: '⚡ FASTEST • 15 SECONDS',
    descNetlifyDrop: 'Zero installations or command lines required. Drag and drop your project folder or ZIP directly into Netlify Drop to get an instant live HTTPS link!',
    stepNetlify1: '1. Click "Download Project ZIP" below.',
    stepNetlify2: '2. Open Netlify Drop in your browser.',
    stepNetlify3: '3. Drag the ZIP into the box — instant live URL generated!',
    btnOpenNetlifyDrop: 'Open Netlify Drop ↗',
    badgeOfficial: '🪐 OFFICIAL NASA STANDARD',
    descGitHubPages: 'Host directly from your GitHub repository with automated GitHub Actions workflow included in the project.',
    stepGit1: '1. Push files to a new GitHub repository.',
    stepGit2: '2. Go to Repo Settings → Pages.',
    stepGit3: '3. Select "GitHub Actions" to deploy automatically.',
    btnCopyGitCommands: '📋 Copy Git Commands',
    badgeGlobal: '⚡ ZERO-CONFIG',
    descVercel: 'Deploy with pre-configured vercel.json. Run npx vercel or import your repository.',
    btnOpenVercel: 'Open Vercel ↗',
    lblNeedZipFile: 'Need the ZIP file for offline submission?',
    lblZipHint: 'Contains index.html, style.css, script.js, configs, and complete documentation.',
    btnDownloadZipNow: 'Download ZIP Now',

    // Fullscreen & Certificate Print
    lblFullscreen: 'FULLSCREEN',
    btnPrintCertificate: 'Print Certificate'
  },

  ar: {
    // Header
    tagSpaceApps: 'تحدي ناسا لتطبيقات الفضاء 2026',
    dsnStatus: 'شبكة الفضاء العميق متصلة',
    mainTitlePart1: 'لعبة تصميم',
    mainTitlePart2: 'المهمات الفضائية',
    subtitleText: 'محاكي هندسة الفضاء المتزامنة وموازنة الموارد',
    lblFlightTemplate: 'قوالب المهمات:',
    optCustom: 'تصميم مخصص',
    optArtemis: 'مستكشف أرتميس القمري',
    optPerseverance: 'مركبة المريخ العلمية',
    optDeepSpace: 'مسبار كويكب سايكي',
    optEuropa: 'مستكشف محيط قمر أوروبا',
    lblTheme: 'الوضع الليلي',
    lblAudio: 'المؤثرات الصوتية',
    lblReset: 'إعادة الضبط',
    langBtnLabel: 'English (EN)',

    // Columns
    headingCol1: '1. وجهة المهمة الفضائية',
    descCol1: 'اختر الوجهة المستهدفة وحلل قيود البيئة والمسار الفضائي',
    headingCol2: '2. المعدات والأجهزة الفرعية',
    descCol2: 'جهّز المركبة بأحدث الأجهزة عبر 5 تخصصات هندسية دقيقة',
    headingCol3: '3. قياسات الموازنة الفضائية الحية',
    descCol3: 'مراقبة فورية للموازنة بين الميزانية والكتلة وتوليد الطاقة',

    // Destination telemetry specs
    lblSolarFlux: 'الإشعاع الشمسي (1/r²)',
    lblCommsDelay: 'زمن تأخير الإشارة',
    subDirectComm: 'اتصال مباشر بالأرض',
    lblRadiationHazard: 'مستوى الإشعاع',
    subRadiationRisk: 'خطر الانفجارات الشمسية',
    lblRequiredDeltaV: 'السرعة المطلوبة (ΔV)',
    subInjectionBurn: 'مناورة الحقن المداري',

    // Subsystem Tabs
    tabAll: 'جميع الأنظمة',
    tabScience: '🔬 البحث العلمي',
    tabPropulsion: '🚀 المحركات والدفع',
    tabPower: '⚡ توليد الطاقة',
    tabShielding: '🛡️ الدروع والحماية',
    tabComms: '📡 الاتصالات والذكاء',

    // Telemetry Meters
    lblMissionBudget: 'ميزانية المهمة ($M)',
    lblPayloadMass: 'سعة كتلة الحمولة (kg)',
    lblPowerBalance: 'ميزان الطاقة الكهربائية (kW)',
    lblGenVs: 'مُوَلَّد مقابل',
    lblReq: 'مطلوب',
    lblViabilityIndex: 'مؤشر جاهزية المهمة للتحليق',
    pillNoHardware: 'لا توجد معدات',
    pillOptimal: 'الأنظمة مثالية',
    pillWarning: 'مخاطرة متوسطة',
    pillCritical: 'غير صالح للطيران',
    lblScienceYield: 'العائد العلمي',
    ptsSmall: 'نقطة',
    lblFlightDirectives: 'توجيهات فحص صلاحية الطيران:',

    // Launch Button
    btnInitiateLaunch: 'إطلاق محاكاة المهمة الفضائية',
    lblAwaitingStatus: 'في انتظار تأكيد جاهزية الأنظمة',
    lblLaunchReady: 'نافذة الإطلاق مفتوحة • جاهز لرحلة',
    lblAbortSafety: 'إلغاء الإطلاق: تم تجاوز حدود السلامة (راجع العدادات)',
    lblHoldPropulsion: 'تعليق الإطلاق: يجب تركيب نظام دفع ومحركات',
    lblHoldScience: 'تعليق الإطلاق: يجب تركيب أجهزة بحث علمي',

    // Footer
    footerChallenge: 'مسابقة وكالة ناسا الدولية لتطبيقات الفضاء 2026',
    footerSimName: 'محاكي هندسة وتصميم المهمات الفضائية',
    footerOpenData: 'البيانات المفتوحة وهندسة الطيران المتزامنة',
    footerPhysicsModel: 'النموذج الفيزيائي: قانون التربيع العكسي للإشعاع الشمسي • نسبة الكتلة • مخاطر الطقس الفضائي',

    // AI Advisor
    lblAdvisorTooltip: 'مستشار ناسا الذكي',
    aiAdvisorTitle: 'مستشار ناسا الذكي',
    aiStatusAnalyzing: 'متصل • يحلل القياسات عن بعد فورياً',
    promptAnalyze: '📊 حلل إعداداتي الحالية',
    promptPower: '⚡ كيف أصلح عجز الطاقة الكهربائية؟',
    promptDest: '🪐 نصائح هندسية للوجهة المستهدفة',
    promptBudget: '💰 كيف أحقق أعلى عائد علمي بأقل تكلفة؟',
    aiInputPlaceholder: 'اسأل الذكاء الاصطناعي عن الكتلة أو الطاقة أو الإشعاع...',
    aiWelcomeMsg: 'مرحباً بك أيها القائد! أنا مستشارك الذكي لهندسة مهمات ناسا. أراقب حالة مركبتك الفضائية وقياسات الأجهزة لحظياً. اضغط على "حلل إعداداتي الحالية" أو اكتب استفسارك حول الطاقة أو الكتلة أو مخاطر الطقس الفضائي.',

    // Launch Modal
    hudMissionControl: 'مركز التحكم بالمهمات الفضائية • هيوستن / مختبر JPL',
    hudStatusCountdown: 'العد التنازلي للإطلاق قيد التنفيذ',
    hudDownlinkTitle: 'بث البيانات الحية عبر شبكة الفضاء العميق [كانبيرا DSN-43]',

    // Debrief Modal
    debriefClassification: 'تقرير تقييم المهمة الرسمي لوكالة ناسا // المستوى 4',
    lblGrade: 'التقييم الهندسي',
    lblTotalBudgetConsumed: 'إجمالي الميزانية المستهلكة',
    lblPayloadMassUtil: 'نسبة استهلاك سعة الصاروخ',
    lblPowerGenMargin: 'فائض توليد الطاقة الكهربائية',
    lblScienceDataReturned: 'حجم البيانات العلمية المسترجعة',
    lblMissionLogPostMortem: 'سجل الرحلة والتشخيص الهندسي للقرارات:',
    btnReconfigure: 'إعادة تهيئة وتعديل المركبة',
    btnExportJSON: 'تصدير تقرير القياسات (JSON)',
    btnShareLog: 'مشاركة نتائج الرحلة',

    // Intro Screen & Planet Specs Modal
    lblReplayIntro: 'شاشة البداية',
    btnStartMission: 'ابدأ المهمة // دخول المحاكي',
    introMissionSubtitle: 'محاكي هندسة الفضاء المتزامنة وموازنة الموارد والمسارات المدارية',
    introSystemReady: 'شبكة الفضاء العميق متصلة • جميع الأنظمة جاهزة للإقلاع',
    introHint: 'اضغط للبدء أو مفتاح المسافة لدخول مركز التحكم',
    btnViewFullSpecs: '🔍 تفاصيل الوجهة والبيانات الكوكبية الكاملة',
    btnPlanetSpecsModalClose: 'إغلاق التفاصيل',
    btnSelectThisDestination: 'اعتماد هذه الوجهة للمهمة والعودة للتصميم',
    lblPlanetGravity: 'الجاذبية السطحية',
    lblPlanetAtmosphere: 'الغلاف الجوي والضغط',
    lblPlanetTemperature: 'درجة حرارة السطح',
    lblKeyObjectives: 'الأهداف العلمية الرئيسية للمهمة:',
    lblRecommendedGear: 'العتاد والأنظمة الموصى بها:',
    lblEnvironmentalHazards: 'المخاطر والتحديات البيئية',

    // Wizard Stepper & Multi-Step Navigation
    step1Tag: 'المرحلة 01',
    step1Name: 'اختيار الوجهة',
    step2Tag: 'المرحلة 02',
    step2Name: 'العتاد والمواصفات',
    step3Tag: 'المرحلة 03',
    step3Name: 'الإطلاق والتحكم',
    step1BannerTag: 'المرحلة الأولى: تحديد الوجهة الفضائية',
    step2BannerTag: 'المرحلة الثانية: تجهيز عتاد المركبة',
    step3BannerTag: 'المرحلة الثالثة: التحقق النهائي والإطلاق',
    lblSelectDestination: 'اختر الوجهة المدارية',
    lblSelectDestinationHint: 'اختر وجهاً فضائياً لمعاينة المتطلبات البيئية والهندسية',
    btnNextPayload: 'التالي: اختيار الحمولة والعتاد',
    btnBackDest: 'السابق: اختيار الوجهة',
    btnNextLaunch: 'التالي: منصة الإطلاق والمحاكاة',
    btnBackPayload: 'السابق: تعديل العتاد',
    step3ReadyDesc: 'راجع القياسات النهائية للمهمة، وتأكد من سلامة الأنظمة الفرعية، ثم ابدأ العد التنازلي للإطلاق.',
    lblFlightDeckOverview: 'بيانات المهمة والقياسات الحيوية',
    lblBudgetSpent: 'الميزانية المصروفة',
    lblLaunchMass: 'الكتلة الإجمالية',
    lblElectricalBalance: 'ميزان الكهرباء',
    lblEstimatedScience: 'العائد العلمي المتوقع',
    lblCockpitAiTitle: 'مستشار ناسا للتحكم بالرحلة',
    lblCockpitAiStatus: 'تحليل القياسات عن بُعد قيد التشغيل',
    lblQuickAdviceHint: 'توجيه هندسي فوري من الذكاء الاصطناعي:',
    btnOpenFullAiChat: 'فتح نافذة المحادثة الذكية الكاملة',

    // Project Packaging & Live Deployment
    lblDownloadZip: 'تنزيل ZIP',
    lblLiveUrl: 'رابط حي',
    btnDownloadSubmissionZip: 'تنزيل ملف المشروع (ZIP)',
    btnDeployLiveOnline: 'نشر الموقع برابط حي',
    tagSpaceAppsDeploy: 'مسابقة ناسا لتطبيقات الفضاء 2026 • جاهز للتسليم',
    titleDeployModal: 'احصل على رابطك المباشر وجهّز ملف التسليم',
    descDeployModal: 'إليك أسهل الطرق المجانية للحصول على رابط إنترنت حي (HTTPS) لمشروعك لتسليمه في استمارة مسابقة ناسا:',
    badgeFastest: '⚡ الأسرع • 15 ثانية',
    descNetlifyDrop: 'بدون أي تثبيت أو أوامر برمجية. اسحب مجلد المشروع أو ملف الـ ZIP مباشرة إلى Netlify Drop لتحصل على رابط فوري مجاني!',
    stepNetlify1: '1. اضغط على زر "تنزيل ZIP الآن" بالأسفل.',
    stepNetlify2: '2. افتح Netlify Drop في متصفحك.',
    stepNetlify3: '3. اسحب ملف الـ ZIP داخل المربع — وسيتم إنشاء الرابط الحي فوراً!',
    btnOpenNetlifyDrop: 'فتح Netlify Drop ↗',
    badgeOfficial: '🪐 المعيار الرسمي لمسابقة ناسا',
    descGitHubPages: 'استضافة مباشرة من مستودع GitHub الخاص بك عبر أداة GitHub Actions التلقائية المدمجة داخل المشروع.',
    stepGit1: '1. ارفع الملفات إلى مستودع GitHub جديد.',
    stepGit2: '2. توجه إلى إعدادات المستودع ثم خيار Pages.',
    stepGit3: '3. اختر GitHub Actions للنشر التلقائي.',
    btnCopyGitCommands: '📋 نسخ أوامر Git',
    badgeGlobal: '⚡ نشر فوري',
    descVercel: 'نشر فوري عبر إعدادات vercel.json المدمجة. شغّل npx vercel أو اربط مستودعك.',
    btnOpenVercel: 'فتح Vercel ↗',
    lblNeedZipFile: 'هل تحتاج ملف الـ ZIP لرفعه على موقع المسابقة؟',
    lblZipHint: 'يحتوي على كافة ملفات اللعبة والتصاميم والفيزياء ودليل النشر الكامل.',
    btnDownloadZipNow: 'تنزيل ملف الـ ZIP الآن',

    // Fullscreen & Certificate Print
    lblFullscreen: 'ملء الشاشة',
    btnPrintCertificate: 'طباعة الشهادة'
  }
};

// ==========================================================================
// 2. DATA DICTIONARIES: DESTINATIONS & EQUIPMENT SUBSYSTEMS
// ==========================================================================

const DESTINATIONS_DATA = {
  mars: {
    id: 'mars',
    name: { en: 'Mars Jezero Crater & Sample Return', ar: 'المريخ: فوهة جيزيرو وعينات التربة' },
    tag: { en: 'Inner Solar System • Terrestrial Planet', ar: 'النظام الشمسي الداخلي • كوكب صخري' },
    avatar: '🪐',
    distanceAU: 1.52,
    distanceKm: { en: '225 Million km', ar: '225 مليون كم' },
    solarFlux: 0.43, // (1 / 1.52²) = 43% solar irradiance vs Earth
    budgetLimit: 1600, // Millions USD ($1.6B)
    massLimit: 2400, // kg
    deltaVRequired: 4.3, // km/s
    commsDelay: { en: '14.2 min round-trip', ar: '14.2 دقيقة ذهاباً وإياباً' },
    radiationRisk: { en: 'Moderate to High', ar: 'متوسط إلى مرتفع' },
    gravity: { en: '3.72 m/s² (0.38 g)', ar: '3.72 م/ث² (0.38 من جاذبية الأرض)' },
    atmosphere: { en: '0.006 bar (95.3% CO₂, 2.6% N₂, 1.9% Ar)', ar: '0.006 بار (95.3% ثاني أكسيد الكربون، 2.6% نيتروجين)' },
    temperature: { en: '-125°C (Polar Night) to +20°C (Equator Noon)', ar: '-125° مئوية (الليل القطبي) إلى +20° مئوية (الظهيرة)' },
    primaryHazards: ['Dust Storms', 'Atmospheric Entry Shock', 'Solar Particle Events'],
    hazardNote: {
      en: 'Atmospheric dust storms drastically degrade solar arrays. High radiation during transit.',
      ar: 'العواصف الترابية الكوكبية تحجب أشعة الشمس عن الألواح. إشعاع كوني كثيف خلال العبور.'
    },
    hazardsDetail: {
      en: 'Planet-encircling particulate storms blocking solar irradiance by up to 99%; severe atmospheric entry deceleration shock; galactic cosmic rays during transit.',
      ar: 'عواصف غبار كوكبية تحجب أشعة الشمس بنسبة تصل إلى 99%؛ صدمة حرارية هائلة عند اختراق الغلاف الجوي؛ أشعة كونية خلال رحلة العبور البالغة 7 أشهر.'
    },
    objectives: {
      en: [
        'Search for ancient fossilized biosignatures in Jezero River Delta sediments',
        'Collect, seal, and cache deep-drill rock cores for NASA Mars Sample Return',
        'Demonstrate aerial terrain reconnaissance using autonomous scout rotorcraft'
      ],
      ar: [
        'البحث عن مؤشرات حيوية أحفورية قديمة في رواسب دلتا نهر فوهة جيزيرو',
        'جمع عينات لبية صخرية وإحكام إغلاقها تمهيداً لرحلة العودة إلى الأرض',
        'استعراض الاستطلاع الجوي الذاتي بالتضاريس الصعبة عبر طائرة مروحية'
      ]
    },
    recommendedGear: {
      en: [
        'Multispectral Raman Spectrometer (Astrobiology mapping)',
        'Autonomous Atmospheric Scout Rotorcraft (Wide-area survey)',
        'Hydrogen-Rich Polyethylene Vault (Solar Proton defense)',
        'Hydrolox High-Thrust Engine (Orbital insertion burn)'
      ],
      ar: [
        'مطياف رامان متعدد الأطياف (رسم خرائط المركبات العضوية)',
        'طائرة استطلاع جوي مروحية (مسح جغرافي وتفادي التضاريس)',
        'غرفة البولي إيثيلين المحصنة (الحماية من الانفجارات الشمسية)',
        'محرك الدفع الهيدروكسي (الكبح والمناورة المدارية الحاسمة)'
      ]
    },
    scienceMultiplier: 1.25,
    description: {
      en: 'Investigate ancient river delta biosignatures and cache geological core samples for Earth return.',
      ar: 'استكشاف دلتا النهر القديم للبحث عن مؤشرات حيوية قديمة وجمع عينات جيولوجية لإعادتها إلى الأرض.'
    }
  },
  moon: {
    id: 'moon',
    name: { en: 'Lunar Artemis Shackleton Base', ar: 'القمر: قاعدة شاكلتون في برنامج أرتميس' },
    tag: { en: 'Earth-Moon System • Artemis Gateway', ar: 'نظام الأرض والقمر • بوابة أرتميس' },
    avatar: '🌕',
    distanceAU: 1.0,
    distanceKm: { en: '384,400 km', ar: '384,400 كم' },
    solarFlux: 1.0, // 100% solar irradiance
    budgetLimit: 950, // Millions USD ($950M)
    massLimit: 3600, // kg
    deltaVRequired: 3.8, // km/s
    commsDelay: { en: '2.6 sec round-trip', ar: '2.6 ثانية' },
    radiationRisk: { en: 'Moderate', ar: 'متوسط' },
    gravity: { en: '1.62 m/s² (0.166 g)', ar: '1.62 م/ث² (0.166 من جاذبية الأرض)' },
    atmosphere: { en: 'Hard Vacuum (0.00 bar) • Trace exosphere', ar: 'فراغ تام (0.00 بار) • غلاف خارجي ميكروي' },
    temperature: { en: '-246°C (Shadowed Craters) to +120°C (Lunar Noon)', ar: '-246° مئوية (الفوهات المظلمة) إلى +120° مئوية (الظهيرة)' },
    primaryHazards: ['Cryogenic Night (-246°C)', 'Abrasive Regolith Dust', 'Micrometeoroids'],
    hazardNote: {
      en: 'Permanently shadowed craters harbor water-ice but plunge equipment to cryogenic -246°C.',
      ar: 'الفوهات المظلمة تحتوي على جليد مائي لكنها تهبط بدرجة الحرارة إلى -246 مئوية تحت الصفر.'
    },
    hazardsDetail: {
      en: 'Permanently Shadowed Regions (PSRs) drop to cryogenic -246°C; electrostatic jagged regolith dust eroding mechanical seals; frequent hypervelocity micrometeoroids.',
      ar: 'فوهات مظلمة تماماً تنخفض حرارتها لـ -246° تحت الصفر؛ غبار ريجوليث مشحون وحاد جداً يتلف المفاصل؛ قصف شهبي ونيزكي مستمر.'
    },
    objectives: {
      en: [
        'Prospect and extract volatile water-ice deposits inside Shackleton Crater',
        'Analyze ancient South Pole-Aitken Basin deep-mantle impact ejecta',
        'Verify sustainable In-Situ Resource Utilization (ISRU) for Artemis base'
      ],
      ar: [
        'التنقيب عن رواسب الجليد المائي العميقة داخل فوهة شاكلتون',
        'تحليل مقذوفات وشاح القمر القديمة في حوض أيتكين القطبي',
        'إثبات تقنيات تصنيع الموارد واستخراج المياه محلياً (ISRU)'
      ]
    },
    recommendedGear: {
      en: [
        'Autonomous Cryogenic Subsurface Drill (Core sampling)',
        'Aerogel Multi-Layer Insulation (Thermal swing isolation)',
        'Whipple Beryllium Impact Shielding (Micrometeoroids)',
        'Solid-State Li-S Battery Buffer (Crater eclipse power)'
      ],
      ar: [
        'حفار أوتوماتيكي للعينات المتجمدة (اختراق الجليد حتى مترين)',
        'عازل حراري متعدد الطبقات من الإيروجيل (مقاومة التجمد)',
        'درع ويبل المقوى من البيريليوم (صد الاصطدامات النيزكية)',
        'بنك بطاريات صلبة (تأمين الطاقة داخل الفوهات المظلمة)'
      ]
    },
    scienceMultiplier: 1.0,
    description: {
      en: 'Prospect volatile water-ice in deep polar craters to establish sustainable lunar habitat infrastructure.',
      ar: 'التنقيب عن الجليد المائي في الفوهات القطبية المظلمة لتأسيس بنية تحتية مستدامة للمستوطنات البشرية.'
    }
  },
  psyche: {
    id: 'psyche',
    name: { en: '16 Psyche Metallic Core Asteroid', ar: 'الكويكب المعدني: 16 سايكي' },
    tag: { en: 'Main Asteroid Belt • Primitive Body', ar: 'حزام الكويكبات الرئيسي • كوكب أولي معدني' },
    avatar: '☄️',
    distanceAU: 2.7,
    distanceKm: { en: '370 Million km', ar: '370 مليون كم' },
    solarFlux: 0.137, // (1 / 2.7²) = ~14% solar irradiance
    budgetLimit: 1250, // Millions USD ($1.25B)
    massLimit: 1900, // kg
    deltaVRequired: 6.2, // km/s
    commsDelay: { en: '41 min round-trip', ar: '41 دقيقة' },
    radiationRisk: { en: 'High Galactic Cosmic Rays', ar: 'أشعة كونية مجرية شديدة' },
    gravity: { en: '0.14 m/s² (0.014 g - Microgravity)', ar: '0.14 م/ث² (0.014 جاذبية صغرى ميكروية)' },
    atmosphere: { en: 'Zero Atmosphere / Vacuum (0.00 bar)', ar: 'انعدام تام للغلاف الجوي / فراغ (0.00 بار)' },
    temperature: { en: '-180°C to -70°C (Deep space solar chill)', ar: '-180° مئوية إلى -70° مئوية (برودة الفضاء العميق)' },
    primaryHazards: ['Severe Solar Starvation', 'High-Speed Debris', 'Zero-G Surface Contact'],
    hazardNote: {
      en: 'Deep space distance renders standard solar panels inefficient without auxiliary RTG/Batteries.',
      ar: 'البعد عن الشمس يضعف الألواح الشمسية لـ 14% فقط؛ يتطلب الاستعانة ببطاريات ذرية RTG أو مفاعل نووي.'
    },
    hazardsDetail: {
      en: 'Solar irradiance drops by 86% via inverse-square law; dense fragmentation debris in Main Asteroid Belt; negligible gravity requiring precise thruster station-keeping.',
      ar: 'انخفاض الإشعاع الشمسي بنسبة 86%؛ حزام حطام كويكبي كثيف عالي السرعة؛ جاذبية شبه منعدمة تتطلب تحكماً دفعياً دقيقاً.'
    },
    objectives: {
      en: [
        'Determine whether 16 Psyche is an exposed core of an early differentiated protoplanet',
        'Map remanent magnetic fields to investigate ancient planetary core dynamo generation',
        'Characterize topography and crater impact morphology on an exposed metallic body'
      ],
      ar: [
        'تحديد ما إذا كان كويكب 16 سايكي نواة معدنية مكشوفة لكوكب أولي قديم',
        'قياس المجالات المغناطيسية المتبقية لدراسة تولد المجال الديناميكي',
        'دراسة تضاريس وفوهات الاصطدام على سطح معدني بالكامل'
      ]
    },
    recommendedGear: {
      en: [
        'NEXT-C Xenon Gridded Ion Thruster (High specific impulse ΔV)',
        'Next-Gen Plutonium-238 RTG (Continuous solar-independent wattage)',
        'Deep Space Optical Laser Comms (High-throughput telemetry downlink)',
        'Whipple Impact Shielding (Asteroid Belt debris deflection)'
      ],
      ar: [
        'محرك الدفع الأيوني زينون (كفاءة وسرعة نوعية هائلة للعبور)',
        'بطارية البلوتونيوم RTG (توليد كهرباء مستمر دون شمس)',
        'منظومة الاتصالات الليزرية DSOC (سرعة نقل بيانات فائقة)',
        'درع ويبل المقوى (صد الحطام في حزام الكويكبات)'
      ]
    },
    scienceMultiplier: 1.45,
    description: {
      en: 'Explore an exposed metallic nickel-iron protoplanetary core from the dawn of our solar system.',
      ar: 'استكشاف نواة كوكبية أولية مكشوفة من الحديد والنيكل تكونت في المراحل الأولى لنشأة النظام الشمسي.'
    }
  },
  europa: {
    id: 'europa',
    name: { en: 'Europa Subsurface Ocean Explorer', ar: 'قمر أوروبا: محيط المياه المتجمد' },
    tag: { en: 'Jovian System • Ocean World', ar: 'نظام كوكب المشتري • عالم محيطي' },
    avatar: '🧊',
    distanceAU: 5.2,
    distanceKm: { en: '628 Million km', ar: '628 مليون كم' },
    solarFlux: 0.037, // (1 / 5.2²) = ~3.7% solar irradiance (nearly zero!)
    budgetLimit: 2800, // Millions USD ($2.8B)
    massLimit: 2600, // kg
    deltaVRequired: 7.8, // km/s
    commsDelay: { en: '68 min round-trip', ar: '68 دقيقة' },
    radiationRisk: { en: 'Extreme Jovian Magnetosphere', ar: 'أحزمة إشعاعية مميتة حول المشتري' },
    gravity: { en: '1.31 m/s² (0.134 g)', ar: '1.31 م/ث² (0.134 من جاذبية الأرض)' },
    atmosphere: { en: 'Trace Oxygen Exosphere (~10⁻¹² bar)', ar: 'أكسجين ميكروي فائق التخلخل (~10⁻¹² بار)' },
    temperature: { en: '-220°C (Poles) to -160°C (Equator)', ar: '-220° مئوية (القطبين) إلى -160° مئوية (خط الاستواء)' },
    primaryHazards: ['Lethal Jovian Radiation Belts', 'Cryogenic Ice Cracking', 'Near-Total Solar Blackout'],
    hazardNote: {
      en: 'Jupiter trapped radiation belts deliver millions of rads. Nuclear power and heavy shielding essential!',
      ar: 'أحزمة المشتري تصدر ملايين الرادات الإشعاعية. الطاقة النووية والدروع النشطة إلزامية للنجاة!'
    },
    hazardsDetail: {
      en: 'Lethal trapped relativistic electrons delivering up to 540 rem/day ionizing radiation; near-total solar starvation (3.7% flux); cryo-volcanic surface fractures and ice rifting.',
      ar: 'أحزمة إلكترونات إشعاعية قاتلة تصل لـ 540 ريم/يوم؛ انعدام شبه تام للطاقة الشمسية (3.7% فقط)؛ تصدعات جليدية وبراكين جليدية مباغتة.'
    },
    objectives: {
      en: [
        'Sound ice shell thickness and detect subsurface liquid water pockets via radar',
        'Sample water-vapor plumes and search for organic astrobiological signatures',
        'Investigate ocean salinity, depth, and tidal heating energy exchange'
      ],
      ar: [
        'قياس سماكة القشرة الجليدية واكتشاف المحيطات السائلة الباطنية',
        'فحص أعمدة البخار المتصاعدة والبحث عن بصمات حيوية كيميائية',
        'دراسة ملوحة المحيط وعمقه وقوى المد والجزر الداعمة للحياة'
      ]
    },
    recommendedGear: {
      en: [
        'Ice-Penetrating Sounder Radar REASON (Subsurface mapping)',
        'Active Superconducting Magnetic Deflector (Jovian radiation shield)',
        'Kilopower Fission Reactor (Constant 6.8 kWe output)',
        'Rad-Hard Quad AI Flight Computer (Autonomous operation without lag)'
      ],
      ar: [
        'رادار سبر طبقات الجليد والتربة REASON (رسم الخرائط الباطنية)',
        'درع مغناطيسي فائق التوصيل ونشط (صد إشعاع المشتري الفتاك)',
        'مفاعل كيلوباور النووي السطحي (توليد 6.8 kW كهرباء ثابتة)',
        'حاسوب طيران رباعي ذكي محصن (اتخاذ القرارات وتجاوز التأخير)'
      ]
    },
    scienceMultiplier: 1.85,
    description: {
      en: 'Probe through kilometers of ice crust to assess the habitability of a warm, salty subsurface ocean.',
      ar: 'اختراق القشرة الجليدية السميكة لدراسة احتمالية وجود حياة في المحيط المالح السائل القابع تحتها.'
    }
  }
};

const HARDWARE_CATALOG_DATA = [
  // --- Category: Science Payloads ---
  {
    id: 'sci_spectrometer',
    category: 'science',
    categoryLabel: { en: 'Science Payload', ar: 'أجهزة علمية' },
    name: { en: 'Multispectral Raman & Imaging Spectrometer', ar: 'مطياف رامان والتصوير متعدد الأطياف' },
    icon: '🔬',
    desc: {
      en: 'Mineralogical mapping and organic compound detection via laser-induced fluorescence.',
      ar: 'تحليل التركيب المعدني واكتشاف المركبات العضوية الحيوية باستخدام الليزر والأشعة المفلورة.'
    },
    cost: 110,
    mass: 85,
    powerReq: 0.25,
    scienceYield: 35,
    counters: ['Geological Analysis']
  },
  {
    id: 'sci_drill',
    category: 'science',
    categoryLabel: { en: 'Science Payload', ar: 'أجهزة علمية' },
    name: { en: 'Autonomous Cryogenic Subsurface Drill', ar: 'حفار أوتوماتيكي للعينات المتجمدة' },
    icon: '🔩',
    desc: {
      en: 'Penetrates 2 meters into ice/regolith with airtight sample caching chamber.',
      ar: 'يحفر حتى عمق مترين داخل الجليد والتربة مع غرفة معزولة لإحكام إغلاق العينات الجيولوجية.'
    },
    cost: 165,
    mass: 175,
    powerReq: 0.75,
    scienceYield: 45,
    counters: ['Volatile Prospecting']
  },
  {
    id: 'sci_drone',
    category: 'science',
    categoryLabel: { en: 'Science Payload', ar: 'أجهزة علمية' },
    name: { en: 'Autonomous Atmospheric Scout Rotorcraft', ar: 'طائرة مروحية استكشافية ذاتية القيادة' },
    icon: '🚁',
    desc: {
      en: 'Aerial reconnaissance drone expanding survey radius by 400% with HD stereo cameras.',
      ar: 'طائرة استطلاع جوي تضاعف نطاق المسح الجغرافي بنسبة 400% مع كاميرات مجسمة فائقة الدقة.'
    },
    cost: 210,
    mass: 115,
    powerReq: 0.35,
    scienceYield: 55,
    counters: ['Terrain Mapping']
  },
  {
    id: 'sci_radar',
    category: 'science',
    categoryLabel: { en: 'Science Payload', ar: 'أجهزة علمية' },
    name: { en: 'Ice-Penetrating Sounder Radar (REASON/SHARAD)', ar: 'رادار سبر طبقات الجليد والتربة' },
    icon: '📡',
    desc: {
      en: 'Transmits HF/VHF radar pulses to map subsurface stratigraphy and hidden liquid pockets.',
      ar: 'يرسل نبضات رادارية عالية التردد لاكتشاف المحيطات الباطنية والجيوب السائلة تحت السطح.'
    },
    cost: 140,
    mass: 95,
    powerReq: 0.30,
    scienceYield: 40,
    counters: ['Subsurface Ocean Mapping']
  },

  // --- Category: Propulsion Systems ---
  {
    id: 'prop_hydrolox',
    category: 'propulsion',
    categoryLabel: { en: 'Propulsion Stage', ar: 'أنظمة الدفع' },
    name: { en: 'Hydrolox High-Thrust Bipropellant Engine', ar: 'محرك كيميائي هيدروكسي عالي الدفع' },
    icon: '🚀',
    desc: {
      en: 'High specific impulse liquid chemical rocket engine designed for heavy maneuvers and orbital capture.',
      ar: 'محرك دفع كيميائي سائل قوي جداً للمناورات المدارية الكبيرة والكبح لدخول المدار.'
    },
    cost: 240,
    mass: 820,
    powerReq: 0.15,
    deltaVProvided: 4.8,
    scienceYield: 0,
    isPropulsion: true
  },
  {
    id: 'prop_ion',
    category: 'propulsion',
    categoryLabel: { en: 'Propulsion Stage', ar: 'أنظمة الدفع' },
    name: { en: 'NEXT-C Xenon Gridded Ion Thruster', ar: 'محرك الدفع الأيوني الكهربائي (زينون)' },
    icon: '⚡',
    desc: {
      en: 'Ultra-efficient electric propulsion delivering 7.5 km/s delta-V, requiring continuous electric power.',
      ar: 'محرك أيوني فائق الكفاءة يوفر 7.5 كم/ثانية، لكنه يستهلك طاقة كهربائية عالية ومستمرة.'
    },
    cost: 320,
    mass: 290,
    powerReq: 3.2,
    deltaVProvided: 7.5,
    scienceYield: 0,
    isPropulsion: true
  },
  {
    id: 'prop_nuclear',
    category: 'propulsion',
    categoryLabel: { en: 'Propulsion Stage', ar: 'أنظمة الدفع' },
    name: { en: 'Bimodal Nuclear Thermal Propulsion (NTP)', ar: 'نظام الدفع الحراري النووي الثنائي' },
    icon: '⚛️',
    desc: {
      en: 'High-thrust uranium fission engine with cogeneration of 1.5 kW auxiliary electric power.',
      ar: 'محرك انشطار نووي عالي الدفع يولد سرعات هائلة ويشارك بتوليد 1.5 كيلوواط كهرباء إضافية.'
    },
    cost: 650,
    mass: 750,
    powerReq: -1.5, // Generates electric power!
    deltaVProvided: 9.2,
    scienceYield: 15,
    isPropulsion: true
  },

  // --- Category: Power Generation ---
  {
    id: 'pwr_ultraflex',
    category: 'power',
    categoryLabel: { en: 'Power System', ar: 'توليد الطاقة' },
    name: { en: 'UltraFlex Circular Solar Array (10m)', ar: 'مصفوفة ألواح شمسية دائرية (الترافليكس)' },
    icon: '☀️',
    desc: {
      en: 'Lightweight accordion-deploying solar array. Power output scales with inverse-square solar distance.',
      ar: 'ألواح شمسية خفيفة قابلة للنشر. تتأثر طاقتها بقانون التربيع العكسي للمسافة عن الشمس.'
    },
    cost: 110,
    mass: 140,
    basePowerGen: 4.2, // kW at 1.0 AU
    isSolar: true,
    scienceYield: 0
  },
  {
    id: 'pwr_rtg',
    category: 'power',
    categoryLabel: { en: 'Power System', ar: 'توليد الطاقة' },
    name: { en: 'Next-Gen Plutonium-238 RTG Generator', ar: 'بطارية البلوتونيوم الكهروحرارية (RTG)' },
    icon: '🔋',
    desc: {
      en: 'Continuous radioisotope thermoelectric power. Completely unaffected by solar distance or night.',
      ar: 'توليد طاقة مستمر من الاضمحلال الإشعاعي للبلوتونيوم، لا تتأثر بالظلام أو البعد عن الشمس.'
    },
    cost: 340,
    mass: 260,
    basePowerGen: 2.1,
    isSolar: false,
    scienceYield: 0
  },
  {
    id: 'pwr_fission',
    category: 'power',
    categoryLabel: { en: 'Power System', ar: 'توليد الطاقة' },
    name: { en: 'Kilopower Fission Reactor (10 kWe)', ar: 'مفاعل كيلوباور النووي السطحي (10 kWe)' },
    icon: '🔮',
    desc: {
      en: 'High-output Stirling engine nuclear fission reactor for massive energy demands in deep space.',
      ar: 'مفاعل انشطاري مصغر بمحرك ستيرلينغ يولد طاقة كهربائية جبارة للرحلات إلى أطراف المجموعة الشمسية.'
    },
    cost: 510,
    mass: 590,
    basePowerGen: 6.8,
    isSolar: false,
    scienceYield: 10
  },
  {
    id: 'pwr_battery',
    category: 'power',
    categoryLabel: { en: 'Power System', ar: 'توليد الطاقة' },
    name: { en: 'Solid-State Lithium-Sulfur Energy Buffer', ar: 'بنك بطاريات الليثيوم والكبريت الصلبة' },
    icon: '⚡',
    desc: {
      en: 'High energy-density power storage buffer mitigating eclipse blackouts and peak instrument draws.',
      ar: 'مخزن طاقة فائق السعة لتأمين الكهرباء عند عبور مناطق الكسوف وأوقات ذروة عمل الأجهزة.'
    },
    cost: 75,
    mass: 130,
    basePowerGen: 0.6,
    isSolar: false,
    scienceYield: 0,
    counters: ['Power Eclipse / Dust Storm']
  },

  // --- Category: Shielding & Environmental Protection ---
  {
    id: 'prot_mli',
    category: 'protection',
    categoryLabel: { en: 'Thermal & Structural', ar: 'الحماية والدروع' },
    name: { en: 'Aerogel Multi-Layer Insulation (MLI) Blanket', ar: 'عازل حراري متعدد الطبقات من الإيروجيل' },
    icon: '🧥',
    desc: {
      en: 'Reflective aluminized Mylar and aerogel isolating flight electronics against -246°C to +150°C thermal swings.',
      ar: 'طبقات مايلر وإيروجيل عاكسة تحمي الإلكترونيات الحساسة من تقلبات الحرارة بين -246° و +150° مئوية.'
    },
    cost: 45,
    mass: 75,
    powerReq: 0.05,
    scienceYield: 0,
    counters: ['Extreme Cold', 'Thermal Swings']
  },
  {
    id: 'prot_whipple',
    category: 'protection',
    categoryLabel: { en: 'Micrometeoroid Shield', ar: 'الحماية والدروع' },
    name: { en: 'Beryllium-Whipple Impact Shielding', ar: 'درع ويبل المقوى ضد الحطام والشهب' },
    icon: '🛡️',
    desc: {
      en: 'Staged bumper plates vaporizing hypervelocity micrometeoroids and space debris impacts.',
      ar: 'صفائح تصادمية متعددة تبخر الحطام الفضائي والشهب فائقة السرعة قبل اختراق هيكل المركبة.'
    },
    cost: 95,
    mass: 195,
    powerReq: 0.0,
    scienceYield: 0,
    counters: ['Micrometeoroids', 'Space Debris']
  },
  {
    id: 'prot_polyethylene',
    category: 'protection',
    categoryLabel: { en: 'Radiation Shielding', ar: 'الحماية والدروع' },
    name: { en: 'Hydrogen-Rich Polyethylene Radiation Vault', ar: 'غرفة البولي إيثيلين المحصنة ضد الإشعاع' },
    icon: '🧱',
    desc: {
      en: 'Dense hydrogenous composite walls shielding computer cores against solar proton events.',
      ar: 'جدران هيدروجينية كثيفة تمتص وتشتت جسيمات البروتونات المشحونة والعواصف الشمسية.'
    },
    cost: 160,
    mass: 310,
    powerReq: 0.0,
    scienceYield: 0,
    counters: ['Solar Particle Events', 'CME Storm']
  },
  {
    id: 'prot_magnetic',
    category: 'protection',
    categoryLabel: { en: 'Active Shielding', ar: 'الحماية والدروع' },
    name: { en: 'Active Superconducting Magnetic Deflector', ar: 'درع مغناطيسي فائق التوصيل ونشط' },
    icon: '🌀',
    desc: {
      en: 'Generates an artificial mini-magnetosphere deflecting relativistic Jovian electrons and severe CMEs.',
      ar: 'يولد مجالاً كهرومغناطيسياً اصطناعياً لحرف إلكترونات المشتري الإشعاعية والانفجارات الشمسية العاتية.'
    },
    cost: 295,
    mass: 270,
    powerReq: 1.1,
    scienceYield: 5,
    counters: ['Solar Particle Events', 'Lethal Jovian Radiation Belts', 'CME Storm']
  },

  // --- Category: Avionics, Communications & Guidance ---
  {
    id: 'comms_kaband',
    category: 'avionics',
    categoryLabel: { en: 'Avionics & Comms', ar: 'إلكترونيات واتصالات' },
    name: { en: 'High-Gain Ka-Band Deep Space Antenna', ar: 'هوائي النطاق Ka عالي الكسب للفضاء العميق' },
    icon: '📡',
    desc: {
      en: '3-meter parabolic gimbaled antenna maintaining downlink telemetry with NASA Deep Space Network (DSN).',
      ar: 'هوائي مقعر بقطر 3 أمتار يحافظ على الاتصال الدائم وسرعة إرسال البيانات مع شبكة DSN التابعة لناسا.'
    },
    cost: 70,
    mass: 85,
    powerReq: 0.35,
    scienceYield: 10,
    counters: ['Telemetry Uplink']
  },
  {
    id: 'comms_dsoc',
    category: 'avionics',
    categoryLabel: { en: 'Avionics & Comms', ar: 'إلكترونيات واتصالات' },
    name: { en: 'Deep Space Optical Laser Comms (DSOC)', ar: 'منظومة الاتصالات الليزرية البصرية (DSOC)' },
    icon: '💫',
    desc: {
      en: 'Near-infrared laser transceiver yielding 10x higher science data downlink rates across millions of kilometers.',
      ar: 'جهاز إرسال بالليزر تحت الأحمر يضاعف سرعة نقل البيانات العلمية 10 مرات عبر مسافات سحيقة.'
    },
    cost: 175,
    mass: 95,
    powerReq: 0.55,
    scienceYield: 30,
    counters: ['Ultra-High Telemetry']
  },
  {
    id: 'av_ai_computer',
    category: 'avionics',
    categoryLabel: { en: 'Flight Computer', ar: 'إلكترونيات واتصالات' },
    name: { en: 'Rad-Hard Quad AI Flight Computer', ar: 'حاسوب طيران رباعي ذكي ومحصن ضد الإشعاع' },
    icon: '🧠',
    desc: {
      en: 'Radiation-hardened neural processing computer executing autonomous anomaly resolution without comms lag.',
      ar: 'معالج عصبي ذكي يتخذ قرارات الطيران وحل الأعطال ذاتياً لتجاوز تأخير الإشارة مع الأرض.'
    },
    cost: 135,
    mass: 40,
    powerReq: 0.20,
    scienceYield: 15,
    counters: ['Comms Blackout', 'System Glitch', 'Radiation Bit-Flips']
  },
  {
    id: 'av_trn_landing',
    category: 'avionics',
    categoryLabel: { en: 'Terrain Navigation', ar: 'إلكترونيات واتصالات' },
    name: { en: 'Terrain-Relative Navigation (TRN) Optical Guidance', ar: 'نظام الملاحة البصري وتفادي التضاريس (TRN)' },
    icon: '🎯',
    desc: {
      en: 'Real-time hazard avoidance and pinpoint surface targeting during descent and landing.',
      ar: 'مطابقة التضاريس في الوقت الحقيقي لتفادي الصخور والمنحدرات الخطرة أثناء الهبوط الدقيق.'
    },
    cost: 115,
    mass: 50,
    powerReq: 0.15,
    scienceYield: 15,
    counters: ['Hazardous Landing', 'Boulder Avoidance']
  }
];

// Potential Space Weather Anomaly Events
const SPACE_WEATHER_EVENTS_DATA = [
  {
    id: 'cme_flare',
    title: {
      en: 'CLASS X-12 CORONAL MASS EJECTION (CME)',
      ar: 'انفجار إكليلي شمسي عنيف من الفئة X-12'
    },
    desc: {
      en: 'A massive solar eruption blasts billions of tons of high-energy protons directly across the flight trajectory.',
      ar: 'ثوران شمسي هائل يقذف مليارات الأطنان من البروتونات عالية الطاقة في مسار تحليق المركبة مباشرة.'
    },
    severity: 'High Radiation Shock',
    counterRequired: ['Solar Particle Events', 'CME Storm'],
    penaltySuccess: 45,
    failMessage: {
      en: 'Unshielded electronics suffered catastrophic latch-up and bit-flip cascading failures under extreme proton bombardment.',
      ar: 'تعرضت الإلكترونيات غير المحمية لتلف فوري وانقلاب في البيانات الثنائية بفعل القصف البروتوني العنيف.'
    }
  },
  {
    id: 'debris_cascade',
    title: {
      en: 'MICROMETEOROID ORBITAL DEBRIS (MMOD) SWARM',
      ar: 'عاصفة نيزكية وحطام فضائي فائق السرعة'
    },
    desc: {
      en: 'Hypervelocity dust grains and asteroid fragmentation debris impact the spacecraft bus at 34 km/s.',
      ar: 'جسيمات نيزكية وحطام كويكبي فائق السرعة تصطدم بهيكل المركبة الفضائية بسرعة 34 كم في الثانية.'
    },
    severity: 'Kinetic Impact Threat',
    counterRequired: ['Micrometeoroids', 'Space Debris'],
    penaltySuccess: 40,
    failMessage: {
      en: 'Debris pierced primary propellant lines causing uncontained pressure venting and loss of vehicle attitude control.',
      ar: 'اخترق الحطام أنابيب الوقود الرئيسية مما سبب تسرباً للضغط وفقدان السيطرة على توجيه المركبة.'
    }
  },
  {
    id: 'solar_eclipse_dust',
    title: {
      en: 'SOLAR OBSCURATION & CRYOGENIC FREEZE',
      ar: 'حجب شمسي كامل وتجمد بالبرودة القارسة'
    },
    desc: {
      en: 'Extreme environmental shadowing and localized particulate storm drop solar irradiance to zero.',
      ar: 'دخول في منطقة ظل كوكبي حالكة وعاصفة غبار أدت إلى انخفاض الإشعاع الشمسي إلى الصفر.'
    },
    severity: 'Power Starvation / Cold Shock',
    counterRequired: ['Power Eclipse / Dust Storm', 'Extreme Cold', 'Thermal Swings'],
    penaltySuccess: 35,
    failMessage: {
      en: 'Solar array blackout plunged the bus into deep freeze below operational threshold. Primary batteries depleted.',
      ar: 'انعدام الطاقة الشمسية جمد أنظمة المركبة وتسبب في نفاذ البطاريات التام وتوقف الحواسيب.'
    }
  },
  {
    id: 'comms_ionospheric_scintillation',
    title: {
      en: 'DEEP SPACE TELEMETRY BLACKOUT & BIT-FLIP',
      ar: 'انقطاع الاتصال بالفضاء العميق وتجمد الحاسوب'
    },
    desc: {
      en: 'Cosmic ray burst triggered main flight computer lockup during deep space transmission blackout.',
      ar: 'دفق من الأشعة الكونية جمد حاسوب الطيران المركزي أثناء انقطاع إشارة الاتصال اللاسلكي بالأرض.'
    },
    severity: 'Avionics Anomaly',
    counterRequired: ['Comms Blackout', 'System Glitch', 'Radiation Bit-Flips'],
    penaltySuccess: 30,
    failMessage: {
      en: 'Flight computer locked into bootloop without autonomous rad-hard watchdog recovery. Ground command link severed.',
      ar: 'علق حاسوب الطيران في حلقة إعادة تشغيل لا نهائية دون معالج ذكي للتعافي الذاتي، وانقطع الاتصال بالأرض.'
    }
  }
];

// Preset Architectures
const MISSION_PRESETS_DATA = {
  custom: [],
  artemis: [
    'sci_drill',
    'sci_spectrometer',
    'prop_hydrolox',
    'pwr_ultraflex',
    'pwr_battery',
    'prot_mli',
    'prot_whipple',
    'comms_kaband',
    'av_trn_landing'
  ],
  perseverance: [
    'sci_spectrometer',
    'sci_drill',
    'sci_drone',
    'prop_hydrolox',
    'pwr_rtg',
    'prot_mli',
    'prot_polyethylene',
    'comms_kaband',
    'av_ai_computer',
    'av_trn_landing'
  ],
  deep_space: [
    'sci_spectrometer',
    'sci_radar',
    'prop_ion',
    'pwr_rtg',
    'pwr_battery',
    'prot_whipple',
    'prot_polyethylene',
    'comms_dsoc',
    'av_ai_computer'
  ],
  europa_clipper: [
    'sci_spectrometer',
    'sci_radar',
    'prop_nuclear',
    'pwr_fission',
    'prot_magnetic',
    'prot_mli',
    'prot_whipple',
    'comms_dsoc',
    'av_ai_computer'
  ]
};

// ==========================================================================
// 3. SYNTHESIZED WEB AUDIO ENGINE (ZERO EXTERNAL ASSETS)
// ==========================================================================

class SpaceSoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1400, this.audioCtx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }

  playCountdownBeep(isFinal = false) {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    const freq = isFinal ? 1200 : 750;
    const duration = isFinal ? 0.35 : 0.12;

    osc.type = isFinal ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + duration);
  }

  playRocketRoar(duration = 2.8) {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;

    const bufferSize = this.audioCtx.sampleRate * duration;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, this.audioCtx.currentTime);
    filter.frequency.linearRampToValueAtTime(450, this.audioCtx.currentTime + 1.5);
    filter.frequency.exponentialRampToValueAtTime(90, this.audioCtx.currentTime + duration);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.35, this.audioCtx.currentTime + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start();
    noise.stop(this.audioCtx.currentTime + duration);
  }

  playSuccessFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const startTime = this.audioCtx.currentTime + idx * 0.12;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.38);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  }

  playAlarmSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;

    for (let i = 0; i < 3; i++) {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const startTime = this.audioCtx.currentTime + i * 0.22;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, startTime);
      osc.frequency.linearRampToValueAtTime(260, startTime + 0.18);

      gain.gain.setValueAtTime(0.22, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.22);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

// ==========================================================================
// 4. BACKGROUND CANVAS STARFIELD ANIMATOR
// ==========================================================================

class SpaceCanvasVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.numStars = 130;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.resize();
    this.initStars();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  initStars() {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  maybeSpawnShootingStar() {
    if (Math.random() < 0.015 && this.shootingStars.length < 2) {
      this.shootingStars.push({
        x: Math.random() * this.width * 0.8,
        y: Math.random() * this.height * 0.3,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 10 + 12,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        alpha: 1.0
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const isLight = document.documentElement.dataset.theme === 'light';
    const starFill = isLight ? 'rgba(11, 61, 145, ' : 'rgba(255, 255, 255, ';

    for (let s of this.stars) {
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha > 0.95) s.twinkleDir = -1;
      if (s.alpha < 0.2) s.twinkleDir = 1;

      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${starFill}${isLight ? s.alpha * 0.35 : s.alpha})`;
      this.ctx.fill();
    }

    if (!isLight) {
      this.maybeSpawnShootingStar();
      for (let i = this.shootingStars.length - 1; i >= 0; i--) {
        const ss = this.shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= 0.025;

        if (ss.alpha <= 0) {
          this.shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = this.ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(0, 243, 255, 0)');
        grad.addColorStop(1, `rgba(255, 255, 255, ${ss.alpha})`);

        this.ctx.beginPath();
        this.ctx.moveTo(tailX, tailY);
        this.ctx.lineTo(ss.x, ss.y);
        this.ctx.strokeStyle = grad;
        this.ctx.lineWidth = 1.8;
        this.ctx.stroke();
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================================================
// 5. MAIN GAME CONTROLLER & SMART AI ADVISOR
// ==========================================================================

class SpaceMissionGame {
  constructor() {
    this.soundEngine = new SpaceSoundEngine();
    this.currentLang = 'en'; // 'en' or 'ar'
    this.currentTheme = 'dark'; // 'dark' or 'light'
    this.currentDestination = DESTINATIONS_DATA.mars;
    this.selectedEquipmentIds = new Set();
    this.activeCategoryFilter = 'all';

    // State
    this.isLaunching = false;
    this.lastMissionTelemetry = null;
    this.isAdvisorTyping = false;

    this.initDOMRefs();
    this.initEventListeners();
    this.applyLanguage(this.currentLang);
    this.applyTheme(this.currentTheme);
    this.renderDestinations();
    this.renderEquipmentCatalog();
    this.updateDashboardMetrics();
    this.initAIChatbot();
    new SpaceCanvasVisualizer('space-canvas');
  }

  initDOMRefs() {
    // Header & Tool Buttons
    this.presetSelect = document.getElementById('mission-preset');
    this.langToggleBtn = document.getElementById('lang-toggle-btn');
    this.langBtnLabel = document.getElementById('lang-btn-label');
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.themeIconSun = document.getElementById('theme-icon-sun');
    this.themeIconMoon = document.getElementById('theme-icon-moon');
    this.themeBtnLabel = document.getElementById('theme-btn-label');
    this.audioToggleBtn = document.getElementById('audio-toggle-btn');
    this.audioIconOn = document.getElementById('audio-icon-on');
    this.audioIconOff = document.getElementById('audio-icon-off');
    this.resetMissionBtn = document.getElementById('reset-mission-btn');

    // Panels
    this.destOptionsContainer = document.getElementById('destination-options');
    this.hardwareListContainer = document.getElementById('hardware-list');
    this.categoryTabs = document.querySelectorAll('.cat-tab');
    this.selectedHardwareCountBadge = document.getElementById('selected-hardware-count');

    // Destination Telemetry Details Box
    this.destCategoryBadge = document.getElementById('dest-category-badge');
    this.destPreviewName = document.getElementById('dest-preview-name');
    this.destPreviewDesc = document.getElementById('dest-preview-desc');
    this.specSolarFlux = document.getElementById('spec-solar-flux');
    this.specSolarNote = document.getElementById('spec-solar-note');
    this.specCommsDelay = document.getElementById('spec-comms-delay');
    this.specRadiation = document.getElementById('spec-radiation');
    this.specDeltaV = document.getElementById('spec-delta-v');
    this.destHazardText = document.getElementById('dest-hazard-text');

    // Progress Meters (Budget, Mass, Power)
    this.meterBudgetCard = document.getElementById('meter-budget-card');
    this.valBudgetCurrent = document.getElementById('val-budget-current');
    this.valBudgetLimit = document.getElementById('val-budget-limit');
    this.barBudgetFill = document.getElementById('bar-budget-fill');
    this.statusBudgetText = document.getElementById('status-budget-text');
    this.pctBudgetText = document.getElementById('pct-budget-text');

    this.meterMassCard = document.getElementById('meter-mass-card');
    this.valMassCurrent = document.getElementById('val-mass-current');
    this.valMassLimit = document.getElementById('val-mass-limit');
    this.barMassFill = document.getElementById('bar-mass-fill');
    this.statusMassText = document.getElementById('status-mass-text');
    this.pctMassText = document.getElementById('pct-mass-text');

    this.meterPowerCard = document.getElementById('meter-power-card');
    this.valPowerGen = document.getElementById('val-power-gen');
    this.valPowerReq = document.getElementById('val-power-req');
    this.barPowerFill = document.getElementById('bar-power-fill');
    this.statusPowerText = document.getElementById('status-power-text');
    this.pctPowerText = document.getElementById('pct-power-text');

    // Readiness & Launch Button
    this.readinessScoreVal = document.getElementById('readiness-score-val');
    this.readinessVerdictPill = document.getElementById('readiness-verdict-pill');
    this.sciencePointsVal = document.getElementById('science-points-val');
    this.flightChecksList = document.getElementById('flight-checks-list');
    this.launchMissionBtn = document.getElementById('launch-mission-btn');
    this.launchSubLabel = document.getElementById('launch-sub-label');

    // AI Mission Advisor Widget
    this.aiAdvisorWrapper = document.getElementById('ai-advisor-wrapper');
    this.aiChatToggleBtn = document.getElementById('ai-chat-toggle-btn');
    this.aiChatCard = document.getElementById('ai-chat-card');
    this.aiCloseChatBtn = document.getElementById('ai-close-chat-btn');
    this.aiClearChatBtn = document.getElementById('ai-clear-chat-btn');
    this.aiQuickPrompts = document.getElementById('ai-quick-prompts');
    this.aiChatBody = document.getElementById('ai-chat-body');
    this.aiChatForm = document.getElementById('ai-chat-form');
    this.aiUserInput = document.getElementById('ai-user-input');

    // Modals
    this.launchModal = document.getElementById('launch-modal');
    this.launchTrajectoryCanvas = document.getElementById('launch-trajectory-canvas');
    this.countdownTimer = document.getElementById('countdown-timer');
    this.launchStageDesc = document.getElementById('launch-stage-desc');
    this.telemetryLogContent = document.getElementById('telemetry-log-content');
    this.weatherAlertBox = document.getElementById('weather-alert-box');
    this.weatherEventTitle = document.getElementById('weather-event-title');
    this.weatherEventDesc = document.getElementById('weather-event-desc');
    this.weatherDefenseTag = document.getElementById('weather-defense-tag');

    this.debriefModal = document.getElementById('debrief-modal');
    this.closeDebriefBtn = document.getElementById('close-debrief-btn');
    this.debriefHeroBanner = document.getElementById('debrief-hero-banner');
    this.debriefIcon = document.getElementById('debrief-icon');
    this.debriefTitle = document.getElementById('debrief-title');
    this.debriefDestLine = document.getElementById('debrief-destination-line');
    this.debriefGrade = document.getElementById('debrief-grade');
    this.debriefBudgetVal = document.getElementById('debrief-budget-val');
    this.debriefBudgetMargin = document.getElementById('debrief-budget-margin');
    this.debriefMassVal = document.getElementById('debrief-mass-val');
    this.debriefMassMargin = document.getElementById('debrief-mass-margin');
    this.debriefPowerVal = document.getElementById('debrief-power-val');
    this.debriefPowerMargin = document.getElementById('debrief-power-margin');
    this.debriefScienceVal = document.getElementById('debrief-science-val');
    this.debriefScienceRatio = document.getElementById('debrief-science-ratio');
    this.debriefNarrative = document.getElementById('debrief-narrative');
    this.weatherDebriefSummary = document.getElementById('weather-debrief-summary');

    this.debriefReconfigureBtn = document.getElementById('debrief-reconfigure-btn');
    this.debriefExportBtn = document.getElementById('debrief-export-btn');
    this.debriefShareBtn = document.getElementById('debrief-share-btn');
    this.toastContainer = document.getElementById('toast-container');

    // Intro Screen & Planet Specs Modal
    this.introSplashScreen = document.getElementById('intro-splash-screen');
    this.startMissionIntroBtn = document.getElementById('start-mission-intro-btn');
    this.replayIntroBtn = document.getElementById('replay-intro-btn');

    this.openDestSpecsBtn = document.getElementById('open-dest-specs-btn');
    this.planetSpecsModal = document.getElementById('planet-specs-modal');
    this.closePlanetModalBtn = document.getElementById('close-planet-modal-btn');
    this.planetModalDismissBtn = document.getElementById('planet-modal-dismiss-btn');
    this.planetModalSelectBtn = document.getElementById('planet-modal-select-btn');
    this.planetModalAvatar = document.getElementById('planet-modal-avatar');
    this.planetModalTag = document.getElementById('planet-modal-tag');
    this.planetModalName = document.getElementById('planet-modal-name');
    this.planetModalDesc = document.getElementById('planet-modal-desc');
    this.planetModalGravity = document.getElementById('planet-modal-gravity');
    this.planetModalAtmosphere = document.getElementById('planet-modal-atmosphere');
    this.planetModalTemp = document.getElementById('planet-modal-temp');
    this.planetModalFlux = document.getElementById('planet-modal-flux');
    this.planetModalDeltav = document.getElementById('planet-modal-deltav');
    this.planetModalLatency = document.getElementById('planet-modal-latency');
    this.planetModalObjectives = document.getElementById('planet-modal-objectives');
    this.planetModalGear = document.getElementById('planet-modal-gear');
    this.planetModalHazards = document.getElementById('planet-modal-hazards');
    this.activeSpecsDestId = this.currentDestination.id;

    // Wizard Stepper & Panes
    this.currentStep = 1;
    this.stepperProgressFill = document.getElementById('stepper-progress-fill');
    this.stepBtn1 = document.getElementById('stepper-step-1');
    this.stepBtn2 = document.getElementById('stepper-step-2');
    this.stepBtn3 = document.getElementById('stepper-step-3');
    this.wizardPane1 = document.getElementById('wizard-pane-1');
    this.wizardPane2 = document.getElementById('wizard-pane-2');
    this.wizardPane3 = document.getElementById('wizard-pane-3');
    this.step1NextBtn = document.getElementById('step1-next-btn');
    this.step2PrevBtn = document.getElementById('step2-prev-btn');
    this.step2NextBtn = document.getElementById('step2-next-btn');
    this.step3PrevBtn = document.getElementById('step3-prev-btn');

    // Step Status & Cockpit Manifest Elements
    this.step1StatusSummary = document.getElementById('step1-status-summary');
    this.step2SummaryStatus = document.getElementById('step2-summary-status');
    this.step2ViabilityBadge = document.getElementById('step2-viability-badge');
    this.step2ScienceBadge = document.getElementById('step2-science-badge');
    this.cockpitTargetName = document.getElementById('cockpit-target-name');
    this.cockpitBudgetVal = document.getElementById('cockpit-budget-val');
    this.cockpitMassVal = document.getElementById('cockpit-mass-val');
    this.cockpitPowerVal = document.getElementById('cockpit-power-val');
    this.cockpitScienceVal = document.getElementById('cockpit-science-val');
    this.cockpitAiDiagnostic = document.getElementById('cockpit-ai-diagnostic');
    this.openAiChatFromStep3 = document.getElementById('open-ai-chat-from-step3');
    this.step3FooterStatus = document.getElementById('step3-footer-status');

    // Package ZIP & Live Deployment Modal
    this.downloadZipBtn = document.getElementById('download-zip-btn');
    this.deployModalBtn = document.getElementById('deploy-modal-btn');
    this.debriefDownloadZipBtn = document.getElementById('debrief-download-zip-btn');
    this.debriefDeployBtn = document.getElementById('debrief-deploy-btn');
    this.deploymentModal = document.getElementById('deployment-modal');
    this.closeDeployModalBtn = document.getElementById('close-deploy-modal-btn');
    this.modalDownloadZipBtn = document.getElementById('modal-download-zip-btn');
    this.copyGitCmdBtn = document.getElementById('copy-git-cmd-btn');

    // Fullscreen & Print Certificate
    this.fullscreenToggleBtn = document.getElementById('fullscreen-toggle-btn');
    this.fullscreenIconEnter = document.getElementById('fullscreen-icon-enter');
    this.fullscreenIconExit = document.getElementById('fullscreen-icon-exit');
    this.debriefPrintCertBtn = document.getElementById('debrief-print-cert-btn');
  }

  initEventListeners() {
    // Intro Screen listeners
    if (this.startMissionIntroBtn) {
      this.startMissionIntroBtn.addEventListener('click', () => {
        this.dismissIntroScreen();
      });
    }

    if (this.replayIntroBtn) {
      this.replayIntroBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.showIntroScreen();
      });
    }

    // Planet Specs Modal listeners
    if (this.openDestSpecsBtn) {
      this.openDestSpecsBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.openPlanetSpecsModal(this.currentDestination.id);
      });
    }

    if (this.closePlanetModalBtn) {
      this.closePlanetModalBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.planetSpecsModal.classList.add('hidden');
      });
    }

    if (this.planetModalDismissBtn) {
      this.planetModalDismissBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.planetSpecsModal.classList.add('hidden');
      });
    }

    if (this.planetModalSelectBtn) {
      this.planetModalSelectBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        if (this.activeSpecsDestId) {
          this.selectDestination(this.activeSpecsDestId);
        }
        this.planetSpecsModal.classList.add('hidden');
      });
    }

    if (this.planetSpecsModal) {
      this.planetSpecsModal.addEventListener('click', (e) => {
        if (e.target === this.planetSpecsModal) {
          this.planetSpecsModal.classList.add('hidden');
        }
      });
    }

    // Language Switcher
    this.langToggleBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      const nextLang = this.currentLang === 'en' ? 'ar' : 'en';
      this.applyLanguage(nextLang);
      this.showToast(this.currentLang === 'ar' ? 'تم تحويل الواجهة إلى العربية بنجاح' : 'Switched language to English');
    });

    // Theme Switcher (Dark / Light)
    this.themeToggleBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      this.applyTheme(nextTheme);
      this.showToast(this.currentTheme === 'light' ? 'NASA Clean Light Mode Active' : 'Cosmic Space Dark Mode Active');
    });

    // Preset selection
    this.presetSelect.addEventListener('change', (e) => {
      this.soundEngine.playClick();
      this.loadPreset(e.target.value);
    });

    // Audio SFX toggle
    this.audioToggleBtn.addEventListener('click', () => {
      const isMuted = this.soundEngine.toggleMute();
      this.audioIconOn.classList.toggle('hidden', isMuted);
      this.audioIconOff.classList.toggle('hidden', !isMuted);
      this.showToast(isMuted ? (this.currentLang === 'ar' ? 'تم كتم الصوت' : 'Audio Muted') : (this.currentLang === 'ar' ? 'تم تفعيل الصوت' : 'Audio Online'));
    });

    // Reset button
    this.resetMissionBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.selectedEquipmentIds.clear();
      this.presetSelect.value = 'custom';
      this.renderEquipmentCatalog();
      this.updateDashboardMetrics();
      this.showToast(this.currentLang === 'ar' ? 'تمت إعادة ضبط المركبة' : 'Configuration Reset');
    });

    // Subsystem category tabs
    this.categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.categoryTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        this.activeCategoryFilter = tab.getAttribute('data-cat');
        this.filterEquipmentCards();
      });
    });

    // Launch trigger
    this.launchMissionBtn.addEventListener('click', () => {
      if (!this.launchMissionBtn.disabled && !this.isLaunching) {
        this.startLaunchSimulation();
      }
    });

    // Debrief Modal buttons
    this.closeDebriefBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.debriefModal.classList.add('hidden');
    });

    this.debriefReconfigureBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.debriefModal.classList.add('hidden');
      this.goToStep(2);
    });

    this.debriefExportBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.exportMissionTelemetryJSON();
    });

    this.debriefShareBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.shareFlightLog();
    });

    if (this.debriefModal) {
      this.debriefModal.addEventListener('click', (e) => {
        if (e.target === this.debriefModal) {
          this.debriefModal.classList.add('hidden');
        }
      });
    }

    // AI Chatbot UI Event Listeners
    this.aiChatToggleBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      const isHidden = this.aiChatCard.classList.contains('hidden');
      this.aiChatCard.classList.toggle('hidden', !isHidden);
      this.aiChatToggleBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
      if (isHidden) {
        this.aiUserInput.focus();
      }
    });

    this.aiCloseChatBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.aiChatCard.classList.add('hidden');
      this.aiChatToggleBtn.setAttribute('aria-expanded', 'false');
    });

    this.aiClearChatBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.aiChatBody.innerHTML = '';
      this.appendAIMessage(I18N[this.currentLang].aiWelcomeMsg, 'advisor');
    });

    // Quick suggestion prompt chips
    this.aiQuickPrompts.querySelectorAll('.ai-prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this.soundEngine.playClick();
        const promptKey = chip.getAttribute('data-prompt');
        this.handleQuickPrompt(promptKey);
      });
    });

    // Chat submit form
    this.aiChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = this.aiUserInput.value.trim();
      if (!text || this.isAdvisorTyping) return;
      this.handleUserChatMessage(text);
      this.aiUserInput.value = '';
    });

    // Wizard Stepper and Navigation Buttons
    if (this.stepBtn1) {
      this.stepBtn1.addEventListener('click', () => this.goToStep(1));
    }
    if (this.stepBtn2) {
      this.stepBtn2.addEventListener('click', () => this.goToStep(2));
    }
    if (this.stepBtn3) {
      this.stepBtn3.addEventListener('click', () => this.goToStep(3));
    }
    if (this.step1NextBtn) {
      this.step1NextBtn.addEventListener('click', () => this.goToStep(2));
    }
    if (this.step2PrevBtn) {
      this.step2PrevBtn.addEventListener('click', () => this.goToStep(1));
    }
    if (this.step2NextBtn) {
      this.step2NextBtn.addEventListener('click', () => this.goToStep(3));
    }
    if (this.step3PrevBtn) {
      this.step3PrevBtn.addEventListener('click', () => this.goToStep(2));
    }

    if (this.openAiChatFromStep3) {
      this.openAiChatFromStep3.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.aiChatCard.classList.remove('hidden');
        this.aiChatToggleBtn.setAttribute('aria-expanded', 'true');
        this.aiUserInput.focus();
      });
    }

    const cockpitChips = document.querySelectorAll('.cockpit-prompts-list .ai-prompt-chip');
    cockpitChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.soundEngine.playClick();
        const promptKey = chip.getAttribute('data-prompt');
        this.handleQuickPrompt(promptKey);
        this.aiChatCard.classList.remove('hidden');
        this.aiChatToggleBtn.setAttribute('aria-expanded', 'true');
      });
    });

    // Package ZIP Button Listeners
    if (this.downloadZipBtn) {
      this.downloadZipBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.downloadProjectZip();
      });
    }
    if (this.debriefDownloadZipBtn) {
      this.debriefDownloadZipBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.downloadProjectZip();
      });
    }
    if (this.modalDownloadZipBtn) {
      this.modalDownloadZipBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.downloadProjectZip();
      });
    }

    // Live Deployment Modal Listeners
    if (this.deployModalBtn) {
      this.deployModalBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        if (this.deploymentModal) this.deploymentModal.classList.remove('hidden');
      });
    }
    if (this.debriefDeployBtn) {
      this.debriefDeployBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        if (this.deploymentModal) this.deploymentModal.classList.remove('hidden');
      });
    }
    if (this.closeDeployModalBtn) {
      this.closeDeployModalBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        if (this.deploymentModal) this.deploymentModal.classList.add('hidden');
      });
    }
    if (this.deploymentModal) {
      this.deploymentModal.addEventListener('click', (e) => {
        if (e.target === this.deploymentModal) {
          this.deploymentModal.classList.add('hidden');
        }
      });
    }

    // Copy Git Commands
    if (this.copyGitCmdBtn) {
      this.copyGitCmdBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        const gitCmds = "git init\ngit add .\ngit commit -m \"NASA Space Apps 2026 Submission\"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USER/nasa-space-mission-game.git\ngit push -u origin main";
        if (navigator.clipboard) {
          navigator.clipboard.writeText(gitCmds).then(() => {
            this.showToast(this.currentLang === 'ar' ? 'تم نسخ أوامر Git للحافظة!' : 'Git Commands Copied to Clipboard!');
          });
        } else {
          this.showToast(this.currentLang === 'ar' ? 'أوامر Git متوفرة في DEPLOYMENT_GUIDE.md' : 'Git Commands available in DEPLOYMENT_GUIDE.md');
        }
      });
    }

    // Fullscreen Toggle Listener
    if (this.fullscreenToggleBtn) {
      this.fullscreenToggleBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.toggleFullscreen();
      });

      document.addEventListener('fullscreenchange', () => {
        const isFs = !!document.fullscreenElement;
        if (this.fullscreenIconEnter) this.fullscreenIconEnter.classList.toggle('hidden', isFs);
        if (this.fullscreenIconExit) this.fullscreenIconExit.classList.toggle('hidden', !isFs);
      });
    }

    // Print Mission Certificate Listener
    if (this.debriefPrintCertBtn) {
      this.debriefPrintCertBtn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.printMissionCertificate();
      });
    }

    // Keyboard support: ESC closes modals/chat; Space/Enter dismisses intro screen
    window.addEventListener('keydown', (e) => {
      // If intro splash screen is active and visible
      if (this.introSplashScreen && !this.introSplashScreen.classList.contains('hidden') && !this.introSplashScreen.classList.contains('intro-fading')) {
        if (e.key === ' ' || e.key === 'Enter') {
          const tag = (document.activeElement && document.activeElement.tagName) ? document.activeElement.tagName.toLowerCase() : '';
          if (tag !== 'input' && tag !== 'textarea') {
            e.preventDefault();
            this.dismissIntroScreen();
            return;
          }
        }
      }

      if (e.key === 'Escape') {
        if (this.deploymentModal && !this.deploymentModal.classList.contains('hidden')) {
          this.deploymentModal.classList.add('hidden');
        } else if (this.planetSpecsModal && !this.planetSpecsModal.classList.contains('hidden')) {
          this.planetSpecsModal.classList.add('hidden');
        } else if (!this.debriefModal.classList.contains('hidden')) {
          this.debriefModal.classList.add('hidden');
        } else if (!this.aiChatCard.classList.contains('hidden')) {
          this.aiChatCard.classList.add('hidden');
        }
      }
    });
  }

  // ========================================================================
  // 5b. INTRO SPLASH & PLANET SPECS MODAL CONTROLLERS
  // ========================================================================

  dismissIntroScreen() {
    if (!this.introSplashScreen) return;
    this.soundEngine.init();
    this.soundEngine.playCountdownBeep(true);
    this.introSplashScreen.classList.add('intro-fading');
    setTimeout(() => {
      this.introSplashScreen.classList.add('hidden');
      this.introSplashScreen.classList.remove('intro-fading');
    }, 750);
  }

  showIntroScreen() {
    if (!this.introSplashScreen) return;
    this.introSplashScreen.classList.remove('hidden', 'intro-fading');
  }

  openPlanetSpecsModal(destId) {
    const dest = DESTINATIONS_DATA[destId] || this.currentDestination;
    if (!dest || !this.planetSpecsModal) return;

    this.activeSpecsDestId = dest.id;
    const lang = this.currentLang;

    // Header & identity
    if (this.planetModalAvatar) this.planetModalAvatar.textContent = dest.avatar;
    if (this.planetModalTag) this.planetModalTag.textContent = dest.tag[lang];
    if (this.planetModalName) this.planetModalName.textContent = dest.name[lang];
    if (this.planetModalDesc) this.planetModalDesc.textContent = dest.description[lang];

    // Core Metrics Grid
    if (this.planetModalGravity) {
      this.planetModalGravity.textContent = dest.gravity ? dest.gravity[lang] : '--';
    }
    if (this.planetModalAtmosphere) {
      this.planetModalAtmosphere.textContent = dest.atmosphere ? dest.atmosphere[lang] : '--';
    }
    if (this.planetModalTemp) {
      this.planetModalTemp.textContent = dest.temperature ? dest.temperature[lang] : '--';
    }
    if (this.planetModalFlux) {
      const fluxPct = Math.round(dest.solarFlux * 100);
      this.planetModalFlux.textContent = `${fluxPct}% (${dest.distanceAU} AU)`;
    }
    if (this.planetModalDeltav) {
      this.planetModalDeltav.textContent = `${dest.deltaVRequired} km/s`;
    }
    if (this.planetModalLatency) {
      this.planetModalLatency.textContent = dest.commsDelay[lang];
    }

    // Key Objectives list
    if (this.planetModalObjectives) {
      this.planetModalObjectives.innerHTML = '';
      const objs = (dest.objectives && dest.objectives[lang]) || [];
      objs.forEach(obj => {
        const li = document.createElement('li');
        li.textContent = obj;
        this.planetModalObjectives.appendChild(li);
      });
    }

    // Recommended Gear list
    if (this.planetModalGear) {
      this.planetModalGear.innerHTML = '';
      const gear = (dest.recommendedGear && dest.recommendedGear[lang]) || [];
      gear.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        this.planetModalGear.appendChild(li);
      });
    }

    // Environmental Hazards
    if (this.planetModalHazards) {
      this.planetModalHazards.textContent = dest.hazardsDetail 
        ? dest.hazardsDetail[lang] 
        : dest.hazardNote[lang];
    }

    // Reveal modal
    this.planetSpecsModal.classList.remove('hidden');
  }

  // ========================================================================
  // 5c. MULTI-STEP WIZARD WORKFLOW CONTROLLER
  // ========================================================================

  goToStep(stepNum) {
    if (stepNum < 1 || stepNum > 3) return;
    this.currentStep = stepNum;
    this.soundEngine.playClick();

    // Toggle Panes visibility
    const panes = [this.wizardPane1, this.wizardPane2, this.wizardPane3];
    panes.forEach((pane, idx) => {
      if (!pane) return;
      const isActive = idx + 1 === stepNum;
      pane.classList.toggle('active', isActive);
      pane.classList.toggle('hidden', !isActive);
    });

    // Update Stepper Nodes
    const stepBtns = [this.stepBtn1, this.stepBtn2, this.stepBtn3];
    stepBtns.forEach((btn, idx) => {
      if (!btn) return;
      const stepIndex = idx + 1;
      const isCurrent = stepIndex === stepNum;
      const isCompleted = stepIndex < stepNum;

      btn.classList.toggle('active', isCurrent);
      btn.classList.toggle('completed', isCompleted);
      if (isCurrent) {
        btn.setAttribute('aria-current', 'step');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    // Update Progress Track Fill
    if (this.stepperProgressFill) {
      const pct = stepNum === 1 ? 0 : (stepNum === 2 ? 50 : 100);
      this.stepperProgressFill.style.width = `${pct}%`;
    }

    // Smooth scroll to top of wizard container
    const wizardContainer = document.getElementById('wizard-container');
    if (wizardContainer) {
      wizardContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Refresh context metrics
    this.updateDashboardMetrics();
  }

  // ========================================================================
  // 6. BILINGUAL & THEME SWITCHER IMPLEMENTATION
  // ========================================================================

  applyLanguage(lang) {
    this.currentLang = lang;
    const t = I18N[lang];
    const isRtl = lang === 'ar';

    // HTML root attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    // Update Language Button Label
    this.langBtnLabel.textContent = t.langBtnLabel;

    // Translate all standard elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Update Theme toggle button label
    this.themeBtnLabel.textContent = this.currentTheme === 'dark' 
      ? (lang === 'ar' ? 'الوضع النهاري' : 'LIGHT MODE') 
      : (lang === 'ar' ? 'الوضع الليلي' : 'DARK MODE');

    // Re-render dynamic elements
    this.renderDestinations();
    this.renderEquipmentCatalog();
    this.updateDestinationProfileUI();
    this.updateDashboardMetrics();

    // Reset Chatbot welcome message in current language if empty
    if (this.aiChatBody.children.length <= 1) {
      this.aiChatBody.innerHTML = '';
      this.appendAIMessage(t.aiWelcomeMsg, 'advisor');
    }

    // Refresh open planet specs modal if currently visible
    if (this.planetSpecsModal && !this.planetSpecsModal.classList.contains('hidden') && this.activeSpecsDestId) {
      this.openPlanetSpecsModal(this.activeSpecsDestId);
    }
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.dataset.theme = theme;

    const isLight = theme === 'light';
    this.themeIconSun.classList.toggle('hidden', isLight);
    this.themeIconMoon.classList.toggle('hidden', !isLight);

    this.themeBtnLabel.textContent = isLight 
      ? (this.currentLang === 'ar' ? 'الوضع الليلي' : 'DARK MODE') 
      : (this.currentLang === 'ar' ? 'الوضع النهاري' : 'LIGHT MODE');
  }

  // ========================================================================
  // 7. RENDERERS & UI SYNCHRONIZATION
  // ========================================================================

  renderDestinations() {
    this.destOptionsContainer.innerHTML = '';
    const lang = this.currentLang;

    Object.values(DESTINATIONS_DATA).forEach(dest => {
      const isSelected = dest.id === this.currentDestination.id;
      const card = document.createElement('div');
      card.className = `destination-radio-card ${isSelected ? 'active' : ''}`;
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      card.dataset.destId = dest.id;

      card.innerHTML = `
        <div class="dest-avatar">${dest.avatar}</div>
        <div class="dest-summary">
          <div class="dest-name-row">
            <span class="dest-card-title">${dest.name[lang]}</span>
            <span class="dest-distance">${dest.distanceKm[lang]}</span>
          </div>
          <span class="dest-card-sub">${dest.tag[lang]}</span>
          <div style="margin-top: 6px;">
            <button class="dest-specs-trigger-btn" data-dest-id="${dest.id}" type="button" aria-label="${lang === 'ar' ? 'عرض تفاصيل ' + dest.name[lang] : 'View specs for ' + dest.name[lang]}">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>${lang === 'ar' ? 'تفاصيل الوجهة' : 'Destination Specs'}</span>
            </button>
          </div>
        </div>
        <div class="dest-active-badge"></div>
      `;

      card.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.selectDestination(dest.id);
      });

      const specsBtn = card.querySelector('.dest-specs-trigger-btn');
      if (specsBtn) {
        specsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.soundEngine.playClick();
          this.openPlanetSpecsModal(dest.id);
        });
      }

      this.destOptionsContainer.appendChild(card);
    });

    this.updateDestinationProfileUI();
  }

  selectDestination(destId) {
    if (!DESTINATIONS_DATA[destId]) return;
    this.currentDestination = DESTINATIONS_DATA[destId];

    document.querySelectorAll('.destination-radio-card').forEach(c => {
      const active = c.dataset.destId === destId;
      c.classList.toggle('active', active);
      c.setAttribute('aria-checked', active ? 'true' : 'false');
    });

    this.updateDestinationProfileUI();
    this.renderEquipmentCatalog();
    this.updateDashboardMetrics();
    this.showToast(`${this.currentLang === 'ar' ? 'الهدف المختار:' : 'Target Set:'} ${this.currentDestination.name[this.currentLang]}`);
  }

  updateDestinationProfileUI() {
    const d = this.currentDestination;
    const lang = this.currentLang;

    this.destCategoryBadge.textContent = d.tag[lang];
    this.destPreviewName.textContent = d.name[lang];
    this.destPreviewDesc.textContent = d.description[lang];

    const fluxPercent = Math.round(d.solarFlux * 100);
    this.specSolarFlux.textContent = `${fluxPercent}% (${d.distanceAU} AU)`;
    this.specSolarNote.textContent = d.solarFlux < 0.2 
      ? (lang === 'ar' ? 'عجز شمسي شديد' : 'Severe solar deficit') 
      : (d.solarFlux < 0.6 ? (lang === 'ar' ? 'انخفاض شمسي ملحوظ' : 'Moderate solar drop') : (lang === 'ar' ? 'إشعاع كامل' : 'Full solar flux'));

    this.specCommsDelay.textContent = d.commsDelay[lang];
    this.specRadiation.textContent = d.radiationRisk[lang];
    this.specDeltaV.textContent = `${d.deltaVRequired} km/s`;
    this.destHazardText.textContent = `${lang === 'ar' ? 'ملاحظة السلامة:' : 'Mission Hazard Directive:'} ${d.hazardNote[lang]}`;
  }

  renderEquipmentCatalog() {
    this.hardwareListContainer.innerHTML = '';
    const lang = this.currentLang;

    HARDWARE_CATALOG_DATA.forEach(item => {
      const isSelected = this.selectedEquipmentIds.has(item.id);
      const card = document.createElement('div');
      card.className = `hardware-card ${isSelected ? 'selected' : ''}`;
      card.dataset.id = item.id;
      card.dataset.category = item.category;

      let powerMetricHtml = '';
      if (item.isSolar) {
        const effectiveGen = (item.basePowerGen * this.currentDestination.solarFlux).toFixed(2);
        powerMetricHtml = `<span class="spec-pill-label">${lang === 'ar' ? 'العائد الشمسي' : 'SOLAR YIELD'}</span><span class="spec-pill-val text-power">+${effectiveGen} kW</span>`;
      } else if (item.basePowerGen) {
        powerMetricHtml = `<span class="spec-pill-label">${lang === 'ar' ? 'توليد الطاقة' : 'POWER GEN'}</span><span class="spec-pill-val text-power">+${item.basePowerGen} kW</span>`;
      } else {
        const sign = item.powerReq > 0 ? `-${item.powerReq}` : (item.powerReq < 0 ? `+${Math.abs(item.powerReq)}` : '0');
        powerMetricHtml = `<span class="spec-pill-label">${lang === 'ar' ? 'استهلاك الطاقة' : 'POWER LOAD'}</span><span class="spec-pill-val ${item.powerReq > 0 ? 'text-cyan' : 'text-power'}">${sign} kW</span>`;
      }

      card.innerHTML = `
        <div class="hardware-card-top">
          <div class="hardware-icon-box">${item.icon}</div>
          <div class="hardware-title-box">
            <span class="hardware-category-tag">${item.categoryLabel[lang]}</span>
            <h4 class="hardware-name">${item.name[lang]}</h4>
          </div>
          <div class="custom-checkbox" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <p class="hardware-desc">${item.desc[lang]}</p>
        <div class="hardware-specs-row">
          <div class="spec-pill">
            <span class="spec-pill-label">${lang === 'ar' ? 'التكلفة' : 'COST'}</span>
            <span class="spec-pill-val text-cost">$${item.cost}M</span>
          </div>
          <div class="spec-pill">
            <span class="spec-pill-label">${lang === 'ar' ? 'الكتلة' : 'MASS'}</span>
            <span class="spec-pill-val text-mass">${item.mass} kg</span>
          </div>
          <div class="spec-pill">
            ${powerMetricHtml}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.toggleEquipment(item.id);
      });

      this.hardwareListContainer.appendChild(card);
    });

    this.filterEquipmentCards();
    this.selectedHardwareCountBadge.textContent = lang === 'ar' 
      ? `${this.selectedEquipmentIds.size} أجهزة مركبة` 
      : `${this.selectedEquipmentIds.size} Items Mounted`;
  }

  toggleEquipment(itemId) {
    this.soundEngine.playClick();
    if (this.selectedEquipmentIds.has(itemId)) {
      this.selectedEquipmentIds.delete(itemId);
    } else {
      this.selectedEquipmentIds.add(itemId);
    }

    const card = document.querySelector(`.hardware-card[data-id="${itemId}"]`);
    if (card) {
      card.classList.toggle('selected', this.selectedEquipmentIds.has(itemId));
    }

    this.selectedHardwareCountBadge.textContent = this.currentLang === 'ar' 
      ? `${this.selectedEquipmentIds.size} أجهزة مركبة` 
      : `${this.selectedEquipmentIds.size} Items Mounted`;

    this.updateDashboardMetrics();
  }

  filterEquipmentCards() {
    const cards = document.querySelectorAll('.hardware-card');
    cards.forEach(card => {
      const match = this.activeCategoryFilter === 'all' || card.dataset.category === this.activeCategoryFilter;
      card.style.display = match ? 'flex' : 'none';
    });
  }

  loadPreset(presetKey) {
    const presetIds = MISSION_PRESETS_DATA[presetKey];
    if (!presetIds) return;

    this.selectedEquipmentIds.clear();
    presetIds.forEach(id => this.selectedEquipmentIds.add(id));

    if (presetKey === 'artemis') this.selectDestination('moon');
    else if (presetKey === 'perseverance') this.selectDestination('mars');
    else if (presetKey === 'deep_space') this.selectDestination('psyche');
    else if (presetKey === 'europa_clipper') this.selectDestination('europa');

    this.renderEquipmentCatalog();
    this.updateDashboardMetrics();
    this.showToast(`${this.currentLang === 'ar' ? 'تم تطبيق القالب بنجاح' : 'Applied Template:'} ${this.presetSelect.options[this.presetSelect.selectedIndex].text}`);
  }

  // ========================================================================
  // 8. CONCURRENT ENGINEERING TRADE-OFF CALCULATOR
  // ========================================================================

  calculateMissionState() {
    const selectedHardware = HARDWARE_CATALOG_DATA.filter(h => this.selectedEquipmentIds.has(h.id));
    const dest = this.currentDestination;
    const lang = this.currentLang;

    let totalCost = 0;
    let totalMass = 0;
    let totalPowerGen = 0;
    let totalPowerReq = 0;
    let maxDeltaV = 0;
    let rawScienceYield = 0;
    let hasPropulsion = false;
    let hasScience = false;

    selectedHardware.forEach(item => {
      totalCost += item.cost;
      totalMass += item.mass;
      rawScienceYield += item.scienceYield || 0;

      if (item.category === 'science') hasScience = true;
      if (item.isPropulsion) {
        hasPropulsion = true;
        if (item.deltaVProvided && item.deltaVProvided > maxDeltaV) {
          maxDeltaV = item.deltaVProvided;
        }
      }

      if (item.isSolar) {
        totalPowerGen += item.basePowerGen * dest.solarFlux;
      } else if (item.basePowerGen) {
        totalPowerGen += item.basePowerGen;
      }

      if (item.powerReq) {
        if (item.powerReq > 0) {
          totalPowerReq += item.powerReq;
        } else {
          totalPowerGen += Math.abs(item.powerReq);
        }
      }
    });

    const netPower = totalPowerGen - totalPowerReq;
    const finalScienceScore = Math.round(rawScienceYield * dest.scienceMultiplier);

    const isCostOver = totalCost > dest.budgetLimit;
    const isMassOver = totalMass > dest.massLimit;
    const isPowerDeficit = (totalPowerReq > 0 || selectedHardware.length > 0) && netPower < -0.05;
    const isDeltaVDeficient = hasPropulsion && maxDeltaV < dest.deltaVRequired;

    let viability = 0;
    const issues = [];
    const passed = [];

    if (selectedHardware.length === 0) {
      issues.push(lang === 'ar' ? 'قم بتركيب المعدات لبدء فحص المركبة' : 'Mount subsystem equipment to begin design');
    } else {
      viability = 40;

      // Check 1: Propulsion
      if (!hasPropulsion) {
        issues.push(lang === 'ar' ? 'ينقصك نظام دفع رئيسي للمناورة المدارية' : 'Missing primary propulsion stage for orbital injection');
        viability -= 25;
      } else if (isDeltaVDeficient) {
        issues.push(lang === 'ar' ? `السرعة غير كافية (${maxDeltaV} مقابل المطلوب ${dest.deltaVRequired} km/s)` : `Delta-V insufficient (${maxDeltaV} km/s vs required ${dest.deltaVRequired} km/s)`);
        viability -= 20;
      } else {
        passed.push(lang === 'ar' ? `نظام الدفع معتمد ومناسب (${maxDeltaV} km/s ΔV)` : `Propulsion system certified (${maxDeltaV} km/s ΔV)`);
        viability += 20;
      }

      // Check 2: Science
      if (!hasScience) {
        issues.push(lang === 'ar' ? 'لا توجد أجهزة بحث علمي مثبتة على المركبة' : 'No primary scientific instruments installed');
        viability -= 15;
      } else {
        passed.push(lang === 'ar' ? `أجهزة البحث العلمي معتمدة (${finalScienceScore} نقطة متوقعة)` : `Science payload valid (${finalScienceScore} estimated points)`);
        viability += 15;
      }

      // Check 3: Power
      if (isPowerDeficit) {
        issues.push(lang === 'ar' ? `عجز كهربائي صافٍ بمقدار ${Math.abs(netPower).toFixed(2)} كيلوواط` : `Net electrical deficit of ${Math.abs(netPower).toFixed(2)} kW`);
        viability -= 30;
      } else if (totalPowerGen >= totalPowerReq && totalPowerGen > 0) {
        passed.push(lang === 'ar' ? `ميزان الطاقة مستقر (+${netPower.toFixed(2)} kW فائض احتياطي)` : `Power balance nominal (+${netPower.toFixed(2)} kW reserve)`);
        viability += 15;
      } else {
        issues.push(lang === 'ar' ? 'لا يوجد مصدر لتوليد الطاقة الكهربائية' : 'Zero active power generation installed');
        viability -= 20;
      }

      // Check 4: Budget
      if (isCostOver) {
        const excess = totalCost - dest.budgetLimit;
        issues.push(lang === 'ar' ? `تجاوز الميزانية بمقدار $${excess}M مليون دولار` : `Budget limit exceeded by $${excess}M`);
        viability -= 35;
      } else {
        const remainingBudget = dest.budgetLimit - totalCost;
        passed.push(lang === 'ar' ? `ضمن حدود الميزانية المعتمدة (فائض $${remainingBudget}M)` : `Within budget cap ($${remainingBudget}M margin)`);
        viability += 10;
      }

      // Check 5: Mass
      if (isMassOver) {
        const excessMass = totalMass - dest.massLimit;
        issues.push(lang === 'ar' ? `تجاوز سعة حمولة الصاروخ بمقدار ${excessMass} كجم` : `Launch vehicle mass capacity exceeded by ${excessMass} kg`);
        viability -= 40;
      } else {
        const remainingMass = dest.massLimit - totalMass;
        passed.push(lang === 'ar' ? `الكتلة ضمن قدرة الصاروخ (هامش حمولة ${remainingMass} كجم)` : `Payload mass within rocket limits (${remainingMass} kg margin)`);
        viability += 10;
      }
    }

    viability = Math.max(0, Math.min(100, Math.round(viability)));

    return {
      selectedHardware,
      totalCost,
      totalMass,
      totalPowerGen,
      totalPowerReq,
      netPower,
      finalScienceScore,
      maxDeltaV,
      hasPropulsion,
      hasScience,
      isCostOver,
      isMassOver,
      isPowerDeficit,
      isDeltaVDeficient,
      viability,
      issues,
      passed
    };
  }

  updateDashboardMetrics() {
    const state = this.calculateMissionState();
    const dest = this.currentDestination;
    const t = I18N[this.currentLang];
    const isAr = this.currentLang === 'ar';

    // 1. Budget Bar
    this.valBudgetCurrent.textContent = `$${state.totalCost}M`;
    this.valBudgetLimit.textContent = `$${dest.budgetLimit}M`;
    const budgetPct = Math.min(100, Math.round((state.totalCost / dest.budgetLimit) * 100));
    this.barBudgetFill.style.width = `${budgetPct}%`;
    this.pctBudgetText.textContent = `${budgetPct}%`;

    this.meterBudgetCard.classList.toggle('exceeded', state.isCostOver);
    this.barBudgetFill.classList.toggle('danger', state.isCostOver);
    this.barBudgetFill.classList.toggle('warning', !state.isCostOver && budgetPct >= 85);
    this.statusBudgetText.textContent = state.isCostOver 
      ? (isAr ? `تجاوز الميزانية: +$${state.totalCost - dest.budgetLimit}M` : `OVER BUDGET: +$${state.totalCost - dest.budgetLimit}M`) 
      : (isAr ? `المتبقي من الميزانية: $${dest.budgetLimit - state.totalCost}M` : `$${dest.budgetLimit - state.totalCost}M allocation remaining`);

    // 2. Mass Bar
    this.valMassCurrent.textContent = `${state.totalMass.toLocaleString()} kg`;
    this.valMassLimit.textContent = `${dest.massLimit.toLocaleString()} kg`;
    const massPct = Math.min(100, Math.round((state.totalMass / dest.massLimit) * 100));
    this.barMassFill.style.width = `${massPct}%`;
    this.pctMassText.textContent = `${massPct}%`;

    this.meterMassCard.classList.toggle('exceeded', state.isMassOver);
    this.barMassFill.classList.toggle('danger', state.isMassOver);
    this.barMassFill.classList.toggle('warning', !state.isMassOver && massPct >= 85);
    this.statusMassText.textContent = state.isMassOver 
      ? (isAr ? `تجاوز قدرة الصاروخ: +${state.totalMass - dest.massLimit} كجم` : `OVER MASS CAPACITY: +${state.totalMass - dest.massLimit} kg`) 
      : (isAr ? `سعة حمولة متوفرة: ${dest.massLimit - state.totalMass} كجم` : `${dest.massLimit - state.totalMass} kg lift margin available`);

    // 3. Power Bar
    this.valPowerGen.textContent = `${state.totalPowerGen.toFixed(2)} kW`;
    this.valPowerReq.textContent = `${state.totalPowerReq.toFixed(2)} kW`;
    const powerRatio = state.totalPowerReq > 0 
      ? Math.min(100, Math.round((state.totalPowerGen / state.totalPowerReq) * 100)) 
      : (state.totalPowerGen > 0 ? 100 : 0);
    this.barPowerFill.style.width = `${powerRatio}%`;
    this.pctPowerText.textContent = `${powerRatio}%`;

    this.meterPowerCard.classList.toggle('exceeded', state.isPowerDeficit);
    this.barPowerFill.classList.toggle('danger', state.isPowerDeficit);
    this.barPowerFill.classList.toggle('warning', !state.isPowerDeficit && powerRatio < 110 && powerRatio >= 95);
    this.statusPowerText.textContent = state.isPowerDeficit 
      ? (isAr ? `عجز كهربائي: -${Math.abs(state.netPower).toFixed(2)} kW` : `DEFICIT: -${Math.abs(state.netPower).toFixed(2)} kW`) 
      : (isAr ? `صافي الطاقة: +${state.netPower.toFixed(2)} kW فائض` : `Net Power: +${state.netPower.toFixed(2)} kW Surplus`);

    // 4. Viability Index & Science Score
    this.readinessScoreVal.textContent = `${state.viability}%`;
    this.sciencePointsVal.innerHTML = `${state.finalScienceScore} <small>${t.ptsSmall}</small>`;

    if (state.viability >= 80) {
      this.readinessVerdictPill.textContent = t.pillOptimal;
      this.readinessVerdictPill.className = 'readiness-verdict-pill optimal';
    } else if (state.viability >= 50) {
      this.readinessVerdictPill.textContent = t.pillWarning;
      this.readinessVerdictPill.className = 'readiness-verdict-pill warning';
    } else {
      this.readinessVerdictPill.textContent = state.selectedHardware.length === 0 ? t.pillNoHardware : t.pillCritical;
      this.readinessVerdictPill.className = 'readiness-verdict-pill critical';
    }

    // 5. Flight Readiness Directives Checklist
    this.flightChecksList.innerHTML = '';
    const allItems = [
      ...state.passed.map(msg => ({ text: msg, status: 'check-passed' })),
      ...state.issues.map(msg => ({ text: msg, status: 'check-failed' }))
    ];

    if (allItems.length === 0) {
      this.flightChecksList.innerHTML = `<li class="check-item check-pending">${isAr ? 'في انتظار إدخال البيانات...' : 'Awaiting configuration input...'}</li>`;
    } else {
      allItems.forEach(item => {
        const li = document.createElement('li');
        li.className = `check-item ${item.status}`;
        li.textContent = item.text;
        this.flightChecksList.appendChild(li);
      });
    }

    // 6. Launch Button Enable / Disable Logic
    const canLaunch = state.selectedHardware.length > 0 && !state.isCostOver && !state.isMassOver && !state.isPowerDeficit && state.hasPropulsion && state.hasScience;
    this.launchMissionBtn.disabled = !canLaunch;

    if (canLaunch) {
      this.launchSubLabel.textContent = `${t.lblLaunchReady} ${dest.name[this.currentLang]}`;
      this.launchSubLabel.style.color = '#00ff88';
    } else if (state.isCostOver || state.isMassOver || state.isPowerDeficit) {
      this.launchSubLabel.textContent = t.lblAbortSafety;
      this.launchSubLabel.style.color = '#ff2a5f';
    } else if (!state.hasPropulsion) {
      this.launchSubLabel.textContent = t.lblHoldPropulsion;
      this.launchSubLabel.style.color = '#ffb703';
    } else if (!state.hasScience) {
      this.launchSubLabel.textContent = t.lblHoldScience;
      this.launchSubLabel.style.color = '#ffb703';
    } else {
      this.launchSubLabel.textContent = t.lblAwaitingStatus;
      this.launchSubLabel.style.color = '';
    }

    // 7. Update Stepper Status Summaries & Step 3 Cockpit Manifest
    if (this.step1StatusSummary) {
      this.step1StatusSummary.textContent = isAr 
        ? `الهدف المختار: ${dest.name.ar} (${dest.distanceKm.ar})` 
        : `Target Selected: ${dest.name.en} (${dest.distanceKm.en})`;
    }

    if (this.step2SummaryStatus) {
      this.step2SummaryStatus.textContent = isAr
        ? `الأجهزة المركبة: ${state.selectedHardware.length} أنظمة | الميزانية: $${state.totalCost}M / $${dest.budgetLimit}M`
        : `Subsystems Mounted: ${state.selectedHardware.length} items | Budget: $${state.totalCost}M / $${dest.budgetLimit}M`;
    }

    if (this.step2ViabilityBadge) {
      this.step2ViabilityBadge.textContent = `${state.viability}%`;
      this.step2ViabilityBadge.style.color = state.viability >= 80 ? '#00ff88' : (state.viability >= 50 ? '#ffb703' : '#ff2a5f');
    }

    if (this.step2ScienceBadge) {
      this.step2ScienceBadge.textContent = `${state.finalScienceScore} ${t.ptsSmall}`;
    }

    if (this.cockpitTargetName) {
      this.cockpitTargetName.textContent = isAr 
        ? `الهدف: ${dest.name.ar}` 
        : `Target: ${dest.name.en}`;
    }

    if (this.cockpitBudgetVal) {
      this.cockpitBudgetVal.textContent = `$${state.totalCost}M / $${dest.budgetLimit}M`;
      this.cockpitBudgetVal.style.color = state.isCostOver ? '#ff2a5f' : '';
    }

    if (this.cockpitMassVal) {
      this.cockpitMassVal.textContent = `${state.totalMass.toLocaleString()} kg / ${dest.massLimit.toLocaleString()} kg`;
      this.cockpitMassVal.style.color = state.isMassOver ? '#ff2a5f' : '';
    }

    if (this.cockpitPowerVal) {
      this.cockpitPowerVal.textContent = `${state.netPower >= 0 ? '+' : ''}${state.netPower.toFixed(2)} kW (${state.totalPowerGen.toFixed(1)} gen / ${state.totalPowerReq.toFixed(1)} req)`;
      this.cockpitPowerVal.style.color = state.isPowerDeficit ? '#ff2a5f' : '#00ff88';
    }

    if (this.cockpitScienceVal) {
      this.cockpitScienceVal.textContent = `${state.finalScienceScore} ${t.ptsSmall}`;
    }

    if (this.cockpitAiDiagnostic) {
      if (canLaunch) {
        this.cockpitAiDiagnostic.innerHTML = isAr
          ? `🟢 <strong>الأنظمة معتمدة وجاهزة 100%:</strong> تم استيفاء موازنة الدفع والطاقة والكتلة والميزانية للرحلة إلى ${dest.name.ar}. اضغط على "إطلاق محاكاة المهمة الفضائية" للبدء.`
          : `🟢 <strong>Systems GO for Launch:</strong> All aerospace trade-offs are balanced for ${dest.name.en}. Press Initiate Launch Simulation to proceed with T-minus ignition.`;
      } else if (state.isCostOver) {
        this.cockpitAiDiagnostic.innerHTML = isAr
          ? `🔴 <strong>تجاوز الميزانية:</strong> المهمة تتجاوز السقف بـ $${state.totalCost - dest.budgetLimit}M مليون دولار. ارجع للخطوة 2 وأزل بعض الأجهزة المكلفة.`
          : `🔴 <strong>Budget Cap Exceeded:</strong> Over allocated budget envelope by $${state.totalCost - dest.budgetLimit}M. Return to Step 2 to remove high-cost hardware.`;
      } else if (state.isMassOver) {
        this.cockpitAiDiagnostic.innerHTML = isAr
          ? `🔴 <strong>تجاوز كتلة الصاروخ:</strong> تجاوزت الحمولة بـ ${state.totalMass - dest.massLimit} كجم. ارجع للخطوة 2 وخفف من كتلة الأجهزة.`
          : `🔴 <strong>Launch Mass Exceeded:</strong> Over rocket lift capacity by ${state.totalMass - dest.massLimit} kg. Return to Step 2 to reduce payload mass.`;
      } else if (state.isPowerDeficit) {
        this.cockpitAiDiagnostic.innerHTML = isAr
          ? `🔴 <strong>عجز في الطاقة الكهربائية:</strong> لديك عجز بمقدار ${Math.abs(state.netPower).toFixed(2)} kW. ${dest.solarFlux < 0.2 ? 'الألواح الشمسية ضعيفة هنا، ركب RTG أو مفاعلاً نووياً.' : 'ركب ألواحاً شمسية أو بطاريات إضافية.'}`
          : `🔴 <strong>Electrical Power Deficit:</strong> Power shortfall of ${Math.abs(state.netPower).toFixed(2)} kW. ${dest.solarFlux < 0.2 ? 'Solar panels starve at this distance; install an RTG or Kilopower Reactor.' : 'Install UltraFlex arrays or battery buffers.'}`;
      } else if (!state.hasPropulsion) {
        this.cockpitAiDiagnostic.innerHTML = isAr
          ? `🟡 <strong>غياب نظام الدفع:</strong> المركبة تحتاج لمحرك دفع رئيسي للحقن المداري. ارجع للخطوة 2 واختر محرك دفع هيدروكس أو أيوني.`
          : `🟡 <strong>Propulsion Missing:</strong> Spacecraft lacks orbital insertion propulsion. Return to Step 2 and equip a Chemical or Ion thruster.`;
      } else if (!state.hasScience) {
        this.cockpitAiDiagnostic.innerHTML = isAr
          ? `🟡 <strong>غياب الأجهزة العلمية:</strong> مهمتك لن تجمع أي بيانات بحثية! ارجع للخطوة 2 واختر مطيافاً أو راداراً علمياً.`
          : `🟡 <strong>Science Payload Missing:</strong> Spacecraft will return zero science yield! Equip at least one science instrument in Step 2.`;
      }
    }

    if (this.step3FooterStatus) {
      this.step3FooterStatus.textContent = canLaunch
        ? (isAr ? 'مركبة الفضاء جاهزة للإطلاق المباشر' : 'Spacecraft Certified for Orbital Launch')
        : (isAr ? 'يوجد قيود هندسية غير مستوفاة' : 'Pre-Flight Directives Pending Resolution');
    }
  }

  // ========================================================================
  // 9. EMBEDDED NASA AI MISSION ASSISTANT (CHATGPT-STYLE REASONING)
  // ========================================================================

  initAIChatbot() {
    this.appendAIMessage(I18N[this.currentLang].aiWelcomeMsg, 'advisor');
  }

  handleQuickPrompt(promptKey) {
    const isAr = this.currentLang === 'ar';
    let userText = '';

    if (promptKey === 'analyze') {
      userText = isAr ? 'حلل إعداداتي الحالية للمهمة' : 'Analyze my current mission configuration';
    } else if (promptKey === 'power') {
      userText = isAr ? 'كيف أحل مشكلة عجز الطاقة الكهربائية؟' : 'How can I fix my electrical power deficit?';
    } else if (promptKey === 'destination') {
      userText = isAr ? `ما هي النصائح الهندسية لمهمة ${this.currentDestination.name.ar}؟` : `What engineering tips do you have for ${this.currentDestination.name.en}?`;
    } else if (promptKey === 'budget') {
      userText = isAr ? 'كيف أحقق أعلى عائد علمي بأفضل ميزانية؟' : 'How can I maximize my Science ROI within budget?';
    }

    this.handleUserChatMessage(userText, promptKey);
  }

  handleUserChatMessage(userText, intentHint = null) {
    this.appendAIMessage(userText, 'user');
    this.showAITypingIndicator();

    setTimeout(() => {
      this.removeAITypingIndicator();
      const aiReply = this.generateAIResponse(userText, intentHint);
      this.appendAIMessage(aiReply, 'advisor');
    }, 600);
  }

  generateAIResponse(query, intentHint) {
    const state = this.calculateMissionState();
    const dest = this.currentDestination;
    const isAr = this.currentLang === 'ar';
    const q = query.toLowerCase();

    // 1. Analyze Setup Intent
    if (intentHint === 'analyze' || q.includes('analyze') || q.includes('setup') || q.includes('حلل') || q.includes('فحص') || q.includes('إعداد')) {
      return this.generateSetupAnalysisReport(state, dest, isAr);
    }

    // 2. Power Question
    if (intentHint === 'power' || q.includes('power') || q.includes('طاقة') || q.includes('كهرباء') || q.includes('deficit') || q.includes('solar')) {
      if (dest.solarFlux < 0.2) {
        return isAr 
          ? `⚠️ **تحذير فيزيائي حاسم لمهمة ${dest.name.ar}:**<br>بسبب بعد الوجهة عن الشمس (${dest.distanceAU} وحدة فلكية)، ينخفض الإشعاع الشمسي لـ **${Math.round(dest.solarFlux * 100)}%** فقط!<br>الألواح الشمسية تكاد تكون عديمة الفائدة هنا. أنصحك باستبدالها بـ **بطارية البلوتونيوم الذرية (RTG)** أو **مفاعل كيلوباور النووي** لضمان طاقة مستمرة لا تعتمد على الشمس.`
          : `⚠️ **Critical Solar Physics Alert for ${dest.name.en}:**<br>Due to the distance from the Sun (${dest.distanceAU} AU), solar irradiance drops by the 1/r² law to just **${Math.round(dest.solarFlux * 100)}%**!<br>Standard solar panels suffer heavy starvation here. I recommend equipping the **Plutonium-238 RTG** or **Kilopower Fission Reactor** to provide constant, solar-independent wattage.`;
      }
      return isAr
        ? `⚡ **إرشادات ميزان الطاقة:**<br>صافي الطاقة الحالي: **${state.netPower >= 0 ? '+' : ''}${state.netPower.toFixed(2)} kW**.<br>• إذا كنت تعاني من عجز، ركّب **مصفوفة ألواح الترافليكس الشمسية** أو **بطارية الليثيوم والكبريت** كمنظم أحمال.<br>• احذر: محركات الدفع الأيوني تستهلك 3.2 kW بمفردها!`
        : `⚡ **Power Balance Directive:**<br>Current Net Power: **${state.netPower >= 0 ? '+' : ''}${state.netPower.toFixed(2)} kW**.<br>• If you have a deficit, mount the **UltraFlex Solar Array** or **Li-S Battery Buffer** for load leveling.<br>• Note: NEXT-C Ion Thrusters draw a continuous 3.2 kW!`;
    }

    // 3. Destination Advice
    if (intentHint === 'destination' || q.includes('mars') || q.includes('moon') || q.includes('europa') || q.includes('psyche') || q.includes('مريخ') || q.includes('قمر') || q.includes('أوروبا') || q.includes('سايكي')) {
      return isAr
        ? `🪐 **نصائح مخصصة لوجهة (${dest.name.ar}):**<br>• السرعة المطلوبة (ΔV): **${dest.deltaVRequired} km/s**.<br>• أهم المخاطر: **${dest.hazardNote.ar}**.<br>• دروع مقترحة: تأكد من تزويد المركبة بدرع **ويبل** ضد الحطام ودرع **البولي إيثيلين** أو **المغناطيسي** ضد الإشعاع الكوني.`
        : `🪐 **Target Profile for (${dest.name.en}):**<br>• Required Injection ΔV: **${dest.deltaVRequired} km/s**.<br>• Primary Threat: **${dest.hazardNote.en}**.<br>• Protection Checklist: Ensure you mount **Whipple Shielding** against micrometeoroids and **Polyethylene Vault** or **Magnetic Deflector** for radiation survivability.`;
    }

    // 4. Budget / ROI Advice
    if (intentHint === 'budget' || q.includes('budget') || q.includes('cost') || q.includes('ميزانية') || q.includes('تكلفة') || q.includes('roi') || q.includes('عائد')) {
      const budgetLeft = dest.budgetLimit - state.totalCost;
      return isAr
        ? `💰 **تحسين الميزانية والعائد العلمي:**<br>الميزانية المتبقية لديك: **$${budgetLeft}M مليون دولار**.<br>• لتحقيق أعلى عائد علمي بأفضل سعر، ادمج **منظومة الاتصالات الليزرية (DSOC)** مع **طائرة الاستطلاع الجوي** لرفع النقاط إلى أقصى حد ممكن.`
        : `💰 **Budget & Scientific ROI Strategy:**<br>Your remaining budget: **$${budgetLeft}M**.<br>• To maximize science per dollar, pair the **Deep Space Optical Laser Comms (DSOC)** (+30 science) with the **Scout Drone** for high-efficiency multipliers.`;
    }

    // Default Fallback
    return isAr
      ? `👨‍🚀 مرحباً بك! بصفتي مستشارك الذكي في ناسا، قمت بفحص بيانات مركبتك:<br>الكتلة الحالية: **${state.totalMass} kg** | الميزانية: **$${state.totalCost}M** | الجاهزية: **${state.viability}%**.<br>اضغط على أحد الأزرار السريعة أعلاه لأزودك بتشخيص هندسي فوري ودقيق!`
      : `👨‍🚀 Greetings Commander! As your NASA AI Advisor, I am monitoring your telemetry:<br>Mass: **${state.totalMass} kg** | Budget: **$${state.totalCost}M** | Viability: **${state.viability}%**.<br>Click any quick prompt above or ask specifically about subsystems, delta-V, or space weather!`;
  }

  generateSetupAnalysisReport(state, dest, isAr) {
    const findings = [];
    const recommendations = [];

    if (state.selectedHardware.length === 0) {
      return isAr 
        ? '⚠️ لم تقم بتركيب أي أجهزة بعد! ابدأ باختيار محرك دفع ونظام طاقة وأجهزة بحث علمي من اللوحة الوسطى.'
        : '⚠️ No equipment mounted yet! Start by selecting a propulsion system, power source, and science instrument from the center panel.';
    }

    // Budget Analysis
    if (state.isCostOver) {
      findings.push(isAr ? `❌ **تجاوز الميزانية:** المركبة تجاوزت سقف الميزانية بـ $${state.totalCost - dest.budgetLimit}M مليون!` : `❌ **Budget Breach:** Over budget limit by $${state.totalCost - dest.budgetLimit}M!`);
      recommendations.push(isAr ? 'استبدل بعض الأنظمة باهظة الثمن بأنظمة بديلة أخف تكلفة.' : 'Downgrade high-cost systems to meet NASA Discovery/New Frontiers caps.');
    } else {
      findings.push(isAr ? `✅ **الميزانية:** ممتازة (فائض $${dest.budgetLimit - state.totalCost}M).` : `✅ **Budget:** Nominal ($${dest.budgetLimit - state.totalCost}M buffer).`);
    }

    // Mass Analysis
    if (state.isMassOver) {
      findings.push(isAr ? `❌ **الكتلة زائدة:** حمولة الصاروخ تجاوزت الحد بـ ${state.totalMass - dest.massLimit} كجم!` : `❌ **Mass Excess:** Launch vehicle capacity exceeded by ${state.totalMass - dest.massLimit} kg!`);
      recommendations.push(isAr ? 'قلل من الأجهزة الثقيلة كالدروع المزدوجة لتتمكن المركبة من الإقلاع.' : 'Remove heavy hardware to keep payload within rocket lift limits.');
    } else {
      findings.push(isAr ? `✅ **الكتلة:** ضمن قدرة الصاروخ (${dest.massLimit - state.totalMass} كجم متوفرة).` : `✅ **Mass:** Nominal (${dest.massLimit - state.totalMass} kg margin).`);
    }

    // Power Analysis
    if (state.isPowerDeficit) {
      findings.push(isAr ? `❌ **عجز كهربائي:** المركبة تستهلك أكثر مما تولد بـ ${Math.abs(state.netPower).toFixed(2)} kW!` : `❌ **Power Deficit:** Electrical shortage of ${Math.abs(state.netPower).toFixed(2)} kW!`);
      recommendations.push(isAr ? 'أضف بطارية RTG ذرية أو مصفوفة ألواح شمسية إضافية.' : 'Equip an auxiliary RTG or battery buffer immediately.');
    } else {
      findings.push(isAr ? `✅ **الطاقة:** متوازنة (+${state.netPower.toFixed(2)} kW فائض).` : `✅ **Power:** Stable (+${state.netPower.toFixed(2)} kW surplus).`);
    }

    // Propulsion & Delta-V
    if (!state.hasPropulsion) {
      findings.push(isAr ? '❌ **المحركات:** لا يوجد محرك دفع رئيسي للحقن المداري.' : '❌ **Propulsion:** Missing primary propulsion stage.');
      recommendations.push(isAr ? 'اختر محرك هيدروكسي أو محرك أيوني لتوفير السرعة المطلوبة.' : 'Equip Hydrolox or NEXT-C Ion propulsion to meet mission ΔV.');
    }

    let report = isAr 
      ? `📋 **تقرير الفحص الهندسي المباشر (${dest.name.ar}):**<br>` 
      : `📋 **Live Engineering Telemetry Audit (${dest.name.en}):**<br>`;

    report += findings.join('<br>') + '<br><br>';

    if (recommendations.length > 0) {
      report += (isAr ? '💡 **توصيات كبير المهندسين:**<br>' : '💡 **Chief Engineer Directives:**<br>');
      report += '• ' + recommendations.join('<br>• ');
    } else {
      report += (isAr 
        ? '🌟 **مركبتك مكتملة هندسياً وجاهزة للإطلاق فوراً بأعلى درجات الأمان!**' 
        : '🌟 **Your spacecraft is fully certified and flight-ready with excellent safety margins!**');
    }

    return report;
  }

  appendAIMessage(text, sender = 'advisor') {
    const div = document.createElement('div');
    div.className = `ai-msg ${sender}`;
    div.innerHTML = text;
    this.aiChatBody.appendChild(div);
    this.aiChatBody.scrollTop = this.aiChatBody.scrollHeight;
  }

  showAITypingIndicator() {
    this.isAdvisorTyping = true;
    const indicator = document.createElement('div');
    indicator.className = 'ai-typing-indicator';
    indicator.id = 'ai-typing-indicator';
    indicator.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    this.aiChatBody.appendChild(indicator);
    this.aiChatBody.scrollTop = this.aiChatBody.scrollHeight;
  }

  removeAITypingIndicator() {
    this.isAdvisorTyping = false;
    const indicator = document.getElementById('ai-typing-indicator');
    if (indicator) indicator.remove();
  }

  // ========================================================================
  // 10. LAUNCH SEQUENCE SIMULATION & SPACE WEATHER ENGINE
  // ========================================================================

  startLaunchSimulation() {
    this.isLaunching = true;
    const missionState = this.calculateMissionState();
    const dest = this.currentDestination;
    const isAr = this.currentLang === 'ar';

    this.launchModal.classList.remove('hidden');
    this.telemetryLogContent.innerHTML = '';
    this.weatherAlertBox.classList.add('hidden');

    this.soundEngine.init();

    this.logTelemetry(isAr ? 'بدء فحص محطات الإطلاق... جميع المحطات موافقة GO' : 'INITIATING FLIGHT DIRECTOR POLL... ALL STATIONS GO', 'nominal');
    this.logTelemetry(`${isAr ? 'المسار المستهدف:' : 'TARGET TRAJECTORY:'} ${dest.name[this.currentLang]}`, 'nominal');
    this.logTelemetry(`${isAr ? 'كتلة الصاروخ عند الإقلاع:' : 'INITIAL LAUNCH VEHICLE MASS:'} ${missionState.totalMass} kg`, 'nominal');

    // Draw static launchpad view before liftoff
    this.drawLaunchPadStatic();

    let secondsLeft = 3;
    this.countdownTimer.className = 'countdown-digits pulsing';
    this.countdownTimer.textContent = '3';
    this.launchStageDesc.textContent = isAr ? 'اشتعال المحرك وبناء قوة الدفع (T-3)' : 'TERMINAL COUNTDOWN & ENGINE CHILL (T-3)';
    this.soundEngine.playCountdownBeep(false);

    const countdownInterval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft > 0) {
        this.countdownTimer.classList.remove('pulsing');
        void this.countdownTimer.offsetWidth; // Force CSS reflow for pulse animation
        this.countdownTimer.classList.add('pulsing');
        this.countdownTimer.textContent = `${secondsLeft}`;
        this.soundEngine.playCountdownBeep(false);

        if (secondsLeft === 2) {
          this.launchStageDesc.textContent = isAr ? 'بناء الاندفاع وفحص ضغط المحركات (T-2)' : 'PROPULSION AT 100% THRUST • ALL GREEN (T-2)';
          this.logTelemetry(isAr ? 'T-00:02 اشتعال المحركات الرئيسية وبناء أقصى دفع' : 'T-00:02 MAIN PROPULSION SYSTEM AT 100% THRUST', 'nominal');
        } else if (secondsLeft === 1) {
          this.launchStageDesc.textContent = isAr ? 'التحول للطاقة الذاتية وفك مشابك البرج (T-1)' : 'INTERNAL POWER TRANSFER • RELEASE CLAMPS (T-1)';
          this.logTelemetry(isAr ? 'T-00:01 تحول المركبة إلى الطاقة الداخلية' : 'T-00:01 VEHICLE ON INTERNAL POWER. RELEASE CLAMPS', 'nominal');
        }
      } else {
        clearInterval(countdownInterval);
        this.countdownTimer.classList.remove('pulsing');
        this.countdownTimer.classList.add('liftoff');
        this.countdownTimer.textContent = isAr ? '🚀 انطلاق!' : '🚀 LIFTOFF!';
        this.launchStageDesc.textContent = isAr ? 'انطلاق الصاروخ! أقصى ضغط ديناميكي (MAX-Q)' : 'LIFTOFF! MAXIMUM DYNAMIC PRESSURE (MAX-Q)';
        
        this.soundEngine.playCountdownBeep(true);
        this.soundEngine.playRocketRoar(3.5);
        this.logTelemetry(isAr ? 'T+00:00 انطلاق الصاروخ! تأكيد الإقلاع بنجاح والابتعاد عن البرج' : 'T+00:00 LIFTOFF! WE HAVE LIFTOFF OF THE MISSION!', 'nominal');

        // Start orbital trajectory animation at liftoff
        this.startLaunchCanvasAnimation();

        setTimeout(() => {
          this.countdownTimer.classList.remove('liftoff');
          this.countdownTimer.textContent = isAr ? 'عبور' : 'TRANSIT';
          this.launchStageDesc.textContent = isAr ? 'تحقيق مسار الإفلات ودخول الفضاء العميق' : 'DEEP SPACE ESCAPE TRAJECTORY ACHIEVED';
          this.logTelemetry(isAr ? 'T+00:03 تأكيد الدخول في المسار المداري وبدء مرحلة الطيران' : 'T+00:03 ORBITAL INSERTION CONFIRMED. ENTERING CRUISE PHASE', 'nominal');

          setTimeout(() => {
            this.simulateDeepSpaceEncounter(missionState);
          }, 800);
        }, 1400);
      }
    }, 1000);
  }

  drawLaunchPadStatic() {
    const canvas = this.launchTrajectoryCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Earth curve
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height + 400, 500, 0, Math.PI * 2);
    ctx.fillStyle = '#0b3d91';
    ctx.fill();
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Atmospheric glow gradient
    const atmosGrad = ctx.createLinearGradient(0, canvas.height - 40, 0, canvas.height);
    atmosGrad.addColorStop(0, 'rgba(0, 243, 255, 0.4)');
    atmosGrad.addColorStop(1, 'rgba(11, 61, 145, 0)');
    ctx.fillStyle = atmosGrad;
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

    const isRtl = this.currentLang === 'ar';
    const startX = isRtl ? canvas.width - 60 : 60;
    const startY = canvas.height - 30;

    // Rocket Marker on launchpad
    ctx.beginPath();
    ctx.arc(startX, startY, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#fc3d21';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(startX, startY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }

  startLaunchCanvasAnimation() {
    const canvas = this.launchTrajectoryCanvas;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    const maxFrames = 180;

    const animateLaunch = () => {
      if (!this.isLaunching) return;

      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Earth curve
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height + 400, 500, 0, Math.PI * 2);
      ctx.fillStyle = '#0b3d91';
      ctx.fill();
      ctx.strokeStyle = '#00f3ff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Atmospheric glow gradient
      const atmosGrad = ctx.createLinearGradient(0, canvas.height - 40, 0, canvas.height);
      atmosGrad.addColorStop(0, 'rgba(0, 243, 255, 0.4)');
      atmosGrad.addColorStop(1, 'rgba(11, 61, 145, 0)');
      ctx.fillStyle = atmosGrad;
      ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

      const progress = Math.min(1, frame / maxFrames);
      const isRtl = this.currentLang === 'ar';
      const startX = isRtl ? canvas.width - 60 : 60;
      const startY = canvas.height - 30;
      const endX = isRtl ? 60 : canvas.width - 60;
      const endY = 40;

      const currentX = startX + (endX - startX) * progress;
      const currentY = startY - Math.sin((progress * Math.PI) / 2) * (startY - endY);

      // Trajectory Line
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(startX + (isRtl ? -80 : 80), startY - 20, currentX, currentY);
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.6)';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Rocket Marker
      ctx.beginPath();
      ctx.arc(currentX, currentY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fc3d21';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Exhaust Tail
      ctx.beginPath();
      ctx.arc(currentX + (isRtl ? 8 : -8) * (1 - progress * 0.4), currentY + 6 * (1 - progress * 0.4), 4 + Math.random() * 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffb703';
      ctx.fill();

      if (frame < maxFrames + 60) {
        requestAnimationFrame(animateLaunch);
      }
    };

    requestAnimationFrame(animateLaunch);
  }

  logTelemetry(msg, type = 'nominal') {
    const p = document.createElement('div');
    p.className = `log-entry`;

    const now = new Date();
    const timeStr = `${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(Math.floor(now.getMilliseconds() / 100))}`;

    p.innerHTML = `
      <span class="log-time">[${timeStr}]</span>
      <span class="log-msg ${type}">${msg}</span>
    `;

    this.telemetryLogContent.appendChild(p);
    this.telemetryLogContent.scrollTop = this.telemetryLogContent.scrollHeight;
  }

  simulateDeepSpaceEncounter(missionState) {
    const event = this.selectSpaceWeatherEvent();
    const isAr = this.currentLang === 'ar';
    
    const countersMounted = new Set();
    missionState.selectedHardware.forEach(h => {
      if (h.counters) {
        h.counters.forEach(c => countersMounted.add(c));
      }
    });

    const isDefended = event.counterRequired.some(req => countersMounted.has(req));

    this.weatherAlertBox.classList.remove('hidden');
    this.weatherEventTitle.textContent = event.title[this.currentLang];
    this.weatherEventDesc.textContent = event.desc[this.currentLang];

    if (isDefended) {
      this.weatherDefenseTag.textContent = isAr ? 'تم تفعيل الدروع: الأنظمة تعمل بكفاءة' : 'COUNTERMEASURE EFFECTIVE: SHIELDING NOMINAL';
      this.weatherDefenseTag.style.borderColor = '#00ff88';
      this.weatherDefenseTag.style.color = '#00ff88';
      this.logTelemetry(`${isAr ? '[تنبيه]' : '[ALERT]'} ${event.title[this.currentLang]}`, 'warning');
      this.logTelemetry(isAr ? 'الدروع الواقية تصدت للخطر بنجاح تام.' : 'PROTECTION SYSTEMS OPERATIONAL. DEFLECTING RADIATION FLUX.', 'nominal');
    } else {
      this.weatherDefenseTag.textContent = isAr ? 'تم اختراق الدروع: تضرر بعض الأجهزة' : 'COUNTERMEASURE BREACHED: SYSTEM COMPROMISED';
      this.weatherDefenseTag.style.borderColor = '#ff2a5f';
      this.weatherDefenseTag.style.color = '#ff2a5f';
      this.soundEngine.playAlarmSound();
      this.logTelemetry(`${isAr ? '[خطر حرج]' : '[CRITICAL]'} ${event.title[this.currentLang]}`, 'danger');
      this.logTelemetry(event.failMessage[this.currentLang], 'danger');
    }

    setTimeout(() => {
      this.concludeSimulation(missionState, event, isDefended);
    }, 2400);
  }

  selectSpaceWeatherEvent() {
    const dest = this.currentDestination;
    if (dest.id === 'europa') return SPACE_WEATHER_EVENTS_DATA[0];
    if (dest.id === 'psyche') return SPACE_WEATHER_EVENTS_DATA[1];
    if (dest.id === 'moon') return SPACE_WEATHER_EVENTS_DATA[2];
    return SPACE_WEATHER_EVENTS_DATA[Math.floor(Math.random() * SPACE_WEATHER_EVENTS_DATA.length)];
  }

  // ========================================================================
  // 11. POST-MISSION DEBRIEF REPORT GENERATOR
  // ========================================================================

  concludeSimulation(missionState, event, isDefended) {
    this.isLaunching = false;
    this.launchModal.classList.add('hidden');

    const dest = this.currentDestination;
    const isAr = this.currentLang === 'ar';

    let finalScore = missionState.viability;
    if (!isDefended) {
      finalScore -= event.penaltySuccess;
    }
    finalScore = Math.max(10, Math.min(100, finalScore));

    let outcomeTier = 'A';
    let grade = 'A+';
    let outcomeTitle = isAr ? 'نجاح المهمة: الوصول للمدار المستهدف' : 'MISSION ACCOMPLISHED: TARGET ORBIT ACHIEVED';
    let outcomeIcon = '🏆';
    let heroClass = 'success';

    if (finalScore >= 90) {
      outcomeTier = 'S';
      grade = 'S';
      outcomeTitle = isAr ? 'نجاح استثنائي: تحقيق اكتشافات علمية خارقة' : 'EXEMPLARY SUCCESS: BREAKTHROUGH SCIENCE RETURN';
      outcomeIcon = '🌟';
      heroClass = 'success';
      this.soundEngine.playSuccessFanfare();
    } else if (finalScore >= 75) {
      outcomeTier = 'A';
      grade = 'A';
      outcomeTitle = isAr ? 'اكتملت المهمة بنجاح وفق الخطة' : 'MISSION ACCOMPLISHED: OBJECTIVES MET';
      outcomeIcon = '🏆';
      heroClass = 'success';
      this.soundEngine.playSuccessFanfare();
    } else if (finalScore >= 50) {
      outcomeTier = 'B';
      grade = 'B-';
      outcomeTitle = isAr ? 'نجاح جزئي مع فقدان بعض البيانات' : 'PARTIAL MISSION SUCCESS: DEGRADED TELEMETRY';
      outcomeIcon = '⚠️';
      heroClass = 'failure';
    } else {
      outcomeTier = 'F';
      grade = 'F';
      outcomeTitle = isAr ? 'فشل حرج: فقدان المركبة الفضائية' : 'CRITICAL MISSION LOSS: VEHICLE FAILURE';
      outcomeIcon = '💥';
      heroClass = 'failure';
      this.soundEngine.playAlarmSound();
    }

    this.debriefHeroBanner.className = `debrief-hero ${heroClass}`;
    this.debriefIcon.textContent = outcomeIcon;
    this.debriefTitle.textContent = outcomeTitle;
    this.debriefDestLine.textContent = isAr 
      ? `الوجهة: ${dest.name.ar} • التقييم النهائي: ${finalScore}%` 
      : `Destination: ${dest.name.en} • Final Viability Rating: ${finalScore}%`;
    this.debriefGrade.textContent = grade;

    // Metrics
    this.debriefBudgetVal.textContent = `$${missionState.totalCost}M`;
    const budgetPctRemaining = Math.round(((dest.budgetLimit - missionState.totalCost) / dest.budgetLimit) * 100);
    this.debriefBudgetMargin.textContent = `${budgetPctRemaining >= 0 ? '+' : ''}${budgetPctRemaining}% ${isAr ? 'فائض' : 'Reserve'}`;

    this.debriefMassVal.textContent = `${missionState.totalMass} kg`;
    const massMarginKg = dest.massLimit - missionState.totalMass;
    this.debriefMassMargin.textContent = `${massMarginKg} kg ${isAr ? 'هامش حمولة' : 'Launch Margin'}`;

    this.debriefPowerVal.textContent = `${missionState.netPower >= 0 ? '+' : ''}${missionState.netPower.toFixed(2)} kW`;
    this.debriefPowerMargin.textContent = missionState.netPower >= 0 ? (isAr ? 'فائض كهربائي مستقر' : 'Operating nominal') : (isAr ? 'عجز في الطاقة' : 'Operating in deficit');

    const finalScienceReturned = isDefended ? missionState.finalScienceScore : Math.round(missionState.finalScienceScore * 0.4);
    this.debriefScienceVal.textContent = `${finalScienceReturned} ${isAr ? 'نقطة' : 'pts'}`;
    this.debriefScienceRatio.textContent = `${Math.round((finalScienceReturned / (missionState.totalCost || 1)) * 100)} pts / $100M`;

    // Narrative Text
    let narrativeHtml = isAr ? `
      <p><strong>ملخص الرحلة:</strong> نجحت المركبة الفضائية في دخول المسار الانتقالي الموجه نحو <em>${dest.name.ar}</em> بكتلة إجمالية بلغت <strong>${missionState.totalMass} كجم</strong> وبتكلفة <strong>$${missionState.totalCost}M مليون دولار</strong>.</p>
    ` : `
      <p><strong>FLIGHT SUMMARY:</strong> Spacecraft successfully entered transfer corridor targeting <em>${dest.name.en}</em> with a launch mass of <strong>${missionState.totalMass} kg</strong> ($${missionState.totalCost}M envelope).</p>
    `;

    if (dest.solarFlux < 0.3) {
      narrativeHtml += isAr ? `
        <p><strong>فيزياء الإشعاع الشمسي (قانون التربيع العكسي 1/r²):</strong> على بعد <em>${dest.distanceAU} وحدة فلكية</em> من الشمس، تبلغ كثافة الطاقة الشمسية <strong>${Math.round(dest.solarFlux * 100)}%</strong> فقط مقارنة بمدار الأرض. ولدت أنظمتك ${missionState.totalPowerGen.toFixed(2)} kW مقابل ${missionState.totalPowerReq.toFixed(2)} kW استهلاك.</p>
      ` : `
        <p><strong>SOLAR IRRADIANCE (1/r² LAW):</strong> At <em>${dest.distanceAU} AU</em> from the Sun, solar energy density is only <strong>${Math.round(dest.solarFlux * 100)}%</strong> of Earth orbit. Selected power systems generated ${missionState.totalPowerGen.toFixed(2)} kW vs ${missionState.totalPowerReq.toFixed(2)} kW load.</p>
      `;
    }

    if (isDefended) {
      narrativeHtml += isAr ? `
        <p><strong>مواجهة الطقس الفضائي:</strong> تعرضت المركبة لظاهرة <em>${event.title.ar}</em>. بفضل الدروع والمعدات الدفاعية المركبة، استمرت جميع الأجهزة العلمية وإلكترونيات الطيران بالعمل بشكل طبيعي.</p>
      ` : `
        <p><strong>SPACE WEATHER ENCOUNTER:</strong> Encountered <em>${event.title.en}</em> during cruise. Due to installed defense hardware, all critical avionics and scientific payloads continued nominal operations.</p>
      `;
    } else {
      narrativeHtml += isAr ? `
        <p class="text-danger"><strong>تقرير العطل والخلل:</strong> تعرضت المركبة لـ <em>${event.title.ar}</em> بدون توفر الدروع المطلوبة، مما أسفر عن: <em>${event.failMessage.ar}</em></p>
      ` : `
        <p class="text-danger"><strong>ANOMALY POST-MORTEM:</strong> Encountered <em>${event.title.en}</em> without required countermeasures. Resulted in: <em>${event.failMessage.en}</em></p>
      `;
    }

    this.debriefNarrative.innerHTML = narrativeHtml;

    // Weather Debrief Card
    this.weatherDebriefSummary.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-family: var(--font-data); font-weight: 700; color: var(--cyan-neon);">${isAr ? 'الظاهرة الفضائية المواجهة:' : 'ENCOUNTERED PHENOMENON:'} ${event.title[this.currentLang]}</span>
        <span style="font-family: var(--font-data); font-size: 0.75rem; color: ${isDefended ? '#00ff88' : '#ff2a5f'}; font-weight: 700;">
          ${isDefended ? (isAr ? 'تم التصدي بنجاح (اجتياز)' : 'DEFENSE ENGAGED (PASSED)') : (isAr ? 'أضرار جسيمة (اختراق)' : 'DAMAGE SUSTAINED (BREACHED)')}
        </span>
      </div>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 4px;">${event.desc[this.currentLang]}</p>
    `;

    // Save for export
    this.lastMissionTelemetry = {
      missionTimestamp: new Date().toISOString(),
      destination: dest.name.en,
      language: this.currentLang,
      metrics: {
        budgetSpentM: missionState.totalCost,
        budgetLimitM: dest.budgetLimit,
        massKg: missionState.totalMass,
        massLimitKg: dest.massLimit,
        netPowerKW: missionState.netPower,
        scienceScore: finalScienceReturned,
        viabilityScore: finalScore,
        outcomeTier,
        grade
      },
      spaceWeather: {
        event: event.title.en,
        defended: isDefended
      }
    };

    this.debriefModal.classList.remove('hidden');
  }

  // ========================================================================
  // 12. EXPORT & TOAST UTILITIES
  // ========================================================================

  exportMissionTelemetryJSON() {
    if (!this.lastMissionTelemetry) return;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.lastMissionTelemetry, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `NASA_Mission_Telemetry_${this.currentDestination.id}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    this.showToast(this.currentLang === 'ar' ? 'تم تصدير ملف القياسات بصيغة JSON' : 'Mission Telemetry Exported as JSON');
  }

  shareFlightLog() {
    if (!this.lastMissionTelemetry) return;
    const isAr = this.currentLang === 'ar';
    const summary = isAr
      ? `تصميم مهمة ناسا: تحليق نحو ${this.currentDestination.name.ar} بتقييم ${this.lastMissionTelemetry.metrics.grade} وحصيلة ${this.lastMissionTelemetry.metrics.scienceScore} نقطة علمية!`
      : `NASA Mission Design: Flown to ${this.currentDestination.name.en} with Grade ${this.lastMissionTelemetry.metrics.grade} (${this.lastMissionTelemetry.metrics.scienceScore} Science Points)!`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary).then(() => {
        this.showToast(isAr ? 'تم نسخ ملخص الرحلة للحافظة!' : 'Flight Summary Copied to Clipboard!');
      });
    } else {
      this.showToast(summary);
    }
  }

  // ========================================================================
  // 12b. FULLSCREEN & MISSION CERTIFICATE UTILITIES
  // ========================================================================

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn('Fullscreen request failed:', err);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
          console.warn('Exit fullscreen failed:', err);
        });
      }
    }
  }

  printMissionCertificate() {
    this.showToast(this.currentLang === 'ar' ? 'جاري تجهيز شهادة إنجاز المهمة للطباعة...' : 'Formatting Official NASA Flight Certificate...');
    setTimeout(() => {
      window.print();
    }, 300);
  }

  // ========================================================================
  // 12c. CLIENT-SIDE PROJECT PACKAGER (PKZIP 2.0 BLOB GENERATOR)
  // ========================================================================

  async downloadProjectZip() {
    this.showToast(this.currentLang === 'ar' ? 'جاري تجميع ملفات المشروع وضغطها...' : 'Packaging NASA mission files into ZIP...');

    const fileList = [
      'index.html',
      'style.css',
      'script.js',
      'README.md',
      'netlify.toml',
      'vercel.json',
      'DEPLOYMENT_GUIDE.md',
      'package-zip.bat',
      'package-zip.ps1',
      'download-zip.html'
    ];

    const entries = [];

    // Attempt to load live files
    for (const fileName of fileList) {
      try {
        const response = await fetch(fileName);
        if (response.ok) {
          const text = await response.text();
          entries.push({ name: fileName, data: text });
        }
      } catch (err) {
        // Continue with available files
      }
    }

    // Fallback if local file:// protocol blocks fetch
    if (entries.length === 0) {
      const htmlContent = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
      entries.push({ name: 'index.html', data: htmlContent });
      
      this.showToast(this.currentLang === 'ar' 
        ? 'تم تنزيل حزمة الويب! يمكنك أيضاً تشغيل package-zip.bat' 
        : 'Downloading bundle! You can also double-click package-zip.bat');
    }

    try {
      const zipBlob = this.generateZipBlob(entries);
      const blobUrl = URL.createObjectURL(zipBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = 'nasa-space-mission-game.zip';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      URL.revokeObjectURL(blobUrl);

      this.showToast(this.currentLang === 'ar' 
        ? '✓ تم تنزيل ملف nasa-space-mission-game.zip بنجاح!' 
        : '✓ Successfully downloaded nasa-space-mission-game.zip!');
    } catch (zipErr) {
      console.error('Error generating zip:', zipErr);
      this.showToast(this.currentLang === 'ar' 
        ? 'تنبيه: يمكنك تشغيل package-zip.bat لإنشاء ملف الـ ZIP مباشرة' 
        : 'Tip: Double-click package-zip.bat in the folder to build the ZIP directly');
    }
  }

  generateZipBlob(fileEntries) {
    const crcTable = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      }
      crcTable[i] = c;
    }

    const calcCRC = (uint8arr) => {
      let crc = 0xFFFFFFFF;
      for (let i = 0; i < uint8arr.length; i++) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ uint8arr[i]) & 0xFF];
      }
      return (crc ^ 0xFFFFFFFF) >>> 0;
    };

    const encoder = new TextEncoder();
    const records = [];
    let currentOffset = 0;

    const now = new Date();
    const dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (Math.floor(now.getSeconds() / 2));
    const dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();

    for (const file of fileEntries) {
      const nameBytes = encoder.encode(file.name);
      const contentBytes = typeof file.data === 'string' ? encoder.encode(file.data) : file.data;
      const crc = calcCRC(contentBytes);
      const size = contentBytes.length;

      // Local Header
      const header = new Uint8Array(30 + nameBytes.length);
      const view = new DataView(header.buffer);
      view.setUint32(0, 0x04034b50, true);
      view.setUint16(4, 20, true);
      view.setUint16(6, 0x0800, true);
      view.setUint16(8, 0, true);
      view.setUint16(10, dosTime, true);
      view.setUint16(12, dosDate, true);
      view.setUint32(14, crc, true);
      view.setUint32(18, size, true);
      view.setUint32(22, size, true);
      view.setUint16(26, nameBytes.length, true);
      view.setUint16(28, 0, true);
      header.set(nameBytes, 30);

      records.push({
        nameBytes,
        crc,
        size,
        dosTime,
        dosDate,
        offset: currentOffset,
        header,
        contentBytes
      });

      currentOffset += header.length + size;
    }

    // Central Directory
    const centralDirStart = currentOffset;
    const centralHeaders = [];
    let centralDirSize = 0;

    for (const rec of records) {
      const cd = new Uint8Array(46 + rec.nameBytes.length);
      const view = new DataView(cd.buffer);
      view.setUint32(0, 0x02014b50, true);
      view.setUint16(4, 20, true);
      view.setUint16(6, 20, true);
      view.setUint16(8, 0x0800, true);
      view.setUint16(10, 0, true);
      view.setUint16(12, rec.dosTime, true);
      view.setUint16(14, rec.dosDate, true);
      view.setUint32(16, rec.crc, true);
      view.setUint32(20, rec.size, true);
      view.setUint32(24, rec.size, true);
      view.setUint16(28, rec.nameBytes.length, true);
      view.setUint16(30, 0, true);
      view.setUint16(32, 0, true);
      view.setUint16(34, 0, true);
      view.setUint16(36, 0, true);
      view.setUint32(38, 0x81A40000, true);
      view.setUint32(42, rec.offset, true);
      cd.set(rec.nameBytes, 46);

      centralHeaders.push(cd);
      centralDirSize += cd.length;
    }

    // End of Central Directory
    const eocd = new Uint8Array(22);
    const view = new DataView(eocd.buffer);
    view.setUint32(0, 0x06054b50, true);
    view.setUint16(4, 0, true);
    view.setUint16(6, 0, true);
    view.setUint16(8, records.length, true);
    view.setUint16(10, records.length, true);
    view.setUint32(12, centralDirSize, true);
    view.setUint32(16, centralDirStart, true);
    view.setUint16(20, 0, true);

    const parts = [];
    for (const rec of records) {
      parts.push(rec.header);
      parts.push(rec.contentBytes);
    }
    for (const cd of centralHeaders) {
      parts.push(cd);
    }
    parts.push(eocd);

    return new Blob(parts, { type: 'application/zip' });
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>${message}</span>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

// ==========================================================================
// 13. BOOTSTRAP APPLICATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  window.spaceMissionApp = new SpaceMissionGame();
});
