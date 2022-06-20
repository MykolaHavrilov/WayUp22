var btnOpen = document.getElementById('btn-open');
var modal = document.getElementById('wrapper-modal');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal() {
    modal.classList.remove('active');
}

// overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slede of slides) {
        slede.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = int => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

let timerId = setTimeout(function tick() {
  nextSlide('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})


const tabstwo = document.getElementById('tabs-two');
const contenttwo = document.querySelectorAll('.content-two');

const changeClassTwo = el => {
    for (let i = 0; i < tabstwo.children.length; i++) {
        tabstwo.children[i].classList.remove('active');
    }
    el.classList.add('active');
    
}
console.log(changeClassTwo);

tabstwo.addEventListener('click', e => {
    const currTwo = e.target.dataset.btntwo;
    changeClassTwo(e.target);
    for (let i = 0; i < contenttwo.length; i++) {
        contenttwo[i].classList.remove('active');
        if (contenttwo[i].dataset.contenttwo === currTwo) {
            contenttwo[i].classList.add('active');
        }
    }
})
