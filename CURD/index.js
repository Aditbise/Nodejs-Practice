const fs=require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
console.log(dirpath);
const filepath = `${dirpath}/File.txt`;

//file creation and sppending

// fs.writeFileSync(filepath,'Quest 1 : stay hydrated ! ');
// // other syntex is :--   fs.writeFileSync(dirpath+"/File",'Quest 1 : stay hidrated ! ');
// console.log("**FILE CREATED**");
// console.log("**CONTENT OF FILE**");

// fs.readFile(filepath,'utf8',(err,item)=>{
//     if(err)
//        console.log(error);
//     else
//        console.log(item);
//     });

// fs.appendFile(filepath,'Quest 2 : do workout !',(err)=>{
//     if(!err) 
//         { 
//             console.log("**FILE UPDATION DONE**")
//             fs.readFile(filepath,'utf8',(err,item)=>{console.log(item)} );
//         }
// });



//file renaming

// fs.rename(filepath,`${dirpath}/Quest.txt`,(err)=>{
//     if(!err) console.log("**FILE NAME UPDATED**")
// });


//file deletion

fs.unlinkSync(`${dirpath}/Quest.txt`);
