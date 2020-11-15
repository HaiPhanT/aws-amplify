/*jshint esversion: 6*/

const controller = {};
const models = require("../models");
const User = models.User;
const bcrypt = require("bcrypt");

controller.getUserByEmail = (email) => {
  return User.findOne({
    where: { username: email }
  });
};

controller.createUser = (user) => {
  let salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
  return User.create(user);
};

controller.comparePassword = (password, hash)=>{
  return bcrypt.compareSync(password, hash);
};

controller.isLoggedIn = (req, res, next)=>{
  if(req.session.user){
    next();
  }
  else {
    res.redirect(`/users/login?returnURL=${req.originalURL}`);
  }
};

module.exports = controller;
