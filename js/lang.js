async function setLanguage(lang) {

    localStorage.setItem('language', lang);

    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
        el.innerHTML = translations[key]; 
        }
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.remove('bg-[#0E86D4]', 'text-white');
        btn.classList.add('hover:bg-[#0E86D4]', 'hover:text-white');
    });

    const activeBtn = document.getElementById(`btn-${lang}`);
    activeBtn.classList.remove('hover:bg-[#0E86D4]', 'hover:text-white');
    activeBtn.classList.add('bg-[#0E86D4]', 'text-white');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'cs';
  setLanguage(savedLang);
});