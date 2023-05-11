const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Send the name to the server
    conn.write("Name: ABB");

    // additional logic after connection is established
  });

  conn.on("data", (data) => {
    console.log("Received data:", data);
    // additional logic to handle incoming data
  });

  return conn;
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register event listener for stdin data
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    // Check for Ctrl + C input (termination)
    process.exit();
  }
  // Your code here for handling other input
};

console.log("Connecting ...");
const connection = connect();

// Call the setupInput function
setupInput();
