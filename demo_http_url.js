const http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content_Type":"text/html"})
    res.write(req.url)
    res.end("Hello Good Morning")
}).listen(8080)