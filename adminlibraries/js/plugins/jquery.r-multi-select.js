/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function($) {

  $.fn.RMultiSelect = function(){
  	this.each(function() {
  		var o = $(this);      
      
      $(this).find('.input-group-btn').click(function(){
        if(isValidEmailAddress(o.find('input[type=email]').val())) {
          var tbody = o.find('tbody');
          var value = o.find('input[type=email]').val();
          var exist = false;
          tbody.find('.value').each(function()
          {
            if (value == $(this).text())
            {
              exist = true;
              return;
            }
          });
          if (!exist) {
            o.find('tbody').append('<tr class="rMultiItem"><td class="value"><input type="hidden" class="emails" name="email_list[]" value="'+o.find('.input-text').val()+'">'+o.find('.input-text').val()+'</td><td><button class="btn-delete btn btn-xs btn-warning btn-circle pull-right" type="button"><i class="fa fa-times"></i></button></td>');
            o.find('input[type=email]').val('');
            $('.btn-delete').click(function(){
              $(this).parents('tr').remove();
            });
          }
        }
        else if(isValidNumero(o.find('input[type=text]').val())) {
          var tbody = o.find('tbody');
          var value = o.find('input[type=text]').val();
          var exist = false;
          tbody.find('.value').each(function()
          {
            if (value == $(this).text())
            {
              exist = true;
            }
          });
          if (!exist) {
            o.find('tbody').append('<tr class="rMultiItem"><td class="value"><input type="hidden" name="telephones[]" value="'+o.find('.input-text').val()+'">'+o.find('.input-text').val()+'</td><td><button class="btn-delete btn btn-xs btn-warning btn-circle pull-right" type="button"><i class="fa fa-times"></i></button></td>');
            o.find('input[type=text]').val('');
            $('.btn-delete').click(function(){
              $(this).parents('tr').remove();
            });
          }
        }			
  		});
  	});
  	return this;
  };
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  };
  function isValidNumero(value) {
    return /^(\+)?(\d{1}-)?(\d{1,4})?(\s)?[0-9\s]{2,30}$/.test(value);
  }
})(jQuery);
