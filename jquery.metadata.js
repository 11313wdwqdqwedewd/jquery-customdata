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
  
  var RE_DATA = /^data\-(.+)$/;
  
  function camelize(string) {
    var parts = string.split('-'), len = parts.length;
    if (len == 1) { return parts[0]; }

    var camelized = string.charAt(0) == '-'
      ? parts[0].charAt(0).toUpperCase() + parts[0].substring(1)
      : parts[0];

    for (var i = 1; i < len; i++) {
      camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);
    }

    return camelized;
  }
  
  var attributes = function(elem){
    var data = {};
    if (elem && elem.nodeType === 1) { 
      $.each(elem.attributes, function(index, attr){
        if (RE_DATA.test(attr.nodeName)){
          key = attr.nodeName.match(RE_DATA)[1];
          data[camelize(key)] = attr.nodeValue;
        }
      });
    }
    return data;
  };
  
  $.extend({
    metadata: function(elem, key){
      var data = $(elem).data("metadata");
      if (!data) {
        data = attributes(elem);
        $(elem).data("metadata", data);
      }
      return key ? data[key] : data;
    }
  });

  /**
   * Returns the metadata object for the first member of the jQuery object.
   *
   * @name metadata
   * @descr Returns element's metadata object
   * @cat Plugins/Metadata
   */
  $.fn.metadata = function(key){
    return $.metadata(this[0], key);
  };

})(jQuery);