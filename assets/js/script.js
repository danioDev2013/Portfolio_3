$(document).ready(function(){
  window.scrollTo(0,0);

//selectors
var bttn = $(".show");
var navBrand = $(".navbar-brand");


//creates brand
navBrand.text("<DO>");
bttn.text("Resume");


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





//function calls
typeWriter();
featuredProjects();



  //button to more
  var homeBtn = $('<button class="more" id="homeBtn">').text("Home");
  $(".homeBTN").append(homeBtn);

  //home button click function
  $("#homeBtn").on("click", function(){
    window.location.reload();
    window.scrollTo(0,0);
  })

   
});
