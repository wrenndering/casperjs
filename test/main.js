var R = require("ramda");
var config = require('./config');

casper.test.begin(config.obj.name, config.obj.numberOfTests, function suite(test) {
    casper.start().userAgent(config.obj.userAgent).each(config.obj.urls, function (self, url) {
    	self.thenOpen(url, function () {
    		this.wait(5000, function () {
                var callTest = function (monitorTest) {
                    return monitorTest(test, url);
                };
                R.map(callTest, config.obj.tests);
    		});
    	});
    });
    casper.run(function () {
        test.done();
    });
});
