 
   const http= require("http");
   const fs=require("fs");
   //import http from "http";
   
     const server=http.createServer( (req,res)=>   //callback fun. request nd response parameters
     {
         // 
      //   res.end("helloo world"); 
      //   res.end("done!!!!!!!!!!!!!!")          //only 1 time (res.end) can be given. ***
   
       if(req.url=="/")
       {
         res.end("this is your HOME Pg");
       }
       else if(req.url=="/about")
       {
         res.end("this.is your ABOUT PG")
       }







       // API ****************************************************





       // WHEN USER ASK/REQUEST FOR CONTACT , WE WANT TO SHOW THE API.
       else if(req.url=="/contact")
       {
        //get data fron api, using fs module

        fs.readFile("apiStoreData.json", "utf8",
        (err, data)=>{
            console.log(data);              
             //this is only to see dat on terminal. not necessary to do this
            //  res.end(data);         
            //will work but data would be in json format  🔴🔴🔴🔴

            //1. convert data into object format then show it on screen to user
            const objdata=JSON.parse(data);
           // console.log(objdata.)
           // res.end(objdata[3].name);        ✅

            //here asynchronous file reading is being done. iin this , the api is calling again and agian. if u want that api should call only 1 time nd after that only data aata rhe nd hum work karte rhe. -----> for that use synchronus calling at the top. just after server is being created
        //    <for that see thapa vide> 💯💯💯💯💯💯💯

     
          //2.   nowon userr also in what format we want to send data. define that here.

            res.writeHead(200, {"content-type": "application/json"});
            res.end(objdata[3].id)


          //2. want to show id of all data in json -->map will use for that. see later
           




        }
        )
       // res.end("this.is your contact PG")




       }
   
       else if(req.url=="/contact/email")
       {
         res.end("this.is your CONTACT-EMAIL PG")
       }
       else{
         res.writeHead(404  ,{"Content-type": "text/html" });
         res.end("<h1> 404 PAGE ERROR </h1>")
       }
   
   
     } )
   
     //listen to req.
     server.listen(8000, "localhost", ()=>{               // port no. nd local host
        console.log("listening to request")
     })