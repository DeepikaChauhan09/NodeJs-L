
  const fs=require("fs");

fs.writeFileSync("dc1/create", "anything");
 
fs.appendFileSync("dc1/create", "    helooooooooo ")

//delete file--create

 fs.unlinkSync("dc1/create");

 //delete folder dc1
 fs.rmdirSync("dc1");