$(function(){

      navbar();

      function navbar(){
        var screenHeight = $('.hero').height()+60;
        $(window).scroll(function(){
          if($(window).scrollTop() >= screenHeight){
            $('.show-nav').addClass('show');
            $(".navigation").addClass('position-fixed');
          }
          else{
            $('.show-nav').removeClass('show');
            $(".navigation").removeClass('position-fixed');
          }
        });

        $('.show-nav-btn').click(function(e){
          e.preventDefault();
          $('.position-fixed').toggleClass('show');
        });
      };
});