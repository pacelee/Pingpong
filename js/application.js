$(document).ready(function() {
  $('button').on('click', function() {
   $('.results').empty();
   var number = $('input').val();
   for (i = 1; i <= number; i++) {
   if (((i % 3) === 0) && ((i % 5) === 0)) {
     $('.results').append('<li> pingpong </li>')
   }
   else if ((i % 5) === 0 ) {
     $('.results').append('<li> pong </li>')
   }
   else if ((i % 3) === 0) {
     $('.results').append('<li> ping </li>')
   }
   else {
     $('.results').append('<li>' + i + '</li>')
   }
  };
});
});
