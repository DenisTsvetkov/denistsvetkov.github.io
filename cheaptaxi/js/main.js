$(function() {

	$('.nav a').click(function(event){
		event.preventDefault();
		
	});
	


	var reg_btn = $('#registration-btn');
	var enter_btn = $('#enter-btn');

	var reg_link = $('#reg-link');
	var enter_link = $('#enter-link');

	reg_link.click(function(){
		
		$('.modal-window').addClass('show');
		reg_btn.addClass('active-switch');
		enter_btn.removeClass('active-switch');

		$('#form-registration').addClass('show');
		$('#form-enter').removeClass('show');
	});

	enter_link.click(function(){
		
		$('.modal-window').addClass('show');
		enter_btn.addClass('active-switch');
		reg_btn.removeClass('active-switch');

		$('#form-enter').addClass('show');
		$('#form-registration').removeClass('show');
	});

	reg_btn.click(function(){
		
		
		reg_btn.addClass('active-switch');
		enter_btn.removeClass('active-switch');

		$('#form-registration').addClass('show');
		$('#form-enter').removeClass('show');
	});

	enter_btn.click(function(){
		
		
		enter_btn.addClass('active-switch');
		reg_btn.removeClass('active-switch');

		$('#form-enter').addClass('show');
		$('#form-registration').removeClass('show');
	});
	
	$(document).mouseup(function (e){ 
			var div = $(".modal-window");
			if (!div.is(e.target) 
			    && div.has(e.target).length === 0) { 
				div.removeClass('show');
		}
	});
	
});