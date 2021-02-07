// Jquery for Search Bar
$(document).on('click', '.search', function(){
  $('.search-bar').addClass('search-bar-active');
});

$(document).on('click', '.searh-cancel', function(){
  $('.search-bar').removeClass('search-bar-active');
});

// login and sign up form
$(document).on('click', '.user,.already-account', function(){
  $('.form').addClass('login-active').removeClass('signup-active');
});

$(document).on('click', '.form-cancel', function(){
  $('.form').removeClass('login-active');
});

$(document).on('click', '.form-cancel', function(){
  $('.form').removeClass('signup-active');
});


$(document).on('click', '.create-account', function(){
  $('.form').addClass('signup-active').removeClass('login-active');
});

// full screen slider
$(document).ready(function() {
  $('#adaptive').lightSlider({
    adaptiveHeight:true,
    auto: true,
    item:1,
    sliderMargin:0,
    loop:true
  });
});

// features-slider

$(document).ready(function() {
  $('#autoWidth').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function(){
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});


// for fixed menu with scroll
$(window).scroll(function(){
  if($(document).scrollTop() > 50){
    $('.navigation').addClass('fix-nav');
  } else{
    $('.navigation').removeClass('fix-nav');
  }
});

// for-responsive-menu
$(document).ready(function(){
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active');
    $('.navigation').toggleClass('active');
  });
});