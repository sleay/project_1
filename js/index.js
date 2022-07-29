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

          });
          $.each(data.Only,function(k,v){

            elList2 = `
              <li class="list">
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

          

          });

          $('.list').on('click',function(){
            $(this).text()
            console.log($(this).html().src)
          
          });



      }
      
  })
  
let popup = $('.submitpopup');

  $('.submitbox').on('click',function(){
    event.preventDefault();
    $(popup).addClass('active')
 
  });

  $(popup).on('click',function(){
    if(event.target.classList.contains('active')){
      $(popup).removeClass('active')   
  }
  })



$('.room').on('click',function(){
  
  
  if($('.roompop').hasClass('active')){
    $('.roompop').removeClass('active')
  }
  else{
    $('.roompop').addClass('active')
  }
  
})


$('.date').on('click',function(){

  
  if($('.datepop').hasClass('active')){
    $('.datepop').removeClass('active')
  }
  else{
    $('.datepop').addClass('active')
  }


});


$('.person').on('click',function(){
 

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
