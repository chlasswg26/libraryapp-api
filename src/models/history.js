const connection = require('../config/mysql');

module.exports = {
    getHistory: function(){
        return new Promise(function(resolve, reject){
            connection.query("SELECT history.id, history.book as id_book, books.title as book, books.image as image, history.user as id_user, users.name as user, history.status, history.created FROM history INNER JOIN books ON history.book = books.id INNER JOIN users ON history.user = users.id", function(error, result){
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
            connection.query("SELECT history.id, history.book as id_book, books.title as book, books.image as image, history.user as id_user, users.name as user, history.status, history.created FROM history LEFT JOIN books ON history.book = books.id LEFT JOIN users ON history.user = users.id WHERE history.user=?", userId, function(error, result){
                if (!error) {
                    resolve(result);
                } else {
                    console.log(error);
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
