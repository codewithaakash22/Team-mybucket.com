const slides = document.querySelectorAll(".slide");
let counter = 0;
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;

});

const slideImg = ()=>{
    slides.forEach(
        (slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

prevBtn.addEventListener("click",() => {
    if(counter != 0){
        counter--;
        slideImg();
    }
});

nextBtn.addEventListener("click",slideNext);

function slideNext(){
    if(slides.length-1 > counter){
        counter++;
        slideImg();
    }else{
        counter = 0;
        slideImg();
    }

}

setInterval(slideNext,3000);