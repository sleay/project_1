var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed:1000,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let data;
  $.ajax({
      
      url:'js/room1.json',
  
      success:function(json){
          data = json;
          let elList1='';
          let elList2='';
          $.each(data.Love,function(k,v){

            elList1 = `
              <li class="list">
                  <p>LOVEYOU ${v.roomNo}호</p>
                  <div>
                      <div>
                          <img src=${v.Smpr.b0}>
                          <img src=${v.Smpr.b1}>
                          <p>가격
                          2인기준
                          100,000원~
                          </p>
                      </div>
                      <div>
                          <button>선택하기</button>
                      </div>
                  </div>
              </li>
            `;

            $('.roompop ul').append(elList1)

            let txt= ''
            $('.list > div > div > button').eq(k).on('click',function(){
              txt=$('.list > p').eq(k).text();
              $('.room > p:nth-of-type(2)').html(` <span class="material-symbols-outlined">
              bed
          </span>
          ${txt}`);

              $('.pop_img > div >img').attr('src',`${v.Pr.b0}`)
              $('.pop_img > div> div >img').eq(0).attr('src',`${v.Smpr.b1}`)
              $('.pop_img > div> div >img').eq(1).attr('src',`${v.Smpr.b2}`)
              $('.pop_img > div> div >img').eq(2).attr('src',`${v.Smpr.b3}`)
              $('.pop_img > p').text(txt)
            })

          });
          $.each(data.Only,function(k,v){

            elList2 = `
              <li class="list a1">
                  <p>ONLYYOU ${v.roomNo}호</p>
                  <div>
                      <div>
                          <img src=${v.Smpr.b0}>
                          <img src=${v.Smpr.b1}>
                          <p>가격
                          2인기준
                          100,000원~
                          </p>
                      </div>
                      <div>
                          <button>선택하기</button>
                      </div>
                  </div>
              </li>
            `;

            $('.roompop ul').append(elList2)

            let txt= ''


            $('.a1 > div > div > button').eq(k).on('click',function(){
              txt=$('.a1 > p').eq(k).text();
              $('.room > p:nth-of-type(2)').html(` <span class="material-symbols-outlined">
              bed
          </span>
          ${txt}`);

              $('.pop_img > div >img').attr('src',`${v.Pr.b0}`)
              $('.pop_img > div> div >img').eq(0).attr('src',`${v.Smpr.b1}`)
              $('.pop_img > div> div >img').eq(1).attr('src',`${v.Smpr.b2}`)
              $('.pop_img > div> div >img').eq(2).attr('src',`${v.Smpr.b3}`)

              $('.pop_img > p').text(txt)
            })





            
          //   $('.list > div > div > button').on('click',function(){
          //     txt=$(this).parents('.list').find('>p').text();

              

          //     $('.room > p:nth-of-type(2)').html(` <span class="material-symbols-outlined">
          //     bed
          // </span>
          // ${txt}`);
          //     $('.pop_img > p').text(txt)

          //   })
          

          });

        


      }
      
  })
  
let popup = $('.submitpopup');

  $('.submitbox').on('click',function(){
    event.preventDefault();
    $(popup).addClass('active')
    $('.datepop').removeClass('active')
    $('.personpop').removeClass('active')
    $('.roompop').removeClass('active')
 
    if( $(popup).hasClass('active')){
      $('body').css({overflow:'hidden'})
    }
    



  });

 

  $('.closebtn').on('click',function(){
    $(popup).removeClass('active')
    $('body').css({overflow:'auto'})
  })


  $(popup).on('click',function(){
    if(event.target.classList.contains('active')){
      $(popup).removeClass('active')   
        $('body').css({overflow:'auto'})
  }
  })



$('.room').on('click',function(){
  
  $('.datepop').removeClass('active')
  $('.personpop').removeClass('active')
  
  if($('.roompop').hasClass('active')){
    $('.roompop').removeClass('active')
  }
  else{
    $('.roompop').addClass('active')
  }
  
})


$('.date').on('click',function(){

  $('.roompop').removeClass('active')
  $('.personpop').removeClass('active')

  if($('.datepop').hasClass('active')){
    $('.datepop').removeClass('active')
  }
  else{
    $('.datepop').addClass('active')
  }


});


$('.person').on('click',function(){
 
  $('.roompop').removeClass('active')
  $('.datepop').removeClass('active')


  if($('.personpop').hasClass('active')){
    $('.personpop').removeClass('active')
  }
  else{
    $('.personpop').addClass('active')
  }

});

$('.roompop ul li').each(function(k,v){
  $('.list div div button').eq(k).on('click',function(){
    console.log('ok')
  });
})
  // $.each(data.Love,function(k,v){

  // });

  total = 0;
  ad = 0;
  ch = 0;
  bb = 0;



$('.adult > button').eq(0).on('click',function(){
  if(ad>0){
    ad--;
    total--;
    
  }
  $('.adult > p').text(ad)
  $('.person > p >span').eq(0).text(ad) 
  $('.count').eq(0).text(ad)
})
$('.adult > button').eq(1).on('click',function(){
  if(ad >=0&&total < 6){
    ad++;
    total++;
   
  }
  $('.adult > p').text(ad)
  $('.person > p >span').eq(0).text(ad)
  $('.count').eq(0).text(ad)
})

$('.child > button').eq(0).on('click',function(){
  if(ch>0){
    ch--;
    total--;
    
  }
  $('.child > p').text(ch) 
  $('.person > p >span').eq(1).text(ch)
  $('.count').eq(1).text(ch)

})
$('.child > button').eq(1).on('click',function(){
  if(ch >=0&&total < 6){
    ch++;
    total++;
   
  }
  $('.child > p').text(ch)
  $('.person > p >span').eq(1).text(ch)
  $('.count').eq(1).text(ch)
})

$('.baby > button').eq(0).on('click',function(){
  if(bb>0){
    bb--;
    total--;
    
  }
  $('.baby > p').text(bb) 
  $('.person > p >span').eq(2).text(bb)
  $('.count').eq(2).text(bb)
})
$('.baby > button').eq(1).on('click',function(){
  if(bb >=0&&total < 6){
    bb++;
    total++;
   
  }
  $('.baby > p').text(bb)
  $('.person > p >span').eq(2).text(bb)
  $('.count').eq(2).text(bb)
})


  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });

  if (matchMedia("screen and (min-width: 1024px)").matches) {
    $('.datepop').html("<div id='calendar'></div>")
    $('.mobile-1').html('')
  } else {
    $('.mobile-1').html("<div id='calendar'></div>")
    $('.datepop').html('')

    $('.room').on('click',function(){
  
      $('.datepop').removeClass('active')
      $('.personpop').removeClass('active')
      $('.roompop').removeClass('active')
      
    })
    
    
    $('.date').on('click',function(){
      $('.datepop').removeClass('active')
      $('.personpop').removeClass('active')
      $('.roompop').removeClass('active')
    });
    
    
    $('.person').on('click',function(){
      $('.datepop').removeClass('active')
      $('.personpop').removeClass('active')
      $('.roompop').removeClass('active')
    });


  }