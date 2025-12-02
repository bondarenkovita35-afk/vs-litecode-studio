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
        "hero.subtitle": "Jag skapar moderna, responsiva och visuellt starka webbplatser som är både snygga och enkla att använda. Behöver du en professionell webbnärvaro? online CV, portfolio, fotoalbum, företagshemsida eller ett digitalt visitkort med QR-kod? Du har kommit rätt! Mitt fokus är att ge privatpersoner och småföretag en stark digital närvaro med design som känns modern, levande och lite magisk – skräddarsydda webbplatser som speglar deras unika identitet och mål.",
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
        "services.card.desc": "En digital visitkort är en länk eller QR-kod som öppnar hela din värld: webbplats, sociala medier, kontakt och portfolio. För en affärsperson fungerar den som en liten landningssida som jobbar 24/7, mer än bara ett namn i mobilen. För en vanlig användare är det ett snyggt och enkelt sätt att dela vem man är utan tio olika länkar.",
        "services.card.cta": "Du visar ett kort på mobilen – personen skannar och hamnar direkt i din ekosystem. Jag designar kortet i dina färger, med din stil och ditt mål: från strikt business till neonmagiska kreativa projekt.",
        "services.card.demoWork": "Digitalt visitkort – webbstudio (demo)",
        "services.card.demoLashes": "Digitalt visitkort – Instagramprofil (demo)",

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
        "contact.note": "(Demo – meddelandet skickas inte på riktigt, men på en riktig server kan detta kopplas till mejl.)",

        "albumFamily.title": "Magiskt familje- / barnfotoalbum",
        "albumFamily.lead": "Föreställ dig att dina favoritbilder inte bara ligger i mobilen, utan får liv i ett eget магiskt rum – mjuka animationer, neonljus, glitter och stjärnor. Ett sådant onlinealbum kan öppnas från vilken enhet som helst och delas med familj och vänner.",
        "albumFamily.p1": "Albumet passar för graviditet, barnets första år, familjeresor eller ett viktigt tillfälle. Jag hjälper dig att välja ut bilderna, lägga dem i en fin ordning och skapa en helhetlig stil så att varje sida känns speciell.",
        "albumFamily.p2": "Det här är mer än bara ett galleri. Det är en liten magisk berättelse om din familj som du kan visa för mormor i ett annat land или spara som en цифровая skatt i många år.",
        "albumFamily.forYouTitle": "Vad jag kan göra för dig",
        "albumFamily.forYou1": "Välja färger och bakgrund som passar din familjs stil.",
        "albumFamily.forYou2": "Lägga till texter, viktiga datum och korta berättelser till bilderna.",
        "albumFamily.forYou3": "Skapa egna block för varje barn или varje händelse.",
        "albumFamily.forYou4": "Göra albumet anpassat för bara onlinevisning eller med möjlighet till utskrift.",
        "albumFamily.examplesTitle": "Exempel och mallar",
        "albumFamily.examplesIntro": "Nedan ser du demoalbum som jag redan har skapat. De visar stil, animationer och struktur.",
        "albumFamily.examplePregnancy": "🌸 Graviditetsalbum – ett mjukt album med lugna övergångar och fokus på väntan på bebisen.",
        "albumFamily.exampleGirl": "⭐ Fotoalbum för flicka – en färgstark, sagolik stil med glitter och stjärnor.",
        "albumFamily.cta": "Om du gillar det här formatet kan du bara skriva till mig via контактформулярет и berätta vilket album som passar dig bäst: graviditet, barnets första år, ett familjeår i bilder och så vidare.",

        // ---- Digital card page ----
        "cardPage.title": "Digitalt visitkort + QR-kod",
        "cardPage.lead": "Ett digitalt visitkort är en länk eller QR-kod som öppnar hela din värld: webbplats, sociala medier, kontaktuppgifter och portfolio.",
        "cardPage.p1": "För en affärsperson fungerar det som en mini-landningssida som jobbar 24/7: kunden skannar koden och hamnar direkt i din ekosystem – sida, tjänster, omdömen och sätt att boka dig. Det är starkare än en vanlig kontakt i mobilen: kortet försvinner inte, är lätt att dela och kan uppdateras när som helst.",
        "cardPage.p2": "För en vanlig användare är det ett snyggt sätt att samla allt på ett ställe: Instagram, TikTok, LinkedIn, mejl, telefon, portfolio – en enda länk visar vem du är och hur man får kontakt.",
        "cardPage.benefitsTitle": "Varför det fungerar bättre än ett vanligt nummer",
        "cardPage.benefit1": "För företag: kunden ser direkt din sida, tjänster, priser och kan ta nästa steg själv.",
        "cardPage.benefit2": "För personligt varumärke: alla dina kanaler samlade i ett rent, modernt gränssnitt.",
        "cardPage.benefit3": "Inget försvinner: länken kan sparas, skickas vidare och öppnas från alla enheter.",
        "cardPage.benefit4": "Du visar att du hänger med – ett digitalt visitkort signalerar modern, professionell och genomtänkt närvaro.",
        "cardPage.examplesTitle": "Exempel och mallar",
        "cardPage.examplesIntro": "Här är mina demo-visitkort. De visar struktur, animationer och stil.",
        "cardPage.exampleWeb": "💼 Digitalt visitkort för webbstudio (demo)",
        "cardPage.exampleLashes": "✨ Digitalt visitkort för skönhetsprofil (fransar) (demo)",
        "cardPage.customTitle": "Vad jag kan skapa just för dig",
        "cardPage.custom1": "Stil som matchar ditt varumärke eller din personliga stil: färger, bakgrund, typografi.",
        "cardPage.custom2": "Knappar till det du använder: webbplats, WhatsApp, Instagram, LinkedIn, portfolio, e-post, telefon m.m.",
        "cardPage.custom3": "Version för tryckt visitkort med QR-kod eller en ren digital variant.",
        "cardPage.cta": "Om du gillar formatet – skriv till mig via kontaktformuläret och berätta kort vad du behöver kortet till: företag, personlig profil, blogg, kreativt projekt eller allt på en gång.",
    },

    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",

        "hero.tag": "Web developer · HTML · CSS · JS · .NET · Stockholm, Sweden",
        "hero.title": "Welcome to VS LiteCode Studio!",
        "hero.subtitle": "I create modern, responsive and visually strong websites that look stylish and stay easy to use. Need a professional online presence – online CV, portfolio, photo album, company page or a digital business card with a QR code? You’re in the right place. My focus is to help individuals and small businesses build a strong digital presence with design that feels modern, alive and a bit magical.",
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
        "services.card.desc": "A digital business card is one link or QR code that opens your whole world: website, social media, contact details and portfolio. For a businessperson it works like a small landing page that sells you 24/7, instead of just being another contact in someone’s phone. For a regular user it’s a clean way to share who you are without sending ten different links.",
        "services.card.cta": "You show one screen on your phone – they scan and instantly enter your ecosystem. I design the card in your colours, with your style and goal: from strict business to neon-magic for creative projects.",
        "services.card.demoWork": "Digital business card – web studio (demo)",
        "services.card.demoLashes": "Digital business card – Instagram profile (demo)",

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
        "contact.note": "(Demo – the message is not sent for real here, but on a real server this can be connected to email.)",

        "albumFamily.title": "Magic family / kids photo album",
        "albumFamily.lead": "Imagine your favourite photos not just lying in your phone, but coming to life in a separate magical space – soft animations, neon glow, glitter and stars. This online album can be opened from any device and shared with family and friends.",
        "albumFamily.p1": "The album is perfect for pregnancy, your child’s first years, family trips or any special event. I will help you choose the right photos, place them nicely and create one consistent style so that every page feels special.",
        "albumFamily.p2": "It’s more than just a gallery. It’s a small magical story about your family that you can show to a grandma in another country or keep as a digital treasure for many years.",
        "albumFamily.forYouTitle": "What I can do for you",
        "albumFamily.forYou1": "Match colours and background to your family’s style.",
        "albumFamily.forYou2": "Add text, important dates and short stories to the photos.",
        "albumFamily.forYou3": "Create separate sections for each child or each event.",
        "albumFamily.forYou4": "Prepare the album either for online viewing only or with the option to print.",
        "albumFamily.examplesTitle": "Examples and templates",
        "albumFamily.examplesIntro": "Below you can see demo albums I’ve already created. They show the style, animations and structure.",
        "albumFamily.examplePregnancy": "🌸 Pregnancy album – a gentle album with smooth transitions and a focus on expecting the baby.",
        "albumFamily.exampleGirl": "⭐ Girls’ album – a bright, fairy-tale style with glitter and stars.",
        "albumFamily.cta": "If you like this format, just send me a message via the contact form and tell me which album fits you best: pregnancy, baby’s first year, a family year in photos, etc.",

        // ---- Digital card page ----
        "cardPage.title": "Digital business card + QR code",
        "cardPage.lead": "A digital business card is one link or QR code that opens your whole world: website, social media, contact details and portfolio.",
        "cardPage.p1": "For a businessperson it works like a mini landing page that sells you 24/7: the person scans the code and lands directly in your ecosystem – website, services, testimonials and ways to contact you. It’s more powerful than just being another contact in a phone: the card doesn’t get lost, is easy to share and always up to date.",
        "cardPage.p2": "For a regular user it’s a beautiful way to keep everything in one place: Instagram, TikTok, LinkedIn, email, phone, portfolio – a single link shows who you are and how to reach you.",
        "cardPage.benefitsTitle": "Why it works better than a normal contact",
        "cardPage.benefit1": "For business: your customer instantly sees your site, services, prices and can take the next step alone.",
        "cardPage.benefit2": "For personal brand: all your channels in one clean, modern interface.",
        "cardPage.benefit3": "Nothing disappears: the link can be saved, forwarded and opened from any device.",
        "cardPage.benefit4": "You show that you are up to date – a digital card signals a modern, professional and intentional online presence.",
        "cardPage.examplesTitle": "Examples and templates",
        "cardPage.examplesIntro": "Here are my demo business cards. They show the structure, animations and style.",
        "cardPage.exampleWeb": "💼 Digital business card for web studio (demo)",
        "cardPage.exampleLashes": "✨ Digital business card for beauty profile (lashes) (demo)",
        "cardPage.customTitle": "What I can create for you",
        "cardPage.custom1": "Style that matches your brand or personal style: colours, background, typography.",
        "cardPage.custom2": "Buttons for what you use: website, WhatsApp, Instagram, LinkedIn, portfolio, email, phone and more.",
        "cardPage.custom3": "Version for printed cards with QR code or a fully digital version.",
        "cardPage.cta": "If you like the format, send me a short message via the contact form and tell me what you need the card for: business, personal profile, blog, creative work – or all of it.",
    },

    ru: {
        "nav.home": "Главная",
        "nav.services": "Услуги",
        "nav.portfolio": "Портфолио",
        "nav.contact": "Контакты",

        "hero.tag": "Веб-разработчик · HTML · CSS · JS · .NET · Стокгольм, Швеция",
        "hero.title": "Добро пожаловать в VS LiteCode Studio!",
        "hero.subtitle": "Я создаю современные, адаптивные и визуально яркие сайты, которые выглядят стильно и остаются простыми в использовании. Нужна профессиональная онлайн-презентация — онлайн-резюме, портфолио, фотоальбом, сайт для бизнеса или цифровая визитка с QR-кодом? Вы по адресу. Моя цель — помочь частным клиентам и малым компаниям создать сильное цифровое присутствие с дизайном, который ощущается современным, живым и немного волшебным.",
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
        "services.card.desc": "Цифровая визитка — это одна ссылка или QR-код, который открывает весь твой мир: сайт, соцсети, контакты и портфолио. Для бизнесмена она работает как мини-лендинг 24/7, а не просто ещё один контакт в телефоне. Для обычного человека это красивый и простой способ делиться собой без десяти разных ссылок.",
        "services.card.cta": "Ты показываешь один экран на телефоне — человек сканирует и сразу попадает в твою экосистему. Я создаю визитки в твоих цветах, под твой стиль и цель: от строгого бизнеса до неоновой магии для творческих проектов.",
        "services.card.demoWork": "Цифровая визитка для веб-студии (демо)",
        "services.card.demoLashes": "Цифровая визитка для бьюти-профиля (ресницы) (демо)",

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
        "contact.note": "(Демо — сообщение не отправляется по-настоящему, но на реальном сервере это можно подключить к email.)",

        "albumFamily.title": "Волшебный семейный / детский фотоальбом",
        "albumFamily.lead": "Представь, что любимые фотографии не просто лежат в телефоне, а оживают в отдельном волшебном пространстве: плавные анимации, мягкий неоновый свет, блёстки и звёзды. Такой онлайн-альбом можно открыть с любого устройства и подарить доступ родным и друзьям.",
        "albumFamily.p1": "Альбом подойдёт для беременности, первых лет жизни ребёнка, семейных путешествий или важного события. Я помогу аккуратно отобрать фото, красиво их расположить и оформить всё в едином стиле, чтобы каждая страница вызывала улыбку.",
        "albumFamily.p2": "Это больше, чем просто галерея. Это маленькая магическая история о твоей семье, которую можно показать бабушке в другой стране или сохранить как цифровое сокровище на годы вперёд.",
        "albumFamily.forYouTitle": "Что я могу сделать для тебя",
        "albumFamily.forYou1": "Подобрать цвета и фон под стиль семьи.",
        "albumFamily.forYou2": "Добавить текст, важные даты и короткие истории к фотографиям.",
        "albumFamily.forYou3": "Оформить отдельные блоки для каждого ребёнка или события.",
        "albumFamily.forYou4": "Настроить альбом только для онлайн-просмотра или с возможностью печати.",
        "albumFamily.examplesTitle": "Примеры и шаблоны",
        "albumFamily.examplesIntro": "Ниже — демо-альбомы, которые я уже создала. По ним можно понять стиль, анимации и структуру.",
        "albumFamily.examplePregnancy": "🌸 Альбом беременности — нежный альбом с плавными переходами и акцентом на ожидание малыша.",
        "albumFamily.exampleGirl": "⭐ Детский альбом для девочки — яркий, сказочный стиль с блёстками и звёздами.",
        "albumFamily.cta": "Если тебе нравится такой формат, просто напиши мне через форму на странице контактов и укажи, какой альбом тебе ближе: беременность, первый год ребёнка, семейный обзор за год и т.п.",

        // ---- Digital card page ----
        "cardPage.title": "Цифровая визитка + QR-код",
        "cardPage.lead": "Цифровая визитка — это одна ссылка или QR-код, который открывает весь твой мир: сайт, соцсети, контакты и портфолио.",
        "cardPage.p1": "Для бизнесмена она работает как мини-лендинг 24/7: человек сканирует код и сразу попадает в твою экосистему — сайт, услуги, отзывы, способы связи. Это сильнее, чем просто запись в контактах: визитка не теряется, её легко переслать и она всегда актуальна.",
        "cardPage.p2": "Для обычного человека это красивый способ собрать всё в одном месте: Instagram, TikTok, LinkedIn, почта, телефон, портфолио — одна ссылка показывает, кто ты и как с тобой связаться.",
        "cardPage.benefitsTitle": "Почему это работает лучше, чем обычный контакт",
        "cardPage.benefit1": "Для бизнеса: человек сразу видит твой сайт, услуги, цены и может сам сделать следующий шаг.",
        "cardPage.benefit2": "Для личного бренда: все каналы собраны в одном аккуратном, современном интерфейсе.",
        "cardPage.benefit3": "Ничего не теряется: ссылку можно сохранить, переслать и открыть с любого устройства.",
        "cardPage.benefit4": "Ты показываешь, что ценишь цифровой комфорт и современный подход — визитка работает как мини-реклама тебя и твоего дела.",
        "cardPage.examplesTitle": "Примеры и шаблоны",
        "cardPage.examplesIntro": "Ниже — мои демо-визитки. По ним можно увидеть структуру, анимации и общий стиль.",
        "cardPage.exampleWeb": "💼 Цифровая визитка для веб-студии (демо)",
        "cardPage.exampleLashes": "✨ Цифровая визитка для бьюти-профиля (ресницы) (демо)",
        "cardPage.customTitle": "Что я могу сделать именно для тебя",
        "cardPage.custom1": "Подобрать стиль под твой бренд или образ: цвета, фон, шрифты, акценты.",
        "cardPage.custom2": "Добавить нужные кнопки: сайт, WhatsApp, Instagram, LinkedIn, портфолио, email, телефон и другие ссылки.",
        "cardPage.custom3": "Подготовить версию под печатную визитку с QR-кодом или чисто онлайн-вариант.",
        "cardPage.cta": "Если тебе нравится такой формат, просто напиши мне через форму на странице контактов и коротко расскажи, для чего тебе нужна визитка: бизнес, личный бренд, блог, творчество — или всё сразу.",
    }
};

function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
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
                let errorMsg;
                if (currentLang === "sv") {
                    errorMsg = "Fyll i alla fält.";
                } else if (currentLang === "ru") {
                    errorMsg = "Пожалуйста, заполните все поля.";
                } else {
                    errorMsg = "Please fill in all fields.";
                }
                statusEl.textContent = errorMsg;
                statusEl.className = "contact-status error";
            }
            return;
        }

        if (statusEl) {
            let successMsg;
            if (currentLang === "sv") {
                successMsg = "Tack! Ditt meddelande är registrerat (demo). Jag återkommer via mejl.";
            } else if (currentLang === "ru") {
                successMsg = "Спасибо! Ваше сообщение сохранено (демо). Я отвечу по email.";
            } else {
                successMsg = "Thank you! Your message is saved (demo). I will reply by email.";
            }
            statusEl.textContent = successMsg;
            statusEl.className = "contact-status success";
        }

        contactForm.reset();
    });
}
