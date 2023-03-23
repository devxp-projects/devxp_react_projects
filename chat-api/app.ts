const http = require("http")
const server  = http.createServer((req, res) => {
    if(req.url === '/'){
    console.log("Request for " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World");
}else{
    console.log("Error");
}
})
server.listen(5000, () => {
    console.log("Server running at http://localhost:5000/")
    })

