'use strict';
const test = require('tape');
const mocks = require('./');

test('rules', (t) => {

  t.plan(2);

  t.ok(mocks.data);
  t.ok(mocks.routes);

});
