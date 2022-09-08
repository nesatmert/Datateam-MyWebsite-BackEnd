const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: { type: String, require},
    description: { type: String, require},
    user_id: {
        type: mongoose.Types.ObjectId,
        ref : "User"
    },
    is_deleted : Boolean
},
{timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Posts",PostSchema);
