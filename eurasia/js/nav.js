$(function(){
  var screenHeight = $('.hero').height()+60;
  navbar();

  function navbar(){
    if($(window).scrollTop() >= screenHeight){
      $('.show-nav').addClass('show');
      $(".navigation").addClass('position-fixed');
    }
    else{
      $('.show-nav').removeClass('show');
      $(".navigation").removeClass('position-fixed');
    }
        
    $('.show-nav-btn').click(function(e){
      e.preventDefault();
      $('.position-fixed').toggleClass('show');
    });
  };

  $(window).scroll(function(){
    navbar();
  });
});