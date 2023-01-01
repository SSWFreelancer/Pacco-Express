$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
     $('.header, .header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header, .header__burger, .menu').removeClass('active');
      $('body').removeClass('lock');
   });  
   $('.reviews__more').click(function (event) {
      event.preventDefault();
      $(this).remove();
      $('.reviews__card').addClass('show');
   });  
   

   
   $('.main__logotypes').width($(this).find('>div:first-child').width()); 
   $('.main__logotypes > div:first-child ').css('animation', 'marquee1 50s linear infinite -25s'); 
   $('.main__logotypes > div:last-child ').css('animation', 'marquee2 50s linear infinite 0s'); 

  $("input[type='tel']").mask("+7(999) 999-99-99");
    $('.products__nav li').click(function (event) {
        $('.products__nav li').removeClass('active');
        $(this).addClass('active');
        $('.products__body').removeClass('active');
        $('#'+$(this).attr('data-tab')+' ').addClass('active');
    });     

      $('.products__card:not(.products__card-empty) .products__image').slick({
           arrows: false,
           dots: true,
           autoplay:false,
           infinite:false,
           swipe:true,
           slidesToShow: 1,
           speed: 800,    
      });   
      $('.popup__image').slick({
           arrows: false,
           dots: true,
           autoplay:true,
           infinite:true,
           swipe:true,
           slidesToShow: 1,
           speed: 800,    
      });   

    $('.products__info b').click(function (event) {
        $('.popup').addClass('open');
        $('body').addClass('lock');
    }); 
    $('.popup__close, .popup__x, .popup__button').click(function (event) {
        $('.popup').removeClass('open');
        $('body').removeClass('lock');
    });    
      $('.products__body').slick({
         responsive: [
           {
             breakpoint: 5000,
             settings: "unslick"
           },
           {
             breakpoint: 992,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 1.5,
               speed: 800,        
               touchThreshold:50,   
             }
           },    
           {
             breakpoint: 992,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 1.2,
               speed: 800,     
               touchThreshold:50,        
             }
           }, 

         ]      
      });   
});    


$(window).scroll(function (event) {
 var scroll = $(window).scrollTop();
     if(scroll>0){
         $('.header').addClass('scroll');
     }else{
         $('.header').removeClass('scroll');
     }
 });      
$(document).scroll(function () {
   var s_top = $(window).scrollTop() + $(window).height(); 
   for (var i = 1; i < $('.menu__item').length + 1; i++) {
      var href = $('.menu__item:nth-child('+ i +') a').attr('href');
      if($(href).length){
         var tpx = $(href).offset().top + $(href).height()*0.5;
         if(s_top > tpx){
            $(".menu__item").removeClass('active');  
            $('.menu__item:nth-child('+ i +')').addClass('active');  
         }
         if(s_top<=$(window).height()){
            $(".menu__item").removeClass('active'); 
         }
      }        
   }
});