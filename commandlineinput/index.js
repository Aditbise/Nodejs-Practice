// console.log(process.argv);
// console.log(process.argv[2]);

const fs=require('fs');
const input =process.argv;

if(input[2]=='add' || input[2]=='Add' || input[2]=='ADD'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove' || input[2]=='Remove' || input[2]=='REMOVE'){
    fs.unlinkSync(input[3],input[4]);
}
else{
    console.log("process not found please try again");

}