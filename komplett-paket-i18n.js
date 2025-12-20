/* =========================================================
   VS LiteCode Studio — Services Pages i18n (SV / EN / RU)
   Works for:
   - premium-website.html
   - premium-landing.html
   - komplett-paket.html
   - portfolio2.html (NEW)
   Requirements:
   - HTML elements must have data-i18n keys
   - Button #lang-toggle exists in header
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  const langs = ["sv", "en", "ru"];

  let currentLang = localStorage.getItem("vs-lang") || "sv";
  if (!langs.includes(currentLang)) currentLang = "sv";

  // --- TRANSLATIONS ---
  const t = {
    sv: {
      // NAV
      "nav.home": "Hem",
      "nav.services": "Tjänster",
      "nav.portfolio": "Portfolio",
      "nav.about": "Om mig",
      "nav.contact": "Kontakt",

      // ===== Premium WEBSITE page =====
      "web.title": "Premium webbsida (för företag och personligt varumärke)",
      "web.lead":
        "En webbsida är grunden för din närvaro online. Den visar vem du är, vad du gör och varför man kan lita på dig.",
      "web.p1":
        "Jag bygger moderna webbsidor med tydlig struktur, ren design och mobilanpassning. En sådan sida är enkel att använda i reklam, dela som länk och synas i Google.",
      "web.p2":
        "Passar företag, experter, studios och specialister som vill se professionella ut och vara tillgängliga online 24/7.",

      "web.why.title": "Varför du behöver en webbsida",
      "web.why.1": "Ökar förtroende och igenkänning",
      "web.why.2": "Blir en central punkt för reklam och länkar",
      "web.why.3": "Hjälper kunder hitta dig via sök",
      "web.why.4": "Förklarar tjänster och fördelar tydligt",
      "web.why.5": "Ser mer seriöst ut än bara sociala medier",

      "web.get.title": "Det här får du",
      "web.get.1": "Design anpassad efter nisch och stil",
      "web.get.2": "Mobil- och surfplattanpassning",
      "web.get.3": "Tydlig struktur och navigation",
      "web.get.4": "Grundläggande SEO-förberedelse",
      "web.get.5": "Modern, ren och professionell stil",

      "web.examples.title": "Exempel på webbsidor",
      "web.examples.intro":
        "Här är exempel som visar stil, struktur och presentation.",
      "web.examples.1": "✨ Lumera Circle — premium business site",
      "web.examples.2": "💄 Beauty Studio — website for beauty niche",
      "web.examples.3": "🧩 Bootstrap project — demo website",
      "web.examples.cta":
        "Behöver du en professionell webbsida för ditt projekt? Skriv till mig så pratar vi om format och stil.",

      // ===== Premium LANDING page =====
      "landing.title": "Premium landningssida för företag eller kampanj",
      "landing.lead":
        "En landningssida är inte bara en webbsida. Den förklarar värdet, bygger förtroende och leder till kontakt eller köp.",
      "landing.p1":
        "Jag skapar moderna landningssidor med tydlig struktur, stark typografi, animationer och mobilanpassning. Perfekt för annonser, sociala medier och direkta länkar.",
      "landing.p2":
        "Passar experter, småföretag, studios, tjänster och online-produkter. Allt byggs efter ditt mål: leads, beställningar eller kontakt.",

      "landing.why.title": "Varför en landningssida ofta fungerar bättre",
      "landing.why.1": "Fokus på ett erbjudande eller produkt",
      "landing.why.2": "Tydlig struktur utan onödigt innehåll",
      "landing.why.3": "Smart flöde: intresse → handling",
      "landing.why.4": "Snabb och lätt att använda i mobilen",

      "landing.do.title": "Det här gör jag för dig",
      "landing.do.1": "Design för din nisch och varumärkesstil",
      "landing.do.2": "Modern typografi och färgsystem",
      "landing.do.3": "Mobilanpassning",
      "landing.do.4": "Grundläggande SEO och annons-anpassning",

      "landing.examples.title": "Exempel på landningssidor",
      "landing.examples.intro":
        "Här är demo-landningssidor som visar stil, struktur och animationer.",
      "landing.examples.1": "🚗 Landing page för bilservice / företag",
      "landing.examples.2": "✨ Premium business landing",
      "landing.examples.cta":
        "Om du gillar formatet – skriv till mig så diskuterar vi din landningssida.",

      // ===== Package page =====
      "package.title": "Komplett paket – Digital Personal Brand",
      "package.lead":
        "Tre produkter. En helhet. Ett professionellt system som bygger förtroende, synlighet och tydlig närvaro online.",
      "package.text":
        "Paketet kombinerar online-CV, portfolio-webbplats och digitalt visitkort i ett enhetligt visuellt och tekniskt koncept.",

      "package.card.title": "CV + Portfolio + Digitalt visitkort",
      "package.card.desc":
        "För specialister, frilansare och entreprenörer som vill vara professionella och enkla att kontakta.",
      "package.item1": "Online-CV – erfarenhet, kompetens, bakgrund",
      "package.item2": "Portfolio – projekt, tjänster och arbetsstil",
      "package.item3": "Digitalt visitkort + QR – allt i en länk",

      "package.result":
        "Resultatet är en sammanhängande profil där besökaren snabbt förstår vem du är och hur man tar kontakt.",
      "package.benefit1": "Enhetlig design och färgsystem",
      "package.benefit2": "Logisk navigation mellan alla delar",
      "package.benefit3": "Responsiv för mobil och desktop",

      "package.example": "Exempel:",
      "package.price": "Enhetlig design · Snabb leverans · Bra paketpris",
      "package.cta.text":
        "Vill du bygga eller stärka ditt personliga varumärke online? Kontakta mig så diskuterar vi din lösning.",
      "package.cta.btn": "Kontakta mig",

      // ===== Portfolio service page (NEW) =====
      "portfolioService.title": "Portfolio / projektsida",
      "portfolioService.lead":
        "En stilren sida som visar dina projekt professionellt och tydligt.",
      "portfolioService.p1":
        "Perfekt för utvecklare, designers, kreatörer och specialister som vill visa upp sina arbeten och case.",
      "portfolioService.p2":
        "Strukturen är enkel att uppdatera: lägg till nya projekt när du vill utan att göra om hela sidan.",

      "portfolioService.main.title": "Exempel på portfolio",
      "portfolioService.main.intro":
        "Här är en länk till ett exempel som visar stil, struktur och presentation av projekt.",
      "portfolioService.main.linkLabel": "Exempel / mall:",
      "portfolioService.main.linkText": "Läs mer om portfolio-tjänsten",
      "portfolioService.main.cta":
        "Vill du ha en liknande projektsida? Skriv till mig så skapar jag en portfolio i din stil.",

      "portfolioService.get.title": "Det här får du",
      "portfolioService.get.1": "Projektkort med bild och beskrivning",
      "portfolioService.get.2": "Länkar till GitHub, LinkedIn eller Fiverr",
      "portfolioService.get.3": "Enkel struktur för att lägga till fler projekt",
      "portfolioService.get.4": "Responsiv design för mobil och surfplatta",
      "portfolioService.get.5": "Enhetlig design som stärker ditt varumärke",

      "portfolioService.cta.text":
        "Vill du ha portfolio eller ett komplett paket (CV + Portfolio + Digitalt visitkort)? Skriv till mig så hittar vi bästa formatet.",
      "portfolioService.cta.btn": "Kontakta mig"
    },

    en: {
      // NAV
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.about": "About",
      "nav.contact": "Contact",

      // WEBSITE
      "web.title": "Premium website (for business and personal brand)",
      "web.lead":
        "A website is the foundation of your online presence. It shows who you are, what you do, and why people can trust you.",
      "web.p1":
        "I build modern websites with a clean structure, neat design and mobile-friendly layout. Easy to use in ads, share as a link and promote in Google.",
      "web.p2":
        "Perfect for businesses, experts, studios and specialists who want to look professional and stay available online 24/7.",

      "web.why.title": "Why you need a website",
      "web.why.1": "Builds trust and recognition",
      "web.why.2": "Central hub for ads and links",
      "web.why.3": "Helps customers find you via search",
      "web.why.4": "Explains services and benefits clearly",
      "web.why.5": "Looks more serious than only social media",

      "web.get.title": "What you get",
      "web.get.1": "Custom design for your niche and style",
      "web.get.2": "Mobile and tablet responsive layout",
      "web.get.3": "Clear structure and navigation",
      "web.get.4": "Basic SEO preparation",
      "web.get.5": "Modern, clean visual style",

      "web.examples.title": "Website examples",
      "web.examples.intro": "Examples that show style and structure.",
      "web.examples.1": "✨ Lumera Circle — premium business site",
      "web.examples.2": "💄 Beauty Studio — beauty niche website",
      "web.examples.3": "🧩 Bootstrap project — demo website",
      "web.examples.cta":
        "Need a professional website for your project? Message me and we’ll discuss format and style.",

      // LANDING
      "landing.title": "Premium landing page for business",
      "landing.lead":
        "A landing page is not just a website. It explains value, builds trust and converts visitors into contacts or orders.",
      "landing.p1":
        "I create modern landing pages with clean structure, strong typography, animations and mobile-friendly layout. Great for ads, social media and direct links.",
      "landing.p2":
        "Perfect for experts, small businesses, studios, services and online products. Built around your goal: leads, orders or contact.",

      "landing.why.title": "Why landing pages often work better",
      "landing.why.1": "Focus on one offer or product",
      "landing.why.2": "Clear structure, no extra noise",
      "landing.why.3": "Smart flow: interest → action",
      "landing.why.4": "Fast and easy on mobile",

      "landing.do.title": "What I do for you",
      "landing.do.1": "Custom design for your niche and brand",
      "landing.do.2": "Modern typography and color system",
      "landing.do.3": "Mobile optimization",
      "landing.do.4": "Basic SEO + ad-ready structure",

      "landing.examples.title": "Landing examples",
      "landing.examples.intro": "Demo landings that show style and structure.",
      "landing.examples.1": "🚗 Car service / company landing",
      "landing.examples.2": "✨ Premium business landing",
      "landing.examples.cta":
        "If you like this format — message me and we’ll plan your landing page.",

      // PACKAGE
      "package.title": "Complete Package – Digital Personal Brand",
      "package.lead":
        "Three products. One system. A professional solution that builds trust, visibility and clear online presence.",
      "package.text":
        "This package combines an online CV, portfolio website and digital business card into one consistent system.",

      "package.card.title": "CV + Portfolio + Digital Business Card",
      "package.card.desc":
        "For specialists, freelancers and entrepreneurs who want a professional presence and easy contact.",
      "package.item1": "Online CV — experience, skills, background",
      "package.item2": "Portfolio — projects, services, work style",
      "package.item3": "Digital card + QR — everything in one link",

      "package.result":
        "The result is a clear digital profile where visitors instantly understand who you are and how to contact you.",
      "package.benefit1": "Unified design and color system",
      "package.benefit2": "Logical navigation across all parts",
      "package.benefit3": "Responsive for mobile and desktop",

      "package.example": "Examples:",
      "package.price": "Unified design · Fast delivery · Great package price",
      "package.cta.text":
        "Want to build or strengthen your personal brand online? Contact me and we’ll plan your solution.",
      "package.cta.btn": "Contact me",

      // ===== Portfolio service page (NEW) =====
      "portfolioService.title": "Portfolio / project page",
      "portfolioService.lead":
        "A clean and stylish page to showcase your projects professionally.",
      "portfolioService.p1":
        "Perfect for developers, designers and creatives who want to present work and case studies clearly.",
      "portfolioService.p2":
        "Easy to update: add new projects anytime without rebuilding the whole page.",

      "portfolioService.main.title": "Portfolio example",
      "portfolioService.main.intro":
        "Below is a link to a portfolio example that shows layout, structure and presentation.",
      "portfolioService.main.linkLabel": "Example / template:",
      "portfolioService.main.linkText": "Read more about the portfolio service",
      "portfolioService.main.cta":
        "Want a similar project page? Message me and I’ll build a portfolio in your style.",

      "portfolioService.get.title": "What you get",
      "portfolioService.get.1": "Project cards with image and description",
      "portfolioService.get.2": "Links to GitHub, LinkedIn or Fiverr",
      "portfolioService.get.3": "Easy structure for adding more projects",
      "portfolioService.get.4": "Responsive for mobile and tablet",
      "portfolioService.get.5": "A consistent style that strengthens your brand",

      "portfolioService.cta.text":
        "Need a portfolio or a complete package (CV + Portfolio + Digital Card)? Message me and we’ll choose the best format.",
      "portfolioService.cta.btn": "Contact me"
    },

    ru: {
      // NAV
      "nav.home": "Главная",
      "nav.services": "Услуги",
      "nav.portfolio": "Портфолио",
      "nav.about": "Обо мне",
      "nav.contact": "Контакты",

      // WEBSITE
      "web.title": "Премиум веб-сайт для бизнеса и личного бренда",
      "web.lead":
        "Веб-сайт — основа твоего присутствия в интернете. Он показывает, кто ты, чем занимаешься и почему тебе можно доверять.",
      "web.p1":
        "Я создаю современные сайты с чистой структурой, аккуратным дизайном и адаптацией под мобильные устройства. Такой сайт удобно использовать в рекламе, делиться ссылкой и продвигать в Google.",
      "web.p2":
        "Подходит для бизнеса, экспертов, студий и специалистов, которым важно выглядеть профессионально и быть доступными онлайн 24/7.",

      "web.why.title": "Зачем нужен веб-сайт",
      "web.why.1": "Повышает доверие и узнаваемость",
      "web.why.2": "Работает как центральная точка для рекламы и ссылок",
      "web.why.3": "Помогает находить клиентов через поиск",
      "web.why.4": "Чётко объясняет услуги и преимущества",
      "web.why.5": "Выглядит серьёзнее, чем только соцсети",

      "web.get.title": "Что ты получаешь",
      "web.get.1": "Индивидуальный дизайн под нишу и стиль",
      "web.get.2": "Адаптацию под телефон и планшет",
      "web.get.3": "Понятную структуру и навигацию",
      "web.get.4": "Базовую SEO-подготовку",
      "web.get.5": "Современный, аккуратный визуальный стиль",

      "web.examples.title": "Примеры веб-сайтов",
      "web.examples.intro": "Ниже — примеры сайтов по стилю и структуре.",
      "web.examples.1": "✨ Lumera Circle — премиум бизнес-сайт",
      "web.examples.2": "💄 Beauty Studio — сайт для beauty-сферы",
      "web.examples.3": "🧩 Bootstrap project — демо-сайт",
      "web.examples.cta":
        "Если тебе нужен профессиональный сайт под твой проект — просто напиши мне, и мы обсудим формат и стиль.",

      // LANDING
      "landing.title": "Премиум лендинг для бизнеса или компании",
      "landing.lead":
        "Лендинг — это не просто сайт. Это страница, которая объясняет ценность, вызывает доверие и приводит клиентов.",
      "landing.p1":
        "Я создаю современные лендинги с чистой структурой, выразительной типографикой, анимациями и адаптацией под мобильные устройства. Отлично работает для рекламы, соцсетей и прямых ссылок.",
      "landing.p2":
        "Подойдёт для экспертов, малого бизнеса, студий, сервисов и онлайн-продуктов. Всё делается под цель: заявки, заказы или контакты.",

      "landing.why.title": "Почему лендинг работает лучше обычного сайта",
      "landing.why.1": "Чёткий фокус на одном предложении или продукте",
      "landing.why.2": "Понятная структура без лишней информации",
      "landing.why.3": "Продуманная логика: от интереса → к действию",
      "landing.why.4": "Быстрая загрузка и удобство на телефоне",

      "landing.do.title": "Что я делаю для тебя",
      "landing.do.1": "Индивидуальный дизайн под нишу и стиль бренда",
      "landing.do.2": "Современная типографика и цветовая система",
      "landing.do.3": "Адаптация под мобильные устройства",
      "landing.do.4": "Подготовка под SEO и рекламу",

      "landing.examples.title": "Примеры лендингов",
      "landing.examples.intro": "Ниже — демо-лендинги по стилю и структуре.",
      "landing.examples.1": "🚗 Лендинг автосервиса / компании",
      "landing.examples.2": "✨ Бизнес-лендинг с премиум стилем",
      "landing.examples.cta":
        "Если тебе близок такой формат — просто напиши мне, и мы обсудим твой лендинг.",

      // PACKAGE
      "package.title": "Полный пакет — Digital Personal Brand",
      "package.lead":
        "Три продукта. Одна система. Профессиональное решение для сильного личного бренда.",
      "package.text":
        "Пакет объединяет онлайн-резюме, портфолио и цифровую визитку в единую систему.",

      "package.card.title": "CV + Портфолио + Цифровая визитка",
      "package.card.desc":
        "Для специалистов, фрилансеров и предпринимателей, которым нужна профессиональная подача и лёгкий контакт.",
      "package.item1": "Онлайн-CV — опыт, навыки, фон",
      "package.item2": "Портфолио — проекты, услуги, стиль работы",
      "package.item3": "Визитка + QR — всё в одной ссылке",

      "package.result":
        "В итоге посетитель сразу понимает, кто вы и как с вами связаться.",
      "package.benefit1": "Единый стиль и дизайн",
      "package.benefit2": "Логичная навигация между частями",
      "package.benefit3": "Адаптивность под телефон и компьютер",

      "package.example": "Примеры:",
      "package.price": "Единый стиль · Быстрая работа · Выгодная цена",
      "package.cta.text":
        "Хотите усилить личный бренд онлайн? Напишите мне — обсудим ваш пакет.",
      "package.cta.btn": "Связаться",

      // ===== Portfolio service page (NEW) =====
      "portfolioService.title": "Портфолио / страница проектов",
      "portfolioService.lead":
        "Стильная страница для демонстрации ваших работ, изображений и проектов.",
      "portfolioService.p1":
        "Подходит разработчикам, дизайнерам и специалистам, которым важно показать проекты красиво и структурно.",
      "portfolioService.p2":
        "Страница легко дополняется: вы сможете быстро добавлять новые проекты без переделок.",

      "portfolioService.main.title": "Пример портфолио",
      "portfolioService.main.intro":
        "Ниже — ссылка на пример, который показывает стиль, структуру и подачу проектов.",
      "portfolioService.main.linkLabel": "Пример / шаблон:",
      "portfolioService.main.linkText": "Läs mer om portfolio-tjänsten",
      "portfolioService.main.cta":
        "Если хочешь похожую страницу проектов — напиши мне, и я сделаю портфолио под твой стиль и цель.",

      "portfolioService.get.title": "Что ты получаешь",
      "portfolioService.get.1": "Карточки проектов с фото и описанием",
      "portfolioService.get.2": "Ссылки на GitHub, LinkedIn или Fiverr",
      "portfolioService.get.3": "Лёгкое добавление новых проектов",
      "portfolioService.get.4": "Адаптивность под телефон и планшет",
      "portfolioService.get.5": "Единый стиль, который усиливает личный бренд",

      "portfolioService.cta.text":
        "Хочешь портфолио или полный пакет (CV + Portfolio + Digital Card)? Напиши мне — подберём лучший формат.",
      "portfolioService.cta.btn": "Связаться"
    }
  };

  function apply(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = t?.[lang]?.[key];
      if (typeof text === "string") el.textContent = text;
    });

    document.documentElement.lang = lang;
    if (langToggle) langToggle.textContent = lang.toUpperCase();
  }

  // init
  apply(currentLang);

  // click
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = (langs.indexOf(currentLang) + 1) % langs.length;
      currentLang = langs[next];
      localStorage.setItem("vs-lang", currentLang);
      apply(currentLang);
    });
  }
});
