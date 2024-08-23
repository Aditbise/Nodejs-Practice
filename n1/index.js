const app=require('./app')

// console.log("so what");
// var x=10
// console.warn(x);
// console.error("not found");

// console.log(app);
// console.log(app.y);
// console.log(app.z());

const arr=[2,1,4,5,7,8,54];
arr.filter((item)=>{
    console.log(item)
})

let result=arr.filter((item)=>{
    return item===4;
})
console.log(result);

let res=arr.filter((item)=>{
    return item>=4;
})
console.log(res);

