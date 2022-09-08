const Models = require("../models/post");

const insert = (postData) => {
    const posts = new Models({
        title: postData.title,
        description: postData.description, user_id: postData.user_id
    });
        console.log("sadasdsasada",posts);
    return posts.save();

};

const list = () => {
    return Models.find({});
};

module.exports = {
    insert,
    list,
};
