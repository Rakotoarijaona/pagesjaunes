/**
 * Created by radimby on 12/08/2015.
 */
var submenuHover = false;

$(document).ready( function (){

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
	

});
