const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken")

const passwordToHash = (password) => {
    return CryptoJS.HmacSHA256(password, process.env.PASSWORD_HASH).toString();
};

const generateAccessToken = (user) => {
    return JWT.sign( {name: user.user_name, ...user}, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: "1w"});

};


module.exports = {
    passwordToHash,
    generateAccessToken,
};
