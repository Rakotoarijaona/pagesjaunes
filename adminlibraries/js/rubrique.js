function addVideoYoutube()
{
  var urlVideo = $('#url-video-youtube').val();
  var vignetteVideo = $('#vignette-video-youtube')[0].files[0];
  var entrepriseId = $('input[name="entrepriseId"]').val();
  if (urlVideo != '' && vignetteVideo != '')
  {
    
    var formdata = new FormData();
    var img;
    formdata.append("videosfile", vignetteVideo);
    formdata.append("urlVideo", urlVideo);
    formdata.append("entrepriseId", entrepriseId);
    $.ajax({
        type: 'POST',
        url: 'uploadVignetteYoutube',
        data: formdata,
        processData: false,
        contentType: false,
        success: function(data) {
          img = data; 
          $('#video-youtube-list').html(data);
          resetVideosForm();
        },
        error: function() {
          img = data; 
        }   // tell jQuery not to set contentType
    });
  }
}
function resetVideosForm()
{
  $('#url-video-youtube').val("");
  $('#vignette-video-youtube').val(''); 
  $('.videoUpload').fileupload('reset');
}

$(document).ready(function()
{ 
    var radio = $('input[name="radioActivVideo"]');
    radio.change(function()
    {
        //alert('{/literal}{jfullurl "entreprise~entreprise:uploadVideo"}{literal}');
    });
    var bt_add_video_youtube = $('#bt-add-video-youtube');
    bt_add_video_youtube.click(function(){
        var urlVideo = $('#url-video-youtube').val();
        var vignetteVideo = $('#vignette-video-youtube')[0].files[0];

        var inputVal = [urlVideo, vignetteVideo];
        if (urlVideo != '' && vignetteVideo != '')
        {
            
            var formdata = new FormData();
            var img;
            formdata.append("videosfile", vignetteVideo);
            formdata.append("urlVideo", urlVideo);
            $.ajax({
                type: 'POST',
                url: 'uploadVignetteYoutube',
                data: formdata,
                processData: false,
                contentType: false,
                success: function(data) {
                  img = data; 
                  var tdelem = '<tr class="video-item"><input type="hidden" name="youtube-video[]" value="'+inputVal+'"/><td style="max-width:50%">'+urlVideo+'</td><td><img class="tab-img-thumbnail" src="'+img+'"></td><td><span class="btn btn-danger tr-delete"><i class="fa fa-trash"></i></span></td></tr>'
                   $('#video-youtube-list').append(tdelem);  
                   $('#url-video-youtube').val("");
                   $('#vignette-video-youtube').val(''); 
                   $('.tr-delete').click(function()
                    {
                        $(this).parents('.video-item').remove();
                    });
                   $('.videoUpload').fileupload('reset');
                },
                error: function() {
                  img = data; }   // tell jQuery not to set contentType
            });
        }
    });
    var bt_add_image = $('#bt-add-image');
    bt_add_image.click(function(){
        var galerie_image_file = $('#galerie-image')[0].files[0];

        if (galerie_image_file != '')
        {
            
            var formdata = new FormData();
            var img;
            formdata.append("imagefile", galerie_image_file);
            $.ajax({
                type: 'POST',
                url: 'uploadGalerieImage',
                data: formdata,
                processData: false,
                contentType: false,
                success: function(data) {
                  img = data; 
                  var tdelem = '<tr class="image-item"><input type="hidden" name="entreprise-image[]" value="'+img+'"/><td><img class="tab-img-thumbnail" src="'+img+'"></td><td><span class="btn btn-danger tr-delete"><i class="fa fa-trash"></i></span></td></tr>'
                   $('#image-list').append(tdelem);  
                   $('#galerie-image').val(''); 
                   $('.tr-delete').click(function()
                    {
                        $(this).parents('.image-item').remove();
                    });
                   $('.imageUpload').fileupload('reset');
                },
                error: function() {
                  img = data; }   // tell jQuery not to set contentType
            });
        }
    });

    
});