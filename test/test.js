(function($, undefined){

  test("Check for metadata.", function() {
    ok($("#single_data").metadata(), "Metadata accessible via .metadata.");
    ok($.metadata($("#multiple_data")), "Metadata accessible via $.metadata.");
    ok($.metadata($("#no_data")), "Metadata accessibleeven if empty.");
  });
  
  test("Caching for metadata", function(){
    var a = $("#single_data").metadata(),
      b = $("#single_data").metadata(),
      c = $.metadata("#single_data");
      
    ok( a === b, "Caching with .metadata works.");
    ok( b === c, "Caching with different calls works");
  });

  test("Check for correct data.", function() {
    var data = $("#single_data").metadata();
    ok(data.single === "single", "Single metadata attribute exists.");
    
    data = $("#multiple_data").metadata();
    ok(data.one == "1" && data.two == "2", "Multiple metadata attributes exists.");
    
    data = $("#no_data").metadata();
    ok(data, "Data retured even if no data attribute was given.");
    ok($.isEmptyObject(data), "Date is empty object if no data attribute was given.");
    
    data = $("#empty_data").metadata();
    ok(data.empty !== undefined, "Empty attribute exists.");
    ok(!data.empty, "Empty attribute is falsy.");
    
    ok(data.foo === undefined, "Undefined attribute does not exists.");
    ok(!data.empty, "Undefined attribute is falsy.");
  });
  
  test("Check hypenized attribute names.", function(){
    var data = $("#camelized_data").metadata();
    ok(data.fooBarBaz == "foo-bar-baz", "Attribute name is camelized.");
    ok(!data["foo-bar-baz"], "Original attribute name does not exist.");
  });
  
  test("Collect single attributes by key.", function(){
    var data = $("#single_data").metadata("single");
    ok( data === "single", "Single metadata attribute exists.");
    
    data = $("#empty_data").metadata("empty");
    ok(data !== undefined, "Empty attribute exists.");
    ok(!data, "Empty attribute is falsy.");
    
    data = $("#empty_data").metadata("undefined");
    ok(data === undefined, "Undefined attribute does not exists.");
    ok(!data, "Undefined attribute is falsy.");
  });

})(jQuery);
