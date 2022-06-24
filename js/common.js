$('header').load('inc.html header > *');
$('footer').load('inc.html footer > div');


let Move= {
    y1:0,y2:0
}
function Move1(){

Move.y1 = $(window).scrollTop();

if(Move.y1 > Move.y2){
    $('header').addClass('active')
}

else{
    $('header').removeClass('active')
}
Move.y2 = Move.y1;
}

$(window).on('scroll',function(){
Move1();
})
