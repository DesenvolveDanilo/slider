let TotalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw) * ${TotalSlides}`
document.querySelector('.slider--controls').style.height= `${document.querySelector('.slider').clientHeight}px`


function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = TotalSlides-1; 
        // porque é um array
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide>(TotalSlides-1)){
        currentSlide = 0;
    }
    updateMargin();

}

function updateMargin(){
    let updateMargin = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * updateMargin)
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`

}

setInterval(goNext, 2000)
