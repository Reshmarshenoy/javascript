


$(document).ready(function () {
    console.log("Document load")
$(function () {
  $('.demo-form').parsley().on('form:validate', function (formInstance) {
    var ok = $('.parsley-error').length === 0;
   // var ok = formInstance.isValid({group: 'block1', force: true}) || formInstance.isValid({group: 'block2', force: true});
    $('.invalid-form-error-message')
      .html(ok ? '' : 'You must correctly fill required blocks!')
      .toggleClass('filled', !ok);
    if (!ok)
      formInstance.validationResult = false;
  });
});

$('form:submit', function() {
    return false; 
  });

$( "p" ).focusin(function() {
  $( this ).find( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});

$("p").dblclick(function () {
        alert("Please enter the value!");
    });

});

(function(){
    console.log("Hello")
})()


$(window).on('load', function(){
    console.log("After everything loaded")
})






