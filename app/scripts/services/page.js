

var app = angular.module('ngTweet');

app.factory('Page', function() {

    var title = "default";
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle}
    }

});