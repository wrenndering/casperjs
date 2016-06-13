var config = {
    "urls": [
        "http://casperjs.org/",
        "http://phantomjs.org/",
        "https://nodejs.org/en/"
    ],
    "name": "Title exists",
    "numberOfTests": 2,
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X)",
    "tests":{
        "test1": function (test, url) {
            casper.echo("Page Title: " + casper.getTitle());
            return casper.then(function () {
                test["assertExists"]("title", "title element is present for: " + url + " - page title: " + casper.getTitle());
            });
        },
        "test2": function (test, url) {
            return casper.then(function () {
                test["assertExists"]("#foo", "foo id is present for: " + url);
                // this test will fail, but shows the functionality of having casper.then() wrap the test
                // normally Casper will stop after the first test fail, but casper.then() lets all the tests run and log to log.xml 
            });
        }
    }
};

exports.obj = config;
