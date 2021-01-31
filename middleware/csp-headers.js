module.exports = function (rea, res, next) {
  res.setHeader('Content-Security-Policy', 'img-src self; default-src *');

  next();
};
