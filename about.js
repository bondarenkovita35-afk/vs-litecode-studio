/* =========================
   VS LiteCode Studio — About
   RU / SV / EN
   No theme toggle
   ========================= */

const langToggle = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("vs-lang") || "ru";

const I18N = {
  ru: {
    nav: { home:"Главная", services:"Услуги", portfolio:"Портфолио", about:"Обо мне", contact:"Контакты" },
    metaTitle: "Обо мне – VS LiteCode Studio",
    kicker: "ОБО МНЕ",
    name: "Vitaliia Sivakova",
    role: "Web developer .NET · Основатель VS LiteCode Studio",
    quote: "Я верю в спокойную эстетику, ясную структуру и немного магии в каждой детали.",
    chipCity: "Стокгольм",

    // ТВОЙ ТЕКСТ — СЛОВО В СЛОВО (без изменений)
    whoTitle: "Кто я",
    whoP1: "Меня зовут Виталия Сивакова — основательница VS LiteCode Studio, современной веб студии, где дизайн, технология и креативность соединяются в одном потоке. Я создаю цифровые решения, которые работают безупречно, выглядят современно и передают настроение человека или бренда.",
    whoP2: "Мои проекты — это не только яркие неоновые концепции. Я также создаю спокойные скандинавские дизайны, строгие минималистичные решения и мягкие, уютные интерфейсы. Мои сайты подстраиваются под вкус клиента и его внутренние предпочтения — от лаконичного до футуристичного.",

    pathTitle: "Мой путь",
    pathP1: "Моё путешествие в веб-разработку началось с простого вопроса:",
    pathQuote: "«Можно ли создавать что-то, что выглядит как будущее, оставаясь удобным и понятным для каждого пользователя?»",
    pathP2: "Сегодня я создаю сайты для частных клиентов, специалистов, бизнеса , салонов красоты, экспертов и творческих людей. Со временем мой стиль сформировался так:",
    pathP3: "✨ чистые аккуратные линии ✨ премиальная визуальная глубина ✨ неоновые эффекты и динамика — когда клиент хочет выразительности ✨ скандинавская мягкость и минимализм — когда требуется спокойствие ✨ персональный дизайн, который делает каждый проект уникальным",

    philoTitle: "Моя философия",
    philoP1: "Для меня веб-разработка — это не просто написание кода. Это создание цифровой идентичности, отражающей характер, стиль и энергию человека или бизнеса.",
    philoP2: "В работе я особенно ценю:",
    philoB1: "✔ честную и открытую коммуникацию",
    philoB2: "✔ структурный и чистый код",
    philoB3: "✔ внимание к деталям",
    philoB4: "✔ результат, который не просто соответствует ожиданиям — а превосходит их",

    whyTitle: "Почему VS LiteCode Studio?",
    whyP1: "Я соединяю два мира:",
    whyP2: "техническую точность & сильный визуальный стиль",
    whyP3: "Я не использую шаблоны — каждый сайт создаётся индивидуально и становится частью личного образа клиента. Моя студия — это не «фабрика сайтов». Это мастерская, где каждый проект получает свою атмосферу, эстетику и настроение.",

    goalTitle: "Моя цель",
    goalText: "Моя цель — развивать студию до уровня ультра премиум, которая помогает людям обрести цифровое присутствие: красивое, понятное, современное и профессиональное.",
    goalBtn: "Связаться"
  },

  sv: {
    nav: { home:"Hem", services:"Tjänster", portfolio:"Portfolio", about:"Om mig", contact:"Kontakt" },
    metaTitle: "Om mig – VS LiteCode Studio",
    kicker: "OM MIG",
    name: "Vitaliia Sivakova",
    role: "Webbutvecklare .NET · Grundare av VS LiteCode Studio",
    quote: "Jag tror på lugn estetik, tydlig struktur och lite magi i varje detalj.",
    chipCity: "Stockholm",

    whoTitle: "Vem jag är",
    whoP1: "Jag heter Vitaliia Sivakova — grundare av VS LiteCode Studio, en modern webbstudio där design, teknik och kreativitet möts i ett enda flöde. Jag skapar digitala lösningar som fungerar felfritt, ser moderna ut och förmedlar känslan hos en person eller ett varumärke.",
    whoP2: "Mina projekt är inte bara neon och starka koncept. Jag skapar också lugna skandinaviska designer, strikt minimalism och mjuka, mysiga gränssnitt. Mina webbplatser anpassas efter kundens smak och inre preferenser — från avskalat till futuristiskt.",

    pathTitle: "Min väg",
    pathP1: "Min resa inom webbutveckling började med en enkel fråga:",
    pathQuote: "”Kan man skapa något som ser ut som framtiden och samtidigt är bekvämt och tydligt för varje användare?”",
    pathP2: "Idag skapar jag webbplatser för privatpersoner, specialister, företag, skönhetssalonger, experter och kreativa människor. Med tiden har min stil formats så här:",
    pathP3: "✨ rena, noggranna linjer ✨ premium visuell känsla och djup ✨ neon och dynamik — när kunden vill sticka ut ✨ skandinavisk mjukhet och minimalism — när lugn behövs ✨ personlig design som gör varje projekt unikt",

    philoTitle: "Min filosofi",
    philoP1: "För mig är webbutveckling inte bara kod. Det är att skapa en digital identitet som speglar karaktär, stil och energi hos en person eller ett företag.",
    philoP2: "I arbetet värdesätter jag särskilt:",
    philoB1: "✔ ärlig och öppen kommunikation",
    philoB2: "✔ strukturerad och ren kod",
    philoB3: "✔ fokus på detaljer",
    philoB4: "✔ ett resultat som inte bara möter förväntningar — utan överträffar dem",

    whyTitle: "Varför VS LiteCode Studio?",
    whyP1: "Jag förenar två världar:",
    whyP2: "teknisk precision & stark visuell stil",
    whyP3: "Jag använder inte mallar — varje webbplats skapas individuellt och blir en del av kundens personliga image. Min studio är inte en ”sajtfabrik”. Det är en verkstad där varje projekt får sin egen atmosfär, estetik och känsla.",

    goalTitle: "Mitt mål",
    goalText: "Mitt mål är att utveckla studion till ultra-premium nivå, som hjälper människor att få en digital närvaro: vacker, tydlig, modern och professionell.",
    goalBtn: "Kontakta mig"
  },

  en: {
    nav: { home:"Home", services:"Services", portfolio:"Portfolio", about:"About", contact:"Contact" },
    metaTitle: "About – VS LiteCode Studio",
    kicker: "ABOUT",
    name: "Vitaliia Sivakova",
    role: ".NET Web Developer · Founder of VS LiteCode Studio",
    quote: "I believe in calm aesthetics, clear structure, and a little magic in every detail.",
    chipCity: "Stockholm",

    whoTitle: "Who I am",
    whoP1: "My name is Vitaliia Sivakova — the founder of VS LiteCode Studio, a modern web studio where design, technology, and creativity flow together. I create digital solutions that work flawlessly, look modern, and capture the mood of a person or brand.",
    whoP2: "My projects are not only bright neon concepts. I also create calm Scandinavian designs, strict minimalistic solutions, and soft, cozy interfaces. My websites adapt to the client’s taste and inner preferences — from minimal to futuristic.",

    pathTitle: "My journey",
    pathP1: "My journey in web development started with a simple question:",
    pathQuote: "“Can you create something that looks like the future while staying comfortable and clear for every user?”",
    pathP2: "Today I build websites for private clients, specialists, businesses, beauty salons, experts, and creative people. Over time, my style has formed like this:",
    pathP3: "✨ clean, precise lines ✨ premium visual depth ✨ neon effects and dynamics — when the client wants expressiveness ✨ Scandinavian softness and minimalism — when calm is needed ✨ personal design that makes every project unique",

    philoTitle: "My philosophy",
    philoP1: "For me, web development is not just writing code. It’s building a digital identity that reflects the character, style, and energy of a person or business.",
    philoP2: "In my work, I especially value:",
    philoB1: "✔ honest and open communication",
    philoB2: "✔ structured and clean code",
    philoB3: "✔ attention to detail",
    philoB4: "✔ results that don’t just meet expectations — they exceed them",

    whyTitle: "Why VS LiteCode Studio?",
    whyP1: "I connect two worlds:",
    whyP2: "technical precision & strong visual style",
    whyP3: "I don’t use templates — every website is crafted individually and becomes part of the client’s personal image. My studio is not a “website factory”. It’s a workshop where each project gets its own atmosphere, aesthetics, and mood.",

    goalTitle: "My goal",
    goalText: "My goal is to grow the studio to an ultra-premium level that helps people gain a digital presence: beautiful, clear, modern, and professional.",
    goalBtn: "Get in touch"
  }
};

function applyNav(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(key === "nav.home") el.textContent = I18N[lang].nav.home;
    if(key === "nav.services") el.textContent = I18N[lang].nav.services;
    if(key === "nav.portfolio") el.textContent = I18N[lang].nav.portfolio;
    if(key === "nav.about") el.textContent = I18N[lang].nav.about;
    if(key === "nav.contact") el.textContent = I18N[lang].nav.contact;
    if(key === "about.metaTitle") document.title = I18N[lang].metaTitle;
  });
}

function applyAbout(lang){
  const t = I18N[lang];

  // meta title
  const titleEl = document.querySelector('title[data-i18n="about.metaTitle"]');
  if(titleEl) titleEl.textContent = t.metaTitle;
  document.documentElement.lang = lang;

  // hero
  setText("kicker", t.kicker);
  setText("name", t.name);
  setText("role", t.role);
  setText("quote", t.quote);
  setText("chip.city", t.chipCity);

  // sections
  setText("whoTitle", t.whoTitle);
  setText("whoP1", t.whoP1);
  setText("whoP2", t.whoP2);

  setText("pathTitle", t.pathTitle);
  setText("pathP1", t.pathP1);
  setText("pathQuote", t.pathQuote);
  setText("pathP2", t.pathP2);
  setText("pathP3", t.pathP3);

  setText("philoTitle", t.philoTitle);
  setText("philoP1", t.philoP1);
  setText("philoP2", t.philoP2);
  setText("philoB1", t.philoB1);
  setText("philoB2", t.philoB2);
  setText("philoB3", t.philoB3);
  setText("philoB4", t.philoB4);

  setText("whyTitle", t.whyTitle);
  setText("whyP1", t.whyP1);
  setText("whyP2", t.whyP2);
  setText("whyP3", t.whyP3);

  setText("goalTitle", t.goalTitle);
  setText("goalText", t.goalText);
  setText("goalBtn", t.goalBtn);

  // year
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
}

function setText(key, value){
  const el = document.querySelector(`[data-about="${key}"]`);
  if(el) el.textContent = value;
}

function updateLangButton(){
  if(!langToggle) return;
  langToggle.textContent = currentLang.toUpperCase();
}

function init(){
  // safety: allow only supported
  if(!I18N[currentLang]) currentLang = "ru";

  applyNav(currentLang);
  applyAbout(currentLang);
  updateLangButton();

  if(langToggle){
    langToggle.addEventListener("click", ()=>{
      const order = ["ru","sv","en"];
      const i = order.indexOf(currentLang);
      currentLang = order[(i+1) % order.length];
      localStorage.setItem("vs-lang", currentLang);

      applyNav(currentLang);
      applyAbout(currentLang);
      updateLangButton();
    });
  }
}

init();
