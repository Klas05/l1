import fetch from "node-fetch";
import readline from "readline";
import dotenv from "dotenv";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", async (name) => {
  const username = name;
  dotenv.config({quiet: true});

  const response = await fetch("https://api.api-ninjas.com/v1/facts", {
    headers: {
      "X-Api-Key": process.env.api_key,
    },
  });
  const data = await response.json();
  const fact = data[0].fact;

  console.log(`\nHello, ${username}! Here is a random fact for you: \n${fact}`);

  rl.close();
});
