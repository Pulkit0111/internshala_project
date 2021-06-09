
    /*Title: Cool Modal Popup Sign In/Out Form*/

$(function() {
  //defining all needed variables
  var $overlay = $('.overlay');
  var $mainPopUp = $('.main-popup')
  var $signIn = $('#sign-in');
  var $register = $('#register');
  var $formSignIn = $('form.sign-in');
  var $formRegister = $('form.register');
  var $cont = $('.cont');

  $('#loginBtn').on('click', function(){
    $overlay.addClass('visible');
    $mainPopUp.addClass('visible');
    $cont.addClass('Disble');
    $signIn.addClass('active');
    $register.removeClass('active');
    $formRegister.removeClass('move-left');
    $formSignIn.removeClass('move-left');
  });
  $overlay.on('click', function(){
    $(this).removeClass('visible');
    $mainPopUp.removeClass('visible');
  });
  $('#popup-close-button a').on('click', function(e){
    e.preventDefault();
    $cont.removeClass('Disble');
    $overlay.removeClass('visible');
    $mainPopUp.removeClass('visible');
  });
  
  $signIn.on('click', function(){
    $signIn.addClass('active');
    $register.removeClass('active');
    $formSignIn.removeClass('move-left');
    $formRegister.removeClass('move-left');
  });
  
  $register.on('click', function(){
    $signIn.removeClass('active');
    $register.addClass('active');
    $formSignIn.addClass('move-left');
    $formRegister.addClass('move-left');
  });
  
  $('input').on('submit', function(e){
    e.preventDefault(); //used to prevent submission of form...remove for real use
  });
});