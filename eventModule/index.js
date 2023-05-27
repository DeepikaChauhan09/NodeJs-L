  
   const EventEmitter= require("events");  //s**

   //event emmiter , write as it is. this is a class, type of thing.
   //now to access all its methods, create object of this class. then through that object u can access all its methods

   const ev= new EventEmitter();

   //event define--
   ev.on("f1", ()=>
   {
    console.log("event called nd fired")
   })
   //to call/fire evnt
   ev.emit("f1")


   
//writin this "on event below "emit" event wont work. so write it above emit event syntax    
//    ev.on("f1", ()=>                 
//    {
//     console.log("event called nd fired")
//    })

// REASON 🔴 🔴 🔴 🔴 🔴---> IN EMIITER EVENT NODEJS, ONLY THOSE EVENTS WILL BE CALLED WHO ARE ALREADY DEFINED/ REGISTERED *** BEFOR EVENT FIREING


//2.  🔴 🔴 🔴
//in nodejs, through 1 event ,we can call multiple time same function. this isnt possible in js

//event define
  ev.on("f2", ()=>
  {
    console.log("multiple calling---mc 1-- from 1 event fire")
  })
  ev.on("f2", ()=>
  {
    console.log("multiple calling---mc 2-- from 2 event fire")
  })
  ev.on("f2", ()=>
  {
    console.log("multiple calling---mc 3-- from 3 event fire")
  })

//fire event
   ev.emit("f2");


   //3.   🔴 🔴 🔴 🔴 🔴
   //how to pass parameter while event firing nd defining

 //event defining
    ev.on("f3", (a1,a2)=>{
        console.log(`your age is ${a1} and your name is ${a2}`)
    })

   //event fire
     ev.emit("f3", 47, "alexa");
