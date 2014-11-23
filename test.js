'use strict';


describe('test', function(){
	beforeEach(function() {
		var jsdom = require('jsdom');
		global.window = jsdom.jsdom('<html><body></body></html>').parentWindow;
	});

	afterEach(function(){
		global.window.close();
	});

  it('try1', function(done){
    done();
  });
});