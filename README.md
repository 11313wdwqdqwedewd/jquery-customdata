# jQuery Custom Data Plugin #

This plugin is capable of extracting metadata from custom HTML5 `"data-"` attributes.

### About HTML5 Custom Data Attributes ###

A custom data attribute is an attribute in no namespace whose name starts with the string "`data-`". Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

Read more in the [official HTML5 spec overview](http://dev.w3.org/html5/spec/Overview.html#attr-data).

## Examples ##

For example, you can do:

    <a id="delete_link" data-method="delete" data-remote="true" href="/path">
      Unobtrusive delete link
    </a>

And later access the dataset object via jQuery:

    $.customdata("#delete_link");   // {method: "delete", remote: "true"}
    $("#delete_link").customdata(); // {method: "delete", remote: "true"}

You may also request a specific data attribut by passing the attribute key as an argument:

    $("#delete_link").customdata("remote"); // "true"
    $.customdata("#delete_link", "method"); // "delete"

Hyphenated names become camel-cased. For example, `data-foo-bar` becomes `fooBar`. This is reflected in the `$.customdata` API:

    <div data-foo-bar="baz"></div>
    $.customdata("div", "fooBar"); // "baz"

To collect all HTML elements with custom data attributes, use the custom selector `:customdata`. If you want specific elements with specific data attributes, pass an argument `:customdata(key)`:

    $("#content :customdata"); // all DOM elements with custom data
    $("#content :customdata(remote)"); // onle elements mit "data-remote".

**Note:** All attributes on HTML elements in HTML documents get ASCII-lowercased automatically, so the restriction on ASCII uppercase letters doesn't affect such documents.
