
//os module will be called nd used
  const os=require("os")

  //1  os archtecture
  console.log("my compute has architecture in bit==>" + os.arch());

  //2  freemem ==>  free memory +nt in compute(os) . give ans in byte form .will convert it into gb.using string templates

  const freememory= os.freemem();
  console.log(`${freememory /1024 /1024 /1024}`);        //only this gigabyte is +nt now


  //3  total mem. of compute -ram
  const totalmemory= os.totalmem();
  console.log(`${totalmemory /1024 /1024 /1024}`);        //only this gigabyte is +nt now

  //4  hostname
  console.log( os.hostname());

  //5 os type -windows/linus/mac  
  console.log( os.platform());

  //6. 
  console.log( os.tmpdir());

  //7
  console.log( os.type());

  // and many more. u can check website os module for it