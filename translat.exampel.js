/* =========================
   VS LiteCode Studio
   THEME + LANGUAGE (i18n)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- THEME TOGGLE ----------
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("vs-theme"); // "light" | "dark" | null
    if (savedTheme) {
      const isLight = savedTheme === "light";
      document.body.classList.toggle("light-theme", isLight);
      themeToggle.textContent = isLight ? "🌙" : "☀️";
    }

    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      localStorage.setItem("vs-theme", isLight ? "light" : "dark");
      themeToggle.textContent = isLight ? "🌙" : "☀️";
    });
  }

  // ---------- LANGUAGE TOGGLE ----------
  const langToggle = document.getElementById("lang-toggle");
  const defaultLang = localStorage.getItem("vs-lang") || "sv";
  let currentLang = defaultLang;

  const translations = {
    sv: {
      "nav.home": "Hem",
      "nav.services": "Tjänster",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Kontakt",
      "nav.about": "Om mig",

      "hero.tag": "Webbutvecklare · HTML · CSS · JS · .NET · Stockholm, Sverige",
      "hero.title": "Välkommen till VS LiteCode Studio!",
      "hero.subtitle":
        "Jag skapar moderna, responsiva och visuellt starka webbplatser som är både snygga och enkla att använda. Behöver du en professionell webbnärvaro? online CV, portfolio, fotoalbum, företagshemsida eller ett digitalt visitkort med QR-kod? Du har kommit rätt! Mitt fokus är att ge privatpersoner och småföretag en stark digital närvaro med design som känns modern, levande och lite magisk – skräddarsydda webbplatser som speglar deras unika identitet och mål.",
      "hero.btnServices": "Se mina tjänster",
      "hero.btnProjects": "Visa projekt",
      "hero.role": "Webbutvecklare .NET · Grundare av VS LiteCode Studio",

      "services.title": "Professionella tjänster",
      "services.intro":
        "Här kan du se vad jag erbjuder. Under varje tjänst finns plats för en länk med exempel eller mallar.",
      "services.example": "Exempel / mall:",
      "services.contactCta":
        "Vill du boka en tjänst eller har frågor? Skicka ett meddelande via kontaktsidan så svarar jag via mejl.",
      "services.btnContact": "Gå till kontakt",

      "services.cv.title": "1. Online-CV (HTML + CSS + ev. JS)",
      "services.cv.desc":
        "Personligt online-CV med din bild, sammanfattning, erfarenhet, utbildning, kontakt och länkar. Passar dig som söker jobb eller vill ha en enkel professionell sida.",
      "services.cv.item1": "Modern, responsiv layout",
      "services.cv.item2": "Lätt att uppdatera senare",
      "services.cv.item3": "Publicering på GitHub Pages ingår",

      "services.card.title": "2. Digitalt visitkort + QR-kod",
      "services.card.desc":
        "En digital visitkort är en länk eller QR-kod som öppnar hela din värld: webbplats, sociala medier, kontakt och portfolio. För en affärsperson fungerar den som en liten landningssida som jobbar 24/7, mer än bara ett namn i mobilen. För en vanlig användare är det ett snyggt och enkelt sätt att dela vem man är utan tio olika länkar.",
      "services.card.cta":
        "Du visar ett kort på mobilen – personen skannar och hamnar direkt i din ekosystem. Jag designar kortet i dina färger, med din stil och ditt mål: från strikt business till neonmagiska kreativa projekt.",
      "services.card.demoWork": "Digitalt visitkort – webbstudio (demo)",
      "services.card.demoLashes": "Digitalt visitkort – Instagramprofil (demo)",
      "services.card.item1": "Mobil-först design",
      "services.card.item2": "QR-kod som leder till sidan",
      "services.card.item3": "Anpassad efter din stil och färger",

      "services.simple.title": "3. Enkel hemsida (1–3 sektioner)",
      "services.simple.desc":
        "För coacher, lärare, frisörer eller andra småföretag som behöver en tydlig hemsida med startsida, kort info om dig, tjänster och kontakt.",
      "services.simple.item1": "Design i dina färger",
      "services.simple.item2": "Responsiv för mobil och surfplatta",
      "services.simple.item3": "Kontaktformulär eller länk till mejl",

      "services.portfolio.title": "4. Portfolio / projectsida",
      "services.portfolio.desc":
        "En stilren sida där du kan visa upp dina arbeten, bilder och projekt. Perfekt för utvecklare, designers, fotografer eller kreativa yrken.",
      "services.portfolio.item1": "Projektkort med bild och beskrivning",
      "services.portfolio.item2": "Länkar till GitHub, LinkedIn eller Fiverr",
      "services.portfolio.item3": "Enkel struktur där du kan lägga till fler projekt",

      "services.album.title": "5. Magiskt fotoalbum (familje- eller babyalbum)",
      "services.album.desc":
        "Interaktivt online-album med animationer, mjuka övergångar, glitter- och stjärneffekter. Perfekt för familjefoton eller speciella minnen.",
      "services.album.item1": "Plats för ca 20–50 bilder",
      "services.album.item2": "Responsiv design",
      "services.album.item3": "Delbar länk till familj och vänner",

      "services.landing.title": "6. Landningssida för kampanj eller företag",
      "services.landing.desc":
        "En professionell landningssida med hero-sektion, tydliga knappar och modern typografi. Bra för kampanjer, event eller annonser.",
      "services.landing.item1": "Tydlig call-to-action",
      "services.landing.item2": "Optimerad för mobiltrafik",
      "services.landing.item3": "Animerade detaljer och neon-känsla",

      "services.fix.title": "7. Anpassning & fix av befintlig hemsida",
      "services.fix.desc":
        "Jag kan hjälpa dig att rätta små fel, uppdatera designen eller flytta din sida till GitHub Pages.",
      "services.fix.item1": "Design-förbättringar",
      "services.fix.item2": "Responsivitet / mobilanpassning",
      "services.fix.item3": "Felsökning av HTML/CSS",

      "services.package.title": "8. Komplett paket (CV + Portfolio + Visitkort)",
      "services.package.desc":
        "Tre produkter i samma stil: online-CV, portfolio-sida och digitalt visitkort med QR-kod. Perfekt om du vill starta din personliga brand.",
      "services.package.item1": "Enhetlig design",
      "services.package.item2": "Snabb leverans",
      "services.package.item3": "Bra paketpris",

      "contact.title": "Skicka meddelande",
      "contact.text":
        "Jag föredrar att ha kontakt via mejl eller meddelanden. Fyll i formuläret så återkommer jag så snart jag kan.",
      "contact.name": "Namn",
      "contact.email": "E-post",
      "contact.message": "Meddelande",
      "contact.btnSend": "Skicka meddelande",
      "contact.note":
        "(Demo – meddelandet skickas inte på riktigt, men på en riktig server kan detta kopplas till mejl.)",

      // ---- Online CV page ----
      "cvPage.seoTitle": "Professionellt Online-CV – VS LiteCode Studio",
      "cvPage.seoDescription":
        "Professionellt online-CV (Digitalt CV). Modern design, mobilanpassning och en stark presentation av din profil på webben.",

      "cvPage.title": "Professionellt Online-CV (Digitalt CV)",
      "cvPage.lead":
        "Ett online-CV är ett modernt alternativ till ett PDF-CV. Det visar din erfarenhet, dina skills och din stil – på ett ställe.",
      "cvPage.p1":
        "Formatet passar extra bra för dig som vill sticka ut: IT, design, marknadsföring, kreativa yrken, frilansare och experter.",
      "cvPage.p2":
        "Ett CV som webbsida är lätt att öppna på alla enheter, dela med arbetsgivare och lägga till i LinkedIn och ansökningar.",

      "cvPage.whyTitle": "Varför ett online-CV är smart",
      "cvPage.why1": "Ser modernare och mer professionellt ut",
      "cvPage.why2": "Visar inte bara erfarenhet, utan även din approach",
      "cvPage.why3": "Enkelt att uppdatera och komplettera",
      "cvPage.why4": "Öppnas direkt – utan att ladda ner filer",
      "cvPage.why5": "Hjälper dig att sticka ut bland kandidater",

      "cvPage.getTitle": "Det här får du",
      "cvPage.get1": "Personlig design som matchar din bransch",
      "cvPage.get2": "Tydlig struktur: om mig, erfarenhet, skills, kontakt",
      "cvPage.get3": "Mobilanpassning (responsive)",
      "cvPage.get4": "Ren typografi och bra läsbarhet",
      "cvPage.get5": "En färdig länk att använda i ansökningar",

      "cvPage.examplesTitle": "Exempel på Online-CV",
      "cvPage.examplesIntro":
        "Nedan ser du exempel på webbaserade CV:n som visar stil, struktur och presentation.",
      "cvPage.example1": "✨ Cosmic CV — kreativt online-CV",
      "cvPage.example2": "💼 Professional CV — klassiskt format",

      "cvPage.cta":
        "Vill du ha ett professionellt online-CV? Skriv till mig – så skapar vi en stilren och tydlig presentation av din profil."
    },

    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "nav.about": "About me",

      "cvPage.seoTitle": "Professional Online CV – VS LiteCode Studio",
      "cvPage.seoDescription":
        "Professional online CV (Digital CV). Modern design, mobile-friendly layout and a strong online presentation of your profile.",

      "cvPage.title": "Professional Online CV (Digital CV)",
      "cvPage.lead":
        "An online CV is a modern alternative to a PDF resume. It shows your experience, skills and personal style in one place.",
      "cvPage.p1":
        "This format works especially well for people who want to stand out: IT, design, marketing, creative roles, freelancers and experts.",
      "cvPage.p2":
        "A CV as a website is easy to open on any device, share with employers, and add to LinkedIn and job applications.",

      "cvPage.whyTitle": "Why an online CV works",
      "cvPage.why1": "Looks more modern and professional",
      "cvPage.why2": "Shows not only experience, but also your approach",
      "cvPage.why3": "Easy to update and expand",
      "cvPage.why4": "Opens instantly — no downloads",
      "cvPage.why5": "Helps you stand out from other candidates",

      "cvPage.getTitle": "What you get",
      "cvPage.get1": "Custom design for your profession",
      "cvPage.get2": "Clear structure: about, experience, skills, contact",
      "cvPage.get3": "Responsive mobile layout",
      "cvPage.get4": "Clean typography and readability",
      "cvPage.get5": "A ready-to-use link for applications",

      "cvPage.examplesTitle": "Online CV examples",
      "cvPage.examplesIntro":
        "Below are examples of web CVs that show style, structure and presentation.",
      "cvPage.example1": "✨ Cosmic CV — creative online CV",
      "cvPage.example2": "💼 Professional CV — classic format",

      "cvPage.cta":
        "Need a professional online CV? Message me and I’ll help you build a clean and stylish presentation of your profile."
    },

    ru: {
      "nav.home": "Главная",
      "nav.services": "Услуги",
      "nav.portfolio": "Портфолио",
      "nav.contact": "Контакты",
      "nav.about": "Обо мне",

      "cvPage.seoTitle": "Профессиональное Online CV – VS LiteCode Studio",
      "cvPage.seoDescription":
        "Профессиональное онлайн CV (Digital CV). Современный дизайн, адаптация под мобильные устройства и презентация опыта в интернете.",

      "cvPage.title": "Профессиональное Online CV (Digital CV)",
      "cvPage.lead":
        "Онлайн CV — это современная альтернатива PDF-резюме. Оно показывает твой опыт, навыки и личный стиль в одном месте.",
      "cvPage.p1":
        "Формат особенно хорошо подходит тем, кто хочет выделиться: IT, дизайн, маркетинг, креативные профессии, фрилансеры и эксперты.",
      "cvPage.p2":
        "CV в виде сайта легко открыть с любого устройства, отправить работодателю и добавить в LinkedIn и заявки.",

      "cvPage.whyTitle": "Зачем нужно онлайн CV",
      "cvPage.why1": "Выглядит современно и профессионально",
      "cvPage.why2": "Показывает не только опыт, но и твой подход",
      "cvPage.why3": "Легко обновляется и дополняется",
      "cvPage.why4": "Открывается без скачивания файлов",
      "cvPage.why5": "Помогает выделиться среди кандидатов",

      "cvPage.getTitle": "Что ты получаешь",
      "cvPage.get1": "Индивидуальный дизайн под твою профессию",
      "cvPage.get2": "Структуру: о себе, опыт, навыки, контакты",
      "cvPage.get3": "Адаптацию под мобильные устройства",
      "cvPage.get4": "Аккуратную типографику и читаемость",
      "cvPage.get5": "Готовую ссылку для резюме и заявок",

      "cvPage.examplesTitle": "Примеры Online CV",
      "cvPage.examplesIntro":
        "Ниже — примеры веб-резюме, которые показывают стиль, структуру и подачу.",
      "cvPage.example1": "✨ Cosmic CV — креативное онлайн резюме",
      "cvPage.example2": "💼 Professional CV — классический формат",

      "cvPage.cta":
        "Если тебе нужно профессиональное онлайн CV — напиши мне, и я помогу создать стильную и понятную презентацию твоего опыта.",

      // Для формы (если есть)
      "form.fillAll": "Пожалуйста, заполните все поля.",
      "form.success": "Спасибо! Ваше сообщение сохранено. Я отвечу по email."
    }
  };

  function applyTranslations(lang) {
    // 1) обычные тексты
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = translations[lang]?.[key];
      if (typeof text === "string") el.textContent = text;
    });

    // 2) placeholder (если используешь)
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = translations[lang]?.[key];
      if (typeof text === "string") el.setAttribute("placeholder", text);
    });

    // 3) aria-label (если используешь)
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const text = translations[lang]?.[key];
      if (typeof text === "string") el.setAttribute("aria-label", text);
    });

    // 4) title + meta description
    const seoTitle = translations[lang]?.["cvPage.seoTitle"];
    if (seoTitle) document.title = seoTitle;

    const seoDesc = translations[lang]?.["cvPage.seoDescription"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (seoDesc && metaDesc) metaDesc.setAttribute("content", seoDesc);

    // 5) html lang
    document.documentElement.lang = lang;
  }

  // init language UI + apply
  if (langToggle) {
    langToggle.textContent = currentLang.toUpperCase();

    langToggle.addEventListener("click", () => {
      const langs = ["sv", "en", "ru"];
      const index = (langs.indexOf(currentLang) + 1) % langs.length;
      currentLang = langs[index];

      localStorage.setItem("vs-lang", currentLang);
      langToggle.textContent = currentLang.toUpperCase();
      applyTranslations(currentLang);
    });
  }

  // применить язык сразу
  applyTranslations(currentLang);

  /* ---------- CONTACT FORM DEMO (если есть форма) ---------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const statusEl = document.getElementById("contact-status");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.name?.value?.trim() || "";
      const email = contactForm.email?.value?.trim() || "";
      const message = contactForm.message?.value?.trim() || "";

      if (!name || !email || !message) {
        if (statusEl) {
          let errorMsg = "Please fill in all fields.";
          if (currentLang === "sv") errorMsg = "Fyll i alla fält.";
          if (currentLang === "ru") errorMsg = translations.ru["form.fillAll"] || "Пожалуйста, заполните все поля.";
          statusEl.textContent = errorMsg;
          statusEl.className = "contact-status error";
        }
        return;
      }

      if (statusEl) {
        let successMsg = "Thank you! Your message is saved. I will reply by email.";
        if (currentLang === "sv") successMsg = "Tack! Ditt meddelande är registrerat. Jag återkommer via mejl.";
        if (currentLang === "ru") successMsg = translations.ru["form.success"] || "Спасибо! Ваше сообщение сохранено. Я отвечу по email.";
        statusEl.textContent = successMsg;
        statusEl.className = "contact-status success";
      }

      contactForm.reset();
    });
  }
});
