  //1 line code for streaming data.


  const fs=require("fs");
  const http=require("http")
    
  //create out own server
   const server=http.createServer()
 
    server.on("request", (req, res)=>{

        //read streaming data from file that we want to stream 
        const rstream=fs.createReadStream("input.txt");
        rstream.pipe(res);        //*******************************  💯 💯💯💯*/
    })

    //server listev
    server.listen(8000, "localhost", 
    (err)=>{console.log(" listening.......")})