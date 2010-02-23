/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2009 Martin Kleppe <kleppe@ubilabs.net>
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */


(function($, undefined) {
  
  var re_data = /^data\-(.+)$/;
  
  var convert = function(string){
    return string ? eval("(" + string + ")") : string;
  };
  
  var attributes = function(elem){
    
    var data = {};
    
    if (!elem || elem.nodeType !== 1) {
      return data;
    }

    $.each(elem.attributes, function(index, attr){
      if (re_data.test(attr.nodeName)){
        data[attr.nodeName.match(re_data)[1]] = convert(attr.nodeValue);
      }
    });
    
    return data;
  }
  
  $.extend({
    metadata: {
      get: function(elem){
        var data = $(elem).data("metadata");

        // returned cached data if it already exists
        if (data) { return data; }
      
        data = $.extend(
          {},
          convert($(elem).find("script[type='data']").html()),
          convert($(elem).attr("data")),
          attributes(elem)
        );
      
        $(elem).data("metadata", data);
        return data;
      }
    }
  });

  /**
   * Returns the metadata object for the first member of the jQuery object.
   *
   * @name metadata
   * @descr Returns element's metadata object
   * @cat Plugins/Metadata
   */
  $.fn.metadata = function(){
    return $.metadata.get(this[0]);
  };

})(jQuery);