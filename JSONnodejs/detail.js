 
  //some task to understand different functionality of json
/*
   1. create object 
   2. convert object to json format 
   3. add this json data to annother file
   4, read data from file in json format
   5. convert data coming in json format through readfile into  object format
   6. print bject format data

   */



     const fs=require("fs");

  //1
   const student ={
     name:"bob",
     age:"20",
     branch:"aiml",

   }
   console.log(student);

    //2
    const jsondata=JSON.stringify(student);
    console.log(jsondata)

    //add json data in a nother file.
    //for that have to use file system module. use asyncheonous 👍 way
    // since storing data in json format so lets give .json extension. u can give any other too or no need to give too, will also work

    //3

    fs.writeFile("data.json", jsondata, 
    (err) =>{

    })

    //for my clearance 👍
    // since storing data in json format so lets give .json extension. u can give any other too or no need to give too, will also work
    fs.writeFile("clearance", jsondata, 
    (err) =>{

    })
     

    //4 read file in json format

     const readdata= fs.readFile("data.json", "utf8",
     (err, coming_Data)=>{
        console.log("reading data in json format  -----" +coming_Data);

        //5  convert coming json to object
         const objdata=JSON.parse(coming_Data)

         //6. print this obj format data
        // console.log("data in object format"+ objdata); 🔴🔴🔴
        console.log("data in object format       ---->")
        console.log(objdata);
     })


     
