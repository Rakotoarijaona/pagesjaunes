$(document).ready(function()
{
	if ($('#carouselAds1').length > 0)
	{
		$('.ads .owl-carousel').find('.item').css('cursor','pointer');

		var view1 = $('#carouselAds1 .owl-carousel .active').find('.item_link').attr('id');
		track_view(view1);

		$('#carouselAds1 .owl-carousel').on('changed.owl.carousel', function(property) {
		    var current = property.item.index;
		    var view1 = $(property.target).find(".owl-item").eq(current).find(".item_link").attr('id');
		    track_view(view1);
		});
	}

	if ($('#carouselAds2').length > 0)
	{
		var view2 = $('#carouselAds2 .owl-carousel .active').find('.item_link').attr('id');
		track_view(view2);

		$('#carouselAds2 .owl-carousel').on('changed.owl.carousel', function(property) {
		    var current = property.item.index;
		    var view2 = $(property.target).find(".owl-item").eq(current).find(".item_link").attr('id');
		    track_view(view2);
		});
	}

	$('.ads .owl-carousel').find('.item').hover(function(){

	});
	/*$('.ads .owl-carousel').find('.item').bind("contextmenu",function(e){
		return false;
	});*/
});
function track_view(view)
{
	var filtre = view.split(",");
	$.get('track_view',{id:filtre[0], default:filtre[1]});
}