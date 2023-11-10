const fs = require("fs");
const readline = require("readline");
const generateGreeting = require("./greetings");

const name = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

name.question(`Hey! What is your name?`, (user) => {
  const greeting = generateGreeting(user);

  fs.writeFile("output.txt", greeting, (err) => {
    if (err) {
      console.log("err", err);
    } else {
      console.log("greeting saved,please check output.txt");
    }

    name.close();
  });
});
