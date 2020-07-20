const connection = require('../config/mysql');

module.exports = {
    getBook: function(){
        return new Promise(function (resolve, reject) {
            connection.query("SELECT books.id, books.title, books.description, books.genre as id_genre, genres.name as genre, books.author as id_author, authors.name as author, books.user as id_user, users.name as user, books.status, books.image, books.created, books.updated FROM books LEFT JOIN genres ON books.genre = genres.id LEFT JOIN authors ON books.author = authors.id LEFT JOIN users ON books.user = users.id", function (error, result) {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    // getBookById: function(id){
    //     return new Promise(function(resolve, reject){
    //         connection.query("SELECT * FROM books WHERE id=?", id, function(error, result){
    //             if (!error) {
    //                 resolve(result[0]);
    //             } else {
    //                 reject(new Error(error));
    //             }
    //         });
    //     });
    // },
    getBookByUser: function(userId){
        return new Promise(function(resolve, reject){
            connection.query("SELECT books.id, books.title, books.description, books.genre as id_genre, genres.name as genre, books.author as id_author, authors.name as author, books.user as id_user, users.name as user, books.status, books.image, books.created, books.updated FROM books LEFT JOIN genres ON books.genre = genres.id LEFT JOIN authors ON books.author = authors.id LEFT JOIN users ON books.user = users.id WHERE user=?", userId, function(error, result){
                if (!error) {
                    resolve(result);
                } else {
                    console.log(error);
                    reject(new Error(error));
                }
            });
        });
    },
    getCountBook: function(){
        return new Promise(function(resolve, reject){
            connection.query("SELECT COUNT(*) as totalRows FROM books", function(error, result){
                if (!error) {
                    resolve(result[0].totalRows)
                } else {
                    reject(new Error(error))
                }
            });
        });
    },
    getBookByFilter: function(filter){
        return new Promise(function(resolve, reject){
            const query = `SELECT books.id, books.title, books.description, books.genre as id_genre, genres.name as genre, books.author as id_author, authors.name as author, books.user as id_user, users.name as user, books.status, books.image, books.created, books.updated FROM books LEFT JOIN genres ON books.genre = genres.id LEFT JOIN authors ON books.author = authors.id LEFT JOIN users ON books.user = users.id WHERE title LIKE "${filter.search}" OR description LIKE "${filter.search}" OR genre LIKE "${filter.search}" OR author LIKE "${filter.search}" OR status LIKE "${filter.search}" ORDER BY ${filter.by} ${filter.sort} LIMIT ${filter.start},${filter.limit}`;
            connection.query(query, function(error, result){
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            });
        });
    },
    postBook: function(setData){
        return new Promise(function(resolve, reject){
            connection.query("INSERT INTO books SET ?", setData, function(error, result){
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
    putBook: function(setData, id){
        return new Promise(function(resolve, reject){
            connection.query("UPDATE books SET ? WHERE id=?", [setData, id], function(error, result){
                if (!error) {
                    const newData = {
                        id,
                        ...setData,
                    };
                    resolve(newData);
                } else {
                    console.log(error);
                    reject(new Error(error));
                }
            });
        });
    },
    deleteBook: function(id){
        return new Promise(function(resolve, reject){
            connection.query("DELETE FROM books WHERE id=?", id, function(error, result){
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
