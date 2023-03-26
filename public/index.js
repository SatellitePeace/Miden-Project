var listArray = ["slide1","slide2","slide3"];
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
        loop: true,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,        
        autoHeight: true,
        autoplay: {
            delay: 3000,//animation과 시간 맞춰줘야함
        }, 
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
              },
        
        },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})

