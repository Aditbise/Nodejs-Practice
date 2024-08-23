console.log("starting up");  //works 1st goes to CALL STACK

setTimeout(()=>{

    console.log("2 second log");   //work 4th goes to Node API because it is a part of C,C++ 

},2000);

setTimeout(()=>{
     console.log("0 second log");      //work 3rd goes to Node API because it is a part of C,C++ 
},0);

console.log("finnishing up");  //works 2nd goes to CALL STACK 