const fs = require('fs');
const path=require('path');
const dirPath = path.join(__dirname);
 console.warn(dirPath);
 //creation of files

//  for(i=0;i<5;i++)
//     {
//         fs.writeFileSync(dirPath+"/File"+i+".text","beep boop boop file "+i+" created ");
//     }//used to create file
    

//reading of files of all types

fs.readdir(dirPath,(err,files)=>{ 
    files.forEach((item)=>{ 
        console.log("File name : "+item)
                          }) 
                                });