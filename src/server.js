require("dotenv").config();
let http = require("http");
let https = require("https");
let fs = require("fs");

let { commonHelpers } = require("./helpers");
let app = require("./app");

const DEV_ENV = process.env.NODE_ENV || "development";
const HTTPS = process.env.HTTPS
  ? JSON.parse(process.env.HTTPS.toLowerCase())
  : true;

// Disabling TLS validation in non production environment
if (DEV_ENV != "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

let APP_PORT = process.env.APP_PORT || 5000;
let API_URL = null;

let server = null;

// Create an express https server with self-signed ssl
if (HTTPS == true) {
  API_URL =
    "https://" + process.env.API_URL_BASE || `https://localhost:${APP_PORT}`;
  // Set SSL Certificates
  let SSL_CRT_FILE = process.env.SSL_CRT_FILE || "./src/ssl/cert.pem";
  let SSL_KEY_FILE = process.env.SSL_KEY_FILE || "./src/ssl/key.pem";
  let httpsOptions = {
    cert: fs.readFileSync(SSL_CRT_FILE),
    key: fs.readFileSync(SSL_KEY_FILE),
  };
  server = https.createServer(httpsOptions, app);
}

// Create an express http server
if (HTTPS != true) {
  API_URL =
    "http://" + process.env.API_URL_BASE || `http://localhost:${APP_PORT}`;
  server = http.createServer(app);
}

process.env.API_URL = API_URL;

// starting the server
server.listen(APP_PORT, () => {
  commonHelpers.logMessage("Test app running on: " + API_URL);
});
