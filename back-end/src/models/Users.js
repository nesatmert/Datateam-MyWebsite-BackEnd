const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    user_name : { type: String, require},
    mail : { type: String, require, unique: true, lowercase: true},
    password : { type: String, require},
    biography : String,
    city : String,
    github : String,
    linkedin : String,
    website : String,
    is_deleted : Boolean

},
{timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("user",UserSchema);
