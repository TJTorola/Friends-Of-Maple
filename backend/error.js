/**
 * @typedef {object} FomErrorProps
 * @property {string} message
 * @property {string} statusCode
 */
class FomError extends Error {
  constructor(props) {
    super(props.message);
    this.statusCode = props.statusCode;
    this.field = props.field;
  }
}

const badRequest = ({ message, field }) => (
  new FomError({
    message,
    field,
    statusCode: 400,
  })
);

const unauthorized = (message, hints) => (
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

const stripeError = (error) => {
  // https://stripe.com/docs/api#errors
  switch (error.code) {
    case 'invalid_number':
      return badRequest({
        message: 'Invalid Card Number',
        field: 'cardNumber',
      });

    case 'incorrect_number':
      return badRequest({
        message: 'Incorrect Card Number',
        field: 'cardNumber',
      });

    case 'invalid_expiry_month':
    case 'invalid_expiry_year':
      return badRequest({
        message: 'Invalid Card expiration',
        field: 'expiration',
      });

    case 'invalid_cvc':
      return badRequest({
        message: 'Invalid Card CSV',
        field: 'csv',
      });

    case 'incorrect_cvc':
      return badRequest({
        message: 'Incorrect Card CSV',
        field: 'csv',
      });

    case 'expired_card':
      return badRequest({
        message: 'Expired Card',
        field: 'cardNumber',
      });

    case 'incorrect_zip':
      return badRequest({
        message: 'Incorrect ZipCode',
        field: 'zip',
      });

    case 'card_declined':
      return badRequest({
        message: 'Card Declined',
        field: 'cardNumber',
      });
  }

  return serverError()
};

module.exports = {
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  stripeError,
};
