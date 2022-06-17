
const elBtnL = document.querySelector('.left');
const elBtnR = document.querySelector('.right');
const elSlide = document.querySelectorAll('.imgbox > ul > li');


let Z = 0;

function Move(N){
if(N=='Right'){
    if (Z < 2){
    Z++;
    let T = Z*2;
    
    elSlide.forEach(function(Q){
        Q.style = `transform: translateX(calc(-${Z}00% - ${T}0px));`;
    });

}}
else{if (Z>0){
    Z--;
    let T = Z*2;
    elSlide.forEach(function(Q){
        Q.style = `transform: translateX(calc(-${Z}00% - ${T}0px));`;
    });

}}

};

elBtnR.addEventListener('click',function(){
    event.preventDefault()
    Move('Right')
    

});



elBtnL.addEventListener('click',function(){
    event.preventDefault()
    Move('Left')
    

});


