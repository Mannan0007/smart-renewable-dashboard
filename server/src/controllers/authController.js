const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({

            success: true,

            message: 'User registered successfully',

            token: generateToken(newUser._id),

            user: {

                id: newUser._id,

                name: newUser.name,

                email: newUser.email
            }

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        /* CHECK USER */

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                success: false,

                message: 'Invalid email or password'
            });
        }

        /* CHECK PASSWORD */

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({

                success: false,

                message: 'Invalid email or password'
            });
        }

        res.status(200).json({

            success: true,

            message: 'Login successful',

            token: generateToken(user._id),

            user: {

                id: user._id,

                name: user.name,

                email: user.email
            }

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: 'Server Error'
        });
    }
};
/* GET USER PROFILE */

const getUserProfile = async (req, res) => {

    try {

        res.status(200).json({

            success: true,

            user: req.user
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: 'Server Error'
        });
    }
};
module.exports = {

    registerUser,
    loginUser,
    getUserProfile
};