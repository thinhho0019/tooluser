var mysql = require('mysql');

var conn = mysql.createConnection({host:"tooluser.mysql.database.azure.com", user:"toolcomic", password:"!Kakalok0019", database:"", port:3306, ssl:{ca:fs.readFileSync("{ca-cert filename}")}});