$(function(){
      var screenHeight = $('.home').height();
      $(window).scroll(function(){
        if($(window).scrollTop() >= screenHeight){
          $(".navigation").addClass('position-fixed');
        }
        else{
          $(".navigation").removeClass('position-fixed');
        }
      });
       
   });