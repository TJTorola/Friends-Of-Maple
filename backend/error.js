/**
 * @typedef {object} FomErrorProps
 * @property {string} message
 * @property {string} statusCode
 */
class FomError extends Error {
  constructor(props) {
    super(props.message);
    this.statusCode = props.statusCode;
  }
}

const badRequest = (message) => (
  new FomError({
    message,
    statusCode: 400,
  })
);

const unauthorized = (message) => (
  new FomError({
    message: 'The requested resource requires authorization',
    statusCode: 401,
  })
);

const forbidden = () => (
  new FomError({
    message: 'Not authorized for the requested resource',
    statusCode: 403,
  })
);

const notFound = () => (
  new FomError({
    message: 'The requested resouce was not found',
    statusCode: 404,
  })
);

const serverError = () => (
  new FomError({
    message: 'There was a server error, please try again',
    statusCode: 500,
  })
)

const stripeError = (error) => badRequest(error);

module.exports = {
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  stripeError,
};
