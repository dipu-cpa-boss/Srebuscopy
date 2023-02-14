const fs = require("fs");
const readline = require("readline");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Md Dipu Ahmed       ");
console.log("````````````````````````````````````````````````````");
console.log(" Subscribe My Youtube Channel For Link Update       ");
console.log(" Youtube:https://www.youtube.com/@dipuahmed990 ");
console.log("____________________________________________________");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);
  fs.writeFile("link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful add .");
    console.log("Now you ready to upload this file...");
    process.exit();
  });
});
