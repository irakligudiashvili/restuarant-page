import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

const content = document.getElementById('content');

function clearContent(){
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}

function loadHome(){
    clearContent();
    console.log('loading home');
    content.appendChild(createHome());
}

function loadMenu(){
    clearContent();
    console.log('loading menu');
    content.appendChild(createMenu());
}

function loadContact(){
    clearContent();
    console.log('loading contact');
    content.appendChild(createContact());
}

const homeBtn = document.getElementById('homeButton');
const menuBtn = document.getElementById('menuButton');
const contactBtn = document.getElementById('contactButton');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);

loadHome();