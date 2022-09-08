const { insert, list } = require("../services/post");
const httpStatus = require("http-status");


const create = (req, res) => {
    console.log("req",req.user)
    req.body.user_id = req.user;
    console.log("reqbody",req.body);
    insert(req.body)
    .then(response => {
        console.log("respo",response);
        res.status(httpStatus.CREATED).send(response);
    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });

};

const index = (req, res) => {
    list().then(response => {
        console.log(response.paths);
        res.status(httpStatus.OK).send(response);
    }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

module.exports = {
    create,
    index,
};
