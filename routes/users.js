var express = require('express');
var router = express.Router();

// const db = require('../db/db');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  const userCol = await db.getCollection('User');
  if (!userCol) {
    console.error('No user collection');
  }
  await userCol.insertOne({ name: 'Naresh' });
  res.send('User inserted');
  // next();
});

router.post('/', async function (req, res, next) {

  /**
   * check the body
   * persist to the db
   */

  const body = req.body;
  const email = body.mail;
  const pwd = body.pwd;

  if (!(email && pwd)) {
    return next('email/pwd is missing');
  }

  // query using email
  /**{ email: email}
   * case 1: if doc exists: throw error "user exist with same mail"
   * case 2: if doc not exists: continue with signup process
   */


  const userCol = await db.getCollection('User');
  if (!userCol) {
    console.error('No user collection');
  }
  await userCol.insertOne({ email, password: pwd });
  res.json({ msg: 'User created'});
});

function sum(a, b) {
  return a + b;
}


module.exports = {
  sum,
  router
};

