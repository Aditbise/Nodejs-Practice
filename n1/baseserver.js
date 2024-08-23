// const test = (a) => a*100;
// same as const test(a){return a*100}
const http = require('http');
http.createServer((req,resp) => {
    resp.write("Hello this is a boy who is me and you are trash like your team mate you stupid ");
    resp.end();

}).listen(4500);