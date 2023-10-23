var mysql = require('mysql');
const fs = require('fs');
var conn = mysql.createConnection({host:"tooluser.mysql.database.azure.com", user:"toolcomic", password:"!Kakalok0019", database:"tooluser", port:3306, ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}});
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = conn;