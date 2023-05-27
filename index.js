console.log("hello world");
console.log("hello world");


//core module, built in func/pakage
const fs=require("fs");
fs.writeFileSync("text-file", "deepika");
fs.writeFileSync("text-file", "chauhan")            //since already +nt. so data override here

fs.writeFileSync("coreModule.txt", "helllo world.")

//now want to append data n continuation. not want to oveerride data.

fs.appendFileSync("coreModule.txt", "i have successfully appended data in  continuation of file i made by me 👍👍👍👍👍👍👍👍")


//to read data from another file
//    fs.readFileSync("coreModule.txt");
   const readData=fs.readFileSync("coreModule.txt");
//  console.log(readData);

   org_data=readData.toString();
   console.log(org_data);
   
//to rename the file i made
 fs.renameSync("text-file", "file.txt");


