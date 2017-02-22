/**
 * Created by radimby on 12/08/2015.
 */
var submenuHover = false;

$(document).ready( function (){


    var screenMobile = ($(window).width() < 768) ? true : false;
    var searchTop = $('.search-header').offset().top;

    var fixedBody = function () {
        $('body').addClass('fixed');
        $('.submenu').height ( $(window).height() - 100 );
    }

    // console.log ( $(".submenu").is(':visible') ) ;

    // slider home
    if ( $('.slider').length > 0 ) {
        $('.owl-carousel', '.slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            items:1,
            dots:false,
            navText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });
    }
    $('.fancybox-detail').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        padding : 0,
        width     : 600,
        minWidth  : 100,
        minHeight : 100,
        autoSize   : false,
        autoHeight : true,
        autoWidth  : false,

        autoResize  : true
    });

    if ( $('.bloc-media').length > 0 ) {
        $('.owl-carousel', '.bloc-media').owlCarousel({
            loop:false,
            margin:20,
            nav:false,
            dots:true,
            responsive : {
                0 : {
                    items:1
                },

                640 : {
                    items:2
                },

                768 : {
                    items:3
                },

                1024 : {
                    items:4
                }
            }
        });

        if ( $('.video-th').length > 0 ) {
            $(".video-th").fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                padding : 0,
                autoHeight : true,
                helpers : {
                    media : {}
                }
            });
        }

        if ( $('.fancybox').length > 0 ) {
            $(".fancybox").fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                padding : 0,
                autoHeight : true
            });
        }
    }


    $('.btn-category, .main-header .submenu').hover ( function (){
        submenuHover = true;
    }, function (){
        submenuHover = false;
    });

    /* Menu categories */
    $('.btn-category').click ( function () {
        $(this).toggleClass('active');
        $('.submenu', '.main-header').slideToggle();
        return false;
    });

    function closeSubmenu () {
        $('.category-list-item', '.main-header .categories-list').slideUp();
        $('.categories-list', '.main-header').removeClass('open');
    }

    if ( !screenMobile ) {
        $('.submenu h3 a', '.main-header').click ( function () {
            var $containerRow = $(this).parents('.categories-list').eq(0);

            if ( !$containerRow.hasClass('open') ) {
                closeSubmenu ();
                $('.category-list-item', $containerRow).slideDown();
                $containerRow.addClass('open');
            } else {
                closeSubmenu ();
            }
            return false;
        });
    }

    // fixed search box
    $(window).on ('scroll', function () {
        if (!screenMobile && $(window).scrollTop() > searchTop ) {
            $('.main-header').addClass('fixed');
            /*if ( $('.submenu').css('display') !== 'none' ) {
                fixedBody();
            }*/
        } else {
            $('.main-header').removeClass('fixed');
        }
    });

    // Layout options
    $('.result-wrapper').addClass('layout-list');
    $('input[name=layout-option]').on ('change', function () {
        if ( $(this).val() == 0 ) {
            $('.result-wrapper').removeClass('layout-list');
        } else {
            $('.result-wrapper').addClass('layout-list');
        }
    })

    $(document).click (function () {
        if (!submenuHover) {
            $('.btn-category').removeClass('active');
            $('.submenu', '.main-header').slideUp();
        }
    })

	
	// affichage bandeaux
	var divstop = $('div[id^="contenttop-"]').hide(),
    itop = 0;

	(function cycletop() { 
		divstop.eq(itop).fadeIn(400)
				  .delay(5000)
				  .fadeOut(400, cycletop);

		itop = ++itop % divstop.length; // increment i, 
							   //   and reset to 0 when it equals divs.length
	})();


	var divsbottom = $('div[id^="contentbottom-"]').hide(),
    jbottom = 0;

	(function cyclebottom() { 
		divsbottom.eq(jbottom).fadeIn(400)
				  .delay(5000)
				  .fadeOut(400, cyclebottom);

		jbottom = ++jbottom % divsbottom.length; // increment i, 
							   //   and reset to 0 when it equals divs.length
	})();

    /* Equal height */

    if ( $('.row-eq-height').length > 0 ) {

        var rowEqHeightW = $('.row-eq-height').width();

        function colEqHeight () {
            var $rowEqHeight = $('.row-eq-height');
            var maxHeight = 0;
            //console.log($('> div[class^="col-"]', $rowEqHeight).length);
            $('> div[class^="col-"]', $rowEqHeight).height ('auto');

            for ( i = 0; i <  $('> div[class^="col-"]', $rowEqHeight).length; i++ ) {
                if ( $('> div[class^="col-"]', $rowEqHeight).eq(i).height() > maxHeight )
                    maxHeight = $('> div[class^="col-"]', $rowEqHeight).eq(i).height();
            }

            $('> div[class^="col-"]', $rowEqHeight).height (maxHeight);
        }

        $(window).resize( function (){
            if ( $('.row-eq-height').width() !=  rowEqHeightW ) {
                rowEqHeightW = $('.row-eq-height').width();
                colEqHeight ();
            }
        });

        colEqHeight ();
    }

    // $('.wpcf7-file').fileinput();

    /* ellipsis */
    if ( $('.ellipsis').length > 0 ) {
        // console.log ('ok');
        /*/$(".ellipsis").dotdotdot({
            watch: "true"
        });*/
    }


    // formulaire d'edition entreprise
    //$("#formPageEdition").validate();

    /*$('#form-search').validate({
        rules: {
            search_phone: {
                phone: true
            }
        }
    });*/
    /*$('#submit-search').click(function(){
        if ($('#form-search').valid()){
            if (($('#search_one').val() != '') || ($('#search_two').val() != '') || ($('#search_phone').val() != '')) {
                $('#form-search').submit();
            }
        }
    });*/
});
