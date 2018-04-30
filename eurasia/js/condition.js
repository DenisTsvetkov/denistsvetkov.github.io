$(function(){
    

    $('.company-condition-btn').click(function(e){
       e.preventDefault();
       var conditions_block = $(this).parents('li').children('.conditions');
       conditions_block.addClass("show");
    });

    $('.close-conditions').click(function(e){
       e.preventDefault();
       var conditions_block = $(this).parents('.conditions');
       conditions_block.removeClass("show");
    });
});