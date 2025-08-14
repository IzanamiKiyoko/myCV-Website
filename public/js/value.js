import { db } from "./firebase.js";
import { ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
let lang_vi = {};
let lang_en = {};
document.addEventListener("DOMContentLoaded", function () {
    getValueDB('vi');
});
export async function showValueLanguage(lang) {
    if (lang === "vi" && Object.keys(lang_vi).length > 0) {
        showDetails(lang_vi);
    }
    else if (lang === "en" && Object.keys(lang_en).length > 0) {
        showDetails(lang_en);
    }
    else if (lang === "vi") {
        await getValueDB("vi");
    }
    else {
        await getValueDB("en");
    }
}
async function getValueDB(lang) {
    await get(ref(db, lang))
        .then(snapshot => {
            const data = snapshot.val();
            if (data) {
                if (lang === "vi") {
                    lang_vi = data;
                }
                else {
                    lang_en = data;                   
                }
                showDetails(data);
            } else {
                //window.location.href = "404.html";
            }
        })
        .catch(error => {
            console.error("Lỗi khi lấy dữ liệu:", error);
            //window.location.href = "404.html";
        });
}

window.showDetails = function(value) {
    document.getElementById("name").innerHTML = value.name ?? `<div class="alert-text">name undefined<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    document.getElementById("job").innerHTML = value.job ?? `<div class="alert-text">job undefined<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    document.getElementById("description").innerHTML = value.description ?? `<div class="alert-text">description undefined<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    document.getElementById("avatar").src = value.avatar ?? "./images/avatar.webp";
    document.getElementById("email").innerHTML = value.email ?? `<div class="alert-text">email undefined<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    document.getElementById("phone").innerHTML = value.phone ?? `<div class="alert-text">phone undefined<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    document.getElementById("location").innerHTML = value.location ?? `<div class="alert-text">location undefined<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    document.getElementById("github-link").href = value.github_link ?? `404.html`;
    document.getElementById("about-me").innerHTML = value.about_me ?? `<div class="alert-text">about me undefined<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    showExperience(value);
    showSkills(value);
    showEducation(value);
}

window.showExperience = function (value) {
    const experienceContainer = document.getElementById("experience-container");
    experienceContainer.innerHTML = ""; // Clear previous content
    if (value.experience && value.experience.length > 0) {
        value.experience.forEach(item => {
            const experienceItem = `<div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-header">
                                    <h3 class="timeline-title">${item.title}</h3>
                                    <span class="timeline-date">${item.date}</span>
                                </div>
                                <p class="timeline-company">${item.company}</p>
                                <ul class="timeline-list">
                                ${item.description.map(desc => `<li>${desc}</li>`).join('')}
                                </ul>
                            </div>`
            experienceContainer.insertAdjacentHTML("beforeend", experienceItem);
        });
    } else {
        experienceContainer.innerHTML = `<div class="alert-text">No experience data available<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    }
}

window.showSkills = function (value) {
    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = ""; // Clear previous content
    if (value.skills && value.skills.length > 0) {
        value.skills.forEach(skill => {
            const skillItem = `<div class="skills-section">
                            <h4 class="skills-title">${skill.title}</h4>
                            <div class="skills-grid"> 
                            ${skill.skills.map(s => `<span class="skill-badge yellow">${s}</span>`).join('')}
                            </div>
                        </div>`;                                   
            skillsContainer.insertAdjacentHTML("beforeend", skillItem);
        });
    } else {
        skillsContainer.innerHTML = `<div class="alert-text">No skills data available<i
    class="fa-solid fa-triangle-exclamation"></i></div>`;
    }
}

window.showEducation = function (value) {
    const educationContainer = document.getElementById("education-container");
    educationContainer.innerHTML = ""; // Clear previous content
    if (value.education && value.education.length > 0) {
        value.education.forEach(item => {
            const educationItem = `<div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-header">
                                <h3 class="timeline-title">${item.title}</h3>
                                <span class="timeline-date">${item.date}</span>
                            </div>
                            <p class="timeline-company">${item.school}</p>
                            <p style="font-size: 0.875rem; color: #4b5563; margin-top: 0.25rem;">GPA: ${item.gpa}</p>
                        </div>`;
            educationContainer.insertAdjacentHTML("beforeend", educationItem);
        });
    } else {
        educationContainer.innerHTML = `<div class="alert-text">No education data available<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    }   
}
