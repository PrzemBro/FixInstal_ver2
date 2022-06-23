const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');
const burger = document.querySelector ('.burger');
const popUps = [ ...document.querySelectorAll ('.work > div div')];
const footer = document.querySelector('footer');
const modal = document.querySelector('.modal-wrap');
const closeModal = document.querySelector('.modal .hide');
const menu = document.querySelector ('aside');
const goUp = document.querySelector('.return');
const navLi = document.querySelectorAll('aside ul li');
const sections = [...document.querySelectorAll('section')];


// podmiana zdjęć w galerii sposobem z kursu
let activeElement = 0;
const timeChange = 4000;
const gallery = document.querySelector('.work img');
const galleryImages = ['Images/gallery_1.png','Images/gallery_2.png','Images/gallery_3.png','Images/gallery_4.png','Images/gallery_5.png','Images/gallery_6.png',]

function changeElement() {
    activeElement++;
    if (activeElement == galleryImages.length) {
        activeElement = 0;
    }
    gallery.src = galleryImages[activeElement]
}

setInterval(changeElement, timeChange)


// burger
burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    menu.classList.toggle("active")
})

navLi.forEach((li) => {
   li.addEventListener('click', function(){
       menu.classList.toggle('active');
       burger.classList.toggle('active');
   })
})


// animacje podczas skrolowania
document.addEventListener('scroll', function(){

    const scrollValue = window.scrollY;

    if (scrollValue > header.headerHeight - header.headerHeight/2){
            about.classList.add('active');
    }
    for (let i = 0; i < sections.length; i++){
        if (scrollValue > sections[i].offsetTop - sections[i].offsetHeight/2){
            sections[i].classList.add('active')
        }
    }
    // wykrycie kiedy strona zostala przewinieta do konca
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        contact.classList.add('active');
    }
    if(scrollValue < 100){
        sections.forEach( section =>{
            section.classList.remove('active');
        })
    }
})


// strałka do powrotu do góry
goUp.addEventListener('click', function (){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})


// pobranie zdjęć do galerii
for( let i = 0; i < galleryImages.length; i++){
    popUps[i].style.backgroundImage = `url(${galleryImages[i]})`;
}


// popUp - modal
popUps.forEach(popUp =>{
    popUp.addEventListener('click', function(){
        console.log(this);
        wrapper.classList.add('blur');
        footer.classList.add('blur');
        modal.classList.add('active');

        // pobranie i zmiana BackgroundImage za pomocą THIS
        document.querySelector('.modal').style.backgroundImage = this.style.backgroundImage;
        
    })
})
closeModal.addEventListener('click', function(){
        wrapper.classList.remove('blur');
        footer.classList.remove('blur');
        modal.classList.remove('active');
    })






