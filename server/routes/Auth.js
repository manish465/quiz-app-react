const router = require("express").Router();

const User = require("../model/User");

router.post("/register", async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser._id);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
