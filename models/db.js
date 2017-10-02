// db.js
const mysql = require('mysql');
const cnf = require('../cnf.js').AWSMYSQL 

const pool = mysql.createPool({
	connectionLimit : cnf.connectionLimit,
	host			: cnf.host,
	user			: cnf.user,
	password		: cnf.password,
	database		: cnf.database
});

exports.getLngLat = (fail, done) => {
    pool.getConnection((err, conn) => {
        if(err) {
            return fail(err);
        }
        let sql = 'SELECT * FROM convenient_stores201706';
        conn.query(sql, (err, rows) => {
            if(err) {
                return fail(err);
            }
            conn.release();
            done(rows);
        });
    });
}
