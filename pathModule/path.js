
  const path=require("path")

  //1 path/url of current directory means file /workspace u r currently on

   console.log(path.dirname("D:/NodeJS_Learning/pathModule/path.js"))

   //2 extension of curr directory
   console.log(path.extname("D:/NodeJS_Learning/pathModule/path.js"))

   //3 name  of curr directory
   console.log(path.basename("D:/NodeJS_Learning/pathModule/path.js"))
c
   //4  parse method --> returns all posiible info. of current directory in object format. like its path url, name, extension, disk in which folder is +nt(called root),  etc.

     console.log(path.parse("D:/NodeJS_Learning/pathModule/path.js"));
 
     // now from parse method we can get other props like extension, file name etc . as parse is object.

     const  myparse=path.parse("D:/NodeJS_Learning/pathModule/path.js");
      console.log("our disk i.e root is   .." +  myparse.root);
      console.log("our url of directory is   .." +  myparse.dir);
      console.log("our name of curr directory is   .." +  myparse.base);
      console.log("our extension of directory is   .." +  myparse.ext);
      console.log("our name of directory is   .." +  myparse.name);
