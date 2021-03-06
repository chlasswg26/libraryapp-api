const connection = require('../config/mysql');

module.exports = {
    getGenre: function(){
        return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM genres", function(error, result){
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    // getGenreById: function(id){
    //     return new Promise(function(resolve, reject){
    //         connection.query("SELECT * FROM genres WHERE id=?", id, function(error, result){
    //             if (!error) {
    //                 resolve(result[0]);
    //             } else {
    //                 reject(new Error(error));
    //             }
    //         });
    //     });
    // },
    postGenre: function(setData){
        return new Promise(function(resolve, reject){
            connection.query("INSERT INTO genres SET ?", setData, function(error, result){
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
    putGenre: function(setData, id){
        return new Promise(function(resolve, reject){
            connection.query("UPDATE genres SET ? WHERE id=?", [setData, id], function(error, result){
                if (!error) {
                    const newData = {
                        id,
                        ...setData,
                    };
                    resolve(newData);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    deleteGenre: function(id){
        return new Promise(function(resolve, reject){
            connection.query("DELETE FROM genres WHERE id=?", id, function(error, result){
                if (!error) {
                    const newData = {
                        id,
                    };
                    resolve(newData);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
}
