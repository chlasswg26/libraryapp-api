const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authModels = require('../models/auth');
const helper = require('../helpers');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    postRegister: async function(request, response){
        try {
            const setData = request.body;
            const password = setData.password;
            const random_code = helper.random(6);
            const verify_code = bcrypt.hashSync(random_code, 10);
            const hash = bcrypt.hashSync(password, 18);
            
            setData.password = hash;
            setData.verify = '1';
            setData.verify_code = verify_code;

            const result = await authModels.postRegister(setData);
            const htmlTemplate =
              "<center><h2>Your account must be verification</h2><hr>OTP Code : <h4>" +
              random_code +
              "</h4><br /><h3>This code valid for 24 Hours</h3></center>";
            helper.nodemailer(
              result.email,
              "OTP Verification Code | " + process.env.SITE_NAME,
              htmlTemplate
            );

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 401, { message: 'Email telah terpakai!' });
        }
    },
    postLogin: async function(request, response){
        try {
            const setData = request.body;
            const password = setData.password;
            const result = await authModels.checkUser(setData);
            const verifyPassword = result.password;
            const compare = bcrypt.compareSync(password, verifyPassword);
            const isVerify = result.verify;
            const verify_code = result.verify_code;

            if (!compare) {
                return helper.response(response, 401, { message: 'Kata sandi yang dimasukkan salah!' });
            } else if (isVerify === '1' || verify_code !== null) {
                return helper.response(response, 401, { message: 'Akun belum terverifikasi!' });
            } else {
                delete result.password;
                const token = jwt.sign({ result }, process.env.SECRET_KEY, {
                    expiresIn: process.env.TOKEN_LIFE,
                });
                const refreshToken = jwt.sign({ result }, process.env.REFRESH_SECRET_KEY);
                const newData = {
                    ...result,
                    token,
                    refreshToken,
                };
                return helper.response(response, 200, newData);
            }
        } catch (error) {
            return helper.response(response, 401, { message: 'Akun belum terdaftar!' });
        }
    },
    postVerify: async function(request, response){
        try {
            const setData = request.body;
            const otp_code = setData.verify_code;
            const checkUser = await authModels.checkUser(setData);
            const verify_code = checkUser.verify_code;
            const compare = bcrypt.compareSync(otp_code, verify_code);

            if (!compare) {
                return helper.response(response, 401, { message: 'OTP Kode tidak sah!' });
            } else {
                await authModels.postVerify(setData);
                return helper.response(response, 200, { message: 'Akun telah diverifikasi.' });
            }
        } catch (error) {
            return helper.response(response, 401, { message: 'Gagal memverifikasi akun!' });
        }
    },
    postRefreshToken: async function(request, response){
        try {
            const token = request.body.token;
            const result = await authModels.postRefreshToken(token);

            if (result === undefined || result === null) {
                return helper.response(response, 401, { message: 'Token tidak sah!' });
            } else {
                const token = jwt.sign({ result }, process.env.SECRET_KEY, {
                    expiresIn: process.env.REFRESH_TOKEN_LIFE,
                });
                return helper.response(response, 200, { token: token });
            }
        } catch (error) {
            return helper.response(response, 401, { message: 'Gagal menyegarkan token!' });
        }
    },
}
