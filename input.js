const readline = require("readline");

let connection; // Stores the active TCP connection object

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const rl = readline.createInterface({
    input: stdin,
    output: process.stdout,
  });

  // Register event listener for stdin data
  stdin.on("data", (key) => handleUserInput(key, rl));

  return stdin;
};

const handleUserInput = function (key, rl) {
  if (key === "\u0003") {
    // Check for Ctrl + C input (termination)
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "1") {
    connection.write("Say: Hello!");
  } else if (key === "2") {
    connection.write("Say: Goodbye!");
  }




};




module.exports = { setupInput };
