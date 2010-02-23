# jQuery CustomData Plugin #

This plugin is capable of extracting metadata from custom HTML5 `"data-"` attributes.

### About HTML5 Custom Data Attributes ###

A custom data attribute is an attribute in no namespace whose name starts with the string "`data-`".

Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

Read more in the [official HTML5 spec overview](http://dev.w3.org/html5/spec/Overview.html#attr-data).

## Examples ##

For example, you can do:

    <a id="delete_link" data-method="delete" data-remote="true" href="/path">
      Unobtrusive delete link
    </a>

And later access the data attribute via jQuery:

    $.customdata("#delete_link");   // {method: "delete", remote: "true"}
    $("#delete_link").customdata(); // {method: "delete", remote: "true"}
    
    $("#delete_link").customdata("remote"); // "true"
    $.customdata("#delete_link", "method"); // "delete"


**Note:** All attributes on HTML elements in HTML documents get ASCII-lowercased automatically, so the restriction on ASCII uppercase letters doesn't affect such documents.
