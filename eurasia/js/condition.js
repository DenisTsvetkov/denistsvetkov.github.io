$(function(){
      $('.condition').click(function(e){
       e.preventDefault();
       var li = $(this).parents("li");
       var d = li.children('.condition-text')
       d.show();


      });
       $(document).mouseup(function (e){ 
        var div = $(".condition-text");
        if (!div.is(e.target) 
          && div.has(e.target).length === 0) { 
          div.hide();
        }
      });
   });