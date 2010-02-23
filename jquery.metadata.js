/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2009 Martin Kleppe <kleppe@ubilabs.net>
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */


(function($) {
  $.extend({
    metadata: {
      convert: function(string){
        return string ? eval("(" + string + ")") : string;
      },
    
      get: function(element){
        element = $(element);
      
        var script;
      
        // returned cached data if it already exists
        var data = element.data("metadata");
        if (data) { return data; }
      
        script = element.find("script[type='data']");
        data = $.metadata.convert(script.html()) || {};
        $.extend(data, $.metadata.convert(element.attr("data")));
      
        element.data("metadata", data);
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