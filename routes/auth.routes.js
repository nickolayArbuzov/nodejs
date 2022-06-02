const Router = require('express');
const router = new Router();
const {check} = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/registration',

    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Password must be longer than 8 and shorter than 99').isLength({min: 8, max: 99})
    ],

    async (req, res) => {
        try {

            res.json({message: 'User was created'})
        } catch (e) {

            res.send({message: 'Server error'})
        }
    })


router.post('/login',
    async (req, res) => {
        try {

            return res.json({message: 'Login'})
        } catch (e) {

            res.status(500).send({message: 'Server error'})
        }
    })


router.get('/auth', authMiddleware,
    async (req, res) => {
        try {

            return res.json({message: 'Auth'})
        } catch (e) {
            
            res.send({message: 'Server error'})
        }
    })

module.exports = router
