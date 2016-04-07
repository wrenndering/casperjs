var config = {
    "urls": [
        "http://casperjs.org/",
        "http://phantomjs.org/"
    ],
    "name": "Title exists",
    "numberOfTests": 2,
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X)",
    "tests":{
        "test1": function (test, url) {
            casper.echo("Page Title: " + casper.getTitle());
            return test["assertExists"]("title", "title element is present for: " + url + " - page title: " + casper.getTitle());
        }
    }
};

exports.obj = config;
