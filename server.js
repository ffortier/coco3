var express = require('express');
var http = require('http');
var bunyan = require('bunyan');
var morgan = require('morgan');
var path = require('path');

var app = express();
var server = http.createServer(app);

var morganLogger = bunyan.createLogger({name: 'morgan'});
var serverLogger = bunyan.createLogger({name: 'server'});

app.use(morgan('short', {
    stream: {
        write: data => morganLogger.info(data.replace(/[\n\r]+$/, ''))
    }
}));

app.use(express.static(path.resolve(__dirname, 'src')));
app.use(express.static(path.resolve(__dirname, 'node_modules')));

server.listen(process.env.npm_package_config_port, () => serverLogger.info('Listening', server.address()));