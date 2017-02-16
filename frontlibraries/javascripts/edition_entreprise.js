
// Services, Products, Vendor Manager
$('.input-add-item').on ('keydown', function (){
    if ( $(this).val().trim() != '' )
        $(this).next('button').get(0).disabled = false;
    else
        $(this).next('button').get(0).disabled = true;
});

$('.btn-add-item').on ('click', function (){
    var $inputAdd = $(this).prev('input');
    var divnom = $(this).parents('div').attr('id');

    if (divnom == 'divservice') {
        var inputhidden = '<input type="hidden" class="hdnServices" name="hdnServices[]" value="'+$inputAdd.val()+'"/>';
        if ( $inputAdd.val().trim() != '' ) {
            var $ulWrapper = $(this).parents('.item-wrapper').find('ul');
            $ulWrapper.append( '<li>'+ $inputAdd.val() + ' <a href="#" title="Supprimer" class="btn-remove"><i class="fa fa-times"></i></a>'+inputhidden+'</li>' );
            $inputAdd.val('');
            $(this).get(0).disabled = true;
        }
    }

    if (divnom == 'divproduit') {
        var inputhidden = '<input type="hidden" class="hdnProduits" name="hdnProduits[]" value="'+$inputAdd.val()+'"/>';
        if ( $inputAdd.val().trim() != '' ) {
            var $ulWrapper = $(this).parents('.item-wrapper').find('ul');
            $ulWrapper.append( '<li>'+ $inputAdd.val() + ' <a href="#" title="Supprimer" class="btn-remove"><i class="fa fa-times"></i></a>'+inputhidden+'</li>' );
            $inputAdd.val('');
            $(this).get(0).disabled = true;
        }
    }


    if (divnom == 'divmarque') {
        var inputhidden = '<input type="hidden" class="hdnMarques" name="hdnMarques[]" value="'+$inputAdd.val()+'"/>';
        if ( $inputAdd.val().trim() != '' ) {
            var $ulWrapper = $(this).parents('.item-wrapper').find('ul');
            $ulWrapper.append( '<li>'+ $inputAdd.val() + ' <a href="#" title="Supprimer" class="btn-remove"><i class="fa fa-times"></i></a>'+inputhidden+'</li>' );
            $inputAdd.val('');
            $(this).get(0).disabled = true;
        }
    }
    

    
});
$('body').on ('click', '.btn-remove', function () {
    $(this).parent('li').eq(0).remove();
    return false;
});

//Removing
//services
$('body').on ('click', '.btn-remove-service', function () {
    var id = $(this).siblings('.hdnServices').val();
    $(this).parents('ul').append('<input type="hidden" name="rmvdservices[]" value="'+id+'"/>');
    $(this).parent('li').eq(0).remove();
    return false;
});
//produits
$('body').on ('click', '.btn-remove-produit', function () {
    var id = $(this).siblings('.hdnProduits').val();
    $(this).parents('ul').append('<input type="hidden" name="rmvdproduits[]" value="'+id+'"/>');
    $(this).parent('li').eq(0).remove();
    return false;
});
//marques
$('body').on ('click', '.btn-remove-marque', function () {
    var id = $(this).siblings('.hdnMarques').val();
    $(this).parents('ul').append('<input type="hidden" name="rmvdmarques[]" value="'+id+'"/>');
    $(this).parent('li').eq(0).remove();
    return false;
});
//Removing

// Video
$('.btn-add-video').click( function () {
    if ($('#hdnindice').length <= 0)
    {
        $('#video-list').append('<input type="hidden" name="hdnindice" id="hdnindice" value="0"/>')
    }
    var idInput = $('#hdnindice').val();
    idInput = parseInt(idInput);
    var template = '<div class="col-sm-4 media-item">'+
        '<div class="video-edit-wrapper"><input type="hidden" name="video_youtube[]" value="'+idInput+'"/>'+
        '<button type="button" class="video-remove"><i class="fa fa-trash"></i></button>'+
        '<input type="file" name="video-thumb_'+idInput+'" id="video-thumb_'+ idInput + '" value="1" size="40" class="form-control" />' +
        '<p><label>URL youtube de la vidéo</label><span class="form-control-wrap"><input value="" type="text" id="url-video_'+ idInput + '" name="url-video_'+ idInput +'" /></span>'+'</p>' +
        '</div></div>';   
    $('#hdnindice').val(idInput+1);

    $('.video-list').append(template);

    $('input[id=video-thumb_'+ idInput + ']').fileinput({
        language: 'fr',
        browseClass: "btn btn-default",
        overwriteInitial : true,
        resizeImage: true,
        maxImageWidth: 200,
        maxImageHeight: 200,
        showUpload: false,
        showRemove: false,
        showClose: false,
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        initialPreview: '',
        layoutTemplates:{ 
            actions: '<div class="file-actions">\n' +
        '    <div class="file-footer-buttons">\n' +
        '    </div>' +
        '</div>'}

    });
    return false;
} );
$('body').on ('click', '.video-remove', function () {
    $el = $(this).parents('.media-item').eq(0);
    swal({
            title: '',
            text: "Êtes-vous  sure de vouloir supprimer cette vidéos?",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "oui",
            cancelButtonText: "non",
            closeOnConfirm: true
        }, function () {"slow",
            $el.fadeOut(
                function (){
                    $el.remove();
                });
        });
});
$('body').on ('click', '.old-video-remove', function () {
    $el = $(this).parents('.media-item').eq(0);
    swal({
            title: '',
            text: "Êtes-vous  sure de vouloir supprimer cette vidéos?",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "oui",
            cancelButtonText: "non",
            closeOnConfirm: true
        }, function () {
            $el.fadeOut("slow",
                function (){
                    var id = $el.find('.old-video').val();
                    $('#video-list').append('<input type="hidden" name="rmvdvideos[]" value="'+id+'"/>')
                    $el.remove();
                });
        });
});

//Catalogue liste
$('.btn-add-catalogue').click( function () {
    if ($('#hdncatalogueindice').length <= 0)
    {
        $('.catalogue-list').append('<input type="hidden" name="hdncatalogueindice" id="hdncatalogueindice" value="0"/>')
    }
    var indice = $('#hdncatalogueindice').val();
    var template = '<div class="col-md-4 col-sm-6 media-item">'+
                        '<button type="button" class="catalogue-remove"><i class="fa fa-trash"></i> </button>'+
                        '<div class="catalogue-edit-wrapper">'+
                            '<input type="hidden" name="catalogue[]" value="'+indice+'"/>'+
                            '<input type="hidden" name="catalogue-id-'+indice+'" value=""/>'+
                            '<input type="file" name="catalogue-image-'+indice+'" id="catalogue-image'+indice+'" value="" size="40" class="form-control" />'+
                            '<p>'+
                                '<label>Nom produit</label>'+
                                '<span class="form-control-wrap">'+
                                    '<input value="" type="text" id="catalogue-nomproduit-'+indice+'" name="catalogue-nomproduit-'+indice+'" />'+
                                '</span>'+
                                '<label>Marque</label>'+
                                '<span class="form-control-wrap">'+
                                    '<input value="" type="text" id="catalogue-marque-'+indice+'" name="catalogue-marque-'+indice+'" />'+
                                '</span>'+
                                '<label>Prix (Ar)</label>'+
                                '<span class="form-control-wrap">'+
                                    '<input value="" type="text" id="catalogue-prix-'+indice+'" name="catalogue-prix-'+indice+'" />'+
                                '</span>'+
                                '<label>Référence</label>'+
                                '<span class="form-control-wrap">'+
                                    '<input value="" type="text" id="catalogue-reference-'+indice+'" name="catalogue-reference-'+indice+'" />'+
                                '</span>'+
                                '<label>Déscription</label>'+
                                '<span class="form-control-wrap">'+
                                    '<input value="" type="text" id="catalogue-description-'+indice+'" name="catalogue-description-'+indice+'" />'+
                                '</span>'+
                            '</p>'+
                        '</div>'+
                    '</div>';
    $('#hdncatalogueindice').val(indice+1);

    $('.catalogue-list').append(template);

    $('input[id="catalogue-image'+ indice + '"]').fileinput({
        error: 'You are not allowed to upload such a file.',
        initialPreview:'',
        initialPreviewAsData: true,
        initialPreviewShowDelete: false,
        language: 'fr',
        browseClass: "btn btn-default",
        overwriteInitial : true,
        resizeImage: true,
        maxImageWidth: 160,
        maxImageHeight: 200,
        showUpload: false,
        showRemove: false,
        showClose: false,
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        layoutTemplates:{ 
            actions: '<div class="file-actions">\n' +
        '    <div class="file-footer-buttons">\n' +
        '        {upload} {delete} {other}' +
        '    </div>' +
        '</div>'},
    });
    return false;
} );

$('body').on ('click', '.catalogue-remove', function () {
    $el = $(this).parents('.media-item').eq(0);
    swal({
            title: '',
            text: "Êtes-vous  sure de vouloir supprimer ce produit?",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "oui",
            cancelButtonText: "non",
            closeOnConfirm: true
        }, function () {
            $el.fadeOut("slow",
                function (){
                    $el.remove();
                });
        });
});
$('body').on ('click', '.oldcatalogue-remove', function () {
    $el = $(this).parents('.media-item').eq(0);
    swal({
            title: '',
            text: "Êtes-vous  sure de vouloir supprimer ce produit?",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "oui",
            cancelButtonText: "non",
            closeOnConfirm: true
        }, function () {
            $el.fadeOut("slow",
                function (){
                    var id = $el.find('.oldcatalogue').val();
                    $('.catalogue-list').append('<input type="hidden" name="rmvdcatalogue[]" value="'+id+'"/>');
                    $el.remove();
                });
        });
});

function validForm()
{
    var valid = $('#form-edition').valid();
    allnum = '';
    $('.telephone').each(function(){
        allnum += $(this).val();
    });
    if ((allnum.trim()) == '')
    {
        valid = false;
        $('.telephone').parent().parent().append('<label id="telephone-error" class="error" for="telephone">Veuillez entrer au moin un numero</label>');
    }
    $('.video-list input[type="text"]').each(function(){
        if ($(this).val() == '')
        {
            valid = false;
            $(this).after('<label id="videourl-error" class="error" for="videourl">Veuillez entrer un url</label>');
        }
    });
    if (valid)
    {
        $('#form-edition').submit();
    }
}