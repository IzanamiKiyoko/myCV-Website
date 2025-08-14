import { showValueLanguage } from './value.js';
let currentLanguage = 'vi';
document.addEventListener("DOMContentLoaded", function () {
    switchLanguage(currentLanguage);
});
window.switchLanguage = function(lang) {
    currentLanguage = lang;

    // Hide all language content
    const allLangContent = document.querySelectorAll('.lang-content');
    allLangContent.forEach(content => {
        content.classList.remove('active');
    });

    // Show selected language content
    const selectedLangContent = document.querySelectorAll(`[data-lang="${lang}"]`);
    selectedLangContent.forEach(content => {
        content.classList.add('active');
    });

    // Update language button states
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update page title and lang attribute
    if (lang === 'vi') {
        document.documentElement.lang = 'vi';
        showValueLanguage('vi');
    } else {
        document.documentElement.lang = 'en';
        showValueLanguage('en');
    }
}
window.showTab = function (tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

const thumbnail = document.querySelector('.avatar-image');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = thumbnail.src;
});

window.closeModal = function () {
    modal.style.display = 'none';
}