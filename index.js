var crypto = require('crypto')

module.exports = xauthHeaders

/**
 * Creates CouchDB Proxy Authentication Headers
 *
 * http://docs.couchdb.org/en/latest/api/server/authn.html#proxy-authentication
 *
 * @example
 *   {
 *     'X-Auth-CouchDB-UserName': 'klaemo'
 *     'X-Auth-CouchDB-Token': '0xde7c9b8bbaab8a73f090cd4d9',
 *     'X-Auth-CouchDB-Roles': 'user,admin'
 *   }
 * 
 * @param  {string}         user   Username
 * @param  {array|string}   roles  The user's roles
 * @param  {string}         secret Secret (_config/couch_httpd_auth/secret, optional)
 * @return {object}                Headers
 */
function xauthHeaders (user, roles, secret) {
  var headers = {
    'X-Auth-CouchDB-UserName': user
  }

  if (secret) {
    // HMAC-SHA1(secret, user)
    var token = crypto.createHmac('sha1', secret).update(user).digest('hex')
    headers['X-Auth-CouchDB-Token'] = token
  }

  if (roles) {
    headers['X-Auth-CouchDB-Roles'] = Array.isArray(roles) ? roles.join(',') : roles
  }

  return headers
}
