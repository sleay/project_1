num = 0;

$('.slide_btn_1').on('click',function(){
    if(num > 0){
        num--;
        $('.slide_img > div').css({
            transform:`translateX(-${num}00%)`
        })
        $('.content-2 > ul').css({
            transform:`translateX(-${num}00%)`
        })
    }
    aa()
    console.log(num)
});

$('.slide_btn_2').on('click',function(){
    if(num < 2){
        num++;
        $('.slide_img > div').css({
            transform:`translateX(-${num}00%)`
        })
        $('.content-2 > ul').css({
            transform:`translateX(-${num}00%)`
        })
    }
    aa()

   
    console.log(num)
});

function aa(){
    if(num==0){
        $('.slide_btn_1').css({opacity:'0.3'})
    }
    else{
        $('.slide_btn_1').css({opacity:'1'})
    }

    if(num==2){
        $('.slide_btn_2').css({opacity:'0.3'})
    }
    else{
        $('.slide_btn_2').css({opacity:'1'})
    }
}
aa()