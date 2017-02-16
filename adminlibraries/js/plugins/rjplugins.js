/*!
 * RJ jQuery Plugin - Copyright (c) 2016 
 */
;(function($, window, document, undefined)
{
    
    $.fn.collapseit = function(params)
    {
        var element = this;
        if (element.hasClass('collapsed'))
        {
            element.html('<i class="fa fa-plus"></i>');
        }
        else
        {
            element.html('<i class="fa fa-minus"></i>');
        }
    };

})(window.jQuery || window.Zepto, window, document);
