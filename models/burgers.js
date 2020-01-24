let orm = require('../config/orm.js');

let burgers = {
    all: (cb) => {
        orm.all('burgers', res => {
            cb(res);
        });
    },

    insert: (col, val, cb) => {
        orm.insert('burgers', col, val, (res) => {
            cb(res);
        });
    },

    update: (colVals, condition, cb) => {
        orm.update('burgers', colVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burgers;