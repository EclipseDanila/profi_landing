let headerMenu = document.querySelector('.header__menu');
let headerNav = document.querySelector('.header__nav');
let burgerLine = document.querySelectorAll('.burger-line ');
let navPhone = document.querySelector('.nav__phone');
isNav = false;

headerMenu.addEventListener('click', ()=> {
    if (isNav) {
        isNav = false;
        headerNav.style.height = '112px';
        headerNav.style.transform = 'translateY(100px)';
        burgerLine[0].style.transform = 'rotate(45deg) translateY(0px)';
        burgerLine[1].style.transform = 'rotate(-45deg)';
        burgerLine[2].style.opacity = '0';
        navPhone.style.opacity = '1';

    } else {
        isNav = true;
        headerNav.style.height = '100px';
        headerNav.style.transform = 'translateY(0px)'
        burgerLine[0].style.transform = 'rotate(0deg) translateY(-5px)';
        burgerLine[1].style.transform = 'rotate(0deg)';
        burgerLine[2].style.opacity = '1';
        navPhone.style.opacity = '0';
    }
})

let resultExampleLeft = document.querySelector('#result__example-left');
let resultExampleRight = document.querySelector('#result__example-right');
let resultExampleId = document.querySelector('.result__example-id')
let resultCounter = 1


resultExampleLeft.addEventListener('click', ()=> {resultSlide(false)})
resultExampleRight.addEventListener('click', ()=> {resultSlide(true)})

function resultSlide(direction) {
    if(direction) {
        if( resultCounter == 3 ){
            resultCounter = 1
        } else {
            resultCounter++
        }
    } else {
        if( resultCounter == 1 ){
            resultCounter = 3
        } else {
            resultCounter--
        }
    }
    resultExampleId.textContent = resultCounter + ' / 3';
}


let resultSliderItems = document.querySelectorAll('.result__slider-img');
let resultArrowLeft = document.querySelector('#result_arrow-left');
let resultArrowRight = document.querySelector('#result_arrow-right');

resultArrowLeft.addEventListener('click', ()=> {resultSliderFunc(true)});
resultArrowRight.addEventListener('click', ()=> {resultSliderFunc(false)});

function resultSliderFunc(direction) {
    for (let i = 0; i < resultSliderItems.length; i++) {
        const resultSliderItem = resultSliderItems[i];
        let resultPosition = resultSliderItem.getAttribute('result-position')
        if (direction) {
            if( resultPosition == 2 ){
                resultPosition = 0;
                resultSliderItem.setAttribute('result-position', 0);
            } else {
                resultPosition++
                resultSliderItem.setAttribute('result-position', resultPosition)
            }
        } else {
            if( resultPosition == 0 ){
                resultPosition = 2;
                resultSliderItem.setAttribute('result-position', 2)
            } else {
                resultPosition--
                resultSliderItem.setAttribute('result-position', resultPosition)
            }
        }
        if (resultPosition == 0) {
            resultSliderItem.className = 'result__slider-img result__slider-img1'
        } else if (resultPosition == 2){
            resultSliderItem.className = 'result__slider-img result__slider-img2'
        } else {
            resultSliderItem.className = 'result__slider-img .result__slider-img3'
        }
        
    }  
}

let resultSlider = document.querySelector('.result__slider');
let resultSliderWrapper = document.querySelector('.result__slider-wrapper');
let resultBtnExit = document.querySelector('#result__btn-exit')
let resultSearch = document.querySelector('#result__search');

resultSearch.addEventListener('click', ()=> {resultsSliderScale(true)}) ;
resultBtnExit.addEventListener('click', ()=> {resultsSliderScale(false)}) ;


function resultsSliderScale(scale) {
    if (scale) {
        resultSliderWrapper.className = 'result__slider-wrapper-active'
        resultSlider.className = 'result__slider result__slider-active'
        resultSearch.style.display = 'none'
        resultBtnExit.style.display = 'inline'
    } else {
        resultSliderWrapper.className = 'result__slider-wrapper'
        resultSearch.style.display = 'inline'
        resultSlider.className = 'result__slider'
        resultBtnExit.style.display = 'none'
    }

}