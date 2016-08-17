
$(document).ready(function () {
    console.log("Document load")


$(function(){
        //  Dropzone.options.uiDZResume = {
           // success: function(file, response){
               // console.log('WE NEVER REACH THIS POINT.');
               // alert(response);
            //}
       // };
  Dropzone.options.myAwesomeDropzone = {
    maxFilesize: 5,
    addRemoveLinks: true,
    dictResponseError: 'Server not Configured',
    acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
    init:function(){
      var self = this;
      // config
      self.options.addRemoveLinks = true;
      self.options.dictRemoveFile = "Delete";
      //New file added
      this.on("addedfile", function (file) {
       console.log('new file added ', file);
        alert("file added");
      });
      // Send file starts
      self.on("sending", function (file) {
        console.log('upload started', file);
        $('.meter').show();
      });
      
      // File upload Progress
      self.on("totaluploadprogress", function (progress) {
        console.log("progress ", progress);
        $('.roller').width(progress + '%');
      });

      self.on("queuecomplete", function (progress) {
        $('.meter').delay(999).slideUp(999);
      });


      
      // On removing file
      self.on("removedfile", function (file) {
        console.log(file);
      });
    }
  };
});
});