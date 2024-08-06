var express = require('express');
var router = express.Router();

const db = require('../db/db');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        const mongoClient = await db.getMongoClient;
        await mongoClient.db('HighLevel').command({ ping: 1 });
        res.json({ msg: 'all okay' });
    } catch(e) {
        console.error(e);
        res.statusCode(500).json({ msg: 'Internal server error', e });
    }
});

module.exports = router;
