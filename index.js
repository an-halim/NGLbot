import NGL from "./src/NGL.js";
import readline from "readline";

const userName = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\x1b[95mWelcome to NGL bot\x1b[39m");
userName.question("What is your username? ", (name) => {
  const bot = new NGL(name, { random: true, text: "hi are you oke?" });
  bot.sent({ count: 10 });
  userName.close();
});
