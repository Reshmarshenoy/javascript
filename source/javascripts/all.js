

$(document).ready(function () {
    console.log("Document load")
$(function() {
    $('#demo-form').parsley().on('form:validate', function (formInstance) {
    var ok = $('.parsley-error').length === 0;
    .on('form:init', function() {
        .on('field:error', function() {
            alert("please fill the field");

        });


        });
    });
    
    .on('form:submit', function() {
            return false;
      
    });
   

});

});