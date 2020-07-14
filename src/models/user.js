const connection = require('../config/mysql');

module.exports = {
    getUserById: function(id){
        return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM users WHERE id=?", id, function(error, result){
                if (!error) {
                    delete result[0].password;
                    delete result[0].verify_code;
                    resolve(result[0]);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    putUser: function(setData, id){
        return new Promise(function(resolve, reject){
            connection.query("UPDATE users SET ? WHERE id=?", [setData, id], function(error, result){
                if (result) {
                    const newData = {
                        id: id,
                        ...setData,
                    };
                    resolve(newData);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
}
