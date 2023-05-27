
//reading file in normal way not treaming it. hence data here is coming in 
  const fs=require("fs");
  const http=require("http")
    
  //create out own server
   const server=http.createServer()

   server.on("request", (req, res)=>{
      
    //read file data nd show that on server to user
     fs.readFile("input.txt", "utf8",
     (err, data)=>{
        res.end(data);
     })
   })


   //listen on server.

   server.listen(8000, "localhost",
   (err)=>{})
//    server.emit("request")         ==>error