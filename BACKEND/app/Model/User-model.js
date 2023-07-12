const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO).then((res) => {
    console.log(`Database connected!`)
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        minLength: 5
    }
});

module.exports = mongoose.model("User", userSchema);