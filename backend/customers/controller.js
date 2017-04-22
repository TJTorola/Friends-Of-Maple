'use strict';
const { endpoint } = require('../util.js');

const index = (payload, respond) => {
  respond('index');
};

const create = (payload, respond) => {
  respond('create');
};

const show = (payload, respond) => {
  respond('show');
};

const update = (payload, respond) => {
  respond('update');
};

const destroy = (payload, respond) => {
  respond('destroy');
};

module.exports = {
  index: endpoint(index),
  create: endpoint(create),
  show: endpoint(show),
  update: endpoint(update),
  destroy: endpoint(destroy),
};
