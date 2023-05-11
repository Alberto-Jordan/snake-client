const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
connect();
