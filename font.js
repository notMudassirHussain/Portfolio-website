var tablinks = document.getElementsByClassName("tabs-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tab of tablinks) {
        tab.classList.remove("active-link");

    }
    for (tab of tabcontents) {
        tab.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

const hidden = {
    title: "Software Developers",
    h1: "Hi, We are ",
    span1: "Nobody ",
    spanbr: "from Pak",
    span2: "istan"
}
function printHidden(hiddenObj) {
    const container = document.getElementById('hidden-text');
    const p1 = document.createElement('p');
    p1.classList.add('title');
    p1.textContent = hiddenObj.title;
    container.appendChild(p1);
    const h1 = document.createElement('h1');
    h1.classList.add('title')
    h1.textContent = hiddenObj.h1;
    const span = document.createElement('span');
    span.classList.add('nobody')
    span.textContent = hiddenObj.span1;
    h1.appendChild(span);
    const linebr = document.createElement('br');
    h1.appendChild(linebr);
    h1.append(hiddenObj.spanbr);
    const span2 = document.createElement('span');
    span2.textContent = hiddenObj.span2;
    span2.classList.add('istan');
    h1.appendChild(span2);
    h1.appendChild(span2);
    container.appendChild(h1);
}
printHidden(hidden);

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";

}
function closemenu() {
    sidemenu.style.right = "-200px";

}
const portfolioInfo = {
    title: {
        english: "About",
        spanish: "Acerca",
        arabic: "معلومات"
    },
    h1: {
        english: "I am Mudassir Hussain",
        spanish: "Soy Mudassir Hussain",
        arabic: "أنا مدثر حسين"
    },
    description: {
        english: "I am Mudassir Hussain, currently pursuing a Bachelor's degree in Computer Science from ITU, Lahore. I have 6 months of experience as a Python developer at Techionik Lahore, along with a 3-month internship in Python development from the same company. Currently, I work as a freelancer and collaborate with a startup called Infobotix Innovation on a contract basis. My primary goal is to create automated software that enhances web workflows and performs tasks faster than humans.",
        spanish: "Soy Mudassir Hussain, actualmente cursando una licenciatura en Ciencias de la Computación en ITU, Lahore. Tengo 6 meses de experiencia como desarrollador de Python en Techionik Lahore, junto con una pasantía de 3 meses en desarrollo de Python en la misma empresa. Actualmente, trabajo como freelancer y colaboro con una startup llamada Infobotix Innovation en base a contrato. Mi objetivo principal es crear software automatizado que mejore los flujos de trabajo web y realice tareas más rápido que los humanos.",
        arabic: "أنا مدثر حسين، حاليًا أدرس للحصول على درجة البكالوريوس في علوم الكمبيوتر من ITU، لاهور. لدي 6 أشهر من الخبرة كمطور بايثون في Techionik لاهور، بالإضافة إلى تدريب لمدة 3 أشهر في تطوير بايثون من نفس الشركة. حاليًا، أعمل كعامل مستقل وأتعاون مع شركة ناشئة تسمى Infobotix Innovation على أساس عقد. هدفي الأساسي هو إنشاء برامج آلية تعزز تدفقات العمل على الويب وتقوم بالمهام بشكل أسرع من البشر."
    },
    tabs: {
        skills: {
            title: {
                english: "Skills",
                spanish: "Habilidades",
                arabic: "المهارات"
            },
            list: [
                { span: { english: "Web Automation", spanish: "Automatización Web", arabic: "أتمتة الويب" }, description: { english: "Selenium", spanish: "Selenium", arabic: "سيلينيوم" } },
                { span: { english: "Web Scraping", spanish: "Raspado Web", arabic: "استخراج بيانات الويب" }, description: { english: "Scrapy", spanish: "Scrapy", arabic: "سكرابي" } },
                { span: { english: "CAPTCHA bypassing", spanish: "Evitación de CAPTCHA", arabic: "تجاوز CAPTCHA" }, description: { english: "Yollo and speed recognition", spanish: "Yollo y reconocimiento de velocidad", arabic: "Yollo والتعرف على السرعة" } },
                { span: { english: "Browser extensions", spanish: "Extensiones de navegador", arabic: "إضافات المتصفح" }, description: { english: "Automation extensions", spanish: "Extensiones de automatización", arabic: "إضافات الأتمتة" } },
                { span: { english: "Discord Bots", spanish: "Bots de Discord", arabic: "روبوتات Discord" }, description: { english: "Chat bots", spanish: "Bots de chat", arabic: "روبوتات الدردشة" } }
            ]
        },
        experience: {
            title: {
                english: "Experience",
                spanish: "Experiencia",
                arabic: "الخبرة"
            },
            list: [
                { span: { english: "2024 Jan - Current", spanish: "Enero 2024 - Actual", arabic: "يناير 2024 - حالي" }, description: { english: "Infobotix Innovation", spanish: "Infobotix Innovation", arabic: "ابتكارات إنفوبوتكس" } },
                { span: { english: "2024 Jun - Dec", spanish: "Junio 2024 - Diciembre", arabic: "يونيو 2024 - ديسمبر" }, description: { english: "Techionik, Lahore", spanish: "Techionik, Lahore", arabic: "تيكيونيك، لاهور" } }
            ]
        },
        education: {
            title: {
                english: "Education",
                spanish: "Educación",
                arabic: "التعليم"
            },
            list: [
                { span: { english: "2022 Jan - Current", spanish: "Enero 2022 - Actual", arabic: "يناير 2022 - حالي" }, description: { english: "Computer Science Student at ITU, Lahore", spanish: "Estudiante de Ciencias de la Computación en ITU, Lahore", arabic: "طالب في علوم الكمبيوتر في ITU، لاهور" } },
                { span: { english: "2023 March - May", spanish: "Marzo 2023 - Mayo", arabic: "مارس 2023 - مايو" }, description: { english: "Python Developer Internship from Techionik, Lahore", spanish: "Pasantía de desarrollador Python en Techionik, Lahore", arabic: "تدريب كمطور بايثون من تيكيونيك، لاهور" } }
            ]
        }
    }
};

let currentLanguage = 'english'; // Default language
const meText = {
    english: "Me",
    spanish: "De",
    arabic: "عنا"
};
function changeLanguage(language) {
    currentLanguage = language;
    generateAboutSection(portfolioInfo);
}

function generateAboutSection(portfolioObj) {
    const container = document.getElementById('about-col-2');
    container.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.classList.add('subtitles');
    h1.innerHTML = `${portfolioObj.title[currentLanguage]} <span>${meText[currentLanguage]}</span>`;
    container.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = portfolioObj.description[currentLanguage];
    container.appendChild(p);

    const tabsTitles = document.createElement('div');
    tabsTitles.classList.add('tabs-titles');

    Object.keys(portfolioObj.tabs).forEach((tabKey, index) => {
        const tabLink = document.createElement('p');
        tabLink.classList.add('tabs-links');
        if (index === 0) tabLink.classList.add('active-link');
        tabLink.textContent = portfolioObj.tabs[tabKey].title[currentLanguage];
        tabLink.onclick = function () { opentab(tabKey); };
        tabsTitles.appendChild(tabLink);
    });

    container.appendChild(tabsTitles);
    Object.keys(portfolioObj.tabs).forEach((tabKey, index) => {
        const tabContent = document.createElement('div');
        tabContent.classList.add('tab-contents');
        if (index === 0) tabContent.classList.add('active-tab');
        tabContent.id = tabKey;

        const ul = document.createElement('ul');

        portfolioObj.tabs[tabKey].list.forEach(item => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = item.span[currentLanguage];
            li.appendChild(span);
            const br = document.createElement('br');
            li.appendChild(br);
            li.appendChild(document.createTextNode(item.description[currentLanguage]));
            ul.appendChild(li);
        });

        tabContent.appendChild(ul);
        container.appendChild(tabContent);
    });
}

generateAboutSection(portfolioInfo);
function toggleDropdown() {
    document.getElementById("languageDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
