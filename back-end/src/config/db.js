const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(
            `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wqlazls.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        
            
          ).then((result) => console.log("database connected")).catch((e)=> console.log(e));
        
    } catch (e) {
        console.log(e);
    }
}

module.exports = connectDB