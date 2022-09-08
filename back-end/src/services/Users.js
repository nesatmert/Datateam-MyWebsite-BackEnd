const User = require("../models/Users");
const Models = require("../models/post");

const insert = (data) => {
    console.log(data);
    const users = new User({
        
        user_name : data.user_name,
        mail : data.mail,
        password : data.password,
    });
        console.log(data);
    return users.save();

};

const loginUser = (loginData) => {
    const mail = loginData.mail
    const password = loginData.password
    return User.findOne({ mail, password});

};

const info = (id) => {
    console.log("ssssssss",id);
    return User.findById({_id:id});
}

const editUser = (editData, id) => {
    console.log(editData, id);
    return User.findByIdAndUpdate(id, editData, {new: true});
 
}

const list = (where) => {
    return Models.find({user_id:where});
};

const deletep = (where) => {
    return Models.findByIdAndDelete({_id:where});
};

module.exports = {
    insert,
    info,
    loginUser,
    editUser,
    list,
    deletep,
};
