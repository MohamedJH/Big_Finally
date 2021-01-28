const express = require('express');
const router = express.Router();
const {register} = require('../controllers/authControllers')


/** 
 * @param POST /api/auth/register
 * @description register user
 * @access PUBLIC
 */
router.post("/register",register)
 



module.exports = router