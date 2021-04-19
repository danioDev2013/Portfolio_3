$(document).ready(function () {
  $(document).ready(function () {
    // hide non-required elements
      $("#site-header").removeClass("hidden");
      $("#about").removeClass("hidden");
      $("#proj-title").removeClass("hidden");
      $("#projects-row1").removeClass("hidden");
      $("#more_Projs").removeClass("hidden");
      $("#nav").removeClass("hidden");
  }); 

  
});

function showProjs() {
  $("#projects-row2").show();
  $("#projects-row3").show();
  $("#projects-4").show();
  $("#more_Projs").hide();
  $("#proj-title").text("Projects");
  $("#proj-title").css({"text-decoration": "underline"})
}

function home() {
  $("#proj-title").show();
  $('#about').show();
  $("#proj-title2").hide();
  $("#projects-row2").hide();
  $("#projects-row3").hide();
  $("#projects-row4").hide();
  $("#more_Projs").show();
}


$("#projBtn").on('click', function () {
  showProjs();
 });

 $("#homeProjs").on('click', function () {
  home();
 });

 var content = 'Hi, my name is Danielle!';
  
 var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
 
 
 $(ele).hide().appendTo('h5').each(function (i) {
     $(this).delay(100 * i).css({
         display: 'inline',
         opacity: 0
     }).animate({
         opacity: 1
     }, 100);
 });
 $(function() {
   $('a[href*=#]').on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
   });
 });

 $(document).ready(function() {
   $('.hover').on('touchstart touchend', function(e) {
       e.preventDefault();
       $(this).toggleClass('hover_effect');
   });
 }); 
