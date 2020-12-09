const notFoundHandler = (err, req, res, next) => {
  if (err.httpStatusCode === 404) {
    res.status(404).send("Not found");
  }
  next(err);
};

const unauthorizedHandler = (err, req, res, next) => {
  if (err.httpStatusCode === 401) {
    res.status(404).send("Unauthorized");
  }
  next(err);
};

const forbiddenHandler = (err, req, res, next) => {
  if (err.httpStatusCode === 403) {
    res.status(403).send(err.status);
  }
  next(err);
};

const catchAllHandler = (err, req, res, next) => {
  if (!err.handlersSent) {
    res.status(err.httpStatusCode);
  }
  next(err);
};

module.exports = {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  catchAllHandler,
};
