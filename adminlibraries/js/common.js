// init tinymce
function initTinyMCE ()
{
    tinymce.init 
    (
        {
            plugins     : "textcolor jbimages",
            toolbar     : "forecolor | backcolor | undo redo | bold italic | alignleft aligncenter alignright alignjustify | jbimages",
            selector    : '.tinymce',
            object_resizing : true,
            language    : 'fr_FR',
            setup       : function (editor)
            {
                editor.on ('blur', function (e)
                {
                    var zContenu = tinyMCE.get ($(this).attr('id')).getContent ().replace (/(<([^>]+)>)/ig, "") ;

                    if (!isEmpty (zContenu, 'string'))
                    {
                        $("span[id='"+$(this).attr ('id')+"-error']").remove () ;
                        $(this).attr ('aria-invalid', false) ;
                    }
                }) ;
            },
            style_formats: 
            [
                {
                    title: 'Image à droite', 
                    selector: 'img',
                    styles: 
                    {
                        'float': 'right', 
                        'margin': '0 0 0 10px',
                        'display' : 'inline-block',
                        'clear' : 'left'
                    }
                },
                {
                    title: 'Image à gauche', 
                    selector: 'img', 
                    styles: 
                    {
                        'float': 'left', 
                        'margin': '0 10px 0 0',
                        'display' : 'inline-block',
                        'clear' : 'right'
                    }
                }
            ]
        }
    ) ;
}

// init file upload
function initFileUpload ()
{
    $(".classic-upload").each (function ()
    {
        $(this).fileinput
        ({
            'showUpload'            : false,
            showCaption             : false,
            browseClass             : "btn btn-success btn-sm",
            fileType                : "any",
            browseIcon              : "<i class='fa fa-upload'></i> &nbsp;",
            browseLabel             : " Parcourir &hellip; ",
            removeLabel             : 'Supprimer',
            removeIcon              : '<i class="fa fa-times"></i> ',
            removeClass             : 'btn btn-danger',
            previewOtherTemplate    : '<div class="file-preview-frame" id="{previewId}">\n' +
            '   <div class="file-preview-other">\n' +
            '       <h2><i class="fa fa-file-text-o"></i></h2>\n' +
            '           {caption}\n' +
            '   </div>\n' +
            '</div>',
            msgLoading              : FILE_UPLOAD_MSG_LOADING,
            msgProgress             : FILE_UPLOAD_MSG_PROGRESS
        }).
        on ('change', function (evt)
        {
            $("#"+$(this).attr('id')+"-error").remove () ;

            $(this).removeClass ('error') ;

            var file = evt.target.files [0] ;

            if (typeof file != "undefined")
            {
                var filename = file.name ;

                fileExtension = filename.substr((filename.lastIndexOf('.') + 1)) ;

                var mediaWithAlt = ['flv', 'mp4', 'f4m', 'jpeg', 'jpg', 'gif', 'tiff' ,'png'] ;

                if (inArray (fileExtension, mediaWithAlt))
                {
                    $("#mediaForm #text_alt_container").removeClass ("hidden") ;
                    $("#mediaForm #zMediaContentAlt").addClass ("required") ;
                }
                else
                {
                    $("#mediaForm #text_alt_container").addClass ("hidden") ;
                    $("#mediaForm #zMediaContentAlt").removeClass ("required") ;
                    $("#mediaForm #zMediaContentAlt-error").remove () ;
                }
            }

        }).
        on ('fileloaded', function (event, file, previewId, index)
        {
            $(this).attr ("last-uploaded-value", file.name) ;
            manageRules () ;
        })
        .on ('fileclear', function (event)
        {
            $(this).parents("[class^='form-group']").find (".old-value").val ("") ;
            $(this).attr ("last-uploaded-value", "") ;

            $("#mediaForm #text_alt_container").addClass ("hidden") ;
            $("#mediaForm #zMediaContentAlt-error").remove () ;

            manageRules () ;

        }) ;
    });

    $(".classic-upload").change (function ()
    {
        $("#containerPdfError").empty () ;
        $("#containerImageError").empty () ;
    }) ;
}

// init remote
function setRemote (_oThis)
{
    var $this = $(_oThis) ;

    var remote = $this.data('load-remote');

    var zUrl            = $this.data('form-url') ;
    var zRemoteTarget   = $this.data('remote-target') ;

    if (remote)
    {
        $($this.data('remote-target')).load(remote, function ()
        {
            $(zRemoteTarget + " form").attr ("action", zUrl) ;
        }) ;
    }

    $('body').on ('hidden.bs.modal', '.modal', function (e)
    {
        $(e.target).removeData("bs.modal").find(".modal-content").empty();
    });

    return false ;
}
// init remote

// test general empty value
function isEmpty (_value, _zType) 
{
    var bEmpty = true ;

    if (_value !== null)
    {
        // string
        switch (_zType)
        {
            case 'string' :
                if ((_value != 'undefined') && (_value != null))
                {
                    var zStr = $.trim (_value) ;
                    if (zStr.length > 0)
                    {
                        bEmpty = false ;
                    }
                }
            break ;

            case 'integer' :
                if ((_value != 'undefined') && (_value != null))
                {
                    var iInt = $.trim (_value) ;
                    if (parseInt (iInt) > 0)
                    {
                        bEmpty = false ;
                    }
                }
            break ;

            default:
                if ((_value != 'undefined') && (_value != null))
                {
                    var zStr = $.trim (_value) ;
                    if (zStr.length > 0)
                    {
                        bEmpty = false ;
                    }
                }
            break ;
        }
    }

    return bEmpty ;
}

// clear date
function clearThisDate (_oThis)
{
    $(_oThis).parents (".input-group").find (".datepicker,.datepicker-year").val ("") ;

    return false ;
}

// handle error
function handleError (_zInputId, _zMessageError)
{
    $('span[id="'+ _zInputId + '-error"]').remove () ;

    $('#' + _zInputId).parents ("[class^='form-group']").append ('<span id="' + _zInputId + '-error" class="error">' + _zMessageError + '</span>') ;

    $('#' + _zInputId).change (function ()
    {
        if (!isEmpty ($(this).val (), 'string'))
        {
            $('span[id="'+ _zInputId + '-error"]').remove () ;
        }
    }) ;
}

// init select classic
function initSelectClassic (_zId, _tzExistValue)
{
    $("#"+_zId).select2 () ;

    if (arguments.length == 2)
    {
        if (!isEmpty (_tzExistValue, 'string'))
        {
            $("#"+_zId).select2 ('val', _tzExistValue) ;
        }
    }
    $("#"+_zId).select2 ('container').find ('.select2-search').addClass ('hidden') ;
}

// inArray
function inArray (_oValue, _toArray)
{
    var bInArray = false ;

    if (jQuery.inArray(_oValue, _toArray) > -1)
    {
        bInArray = true ;
    }

    return bInArray ;
}

// show loading
function loadingShow ()
{
    $("#loadingMessagePagination").removeClass ("hidden") ;
}

// reset select2 value
function resetSelect2Val (_oElement, separator)
{
    zValue  = _oElement.val ;
    tzNewValue = [] ;

    if (typeof (zValue) !== 'undefined')
    {
        tzValue = zValue.toString().split (",") ;
        if (tzValue.length > 0)
        {
            $(tzValue).each (function (key, element)
            {
                var zNewItem = element.replace (/_([0-9]+)$/gi, "") ;
                tzNewValue.push (zNewItem) ;
            }) ;
        }

        return tzNewValue.join (separator) ;
    }

    /*
    tzValue = _oElement.val.split (",") ;
    tzNewValue = [] ;

    $(tzValue).each (function (index, element)
    {
        tzNewValue .push (element.replace (/_([0-9]+)$/gi, "")) ;
    }) ;

    print_r (tzNewValue) ;
    */
}

// manage rules
function manageRules ()
{
    $("input[file-required='true']").each (function ()
    {
        var oOldValue           = $(this).parents("[class^='form-group']").find (".old-value").val () ;
        var oLastUploadedValue  = $(this).attr ("last-uploaded-value") ;

        // required
        if (isEmpty (oOldValue, 'string') && isEmpty (oLastUploadedValue, 'string'))
        {
            $(this).addClass ("required") ;
        }
        else
        {
            $(this).removeClass ("required") ;
        }
    }) ;
}

// datatables format details
function fnFormatDetails ( oTable, nTr )
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    sOut += '<tr><td>Rendering engine:</td><td>'+aData[1]+' '+aData[4]+'</td></tr>';
    sOut += '<tr><td>Link to source:</td><td>Could provide a link here</td></tr>';
    sOut += '<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>';
    sOut += '</table>';

    return sOut;
}

// show loading message
function showLoadingMessage ()
{
    $("#loadingMessage").removeClass ("hidden") ;
}

// hide loading message
function hideLoadingMessage ()
{
    $("#loadingMessage").addClass ("hidden") ;
}

// scroll
function scroll (_zTarget, _iDelay)
{
    var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;

    var iDelay = (_iDelay > 0) ? _iDelay : 0 ;

    $(documentBody).animate ({scrollTop: $("#" + _zTarget).offset().top-65}, iDelay) ;
}

// close modal
function closeModal (_zModalId)
{
    $("#" + _zModalId).modal ('hide') ;
    return false ;
}

// close modal
function distroyModal (_zModalId)
{
    $("#" + _zModalId).modal ('distroy') ;
    return false ;
}

//Test name ExistValue
function insertNameExist(url, name){
    nameExist = 1;
    $.post(url,
    {
        name: name
    },
    function(data, status){
        nameExist = data;
    });  
    return nameExist;
}
//Test name ExistValue
function updateNameExist(url, id, name){
    nameExist = 1;
    $.post(url,
    {
        id: id,
        name: name
    },
    function(data, status){
        nameExist = data;
    });  
    return nameExist;
}