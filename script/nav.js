const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-links");
    navToggle.classList.toggle('rotate');
});


//dropdown
const apButton = document.querySelector('.ap-button'); 
const dropdown = document.querySelector('.dropdown');

apButton.addEventListener('click', function(){
    event.preventDefault();
    dropdown.classList.toggle("show-dropdown");
});