var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic("./"))
    .listen(8077, () => console.log('Server running on 8077...'));