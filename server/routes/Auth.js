const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");

router.post("/register", async (req, res) => {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("email Exist");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser._id);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
