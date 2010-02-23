# jQuery Metadata Plugin #

This plugin is capable of silently, and automatically extracting metadata from custom HTML 5 `"data-"` attributes.

For example, you can do:

    <a id="delete_link" data-method="delete" data-remote="true" href="/path">
      Unobtrusive delete link
    </a>

And later access the data attribute via jQuery:

    $.metadata("#delete_link");   // {method: "delete", remote: "true"}
    $("#delete_link").metadata(); // {method: "delete", remote: "true"}
    
    $("#delete_link").metadata("remote"); // "true"
    $.metadata("#delete_link")("method"); // "delete"

### Credits ###

* Original by John Resig
* Rewrite by Martin Kleppe / Ubilabs