var test = require('tape')
var xauth = require('./')

test('username', function (t) {
  t.plan(1)
  t.equal(xauth('clemens')['X-Auth-CouchDB-UserName'], 'clemens')
})

test('roles', function (t) {
  t.plan(2)
  var h = xauth('clemens', 'user', 'foo')
  t.equal(h['X-Auth-CouchDB-Roles'], 'user')

  h = xauth('clemens', ['user', 'boss'], 'foo')
  t.equal(h['X-Auth-CouchDB-Roles'], 'user,boss')
})

test('token', function (t) {
  t.plan(1)
  t.notEqual(xauth('clemens', 'user', 'foo')['X-Auth-CouchDB-Token'], 'foo')
})
