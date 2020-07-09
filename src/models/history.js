const connection = require('../config/mysql');

module.exports = {
    getHistory: function(){
        return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM history", function(error, result){
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    getHistoryByUserId: function(userId){
        return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM history WHERE user=?", userId, function(error, result){
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    postHistory: function(setData){
        return new Promise(function(resolve, reject){
            connection.query("INSERT INTO history SET ?", setData, function(error, result){
                if (!error) {
                    const newData = {
                        id: result.insertId,
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
