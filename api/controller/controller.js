const mysql = require('mysql');
const filepath = "./api/data/code_challenge.csv";
const csv_to_json = require('csvtojson');
const host = "localhost";
const user = "root";
const password = "root123$";
const db_name = "code_challenge";
const conn_with_db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123$",
  database: "code_challenge"
});
conn_with_db.connect((err) => {
  if (err) throw err;
});


module.exports.create_database = function(req, res) {

  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
  });

  connection.connect((err) => {
    if (err) throw err;
    connection.query("CREATE DATABASE IF NOT EXISTS " + db_name + ";", (err, result) => {
      if (err) throw err;
      res.send("database created");
      connection.destroy();
    });
  });

}


module.exports.create_table = function(req, res) {

    console.log("Database connected");
    let sql_query = 'CREATE TABLE IF NOT EXISTS code_challenge (Date varchar(255), ';
    sql_query += '`Ad Unit Name` varchar(255), `Ad Unit ID` varchar(255), Typetag varchar(255), `Revenue Source` varchar(255),';
    sql_query += 'Market varchar(255), Queries varchar(255), Clicks varchar(255), Impressions  varchar(255), `Page Rpm`  varchar(255), ';
    sql_query += '`Impression Rpm`  varchar(255), `True Revenue` varchar(255), Coverage varchar(255), Ctr  varchar(255))';
    conn_with_db.query(sql_query, (err, result) => {
      if (err) throw err;
      res.send("Table created.");
    })

}

module.exports.import = async function(req, res) {

      csv_to_json({
        delimiter: ';'
      }).fromFile(filepath).then(source => {
        import_data(res, source, 0)
      });

}

async function import_data(res, source, i) {

  if (i >= source.length) {
    res
      .status(200)
      .send("All items stored into database successfully");

    return;
  }

  // Fetching the data from each row
  // and inserting to the table "code_challenge"
    var date = source[i]["Date"],
      ad_unit_name = source[i]["Ad Unit Name"],
      ad_unit_id = source[i]["Ad Unit ID"],
      typetag = source[i]["Typetag"],
      rev_source = source[i]["Revenue Source"],
      market = source[i]["Market"],
      queries = source[i]["Queries"],
      clicks = source[i]["Clicks"],
      impressions = source[i]["Impressions"],
      page_rpm = source[i]["Page Rpm"],
      imp_rpm = source[i]["Impression Rpm"],
      true_rev = source[i]["True Revenue"],
      coverage = source[i]["Coverage"],
      ctr = source[i]["Ctr"];

    var insert_statement =
      `INSERT INTO code_challenge values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    var columns = [date, ad_unit_name, ad_unit_id, typetag, rev_source, market,
      queries, clicks, impressions, page_rpm, imp_rpm, true_rev, coverage, ctr
    ];
    // Inserting data of current row
    // into database
    const success = conn_with_db.query(insert_statement, columns,
      (err, results, fields) => {
        if (err) throw err;
        i++;
        import_data(res, source, i);
      });
}

module.exports.getTableRows = function(req, res) {

  conn_with_db.query("SELECT * FROM code_challenge", function (err, result, fields) {
  if (err) throw err;
  res
  .status(200)
  .json(result);
});
}
