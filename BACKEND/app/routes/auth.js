const router = require("express").Router();
const User = require("../Model/User-model");
const bcrypt = require("bcrypt");

// Sign up
router.post("/register", async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const signupInputs = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        
        const newSignup = await signupInputs.save()
        res.status(200).json(newSignup);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(401).json("User not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong password")

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;