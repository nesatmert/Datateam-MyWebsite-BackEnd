const { insert, info, loginUser, editUser, list, deletep } = require("../services/Users");
const httpStatus = require("http-status");
const { passwordToHash, generateAccessToken, generateRefreshToken } = require("../scripts/helper");
const { response } = require("express");

const create = (req, res) => {
    req.body.password = passwordToHash(req.body.password);
    insert(req.body)
    .then(response => {
        
        res.status(httpStatus.CREATED).send(response);

    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};


const login = (req, res) => {
    req.body.password = passwordToHash(req.body.password);
    console.log("controller login ==== ",req.body);
    loginUser(req.body)
    .then((user) =>{
        console.log("then login ====",user);
        if (!user) return res.status(httpStatus.NOT_FOUND).send({ message: "böyle kullanıcı yok"});
        
        user = {
            ...user.toObject(),
            access_token : generateAccessToken(user),
        };
        
        delete user.password;
        console.log(user);
        res.status(httpStatus.OK).send(user);
        
    })
    .catch((e) =>res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

const index = (req, res) => {
    info(req.params?.id).then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(e => response.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

const edit = (req, res) => {
    console.log(req.body);
    editUser(req.body, req.params?.id)
    .then((user) => {
        
        res.status(httpStatus.OK).send(user);
        console.log("sdsda",user);
    })
};

const mypost = (req, res) => {
    list(req.params?.id).then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

const postdelete = (req, res) => {
    deletep(req.params?.id).then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = {
    create,
    index,
    login,
    edit,
    mypost,
    postdelete,
};
