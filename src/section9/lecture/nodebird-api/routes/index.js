const express = require('express');
const { v4: uuidv4 } = require('uuid'); // 대부분 v1 or v4 사용  // 인터넷 uuid 검색하면 더 자세하게 나옴 버전 별로.
const { User, Domain } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user && req.user.id || null },
      include: { model: Domain },
    });
    res.render('login', {
      user,
      domains: user && user.Domains,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/domain', isLoggedIn, async (req, res, next) => {
  try {
    await Domain.create({
      UserId: req.user.id,
      host: req.body.host,
      type: req.body.type,
      clientSecret: uuidv4(),  // uuidv4 : KEY 같은거 만들어줄때 사용 36자리 충돌 가능성이 거의 없다고 함.. // 왜 36자리? ==> models/domain.js type: Sequelize.STRING(36) 이렇게 했엇음.
    });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;