const connection = require('../config/mysql');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    postRegister: function(setData){
        return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM users WHERE email=?", setData.email, function(error, result){
                if (result[0]) {
                    reject(new Error(error));
                } else {
                    connection.query("INSERT INTO users SET ?", setData, function(error, result){
                        if (!error) {
                            const newResult = {
                                id: result.insertId,
                                ...setData,
                            };
                            delete newResult.password;
                            delete newResult.verify_code;
                            resolve(newResult);
                        } else {
                            reject(new Error(error));
                        }
                    });
                }
            });
        });
    },
    checkUser: function(setData){
        return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM users WHERE email=?", setData.email, function(error, result){
                if (!error) {
                    resolve(result[0]);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    postVerify: function(setData){
        return new Promise(function(resolve, reject){
            const verify = "UPDATE users SET verify='2', verify_code=null WHERE email='" + setData.email + "'";
            connection.query(verify, function(error, result){
                if (!error) {
                    resolve(result[0]);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    postRefreshToken: function (token){
        return new Promise(function(resolve, reject){
            jwt.verify(token, process.env.REFRESH_SECRET_KEY, function(error, result){
                if (
                    (error && error.name === 'TokenExpiredError')
                    ||
                    (error && error.name === 'JsonWebTokenError')
                ) {
                    reject(new Error(error));
                } else {
                    resolve(result.result);
                }
            });
        });
    },
}
