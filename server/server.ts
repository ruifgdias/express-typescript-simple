/**
 * Module dependencies.
 */

let app = require('./app').app;
let debug = require('debug')('server:server');
let http = require('http');

let port:number = normalizePort(process.env.PORT || '8080');
app.set('port', port);


/**
 * Create HTTP server.
 */

let server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('listening', onListening);


function normalizePort(val:string):any  {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}



function onListening():void {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(bind);
}


declare function require(name:string); // to disable default error on require vs code