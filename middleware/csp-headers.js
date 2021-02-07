module.exports = function (rea, res, next) {
  // res.setHeader('Content-Security-Policy', `default-src 'self';`);

  next();
};
