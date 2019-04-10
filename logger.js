//var fs      = require('fs-extra');
var path    = require('path');
var logPath = path.join(path.dirname(module.parent.filename), 'logs', './aavgo.log');
//var moment = require('moment-timezone');

var streamOptions = {
    flags   : "a",
    encoding: "utf8",
    mode    : 0666
};

//var stream  = fs.createWriteStream(logPath, streamOptions);

var logger = require('tracer').console({
    dateformat: "dd mmm HH:MM:ss.L",
    format    : [
        "| {{title}} | {{timestamp}} : {{file}} : {{line}} - {{message}} ",
        {
            error: "| {{title}} | {{timestamp}} : {{file}} : {{line}} - {{message}}\n"
        }
    ],
    transport : function(data) {
        console.log(data.output);
        //stream.write(data.output + "\n");
    }
});

logger.info('[logger] log path: %s', logPath);

exports    = module.exports = {};

exports.getLogger = function() {
    return logger;
};
