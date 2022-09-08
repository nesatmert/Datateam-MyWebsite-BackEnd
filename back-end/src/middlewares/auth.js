const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");

const authToken = (req, res, next) => {
    console.log(req.headers['access_token'] )
    const authHeader = req.headers['access_token'] || req.headers["authorization"].split(" ")[1];
    const token = authHeader  ;
    if (token === null) {
        return res.status(httpStatus.UNAUTHORIZED).send({error:"Giriş yap"});
    }

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (e, user) => {
        if(e) return res.status(httpStatus.FORBIDDEN).send({error: e});
        req.user = user?._doc;
        next();
    })
}

module.exports = authToken;