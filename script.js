const { error, log } = require('console')
const fs = require('fs')
fs.appendFile("UserDets.txt", "ui73777333",(err)=>{
if (err) {
    console.error(err)
} else {
    console.log("done");
}
})

fs.copyFile("UserDets.txt", "./copy/copied.txt",(err) => { if (err) {
    console.error(err);
} else {
    console.log("done");
} })

fs.unlink("UserDets.txt",(err)=>{
    if (err) {
       console.error(err);
    } else {
       console.log("done");
    }
   })


fs.rm("./copy",{recursive: true},(err)=>{
 if (err) {
    console.error(err);
 } else {
    console.log("done");
 }
})