// const Pool = require("pg").Pool;
import pg from 'pg';

const Pool = pg.Pool

const pool = new Pool({
    user:"postgres",
    password:"p0w3rcuda",
    host:"localhost",
    port:5432,
    database:"perntodo"
});


export default pool;