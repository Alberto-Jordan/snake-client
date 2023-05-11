const net = require("net");
const { setupInput } = require("./input");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Send the name to the server
    conn.write("Name: ABB");

    // Additional logic after connection is established
  });

  conn.on("data", (data) => {
    console.log("Received data:", data);
    // Additional logic to handle incoming data
  });

  return conn;
};

console.log("Connecting ...");
const connection = connect();

// Call the setupInput function
setupInput(connection);
