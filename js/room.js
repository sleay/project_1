



$('.secbtn > a').eq(0).on('click',function(){
    $('.content-1').css({display:'block'})
    $('.content-2').css({display:'none'})


    event.preventDefault();

});

$('.secbtn > a').eq(1).on('click',function(){
    // $('.content-2').load('roomtag.html .content-2 > .contentbox1');
    // $('.content-1').html('');
    $('.content-2').css({display:'block'})
    $('.content-1').css({display:'none'})

    event.preventDefault();

});
let data;
$.ajax({
    
    url:'js/room1.json',

    success:function(json){
        data = json;
        
    }
    
})


    const elSelect1 = document.querySelectorAll('.content-1 .select div');
    const elSelect2 = document.querySelectorAll('.content-2 .select div');
    const elImg1 = document.querySelectorAll('.content-1 .select > div > p:nth-of-type(2) >img');
    const elImg2 = document.querySelectorAll('.content-2 .select > div > p:nth-of-type(2) >img');
    const elPtag = document.querySelectorAll('.select > div > p:nth-of-type(2)')
    const elPtag1 = document.querySelectorAll('.content-1 .select > div > p:nth-of-type(1)')
    const elPtag2 = document.querySelectorAll('.content-2 .select > div > p:nth-of-type(1)')
    
    
    let num1 = 0,num2 = 0;
    let imgsize = elPtag[0].offsetHeight;


    Sel1();
    Sel2();

    function Sel1(){
        elSelect1.forEach(function(sel,key){
        
            elImg1[0].style=`height:${imgsize}px;`;
        
                sel.addEventListener('click',function(){
                
                    elImg1[num1].style = "height:0; transition:0.5s;" ;
                    elImg1[key].style = `height:${imgsize}px; transition:0.5s;` ;
        
                    elPtag1[num1].classList.remove('red');
                    elPtag1[key].classList.add('red');
        
                    num1=key;
                  
                    const List = $('.content-1 .contentbox1 ul li:nth-of-type(2)');
                    List.html(
                        `
                        <div><img src=${data.Love[key].Pr.b0} alt=""></div>
                        <div>
                            <img src=${data.Love[key].Smpr.b1} alt="">
                            <img src=${data.Love[key].Smpr.b2} alt="">
                            <img src=${data.Love[key].Smpr.b3} alt="">
                        </div>
                        `
                        );

                    
                    console.log(data.Love[key])
                    console.log(List)
                });
        
        });
    }

    function Sel2(){
        elSelect2.forEach(function(sel,key){
        
            elImg2[0].style=`height:${imgsize}px;`;
        
                sel.addEventListener('click',function(){
                
                    elImg2[num2].style = "height:0; transition:0.5s;" ;
                    elImg2[key].style = `height:${imgsize}px; transition:0.5s;` ;
        
                    elPtag2[num2].classList.remove('green');
                    elPtag2[key].classList.add('green');
        
                    num2=key;

                    const List1 = $('.content-2 .contentbox1 ul li:nth-of-type(2)');
                    List1.html(
                        `
                        <div><img src=${data.Only[key].Pr.b0} alt=""></div>
                        <div>
                            <img src=${data.Only[key].Smpr.b1} alt="">
                            <img src=${data.Only[key].Smpr.b2} alt="">
                            <img src=${data.Only[key].Smpr.b3} alt="">
                        </div>
                        `
                        );
                    
                        console.log(data.Only[key])
                    console.log(List1)
                });
        
        });
    }


    $('.preview > div:nth-of-type(2) >img').on('click',function(){
        console.log(this)
    });




