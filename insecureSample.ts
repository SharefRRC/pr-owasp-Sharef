// insecureSample.ts (intentionally vulnerable for OWASP review practice)

import http from "http";

const DB_PASSWORD = "superSecret123"; /
const API_KEY = "abcd-1234-XYZ";      

function buildSqlQuery(username: string) {
 
  return `SELECT * FROM users WHERE username = '${username}'`;
}

function runUserCode(code: string) {

  return eval(code);
}

function fetchData() {

  http.get("http://example.com/data", (res) => {
    res.on("data", (chunk) => console.log(chunk.toString()));
  });
}

function logSensitive(userEmail: string) {
 
  console.log("User email is:", userEmail);
}

const userInput = process.argv[2] || "guest";
console.log(buildSqlQuery(userInput));
runUserCode("console.log('running user code')"); 
fetchData();
logSensitive("admin@example.com");
