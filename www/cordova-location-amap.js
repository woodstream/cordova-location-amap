var exec = require('cordova/exec');

exports.getCurrentPosition = function(config, success, error) {
    exec(success, error, "AMapLocation", "getCurrentPosition", [config]);
};

exports.watchPosition = function(interval, success, error) {
    exec(success, error, "AMapLocation", "watchPosition", [interval]);
};

exports.clearWatch = function(success, error) {
    exec(success, error, "AMapLocation", "clearWatch", []);
};
