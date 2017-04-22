const endpoint = (func) => (event, context, callback) => {
  let called = false;
  const respond = (resBody) => {
    called = true;
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(resBody),
    });
  };

  const fail = (error) => {
    callback(null, {
      statusCode: error.statusCode,
      body: error.message,
    });
  }

  const payload = {
    params: event.pathParameters,
    body: JSON.parse(event.body),
  };

  try {
    func(payload, respond);
  } catch (e) {
    fail(e);
  }
};

module.exports = {
  endpoint,
};
