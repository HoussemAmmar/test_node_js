const express = require('express');


import {getCities} from '../controllers/cities';

const router = express.Router();

router.get('/cities', getCities);

export default router;