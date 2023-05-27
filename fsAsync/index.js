

//try to create new file in fsaync folder by using asynchronous methode

 const fs= require("fs");
  
  //try to create new file in fsaync folder by using asynchronous methode

  fs.writeFile("aync.txt","lets study async concept in nodejs ", 
    (err) =>{
        console.log("file is created");

    }
  
    );


    // add more data in existing fle
    fs.appendFile("aync.txt", "   we are adding more t=data into this file.   and also understanding callback concept",
    
    (err) =>{
        
    }
    )

    //read data from file
 
    //this method gives error
    //  const data=fs.readFile("aync.txt ",        
    //  (err) =>{
    //     //anything, any mssg

    //  }

    //  )
    //   org_data=data.toString();
    //   console.log(org_data);


    //another way-->

      fs.readFile("aync.txt", "utf8",
      (err, data) =>{
        //anything, any mssg
        console.log(data);
      }
      )


      // to understand delet concept. making another folder delete in same folder fsasync

      fs.writeFile("fsAsyncDelete/d.txt", "letsssssssss", 
      (err)=>{

      })

      //delet d ***file*** from fsAsyncDelete folder

      //currently on tern=minal i am in fsasync folder. indeide this another folder fsayndele. +nt . nd in tht foldr i have to delet file. so use relative url sysntx
      fs.unlink("fsAsyncDelete/d.txt",
      (err)=>{
        
      })

      //delet fsAsyncDelete ***folder** from fsAsync
      //currently on tern=minal i am in fsasyncfolder. nd its immediate folder i am deleting. so 
      //no need to use relative url. 

      fs.rmdir("fsAsyncDelete",
      (err)=>{})
 
      //its not working
