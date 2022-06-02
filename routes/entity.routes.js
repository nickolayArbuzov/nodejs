const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');
const anyController = require('../controllers/anyController');

router.get('', authMiddleware, anyController.method)

module.exports = router