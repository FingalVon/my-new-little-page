// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";

// import {makeCapcha} from './test/test-bmp.js'

const models = require('./db');
const express = require('express');
const makeCapcha = require('./test/test-bmp.js')
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    console.log(req)
  let newAccount = new models.loginModel({
    account : req.body.account,
    password : req.body.password
  });
  // 保存数据newAccount数据进mongoDB
  newAccount.save((err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('createAccount successed');
    }
  });
});
// 获取已有账号接口
  router.get('/api/login/getAccount',(req,res) => {
    let newAccount = {
        'account' : req.query.account,
        'password' : req.query.password
    };
  // 通过模型去查找数据库
    models.loginModel.find(newAccount,(err,data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  });


//test验证码
router.post('/api/yzmtest',(req,res) => {
    var img = makeCapcha();
    res.setHeader('Content-Type', 'image/bmp');
    res.end(img.getFileData().toString('base64'));
});

module.exports = router;
