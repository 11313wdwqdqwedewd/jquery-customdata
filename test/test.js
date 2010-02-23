(function($, undefined){

  test("Check for customdata.", function() {
    ok($("#single_data").customdata(), "Custom data accessible via .customdata.");
    ok($.customdata($("#multiple_data")), "Custom data accessible via $.customdata.");
    ok($.customdata($("#no_data")), "Custom data accessibleeven if empty.");
  });
  
  test("Caching for customdata", function(){
    var a = $("#single_data").customdata(),
      b = $("#single_data").customdata(),
      c = $.customdata("#single_data");
      
    ok( a === b, "Caching with .customdata works.");
    ok( b === c, "Caching with different calls works");
  });

  test("Check for correct data.", function() {
    var data = $("#single_data").customdata();
    ok(data.single === "single", "Single customdata attribute exists.");
    
    data = $("#multiple_data").customdata();
    ok(data.one == "1" && data.two == "2", "Multiple customdata attributes exists.");
    
    data = $("#no_data").customdata();
    ok(data, "Data retured even if no data attribute was given.");
    ok($.isEmptyObject(data), "Date is empty object if no data attribute was given.");
    
    data = $("#empty_data").customdata();
    ok(data.empty !== undefined, "Empty attribute exists.");
    ok(!data.empty, "Empty attribute is falsy.");
    
    ok(data.foo === undefined, "Undefined attribute does not exists.");
    ok(!data.empty, "Undefined attribute is falsy.");
  });
  
  test("Check hypenized attribute names.", function(){
    var data = $("#camelized_data").customdata();
    ok(data.fooBarBaz == "foo-bar-baz", "Attribute name is camelized.");
    ok(!data["foo-bar-baz"], "Original attribute name does not exist.");
  });
  
  test("Collect single attributes by key.", function(){
    var data = $("#single_data").customdata("single");
    ok( data === "single", "Single customdata attribute exists.");
    
    data = $("#empty_data").customdata("empty");
    ok(data !== undefined, "Empty attribute exists.");
    ok(!data, "Empty attribute is falsy.");
    
    data = $("#empty_data").customdata("undefined");
    ok(data === undefined, "Undefined attribute does not exists.");
    ok(!data, "Undefined attribute is falsy.");
  });
  
  test("Custom selector", function(){
    var elems = $("#selector_test :customdata");
    ok( elems.hasClass("match"), "Matched elements returned.");
    ok( !elems.hasClass("no_match"), "Unmatched elements skipped.");
  });

})(jQuery);
