module.exports = {
  local: {
    stage: 'local',
    stripePublicKey: 'pk_test_GN90r711KTFh1bh7ThHX0wvP',
    lambdaEndpoint: 'http://localhost:3000',
  },
  dev: {
    stage: 'dev',
    stripePublicKey: 'pk_test_GN90r711KTFh1bh7ThHX0wvP',
    lambdaEndpoint: 'https://vgi5mhxvwd.execute-api.us-east-1.amazonaws.com/dev',
  },
  prod: {
    stage: 'prod',
    stripePublicKey: 'pk_live_OYk2RBxODRhMEIuayaKLkGGz',
    lambdaEndpoint: 'http://localhost:3000',
  },
}
