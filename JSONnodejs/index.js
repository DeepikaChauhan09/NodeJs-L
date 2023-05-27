
  //create an object.          //value is in double codes.for int type value double code can be used or cant be. no issue. both will work

  const biodata={
     name: "alexa",
     age:"38",
     color:"fair",
     height:5.5,
  }
  console.log(biodata.height);

  //json 2 imp. methods  --> 1) stringify.  2)parse

  //to convert object into json format. (json format==> almost similar to object syntax. but in json, key is also in double codes " ")

  const jsondata= JSON.stringify(biodata);
  console.log( jsondata);

  //u cant access any key-value of json data by . extension like we do in object
 // console.log(jsondata.name);   //error comes--undefined--i.e  error  🔴🔴🔴🔴
 
 //2 parse==> to conver json format into object format

  const objdata=JSON.parse(jsondata);
 //console.log("data in object format from json format       ---> " + objdata);  
 // 🔴🔴🔴🔴 not working correctly
 console.log("data in object format   --->")
 console.log( objdata);
