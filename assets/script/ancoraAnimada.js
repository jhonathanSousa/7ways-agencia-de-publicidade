$(function() {   

  $('a').click(function(){  

   $('html, body').animate({  
     scrollTop: $( $(this).attr('href') ).offset().top  
   }, 2500); 

   return false; 

  });  

});  