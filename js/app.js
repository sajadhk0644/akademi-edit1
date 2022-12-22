// SLIDER START
const slides = document.querySelector('.slider').children;
console.log(slides);
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const indicator = document.querySelector('.indicator');
let index = 0;


prev.addEventListener('click', function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener('click', function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})


function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = i + 1;
        div.setAttribute('onclick', 'indicatorSlide(this)');
        div.id = i
        if (i == 0) {
            div.className = "active"
        }
        indicator.appendChild(div)
    }
}

circleIndicator();


function updateCircleIndicator() {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove('active')
    }
    indicator.children[index].classList.add('active');

}

function indicatorSlide(element) {
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}



function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--
    }
    console.log
    changeSlide()
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0
    } else {
        index++
    }
    changeSlide()
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoplay, 4000);
}

function autoplay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoplay, 4000);
// FILTER GALLERY
let list=document.querySelectorAll('.list');
let itembox=document.querySelectorAll('.itemsbox');
for(let i= 0; i<list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j=0 ; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let datafilter=this.getAttribute('data-filter');
        for(let k=0; k<itembox.length; k++){
            itembox[k].classList.remove('active');
            itembox[k].classList.add('hide');
            if(itembox[k].getAttribute('data-item') == datafilter || datafilter == "all"){
                itembox[k].classList.remove('hide');
                itembox[k].classList.add('active');
            }
        }
    });
}
// START JS COMMENTS
let texts=document.getElementsByClassName("user-text");
let pics=document.getElementsByClassName("user-pic");
function show(){
    for(userpic of pics){
        userpic.classList.remove("active-pic");
    }
    for(usertext of texts){
        usertext.classList.remove("active-text");
    }
    let i = Array.from(pics).indexOf(event.target);
    pics[i].classList.add("active-pic");
    texts[i].classList.add("active-text");
}