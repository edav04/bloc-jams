$(document).ready(function() { 
   $('.hero-content h3').click(function(){
      subText = $(this).text();
      $(this).text(subText + "!");
   });

   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };

   var onHoverAction1 = function(event) {
     console.log('Hover action triggered.');
     $(this).css({'color': 'pink'});
   };

   var changeFont = function(event) {   
     $(this).css({'font-size': '5px'});
   };

   $('.selling-points .point').hover(onHoverAction, offHoverAction);
   $('.selling-points .point').hover(changeFont);

   $('.hero-content h3').hover(onHoverAction1);
});