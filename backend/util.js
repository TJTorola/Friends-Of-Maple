const endpoint = (func) => (event, context, callback) => {
  let called = false;
  const respond = (resBody) => {
    called = true;
    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify(resBody),
    });
  };

  const fail = (error) => {
    callback(null, {
      statusCode: error.statusCode,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: error.message,
    });
  }

  const payload = {
    params: event.pathParameters,
    body: JSON.parse(event.body),
  };

  try {
    func(payload, respond, fail);
  } catch (e) {
    fail(e);
  }
};

module.exports = {
  endpoint,
};
