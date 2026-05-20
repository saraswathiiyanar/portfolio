// Portfolio Loaded Message

console.log("Portfolio Website Loaded Successfully");


// Welcome Alert

window.onload = function(){

    alert("Welcome to My Portfolio Website");

};


// Smooth Scroll Effect

const links = document.querySelectorAll('a');

links.forEach(link => {

    link.addEventListener('mouseover', () => {

        link.style.transform = "scale(1.1)";

        link.style.transition = "0.3s";

    });

    link.addEventListener('mouseout', () => {

        link.style.transform = "scale(1)";

    });

});


// Skill Box Animation

const skills = document.querySelectorAll('.skill-box div');

skills.forEach(skill => {

    skill.addEventListener('click', () => {

        alert(skill.innerText + " Skill");

    });

});


// Project Card Hover Message

const projects = document.querySelectorAll('.project-card');

projects.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";

    });

    card.addEventListener('mouseleave', () => {

        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

    });

});