const fs=require("fs");
const http=require("http");
http.createServer((req,res)=>{
    fs.readFile("./demoFile.html",
    (error,data)=>{
        res.writeHead(200,{"Content_Type":"html/text"});
        res.write(data);
        return res.end();

    }
    )

}).listen(8090)
