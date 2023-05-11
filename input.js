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

module.exports = { setupInput };
