## CouchDB Proxy Authentication Headers

Creates CouchDB Proxy Authentication Headers

### Installation

    npm install couch-proxy-auth

### Usage

``` js
var xauth = require('couch-proxy-auth')

var headers = xauth('username', 'role', 'secret')

/*
  {
    'X-Auth-CouchDB-UserName': 'username'
    'X-Auth-CouchDB-Token': '0xde7c9b8bbaab8a73f090cd4d9',
    'X-Auth-CouchDB-Roles': 'role'
  }
*/
```

The token is generated by HMAC-SHA1(secret, username) and represented as Hex.

#### Parameters

`xauth(username, roles, secret)`

- `username` Name of the user in CouchDB
- `roles` Array of (multiple) roles or string for a singe role
- `secret` Optional, but recommended, shared secret (see documentation)

### CouchDB Proxy Authentication

For more information see the [CouchDB Docs](http://docs.couchdb.org/en/latest/api/server/authn.html#proxy-authentication)

### License

MIT