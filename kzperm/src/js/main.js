import $ from 'jquery';

$(document).ready( function(){
    var btnMenu = $('.services-list-btn');
    var servicesMenu = $('.services-list');
    btnMenu.on('click', function(e){
        e.preventDefault();
        servicesMenu.slideToggle( "slow", function() {
            // Animation complete.
          });
    })

    $(window).resize(function(){
        if (window.innerWidth >=992){
            servicesMenu.show();
        }
    });


    // var serviceListLi = $('.services-list li');

    // serviceListLi.on('click', function(e){
    //     serviceListLi.removeClass('select');
    //     e.preventDefault();
        
    //     $('.services-list .services-table').remove();
        
    //     $(this).after('<table class="services-table"><thead><tr><td>Название услуги</td><td>Стоимость</td></tr></thead><tbody><tr><td>Массаж спины 30 мин. (воротник.зона + груд.отдел + поясничн.отдел)</td><td class="services-table-price">750 руб.</td></tr><tr><td>Массаж спины 40 мин. (воротник.зона + груд.отдел + поясничн.отдел)</td><td class="services-table-price">1000 руб.</td></tr></tbody></table>');
        
    //     $(this).addClass('select');

        
    //     $('.services-table').css('display','none');
    //     $('.services-table').slideDown(300);
    // });
});