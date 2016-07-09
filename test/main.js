var R = require("ramda");
var config = require('./config');
var numberOfTests = R.multiply(R.length(config.obj.urls),R.length(R.keys(config.obj.tests)));

casper.test.begin(config.obj.name, numberOfTests, function suite(test) {
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
