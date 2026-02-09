// secureSample.ts (issues addressed based on PR review)

import https from "https";

// Secrets removed from source code
// In real applications, use environment variables or secret managers

function buildSqlQuerySafe() {
  // Parameterized queries should be used via a database library
  return "SELECT * FROM users WHERE username = ?";
}

// Removed eval to prevent code injection
function runSafeOperation() {
  console.log("Running safe operation");
}

function fetchDataSecure() {
  // Use HTTPS to protect data in transit
  https.get("https://example.com/data", (res) => {
    res.on("data", () => {
      // Avoid logging response body
    });
  });
}

function logSafeEvent() {
  // Avoid logging sensitive user data
  console.log("User action recorded");
}

const userInput = process.argv[2] || "guest";
console.log(buildSqlQuerySafe());
runSafeOperation();
fetchDataSecure();
logSafeEvent();
