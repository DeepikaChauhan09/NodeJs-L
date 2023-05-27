//rewuired or say import that module

import chalk from 'chalk';
import validator from "validator";





// 1-chalk


//   const chalk=require("chalk");                              //outdated syntax 
   //chalk npm package make our terminal looks beautifull
  console.log(chalk.blue("hello world. this is a chalk npm package"))

  console.log(chalk.yellow.underline("hello world. this is a chalk npm package"))

  console.log(chalk.greenBright.inverse("hello world. this is a chalk npm package"))

  console.log(chalk.redBright.inverse("flase"))

  console.log(chalk.cyan.inverse("success"))


  //2 validator  --> return true or false .
  console.log("VALIDATOR NPM PACKAGE *********====>");
     
   //email
    const ans=validator.isEmail("dc9.deepika@gmail.com");
    console.log(ans);

    //3. validator +chalk   --->  we want if ans is true. it comes in green clr else in red.
    const ans2=validator.isEmail("dc9.deepika@gmail.com");
    if(ans2)
    {
         console.log(chalk.greenBright.inverse(ans2));
    }
    else{
        console.log(chalk.redBright.inverse(ans2));
    }
   

    //4 isAlpha-->only alphabets
     const res=validator.isAlpha("ansjk5552dinxl")
     if(res)
    {
         console.log(chalk.greenBright.inverse(res));
    }
    else{
        console.log(chalk.redBright.inverse(res));
    }

    //5. many more