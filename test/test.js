function testData(index) {
	
	var check = function(title, data){
	  switch(index) {
  	case 0:
  		ok( data.foo == "bar", title + " Check foo property" );
  		ok( data.bar == "baz", title + " Check baz property" );
  		ok( data.arr[0] == 1, title + " Check arr[0] property" );
  		ok( data.arr[1] == 2, title + " Check arr[1] property" );
  		break;
  	case 1:
  		ok( data.test == "bar", title + " Check test property" );
  		ok( data.bar == "baz", title + " Check bar property" );
  		break;
  	case 2:
  		ok( data.zoooo == "bar", title + " Check zoooo property" );
  		ok( data.bar.test == "baz", title + " Check bar.test property" );
  		break;
  	case 3:
  		ok( data.number, title + " Check number property" );
  		ok( data.stuff[0] == 2, title + " Check stuff[0] property" );
  		ok( data.stuff[1] == 8, title + " Check stuff[1] property" );
  		break;
  	default:
  		ok( false, ["Assertion failed on index ", index, ", with data ", data].join('') );
  	}
	}
	
	check(".metadata", jQuery.metadata.get(this));
	check("$.metadata", jQuery(this).metadata());
}

test("meta: type attr - from data attribute", function() {
	expect(22);
	jQuery("#one li").each(testData);
});

test("meta: children script element - get data mixed items", function() {
	expect(22);
	jQuery("#two li").each(testData);
});

test("meta: children script element - get data from child script element", function() {
	expect(22);
	jQuery("#three li").each(testData);
});

test("check if window doesn't break anything", function() {
	jQuery(window).get();
});

test("meta: default with single data object", function() {
	expect(22);
	jQuery("#four li").each(testData);
});

