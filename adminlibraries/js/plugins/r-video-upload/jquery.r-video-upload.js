/*!
 * RJ jQuery Plugin - Copyright (c) 2016 
 */
;(function($, window, document, undefined)
{
    
    $.fn.RFileUploader = function(params)
    {
        this.each(function() {
            var o = $(this);
            o.find('.r-fileupload-exists').addClass('hidden');
            o.find('input[type="file"]').change(function(){
                o.find('.r-fileupload-exists').removeClass('hidden');
                o.find('.r-fileupload-new').addClass('hidden');
                o.find('.r-fileupload-preview').text($('#inputvideopresentation')[0].files[0].name);
            });
        });
    };

})(window.jQuery || window.Zepto, window, document);

