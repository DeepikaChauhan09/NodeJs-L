 
   //import module from work file +nt in same folder of curr. directory
     
    const any=require("./work");
     
      //console.log(any(5,5));

       //any(2,2);      //will work. as in add fun. console is done so will print fro there

       console.log(any);


       /************   multiple import - export */
       console.log(" MULTIPLE VALUE IMPORT EXPORT ******")

       //import module

      // const {age, sub, year} =require("./multipleValues_imex_port");  
      // the order in import may or may not be same. no effect. both will work
    //  const {year, age, sub} =require("./multipleValues_imex_port");

    const {age} =require("./multipleValues_imex_port");

        age();
      //   console.log(sub(4,4));
      //  // sub(9,4);               wont work 

      //  console.log(year);



      


    