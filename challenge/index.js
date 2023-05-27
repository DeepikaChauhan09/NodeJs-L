  
   //to create different file in c1. on terminal go to challenge  direcory as this dir. have index so we can write in that dir. dont go to c1. as c1 dont have dir.
  // from chaleenege dir's index w'll write data in different folder of challenge

  const fs=require("fs");

  //create new file in c1 of challenge. nd in terminal we are on challenge dir. so use relative url
  fs.writeFileSync("c1/bio.txt", "my bio data");


  //add more data
  fs.appendFileSync("c1/bio.txt", "   Adding more data in continuation")

  //read data from file.

  //method 1===>
//   const readData=fs.readFileSync("c1/bio.txt");
//   org_data=readData.toString();
//   console.log(org_data);


//method 2===>
const readData=fs.readFileSync("c1/bio.txt", "utf8");
console.log(readData);

//rename file

fs.renameSync("c1/bio.txt", "bioData.txt");

//to delete file nd folder. 
//lets create another folder for that to understand

// fs.mkdir("c2");         //error.so make another folder like challenge



 
/***************       Asynchrionus challenge              **** */





fs.mkdir("asynChallenge2", 
(err) =>{}
);

//create file in this folder by asynch way

 fs.writeFile("asynChallenge2/bio.txt", "asynChallenge2  started...", 
 (err)=>{})

 //add dta in continuation
  fs.appendFile("asynChallenge2/bio.txt", "         asynChallenge2 adding data in continuation",
  (err)=>{
 
     //not mandatory to pass or write anything
     console.log("append fun. of asynch node js")

  })

 //read data from another file
    fs.readFile("asynChallenge2/bio.txt", "utf8",
    (err, data) => {
      console.log(data);
    })

     //rename bio.txt file to mybio          so
    
      // fs.rename("asynChallenge2/bio.txt","myBio.txt",         // error. in new name put path al
      // (err)=> {})
      
         fs.rename("asynChallenge2/bio.txt", "asynChallenge2/myBio.txt",
         (err) =>{})


         //delete file mybio in asynChallenge2
       
        fs.unlink("asynChallenge2/myBio.txt",
        (err)=>{
          
        });

        //  fs.rmdir("asynChallenge2/", 
        //  (err)=>{})