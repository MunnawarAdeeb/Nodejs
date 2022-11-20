const http=require("http");
const date=require("./myFirstModul")
http.createServer((req,res)=>{
res.writeHead(200,{"content-Type":"text/html"});
// res.end("hello World!");
res.end("Current Date and time is "+date.myDateTime()+date.myName("Munnawar"))
}).listen(8080);

const http=require("http");
const date=require("./myFirstModul");
http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/html"});
    res.end("Hello world")
}).listen(8080)

const http=require("http");
const Port=8080;
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"html/text"});
    res.end("Hello World")
}).listen(Port)