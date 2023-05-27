const fs=require("fs");
const http=require("http")
  
//create out own server
 const server=http.createServer()
  
  server.on("request", (req,res)=>{
     
    // 1 get data in streaming format
    const readStream= fs.createReadStream("input.txt");

    //2. after read stream, data even fires.
    readStream.on("data", (chunksd)=>{
      res.write(chunksd);
     // res.end(chunksd)
    })

    //3. when all data read, then end event fires. the new added data will coe, whole file wont reload again. as it happens in streaming. necche live streaming options aate rhete hai, as we scroll down
    readStream.on("end", ()=> {
        res.end();

    })


    //4. error occurs, if. suppose if u passed a file to read from, which not exist. then error occurs.
 //   eg- put inputss.txt" or anythins in readstream. which not exist
    readStream.on("error", (err)=>{
        console.log("error")
        res.end("error occured")
    })




  })


  //server listening
   server.listen(8000, "localhost", (err)=>{
    console.log("listening...................")
   })

