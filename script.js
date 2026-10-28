/* ========================================
   Osman Mohamed Abdel-Gawad Portfolio
   Interactive Scripts + AR/EN i18n
   ======================================== */

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",
    btn_book: "Book Course",
    book_title: "Book a Course",
    book_subtitle: "Fill the form and send via WhatsApp",
    book_name: "Full Name",
    book_name_ph: "Enter your full name",
    book_phone: "Phone Number",
    book_phone_ph: "01xxxxxxxxx",
    book_courses: "Choose Course(s)",
    book_all: "All Courses",
    book_gov: "Governorate / Address",
    book_gov_ph: "Governorate or address",
    book_notes: "Notes (optional)",
    book_notes_ph: "Any extra details...",
    book_send: "Send via WhatsApp",
    book_err_name: "Please enter your name.",
    book_err_phone: "Please enter a valid phone number.",
    book_err_courses: "Please select at least one course.",
    book_err_gov: "Please enter your governorate or address.",
    book_msg_title: "New Course Booking Request",
    book_msg_name: "Name",
    book_msg_phone: "Phone",
    book_msg_courses: "Courses",
    book_msg_gov: "Governorate / Address",
    book_msg_notes: "Notes",
    btn_add_review: "Add Your Review",
    review_title: "Add Your Review",
    review_subtitle: "Share your experience with others",
    review_name: "Your Name",
    review_name_ph: "Enter your name",
    review_role: "Your Role (optional)",
    review_role_ph: "e.g. Web Development Trainee",
    review_rating: "Your Rating",
    review_text: "Your Review",
    review_text_ph: "Write your review...",
    review_send: "Submit Review",
    review_thanks_title: "Thank you!",
    review_thanks_msg: "Your review has been added successfully. We appreciate your feedback!",
    review_thanks_btn: "Done",
    review_err_name: "Please enter your name.",
    review_err_text: "Please write your review.",
    review_default_role: "Student",

    hero_badge: "Available for Training & Projects",
    hero_subtitle: "Programming & Web Development Instructor",
    hero_desc: "Programming Instructor passionate about simplifying web development and helping beginners turn their ideas into real websites.",
    btn_projects: "View My Projects",
    btn_contact: "Contact Me",
    float_frontend: "Front-End",
    float_instructor: "Instructor",
    about_tag: "About Me",
    about_title_1: "Passionate About",
    about_title_2: "Teaching & Code",
    about_subtitle: "Helping beginners transform ideas into real, working websites",
    about_p1: "I'm <strong>Osman Mohamed Abdel-Gawad</strong>, a Programming & Web Development Instructor and Front-End Developer dedicated to making programming accessible, practical, and enjoyable.",
    about_p2: "My passion lies in teaching programming in a simple and practical way. I specialize in helping beginners understand core concepts and build complete websites from scratch using modern technologies.",
    about_p3: "Through educational content, hands-on training sessions, and personalized guidance, I empower students to gain real skills in HTML, CSS, JavaScript, and modern web development practices.",
    hl_programming: "Programming",
    hl_web: "Web Development",
    hl_teaching: "Teaching",
    hl_frontend: "Front-End Development",
    hl_beginners: "Helping Beginners",
    hl_content: "Educational Content",
    card_simple_title: "Simple Teaching",
    card_simple_desc: "Breaking down complex concepts into easy-to-understand lessons",
    card_practical_title: "Practical Focus",
    card_practical_desc: "Building real projects so students gain hands-on experience",
    card_success_title: "Student Success",
    card_success_desc: "Dedicated to helping every beginner achieve their coding goals",
    skills_tag: "Skills",
    skills_title_1: "Technical",
    skills_title_2: "Expertise",
    skills_subtitle: "Technologies and tools I teach and work with daily",
    skill_html: "Semantic markup & structure",
    skill_css: "Modern styling & animations",
    skill_js: "Interactive web experiences",
    skill_bootstrap: "Rapid responsive layouts",
    skill_responsive_title: "Responsive Design",
    skill_responsive: "Mobile-first approach",
    skill_git: "Version control & collaboration",
    skill_ui_title: "UI Development",
    skill_ui: "Clean & modern interfaces",
    skill_web_title: "Web Development",
    skill_web: "Full front-end solutions",
    services_tag: "Services",
    services_title_1: "What I",
    services_title_2: "Offer",
    services_subtitle: "Professional training and development services tailored to your goals",
    svc1_title: "Programming Training",
    svc1_desc: "Comprehensive programming courses designed for beginners. Learn core concepts with clear explanations and practical exercises.",
    svc1_f1: "Beginner-friendly approach",
    svc1_f2: "Hands-on practice",
    svc1_f3: "Real-world examples",
    svc2_title: "Web Development Training",
    svc2_desc: "Master modern web development from HTML & CSS fundamentals to building complete, responsive websites.",
    svc2_f1: "Full project-based learning",
    svc2_f2: "Responsive design focus",
    svc2_f3: "Best practices",
    svc3_title: "Front-End Development",
    svc3_desc: "Professional front-end development services. Clean code, modern UI, and optimized performance for your web projects.",
    svc3_f1: "Modern UI/UX",
    svc3_f2: "Clean & maintainable code",
    svc3_f3: "Performance optimized",
    svc4_title: "Personal Portfolio Websites",
    svc4_desc: "Stand out with a stunning personal portfolio. Showcase your skills, projects, and personality with a premium design.",
    svc4_f1: "Custom unique design",
    svc4_f2: "Fully responsive",
    svc4_f3: "SEO optimized",
    svc5_title: "Business Websites",
    svc5_desc: "Professional websites for businesses and startups. Convert visitors into customers with clean, conversion-focused design.",
    svc5_f1: "Brand-aligned design",
    svc5_f2: "Contact & inquiry forms",
    svc5_f3: "Fast loading",
    svc6_title: "Programming Consultation",
    svc6_desc: "Get expert guidance on your learning path, project structure, code reviews, or career advice in web development.",
    svc6_f1: "Personalized advice",
    svc6_f2: "Code review sessions",
    svc6_f3: "Career guidance",
    projects_tag: "Projects",
    projects_title_1: "Featured",
    projects_title_2: "Work",
    projects_subtitle: "A selection of projects showcasing teaching materials and web solutions",
    btn_view_project: "View Project",
    proj1_title: "Interactive HTML/CSS Course Platform",
    proj1_desc: "Educational platform with interactive lessons, live previews, and progress tracking for web development beginners.",
    proj2_title: "Business Landing Page Template",
    proj2_desc: "Modern, high-converting landing page template for startups and small businesses with smooth animations.",
    proj3_title: "Personal Portfolio Series",
    proj3_desc: "Collection of premium personal portfolio websites built for professionals and freelancers across different industries.",
    proj4_title: "JavaScript Fundamentals Toolkit",
    proj4_desc: "Interactive exercises and mini-projects designed to teach JavaScript core concepts through practical coding challenges.",
    exp_tag: "Experience",
    exp_title_1: "Impact &",
    exp_title_2: "Achievements",
    exp_subtitle: "Dedicated to empowering the next generation of developers",
    stat1_label: "Training Sessions",
    stat1_desc: "Programming & Web Development Training",
    stat2_label: "Courses Delivered",
    stat2_desc: "Programming Courses Delivered",
    stat3_label: "Trainees",
    stat3_desc: "Trainees Successfully Trained",
    stat4_label: "Years Experience",
    stat4_desc: "Training & Teaching Experience",
    tl1_date: "Ongoing",
    tl1_title: "Programming & Web Development Instructor",
    tl1_desc: "Delivering practical programming training focused on HTML, CSS, JavaScript, and modern front-end development. Helping beginners build real websites from scratch.",
    tl2_date: "Certification",
    tl2_title: "T.O.T. Certification",
    tl2_desc: "Training of Trainers certification, equipping me with advanced methodologies to deliver high-quality educational experiences and train other instructors.",
    tl3_date: "Expertise",
    tl3_title: "Front-End Development Focus",
    tl3_desc: "Specialized in teaching and building modern, responsive, and accessible front-end interfaces using current industry best practices.",
    test_tag: "Testimonials",
    test_title_1: "What Trainees",
    test_title_2: "Say",
    test_subtitle: "Feedback from students who learned with me",
    test1_text: '"Osman explains programming concepts in a very simple and clear way. I went from knowing nothing about HTML and CSS to building my own responsive website in just a few weeks."',
    test1_name: "Ahmed Hassan",
    test1_role: "Web Development Trainee",
    test2_text: '"The practical approach made all the difference. Instead of just theory, we built real projects. Osman is patient and always ready to help until you fully understand."',
    test2_name: "Sara Mohamed",
    test2_role: "Front-End Student",
    test3_text: '"Best programming instructor I\'ve had. He makes complex topics feel easy and keeps the sessions engaging. Highly recommend for anyone starting their coding journey."',
    test3_name: "Mahmoud Ali",
    test3_role: "Programming Beginner",
    contact_tag: "Contact",
    contact_title_1: "Let's",
    contact_title_2: "Connect",
    contact_subtitle: "Ready to start learning or need a website? Reach out anytime",
    follow_me: "Follow Me",
    form_name: "Your Name",
    form_name_ph: "Enter your name",
    form_email: "Your Email",
    form_email_ph: "Enter your email",
    form_message: "Your Message",
    form_message_ph: "How can I help you?",
    form_send: "Send Message",
    footer_role: "Programming & Web Development Instructor",
    copyright: "© 2026 Osman Mohamed Abdel-Gawad. All Rights Reserved."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عني",
    nav_skills: "المهارات",
    nav_services: "الخدمات",
    nav_projects: "المشاريع",
    nav_experience: "الخبرة",
    nav_contact: "تواصل",
    btn_book: "حجز كورس",
    book_title: "حجز كورس",
    book_subtitle: "املأ البيانات وأرسل عبر واتساب",
    book_name: "الاسم بالكامل",
    book_name_ph: "اكتب اسمك بالكامل",
    book_phone: "رقم التليفون",
    book_phone_ph: "01xxxxxxxxx",
    book_courses: "اختر الكورس / الكورسات",
    book_all: "كل الكورسات",
    book_gov: "المحافظة أو العنوان",
    book_gov_ph: "المحافظة أو العنوان",
    book_notes: "ملاحظات (اختياري)",
    book_notes_ph: "أي تفاصيل إضافية...",
    book_send: "إرسال عبر واتساب",
    book_err_name: "من فضلك اكتب اسمك.",
    book_err_phone: "من فضلك أدخل رقم تليفون صحيح.",
    book_err_courses: "اختر كورس واحد على الأقل.",
    book_err_gov: "من فضلك اكتب المحافظة أو العنوان.",
    book_msg_title: "طلب حجز كورس جديد",
    book_msg_name: "الاسم",
    book_msg_phone: "رقم التليفون",
    book_msg_courses: "الكورسات",
    book_msg_gov: "المحافظة / العنوان",
    book_msg_notes: "ملاحظات",
    btn_add_review: "أضف تقييمك",
    review_title: "أضف تقييمك",
    review_subtitle: "شارك تجربتك مع الآخرين",
    review_name: "اسمك",
    review_name_ph: "اكتب اسمك",
    review_role: "دورك (اختياري)",
    review_role_ph: "مثال: متدرب تطوير ويب",
    review_rating: "تقييمك",
    review_text: "تقييمك",
    review_text_ph: "اكتب تقييمك هنا...",
    review_send: "إرسال التقييم",
    review_thanks_title: "شكرًا لك!",
    review_thanks_msg: "تم إضافة تقييمك بنجاح. نقدر رأيك جدًا!",
    review_thanks_btn: "تم",
    review_err_name: "من فضلك اكتب اسمك.",
    review_err_text: "من فضلك اكتب التقييم.",
    review_default_role: "طالب",

    hero_badge: "متاح للتدريب والمشاريع",
    hero_subtitle: "مدرب برمجة وتطوير ويب | مطور واجهات أمامية",
    hero_desc: "مدرب برمجة شغوف بتبسيط تطوير الويب ومساعدة المبتدئين على تحويل أفكارهم إلى مواقع حقيقية.",
    btn_projects: "عرض مشاريعي",
    btn_contact: "تواصل معي",
    float_frontend: "واجهات أمامية",
    float_instructor: "مدرب",
    about_tag: "عني",
    about_title_1: "شغوف بـ",
    about_title_2: "التعليم والبرمجة",
    about_subtitle: "أساعد المبتدئين على تحويل أفكارهم إلى مواقع ويب حقيقية",
    about_p1: "أنا <strong>عثمان محمد عبد الجواد</strong>، مدرب برمجة وتطوير ويب ومطور واجهات أمامية، ملتزم بجعل البرمجة سهلة وعملية وممتعة.",
    about_p2: "شغفي يكمن في تعليم البرمجة بطريقة بسيطة وعملية. أتخصص في مساعدة المبتدئين على فهم المفاهيم الأساسية وبناء مواقع كاملة من الصفر باستخدام التقنيات الحديثة.",
    about_p3: "من خلال المحتوى التعليمي والجلسات العملية والإرشاد الشخصي، أساعد الطلاب على اكتساب مهارات حقيقية في HTML و CSS و JavaScript وتطوير الويب الحديث.",
    hl_programming: "البرمجة",
    hl_web: "تطوير الويب",
    hl_teaching: "التعليم",
    hl_frontend: "تطوير الواجهات",
    hl_beginners: "مساعدة المبتدئين",
    hl_content: "محتوى تعليمي",
    card_simple_title: "تعليم بسيط",
    card_simple_desc: "تبسيط المفاهيم المعقدة إلى دروس سهلة الفهم",
    card_practical_title: "تركيز عملي",
    card_practical_desc: "بناء مشاريع حقيقية لاكتساب خبرة عملية",
    card_success_title: "نجاح الطلاب",
    card_success_desc: "ملتزم بمساعدة كل مبتدئ على تحقيق أهدافه في البرمجة",
    skills_tag: "المهارات",
    skills_title_1: "الخبرة",
    skills_title_2: "التقنية",
    skills_subtitle: "التقنيات والأدوات التي أدرّسها وأعمل بها يوميًا",
    skill_html: "هيكلة دلالية صحيحة",
    skill_css: "تنسيق حديث وحركات",
    skill_js: "تجارب ويب تفاعلية",
    skill_bootstrap: "تخطيطات متجاوبة سريعة",
    skill_responsive_title: "تصميم متجاوب",
    skill_responsive: "نهج الموبايل أولًا",
    skill_git: "إدارة الإصدارات والتعاون",
    skill_ui_title: "تطوير واجهات",
    skill_ui: "واجهات نظيفة وحديثة",
    skill_web_title: "تطوير الويب",
    skill_web: "حلول واجهات كاملة",
    services_tag: "الخدمات",
    services_title_1: "ما أقدمه",
    services_title_2: "لك",
    services_subtitle: "خدمات تدريب وتطوير احترافية مصممة لأهدافك",
    svc1_title: "تدريب البرمجة",
    svc1_desc: "دورات برمجة شاملة للمبتدئين. تعلم المفاهيم الأساسية بشرح واضح وتمارين عملية.",
    svc1_f1: "نهج مناسب للمبتدئين",
    svc1_f2: "تدريب عملي",
    svc1_f3: "أمثلة من الواقع",
    svc2_title: "تدريب تطوير الويب",
    svc2_desc: "أتقن تطوير الويب الحديث من أساسيات HTML و CSS إلى بناء مواقع متجاوبة كاملة.",
    svc2_f1: "تعلم قائم على المشاريع",
    svc2_f2: "تركيز على التصميم المتجاوب",
    svc2_f3: "أفضل الممارسات",
    svc3_title: "تطوير الواجهات الأمامية",
    svc3_desc: "خدمات تطوير واجهات احترافية. كود نظيف وواجهة حديثة وأداء محسّن لمشاريعك.",
    svc3_f1: "واجهة وتجربة مستخدم حديثة",
    svc3_f2: "كود نظيف وقابل للصيانة",
    svc3_f3: "أداء محسّن",
    svc4_title: "مواقع بورتفوليو شخصية",
    svc4_desc: "تميّز ببورتفوليو شخصي رائع. اعرض مهاراتك ومشاريعك وشخصيتك بتصميم مميز.",
    svc4_f1: "تصميم مخصص فريد",
    svc4_f2: "متجاوب بالكامل",
    svc4_f3: "محسّن لمحركات البحث",
    svc5_title: "مواقع الأعمال",
    svc5_desc: "مواقع احترافية للشركات والشركات الناشئة. حوّل الزوار إلى عملاء بتصميم نظيف يركز على التحويل.",
    svc5_f1: "تصميم متوافق مع الهوية",
    svc5_f2: "نماذج تواصل واستفسار",
    svc5_f3: "تحميل سريع",
    svc6_title: "استشارات برمجة",
    svc6_desc: "احصل على إرشاد خبير حول مسار التعلم وهيكل المشروع ومراجعة الكود أو نصائح المسار المهني.",
    svc6_f1: "نصائح شخصية",
    svc6_f2: "جلسات مراجعة كود",
    svc6_f3: "إرشاد مهني",
    projects_tag: "المشاريع",
    projects_title_1: "أعمال",
    projects_title_2: "مميزة",
    projects_subtitle: "مجموعة من المشاريع التي تعرض مواد تعليمية وحلول ويب",
    btn_view_project: "عرض المشروع",
    proj1_title: "منصة دورة HTML/CSS تفاعلية",
    proj1_desc: "منصة تعليمية بدروس تفاعلية ومعاينات مباشرة وتتبع للتقدم للمبتدئين في تطوير الويب.",
    proj2_title: "قالب صفحة هبوط للأعمال",
    proj2_desc: "قالب صفحة هبوط حديث عالي التحويل للشركات الناشئة والصغيرة مع حركات سلسة.",
    proj3_title: "سلسلة بورتفوليو شخصية",
    proj3_desc: "مجموعة من مواقع البورتفوليو المميزة للمحترفين والمستقلين في مختلف المجالات.",
    proj4_title: "مجموعة أساسيات JavaScript",
    proj4_desc: "تمارين ومشاريع صغيرة تفاعلية لتعليم مفاهيم JavaScript الأساسية عبر تحديات برمجة عملية.",
    exp_tag: "الخبرة",
    exp_title_1: "الأثر و",
    exp_title_2: "الإنجازات",
    exp_subtitle: "ملتزم بتمكين الجيل القادم من المطورين",
    stat1_label: "جلسات تدريب",
    stat1_desc: "تدريب برمجة وتطوير ويب",
    stat2_label: "دورات مقدمة",
    stat2_desc: "دورات برمجة تم تقديمها",
    stat3_label: "متدربين",
    stat3_desc: "متدربون تم تدريبهم بنجاح",
    stat4_label: "سنوات خبرة",
    stat4_desc: "خبرة في التدريب والتعليم",
    tl1_date: "مستمر",
    tl1_title: "مدرب برمجة وتطوير ويب",
    tl1_desc: "تقديم تدريب برمجة عملي يركز على HTML و CSS و JavaScript وتطوير الواجهات الحديثة. مساعدة المبتدئين على بناء مواقع حقيقية من الصفر.",
    tl2_date: "شهادة",
    tl2_title: "شهادة تدريب المدربين (T.O.T)",
    tl2_desc: "شهادة تدريب المدربين، تزوّدني بمنهجيات متقدمة لتقديم تجارب تعليمية عالية الجودة وتدريب مدربين آخرين.",
    tl3_date: "تخصص",
    tl3_title: "التركيز على تطوير الواجهات",
    tl3_desc: "متخصص في تعليم وبناء واجهات أمامية حديثة ومتجاوبة وسهلة الوصول وفق أفضل ممارسات الصناعة.",
    test_tag: "آراء المتدربين",
    test_title_1: "ماذا يقول",
    test_title_2: "المتدربون",
    test_subtitle: "تعليقات من طلاب تعلّموا معي",
    test1_text: '"عثمان يشرح مفاهيم البرمجة بطريقة بسيطة وواضحة جدًا. انتقلت من عدم معرفة أي شيء عن HTML و CSS إلى بناء موقعي المتجاوب في أسابيع قليلة."',
    test1_name: "أحمد حسن",
    test1_role: "متدرب تطوير ويب",
    test2_text: '"النهج العملي أحدث فرقًا كبيرًا. بدلًا من النظرية فقط، بنينا مشاريع حقيقية. عثمان صبور ومستعد دائمًا للمساعدة حتى تفهم تمامًا."',
    test2_name: "سارة محمد",
    test2_role: "طالبة واجهات أمامية",
    test3_text: '"أفضل مدرب برمجة مرّ عليّ. يجعل المواضيع المعقدة تبدو سهلة ويحافظ على الجلسات مشوّقة. أنصح به بشدة لأي شخص يبدأ رحلته في البرمجة."',
    test3_name: "محمود علي",
    test3_role: "مبتدئ في البرمجة",
    contact_tag: "تواصل",
    contact_title_1: "دعنا",
    contact_title_2: "نتواصل",
    contact_subtitle: "جاهز للتعلم أو تحتاج موقعًا؟ تواصل في أي وقت",
    follow_me: "تابعني",
    form_name: "اسمك",
    form_name_ph: "أدخل اسمك",
    form_email: "بريدك الإلكتروني",
    form_email_ph: "أدخل بريدك الإلكتروني",
    form_message: "رسالتك",
    form_message_ph: "كيف يمكنني مساعدتك؟",
    form_send: "إرسال الرسالة",
    footer_role: "مدرب برمجة وتطوير ويب",
    copyright: "© 2026 عثمان محمد عبد الجواد. جميع الحقوق محفوظة."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  // Mobile-safe body scroll lock
  let _scrollY = 0;
  const lockBody = () => {
    _scrollY = window.scrollY || window.pageYOffset;
    document.body.classList.add('modal-open');
    document.body.style.top = `-${_scrollY}px`;
  };
  const unlockBody = () => {
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, _scrollY);
  };


  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'en' ? 'AR' : 'EN';

    document.title = lang === 'ar'
      ? 'عثمان محمد عبد الجواد | مدرب برمجة وتطوير ويب'
      : 'Osman Mohamed Abdel-Gawad | Programming & Web Development Instructor';
  };

  setLanguage(currentLang);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // Mobile Navigation
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show');
      lockBody();
    });
  }
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show');
      unlockBody();
    });
  }
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      unlockBody();
    });
  });

  // Sticky Header
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Active Nav
  const sections = document.querySelectorAll('section[id]');
  const highlightNav = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', highlightNav);

  // Back to Top
  const backToTop = document.getElementById('back-to-top');
  const toggleBackToTop = () => {
    if (window.scrollY > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  };
  window.addEventListener('scroll', toggleBackToTop);
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Counters
  const counters = document.querySelectorAll('.stat-number');
  let countersAnimated = false;
  const animateCounters = () => {
    if (countersAnimated) return;
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target >= 20 ? '+' : '');
        }
      };
      updateCounter();
    });
    countersAnimated = true;
  };

  // Skills
  const skillCards = document.querySelectorAll('.skill-card');
  let skillsAnimated = false;
  const animateSkills = () => {
    if (skillsAnimated) return;
    skillCards.forEach(card => card.classList.add('animate'));
    skillsAnimated = true;
  };

  // Scroll Reveal
  const revealElements = document.querySelectorAll(
    '.section-header, .about-text, .about-card, .skill-card, .service-card, .project-card, .stat-card, .timeline-item, .testimonial-card, .contact-card, .contact-form'
  );
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 80;
    revealElements.forEach(el => {
      if (el.getBoundingClientRect().top < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
    const experienceSection = document.getElementById('experience');
    if (experienceSection && experienceSection.getBoundingClientRect().top < windowHeight - 120) {
      animateCounters();
    }
    const skillsSection = document.getElementById('skills');
    if (skillsSection && skillsSection.getBoundingClientRect().top < windowHeight - 120) {
      animateSkills();
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        showFormMessage(currentLang === 'ar' ? 'يرجى ملء جميع الحقول.' : 'Please fill in all fields.', 'error');
        return;
      }
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:osmanmohamedabdelgawad@gmail.com?subject=${subject}&body=${body}`;
      showFormMessage(currentLang === 'ar' ? 'جاري فتح برنامج البريد...' : 'Opening your email client...', 'success');
      setTimeout(() => {
        window.location.href = mailtoLink;
        contactForm.reset();
      }, 800);
    });
  }

  function showFormMessage(text, type) {
    const existing = document.querySelector('.form-message');
    if (existing) existing.remove();
    const msg = document.createElement('div');
    msg.className = `form-message ${type}`;
    msg.textContent = text;
    msg.style.cssText = `
      padding: 12px 16px; margin-bottom: 16px; border-radius: 8px;
      font-size: 0.9rem; font-weight: 500;
      background: ${type === 'success' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)'};
      color: ${type === 'success' ? '#4ade80' : '#f87171'};
      border: 1px solid ${type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
    `;
    contactForm.insertBefore(msg, contactForm.firstChild);
    setTimeout(() => {
      msg.style.opacity = '0';
      msg.style.transition = 'opacity 0.3s';
      setTimeout(() => msg.remove(), 300);
    }, 4000);
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('a[href="#"]').forEach(link => {
    if (link.getAttribute('aria-label') &&
        !link.getAttribute('href').startsWith('mailto:') &&
        !link.getAttribute('href').startsWith('https://wa.me')) {
      link.addEventListener('click', (e) => e.preventDefault());
    }
  });

  // ========== Course Booking Modal ==========
  const bookingModal = document.getElementById('booking-modal');
  const openBooking = document.getElementById('open-booking');
  const openBookingMobile = document.getElementById('open-booking-mobile');
  const closeBooking = document.getElementById('close-booking');
  const bookingForm = document.getElementById('booking-form');
  const courseAll = document.getElementById('course-all');
  const courseChecks = document.querySelectorAll('input[name="courses"]:not(#course-all)');

  const openModal = () => {
    if (!bookingModal) return;
    bookingModal.classList.add('show');
    bookingModal.setAttribute('aria-hidden', 'false');
    lockBody();
    const first = document.getElementById('book-name');
    if (first) setTimeout(() => first.focus({ preventScroll: false }), 150);
  };

  const closeModal = () => {
    if (!bookingModal) return;
    bookingModal.classList.remove('show');
    bookingModal.setAttribute('aria-hidden', 'true');
    unlockBody();
  };

  if (openBooking) openBooking.addEventListener('click', openModal);
  if (openBookingMobile) {
    openBookingMobile.addEventListener('click', () => {
      navMenu.classList.remove('show');
      unlockBody();
      openModal();
    });
  }
  if (closeBooking) closeBooking.addEventListener('click', closeModal);

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal && bookingModal.classList.contains('show')) {
      closeModal();
    }
  });

  // "All courses" toggles others
  if (courseAll) {
    courseAll.addEventListener('change', () => {
      courseChecks.forEach(cb => {
        cb.checked = courseAll.checked;
        cb.disabled = courseAll.checked;
      });
    });
  }
  courseChecks.forEach(cb => {
    cb.addEventListener('change', () => {
      if (!cb.checked && courseAll) courseAll.checked = false;
      const allSelected = [...courseChecks].every(c => c.checked);
      if (allSelected && courseAll) {
        courseAll.checked = true;
        courseChecks.forEach(c => { c.disabled = true; });
      }
    });
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const t = translations[currentLang];

      const name = document.getElementById('book-name').value.trim();
      const phone = document.getElementById('book-phone').value.trim();
      const gov = document.getElementById('book-gov').value.trim();
      const notes = document.getElementById('book-notes').value.trim();

      const selected = [];
      if (courseAll && courseAll.checked) {
        selected.push(courseAll.value);
      } else {
        courseChecks.forEach(cb => { if (cb.checked) selected.push(cb.value); });
      }

      if (!name) {
        alert(t.book_err_name);
        return;
      }
      const phoneClean = phone.replace(/[\s\-]/g, '');
      if (!phoneClean || phoneClean.length < 10) {
        alert(t.book_err_phone);
        return;
      }
      if (selected.length === 0) {
        alert(t.book_err_courses);
        return;
      }
      if (!gov) {
        alert(t.book_err_gov);
        return;
      }

      const lines = [
        `*${t.book_msg_title}*`,
        '',
        `*${t.book_msg_name}:* ${name}`,
        `*${t.book_msg_phone}:* ${phoneClean}`,
        `*${t.book_msg_courses}:* ${selected.join(', ')}`,
        `*${t.book_msg_gov}:* ${gov}`
      ];
      if (notes) {
        lines.push(`*${t.book_msg_notes}:* ${notes}`);
      }

      const text = encodeURIComponent(lines.join('\n'));
      const waUrl = `https://wa.me/201032299708?text=${text}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      bookingForm.reset();
      courseChecks.forEach(c => { c.disabled = false; });
      closeModal();
    });
  }



  // ========== Shared User Reviews (visible to everyone) ==========
  const REVIEWS_API = 'https://extendsclass.com/api/json-storage/bin/fdeaccf';
  const reviewModal = document.getElementById('review-modal');
  const openReview = document.getElementById('open-review');
  const closeReview = document.getElementById('close-review');
  const reviewForm = document.getElementById('review-form');
  const reviewThanks = document.getElementById('review-thanks');
  const thanksClose = document.getElementById('thanks-close');
  const testimonialsGrid = document.getElementById('testimonials-grid');
  const starBtns = document.querySelectorAll('.star-btn');
  const reviewStarsInput = document.getElementById('review-stars');

  const escapeHtml = (str) => {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  };

  const starsHtml = (n) => {
    const count = Math.min(5, Math.max(1, parseInt(n, 10) || 5));
    return Array.from({ length: count }, () => '<i class="fas fa-star"></i>').join('');
  };

  const createReviewCard = (review) => {
    const name = escapeHtml(String(review.name || '').slice(0, 40));
    const role = escapeHtml(String(review.role || translations[currentLang].review_default_role).slice(0, 50));
    const text = escapeHtml(String(review.text || '').slice(0, 400));
    const initial = (name || '?').trim().charAt(0).toUpperCase();
    const card = document.createElement('div');
    card.className = 'testimonial-card glass-card user-review reveal active';
    card.innerHTML = `
      <div class="testimonial-stars">${starsHtml(review.stars)}</div>
      <p class="testimonial-text">"${text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${initial}</div>
        <div class="author-info">
          <h4>${name}</h4>
          <span>${role}</span>
        </div>
      </div>
    `;
    return card;
  };

  const renderUserReviews = (list) => {
    if (!testimonialsGrid) return;
    testimonialsGrid.querySelectorAll('.user-review').forEach(el => el.remove());
    (list || []).forEach(r => {
      if (r && r.name && r.text) {
        testimonialsGrid.appendChild(createReviewCard(r));
      }
    });
  };

  const fetchSharedReviews = async () => {
    try {
      const res = await fetch(REVIEWS_API, { cache: 'no-store' });
      if (!res.ok) throw new Error('fetch failed');
      const data = await res.json();
      const list = Array.isArray(data.reviews) ? data.reviews : [];
      renderUserReviews(list);
      return list;
    } catch (err) {
      console.warn('Could not load shared reviews', err);
      return [];
    }
  };

  const saveSharedReviews = async (list) => {
    const res = await fetch(REVIEWS_API, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviews: list })
    });
    if (!res.ok) throw new Error('save failed');
    return true;
  };

  const openReviewModal = () => {
    if (!reviewModal) return;
    if (reviewForm) reviewForm.hidden = false;
    if (reviewThanks) reviewThanks.hidden = true;
    reviewModal.classList.add('show');
    reviewModal.setAttribute('aria-hidden', 'false');
    lockBody();
    const first = document.getElementById('review-name');
    if (first) setTimeout(() => first.focus({ preventScroll: false }), 150);
  };

  const closeReviewModal = () => {
    if (!reviewModal) return;
    reviewModal.classList.remove('show');
    reviewModal.setAttribute('aria-hidden', 'true');
    unlockBody();
  };

  if (openReview) openReview.addEventListener('click', openReviewModal);
  if (closeReview) closeReview.addEventListener('click', closeReviewModal);
  if (thanksClose) thanksClose.addEventListener('click', closeReviewModal);
  if (reviewModal) {
    reviewModal.addEventListener('click', (e) => {
      if (e.target === reviewModal) closeReviewModal();
    });
  }

  const setStars = (value) => {
    const v = parseInt(value, 10) || 5;
    if (reviewStarsInput) reviewStarsInput.value = String(v);
    starBtns.forEach(btn => {
      const n = parseInt(btn.dataset.value, 10);
      btn.classList.toggle('active', n <= v);
    });
  };
  starBtns.forEach(btn => {
    btn.addEventListener('click', () => setStars(btn.dataset.value));
    btn.addEventListener('mouseenter', () => {
      const v = parseInt(btn.dataset.value, 10);
      starBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.value, 10) <= v));
    });
  });
  const starRating = document.getElementById('star-rating');
  if (starRating) {
    starRating.addEventListener('mouseleave', () => setStars(reviewStarsInput.value));
  }
  setStars(5);

  if (reviewForm) {
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const t = translations[currentLang];
      const name = document.getElementById('review-name').value.trim();
      const role = document.getElementById('review-role').value.trim();
      const text = document.getElementById('review-text').value.trim();
      const stars = parseInt(reviewStarsInput.value, 10) || 5;
      const submitBtn = reviewForm.querySelector('button[type="submit"]');

      if (!name) {
        alert(t.review_err_name);
        return;
      }
      if (!text) {
        alert(t.review_err_text);
        return;
      }

      const review = {
        name: name.slice(0, 40),
        role: (role || t.review_default_role).slice(0, 50),
        text: text.slice(0, 400),
        stars,
        date: Date.now()
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      try {
        const current = await fetchSharedReviews();
        const updated = [...current, review];
        // keep a reasonable limit
        const limited = updated.slice(-100);
        await saveSharedReviews(limited);
        renderUserReviews(limited);

        reviewForm.reset();
        setStars(5);
        reviewForm.hidden = true;
        if (reviewThanks) reviewThanks.hidden = false;
      } catch (err) {
        console.error(err);
        // fallback: still show on this device
        renderUserReviews([...(await fetchSharedReviews().catch(() => [])), review]);
        reviewForm.reset();
        setStars(5);
        reviewForm.hidden = true;
        if (reviewThanks) reviewThanks.hidden = false;
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
        }
      }
    });
  }

  // Load shared reviews for all visitors
  fetchSharedReviews();

});
