// ---------- THEME TOGGLE ----------
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    const savedTheme = localStorage.getItem("vs-theme");
    if (savedTheme) {
        document.body.classList.toggle("light-theme", savedTheme === "light");
        themeToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";
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

        "hero.tag": "Webbutvecklare · HTML · CSS · JS · .NET · Stockholm, Sverige",
        "hero.title": "Välkommen till VS LiteCode Studio!",
        "hero.subtitle": "Jag skapar moderna, responsiva och visuellt starka webbplatser som är både snygga och enkla att använda. Behöver du en professionell webbnärvaro? online CV, portfolio, fotoalbum, företagshemsida eller ett digitalt visitkort med QR-kod? Du har kommit rätt! Mitt fokus är att ge privatpersoner och småföretag en stark digital närvaro med design som känns modern, levande och lite magiskt skräddarsydda webbplatser som speglar deras unika identitet och mål.",
        "hero.btnServices": "Se mina tjänster",
        "hero.btnProjects": "Visa projekt",
        "hero.role": "Webbutvecklare .NET · Grundare av VS LiteCode Studio",

        "services.title": "Professionella tjänster",
        "services.intro": "Här kan du se vad jag erbjuder. Under varje tjänst finns plats för en länk med exempel eller mallar.",
        "services.example": "Exempel / mall:",
        "services.contactCta": "Vill du boka en tjänst eller har frågor? Skicka ett meddelande via kontaktsidan så svarar jag via mejl.",
        "services.btnContact": "Gå till kontakt",

        "services.cv.title": "1. Online-CV (HTML + CSS + ev. JS)",
        "services.cv.desc": "Personligt online-CV med din bild, sammanfattning, erfarenhet, utbildning, kontakt och länkar. Passar dig som söker jobb eller vill ha en enkel professionell sida.",
        "services.cv.item1": "Modern, responsiv layout",
        "services.cv.item2": "Lätt att uppdatera senare",
        "services.cv.item3": "Publicering på GitHub Pages ingår",
        "services.cv.price": "Pris: ca 500–900 kr",

        "services.card.title": "2. Digitalt visitkort + QR-kod",
        "services.card.desc": "En liten webbplats med bild, kort presentation, kontaktuppgifter och länkar. Perfekt att koppla till QR-kod på tryckt visitkort, LinkedIn eller Instagram.",
        "services.card.item1": "Mobil-först design",
        "services.card.item2": "QR-kod som leder till sidan",
        "services.card.item3": "Anpassad efter din stil och färger",
        "services.card.price": "Pris: ca 600–900 kr",

        "services.simple.title": "3. Enkel hemsida (1–3 sektioner)",
        "services.simple.desc": "För coacher, lärare, frisörer eller andra småföretag som behöver en tydlig hemsida med startsida, kort info om dig, tjänster och kontakt.",
        "services.simple.item1": "Design i dina färger",
        "services.simple.item2": "Responsiv för mobil och surfplatta",
        "services.simple.item3": "Kontaktformulär eller länk till mejl",
        "services.simple.price": "Pris: ca 1 000–2 000 kr",

        "services.portfolio.title": "4. Portfolio / projectsida",
        "services.portfolio.desc": "En stilren sida där du kan visa upp dina arbeten, bilder och projekt. Perfekt för utvecklare, designers, fotografer eller kreativa yrken.",
        "services.portfolio.item1": "Projektkort med bild och beskrivning",
        "services.portfolio.item2": "Länkar till GitHub, LinkedIn eller Fiverr",
        "services.portfolio.item3": "Enkel struktur där du kan lägga till fler projekt",
        "services.portfolio.price": "Pris: ca 1 500–2 500 kr",

        "services.album.title": "5. Magiskt fotoalbum (familje- eller babyalbum)",
        "services.album.desc": "Interaktivt online-album med animationer, mjuka övergångar, glitter- och stjärneffekter. Perfekt för familjefoton eller speciella minnen.",
        "services.album.item1": "Plats för ca 20–50 bilder",
        "services.album.item2": "Responsiv design",
        "services.album.item3": "Delbar länk till familj och vänner",
        "services.album.price": "Pris: ca 1 000–2 000 kr",

        "services.landing.title": "6. Landningssida för kampanj eller företag",
        "services.landing.desc": "En professionell landningssida med hero-sektion, tydliga knappar och modern typografi. Bra för kampanjer, event eller annonser.",
        "services.landing.item1": "Tydlig call-to-action",
        "services.landing.item2": "Optimerad för mobiltrafik",
        "services.landing.item3": "Animerade detaljer och neon-känsla",
        "services.landing.price": "Pris: ca 3 000–6 000 kr",

        "services.fix.title": "7. Anpassning & fix av befintlig hemsida",
        "services.fix.desc": "Jag kan hjälpa dig att rätta små fel, uppdatera designen eller flytta din sida till GitHub Pages.",
        "services.fix.item1": "Design-förbättringar",
        "services.fix.item2": "Responsivitet / mobilanpassning",
        "services.fix.item3": "Felsökning av HTML/CSS",
        "services.fix.price": "Pris: ca 200–300 kr / timme",

        "services.package.title": "8. Komplett paket (CV + Portfolio + Visitkort)",
        "services.package.desc": "Tre produkter i samma stil: online-CV, portfolio-sida och digitalt visitkort med QR-kod. Perfekt om du vill starta din personliga brand.",
        "services.package.item1": "Enhetlig design",
        "services.package.item2": "Snabb leverans",
        "services.package.item3": "Bra paketpris",
        "services.package.price": "Pris: ca 1 000–2 000 kr",

        "portfolio.title": "Portfolio",
        "portfolio.intro": "Här kan du se några av mina senaste projekt. Klicka på korten för att öppna live-versioner.",
        "portfolio.cv.title": "Online-CV",
        "portfolio.cv.desc": "Webbaserat CV med personlig text, sektioner för erfarenhet och utbildning, samt länk till GitHub och LinkedIn.",
        "portfolio.studio.title": "VS LiteCode Studio – portfoliosida",
        "portfolio.studio.desc": "En sida som presenterar tjänster, projekt och kontakt – byggd för att visa upp min webbutveckling.",
        "portfolio.box.title": "Hemsida för boxningstränare",
        "portfolio.box.desc": "Kundprojekt med schema, priser, galleri, kontaktformulär och Google Maps-karta. Neon-inspirerad design.",
        "portfolio.album.title": "Magiskt fotoalbum – familjeprojekt",
        "portfolio.album.desc": "Ett modernt och responsivt fotoalbum med HTML, CSS och JavaScript. Skapat som en del av min utvecklingsportfölj.",

        "contact.title": "Skicka meddelande",
        "contact.text": "Jag föredrar att ha kontakt via mejl eller meddelanden. Fyll i formuläret så återkommer jag så snart jag kan.",
        "contact.name": "Namn",
        "contact.email": "E-post",
        "contact.message": "Meddelande",
        "contact.btnSend": "Skicka meddelande",
        "contact.note": "(Demo – meddelandet skickas inte på riktigt, men på en riktig server kan detta kopplas till mejl.)"
    },

    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",

        "hero.tag": "Web developer · HTML · CSS · JS · .NET · Stockholm, Sweden",
        "hero.title": "I build modern, neon-glow websites that feel magical but are easy to use.",
        "hero.subtitle": "I help individuals and small businesses get a clear, responsive and stylish online presence – from simple pages to portfolios, photo albums and digital business cards.",
        "hero.btnServices": "View my services",
        "hero.btnProjects": "See projects",
        "hero.role": ".NET Web Developer · Founder of VS LiteCode Studio",

        "services.title": "Professional services",
        "services.intro": "Here you can see what I offer. Under each service there is space for a link to examples or templates.",
        "services.example": "Example / template:",
        "services.contactCta": "Want to order a service or have questions? Send me a message via the contact page and I will reply by email.",
        "services.btnContact": "Go to contact",

        "services.cv.title": "1. Online CV (HTML + CSS + optional JS)",
        "services.cv.desc": "Personal online CV with your photo, summary, experience, education, contact and links.",
        "services.cv.item1": "Modern, responsive layout",
        "services.cv.item2": "Easy to update later",
        "services.cv.item3": "Publishing on GitHub Pages included",
        "services.cv.price": "Price: about 500–900 SEK",

        "services.card.title": "2. Digital business card + QR code",
        "services.card.desc": "Small one-page site with photo, short intro, contact info and links. Perfect with printed QR code, LinkedIn or Instagram.",
        "services.card.item1": "Mobile-first design",
        "services.card.item2": "QR code that leads to the page",
        "services.card.item3": "Styled to match your colours",
        "services.card.price": "Price: about 600–900 SEK",

        "services.simple.title": "3. Simple website (1–3 sections)",
        "services.simple.desc": "For coaches, teachers, hairdressers and other small businesses that need a clear website.",
        "services.simple.item1": "Design in your colours",
        "services.simple.item2": "Responsive for phones and tablets",
        "services.simple.item3": "Contact form or email link",
        "services.simple.price": "Price: about 1 000–2 000 SEK",

        "services.portfolio.title": "4. Portfolio / project page",
        "services.portfolio.desc": "Clean page where you can show your work, images and projects.",
        "services.portfolio.item1": "Project cards with image and text",
        "services.portfolio.item2": "Links to GitHub, LinkedIn or Fiverr",
        "services.portfolio.item3": "Easy structure for adding more projects",
        "services.portfolio.price": "Price: about 1 500–2 500 SEK",

        "services.album.title": "5. Magic photo album (family / baby)",
        "services.album.desc": "Interactive online album with soft transitions, glitter and star effects.",
        "services.album.item1": "Space for about 20–50 photos",
        "services.album.item2": "Responsive design",
        "services.album.item3": "Shareable link for friends and family",
        "services.album.price": "Price: about 1 000–2 000 SEK",

        "services.landing.title": "6. Landing page for campaign or company",
        "services.landing.desc": "Professional landing page with hero section, clear buttons and modern typography.",
        "services.landing.item1": "Clear call-to-action",
        "services.landing.item2": "Optimised for mobile traffic",
        "services.landing.item3": "Animated details and neon feeling",
        "services.landing.price": "Price: about 3 000–6 000 SEK",

        "services.fix.title": "7. Adjustments & fixes of existing website",
        "services.fix.desc": "I can fix small bugs, update design or move your site to GitHub Pages.",
        "services.fix.item1": "Design improvements",
        "services.fix.item2": "Responsive / mobile fixes",
        "services.fix.item3": "HTML/CSS debugging",
        "services.fix.price": "Price: about 200–300 SEK / hour",

        "services.package.title": "8. Complete package (CV + Portfolio + Card)",
        "services.package.desc": "Three products in the same style: online CV, portfolio and digital business card with QR code.",
        "services.package.item1": "Consistent design",
        "services.package.item2": "Fast delivery",
        "services.package.item3": "Good package price",
        "services.package.price": "Price: about 1 000–2 000 SEK",

        "portfolio.title": "Portfolio",
        "portfolio.intro": "Here are some of my latest projects. Click the cards to open the live versions.",
        "portfolio.cv.title": "Online CV",
        "portfolio.cv.desc": "Web based CV with personal text, experience, education and links.",
        "portfolio.studio.title": "VS LiteCode Studio – portfolio site",
        "portfolio.studio.desc": "Site that shows my services, projects and contact.",
        "portfolio.box.title": "Website for boxing coach",
        "portfolio.box.desc": "Client project with schedule, prices, gallery, contact form and Google Maps.",
        "portfolio.album.title": "Magic photo album – family project",
        "portfolio.album.desc": "Modern responsive photo album built with HTML, CSS and JavaScript.",

        "contact.title": "Send a message",
        "contact.text": "I prefer to communicate via email or messages. Fill in the form and I will reply as soon as I can.",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Message",
        "contact.btnSend": "Send message",
        "contact.note": "(Demo – the message is not sent for real here, but on a real server this can be connected to email.)"
    },

ru: {
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.portfolio": "Портфолио",
    "nav.contact": "Контакты",

    "hero.tag": "Веб-разработчик · HTML · CSS · JS · .NET · Стокгольм, Швеция",
    "hero.title": "Добро пожаловать в VS LiteCode Studio!",
    "hero.subtitle": "Я создаю современные, адаптивные и визуально яркие веб-сайты, которые выглядят стильно и остаются простыми в использовании. Нужна профессиональная онлайн-презентация? онлайн-резюме, портфолио, фотоальбом, сайт для бизнеса или цифровая визитка с QR-кодом? Вы по адресу! Моя цель — помочь частным клиентам и малым компаниям создать сильное цифровое присутствие, с дизайном, который ощущается современным, живым и немного волшебным, отражая их индивидуальность и цели.",
    "hero.btnServices": "Мои услуги",
    "hero.btnProjects": "Проекты",
    "hero.role": "Веб-разработчик .NET · Основатель VS LiteCode Studio",

    "services.title": "Профессиональные услуги",
    "services.intro": "Здесь вы можете увидеть, что я предлагаю. Под каждой услугой есть место для ссылки на пример или шаблон.",
    "services.example": "Пример / шаблон:",
    "services.contactCta": "Хотите заказать услугу или задать вопрос? Напишите сообщение через контактную форму, и я отвечу по email.",
    "services.btnContact": "Перейти в контакты",

    "services.cv.title": "1. Онлайн-резюме (HTML + CSS + возможно JS)",
    "services.cv.desc": "Персональное онлайн-резюме с фотографией, описанием, опытом, образованием, контактами и ссылками.",
    "services.cv.item1": "Современный адаптивный дизайн",
    "services.cv.item2": "Легко обновлять в будущем",
    "services.cv.item3": "Публикация на GitHub Pages включена",
    "services.cv.price": "Цена: примерно 500–900 кр",

    "services.card.title": "2. Цифровая визитка + QR-код",
    "services.card.desc": "Мини-сайт с фотографией, кратким описанием, контактами и ссылками. Идеально подходит для QR-кода, LinkedIn или Instagram.",
    "services.card.item1": "Мобильный дизайн",
    "services.card.item2": "QR-код, ведущий на сайт",
    "services.card.item3": "Стиль подбирается под ваши цвета",
    "services.card.price": "Цена: примерно 600–900 кр",

    "services.simple.title": "3. Простой сайт (1–3 секции)",
    "services.simple.desc": "Для коучей, преподавателей, мастеров и малого бизнеса, кому нужен понятный сайт.",
    "services.simple.item1": "Дизайн в ваших цветах",
    "services.simple.item2": "Адаптивный под телефон и планшет",
    "services.simple.item3": "Контактная форма или ссылка на email",
    "services.simple.price": "Цена: примерно 1 000–2 000 кр",

    "services.portfolio.title": "4. Портфолио / страница проектов",
    "services.portfolio.desc": "Стильная страница для демонстрации ваших работ, изображений и проектов.",
    "services.portfolio.item1": "Карточки проектов с фото и описанием",
    "services.portfolio.item2": "Ссылки на GitHub, LinkedIn или Fiverr",
    "services.portfolio.item3": "Лёгкое добавление новых проектов",
    "services.portfolio.price": "Цена: примерно 1 500–2 500 кр",

    "services.album.title": "5. Волшебный фотоальбом (семейный / детский)",
    "services.album.desc": "Интерактивный онлайн-альбом с плавными анимациями, блёстками и эффектами звёзд.",
    "services.album.item1": "Место для 20–50 фотографий",
    "services.album.item2": "Адаптивный дизайн",
    "services.album.item3": "Удобная ссылка для друзей и семьи",
    "services.album.price": "Цена: примерно 1 000–2 000 кр",

    "services.landing.title": "6. Лендинг для кампании или компании",
    "services.landing.desc": "Профессиональный лендинг с крупным героем, кнопками и современной типографикой.",
    "services.landing.item1": "Чёткий призыв к действию",
    "services.landing.item2": "Оптимизация под мобильный трафик",
    "services.landing.item3": "Анимированные детали и неоновый стиль",
    "services.landing.price": "Цена: примерно 3 000–6 000 кр",

    "services.fix.title": "7. Исправление и настройка существующего сайта",
    "services.fix.desc": "Помогаю исправить ошибки, обновить дизайн или перенести сайт на GitHub Pages.",
    "services.fix.item1": "Улучшение дизайна",
    "services.fix.item2": "Мобильная адаптация",
    "services.fix.item3": "Поиск и исправление ошибок в HTML/CSS",
    "services.fix.price": "Цена: примерно 200–300 кр / час",

    "services.package.title": "8. Полный пакет (CV + Портфолио + Визитка)",
    "services.package.desc": "Три продукта в одном стиле: онлайн-резюме, портфолио и цифровая визитка с QR-кодом.",
    "services.package.item1": "Единый современный стиль",
    "services.package.item2": "Быстрая работа",
    "services.package.item3": "Выгодная цена",
    "services.package.price": "Цена: примерно 1 000–2 000 кр",

    "portfolio.title": "Портфолио",
    "portfolio.intro": "Некоторые из моих последних проектов. Нажмите на карточку, чтобы открыть живую версию.",
    "portfolio.cv.title": "Онлайн-резюме",
    "portfolio.cv.desc": "Веб-резюме с личным описанием, опытом, образованием и ссылками.",
    "portfolio.studio.title": "VS LiteCode Studio – портфолио",
    "portfolio.studio.desc": "Сайт, показывающий мои услуги, проекты и контакт.",
    "portfolio.box.title": "Сайт для тренера по боксу",
    "portfolio.box.desc": "Клиентский проект с расписанием, ценами, галереей, формой и Google Maps.",
    "portfolio.album.title": "Волшебный фотоальбом – семейный проект",
    "portfolio.album.desc": "Современный адаптивный фотоальбом на HTML, CSS и JavaScript.",

    "contact.title": "Отправить сообщение",
    "contact.text": "Предпочитаю общаться через email. Заполните форму — и я отвечу как можно скорее.",
    "contact.name": "Имя",
    "contact.email": "Email",
    "contact.message": "Сообщение",
    "contact.btnSend": "Отправить",
    "contact.note": "(Демо — сообщение не отправляется по-настоящему, но на реальном сервере это можно подключить к email.)"
}
};


function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const text = translations[lang]?.[key];
        if (text) el.textContent = text;
    });
}

if (langToggle) {
    langToggle.textContent = currentLang.toUpperCase();
    applyTranslations(currentLang);

    langToggle.addEventListener("click", () => {
    const langs = ["sv", "en", "ru"];
    let index = langs.indexOf(currentLang);
    index = (index + 1) % langs.length;
    currentLang = langs[index];

    localStorage.setItem("vs-lang", currentLang);
    langToggle.textContent = currentLang.toUpperCase();
    applyTranslations(currentLang);
});

} else {
    // если на странице нет кнопки, хотя бы переведём по сохранённому языку
    applyTranslations(currentLang);
}

/* ---------- CONTACT FORM DEMO ---------- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    const statusEl = document.getElementById("contact-status");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            if (statusEl) {
                statusEl.textContent = currentLang === "sv"
                    ? "Fyll i alla fält."
                    : "Please fill in all fields.";
                statusEl.className = "contact-status error";
            }
            return;
        }

        if (statusEl) {
            statusEl.textContent = currentLang === "sv"
                ? "Tack! Ditt meddelande är registrerat (demo). Jag återkommer via mejl."
                : "Thank you! Your message is saved (demo). I will reply by email.";
            statusEl.className = "contact-status success";
        }

        contactForm.reset();
    });
}
