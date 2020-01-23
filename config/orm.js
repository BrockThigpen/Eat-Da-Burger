let connection = require("../config/connection.js");

const qMark = num => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?')
    }
    return arr.toString();
}

const sqlTranslate = obj => {
    let arr = [];
    for (let key in obj) {
        let val = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof val === 'string' && val.indexOf(' ') >= 0) {
                val = `"'"${val}"'"`;
            }
            arr.push(`${key} = ${val}`);
        }
    }
    return arr.toString();
}

const orm = {
    all: (table, cb) => {
        connection.query('SELECT * FORM ?', [table], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insert: (table, col, val, cb) => {
        let queryStr = 'INSERT INTO ' + table +
            ' (' +
            col.toString() +
            ') ' +
            'VALUES (' +
            qMark(val.length) +
            ') ';

        connection.query(queryStr, val, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    update: (table, colVals, condition, cb) => {
        let queryStr = 'UPDATE ' + table +
            ' SET ' +
            sqlTranslate(colVals) +
            'WHERE ' +
            condition;

        connection.query(queryStr, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
};
module.exports = orm;