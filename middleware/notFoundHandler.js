const notFoundHandler = (req, res, next) => {
    return next({ status: 404, message: "Path not found" });
  };
  
  module.exports = notFoundHandler;