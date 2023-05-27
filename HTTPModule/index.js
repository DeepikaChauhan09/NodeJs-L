 //creating our own web server. for that install/import/require http module which aid in creating our own web server

   const http= require("http");
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
    else if(req.url=="/contact")
    {
      res.end("this.is your contact PG")
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


//   server.listen(3001, 'localhost', function() {
//    console.log("... port %d in %s mode", server.address().port, server.settings.env);
//  });
