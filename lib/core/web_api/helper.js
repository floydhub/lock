'use strict';

exports.__esModule = true;
exports.normalizeError = normalizeError;
exports.loginCallback = loginCallback;
exports.normalizeAuthParams = normalizeAuthParams;
exports.webAuthOverrides = webAuthOverrides;

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

function normalizeError(error) {
  if (!error) {
    return error;
  }

  // TODO: clean this mess, the first checks are for social/popup,
  // then we have some stuff for passwordless and the latter is for
  // db.

  // TODO: the following checks were copied from https://github.com/auth0/lock/blob/0a5abf1957c9bb746b0710b274d0feed9b399958/index.js#L1263-L1288
  // Some of the checks are missing because I couldn't reproduce them and I'm
  // affraid they'll break existent functionality if add them.
  // We need a better errror handling story in auth0.js.

  if (error.status === 'User closed the popup window') {
    // {
    //   status: "User closed the popup window",
    //   name: undefined,
    //   code: undefined,
    //   details: {
    //     description: "server error",
    //     code: undefined
    //   }
    // }
    return {
      code: 'lock.popup_closed',
      error: 'lock.popup_closed',
      description: 'Popup window closed.'
    };
  }

  if (error.code === 'unauthorized') {
    // Custom rule error
    //
    // {
    //   "code": "unauthorized",
    //   "details": {
    //     "code": "unauthorized",
    //     "error_description": "user is blocked",
    //     "error": "unauthorized"
    //   },
    //   "name": "unauthorized",
    //   "status": 401
    // }

    // Default "user is blocked" rule error
    //
    // {
    //   "code": "unauthorized",
    //   "details": {
    //     "code": "unauthorized",
    //     "error_description": "user is blocked",
    //     "error": "unauthorized"
    //   },
    //   "name": "unauthorized",
    //   "status": 401
    // }

    // Social cancel permissions.
    //
    // {
    //   code: "unauthorized",
    //   details: {
    //     code: "unauthorized"
    //     error: "unauthorized"
    //     error_description: "access_denied"
    //   },
    //   name: "unauthorized"
    //   status: 401
    // }

    // Social cancel permissions or unknown error
    if (!error.description || error.description === 'access_denied') {
      return {
        code: 'lock.unauthorized',
        error: 'lock.unauthorized',
        description: error.description || 'Permissions were not granted.'
      };
    }

    // Special case for custom rule error
    if (error.description === 'user is blocked') {
      return {
        code: 'blocked_user',
        error: 'blocked_user',
        description: error.description
      };
    }

    // Custom Rule error
    return {
      code: 'rule_error',
      error: 'rule_error',
      description: error.description
    };
  }

  var result = {
    error: error.code ? error.code : error.statusCode || error.error,
    description: error.description || error.code
  };

  // result is used for passwordless and error for database.
  return result.error === undefined && result.description === undefined ? error : result;
}

function loginCallback(redirect, cb) {
  return redirect
    ? function(error) {
        return cb(normalizeError(error));
      }
    : function(error, result) {
        return cb(normalizeError(error), result);
      };
}

function normalizeAuthParams(_ref) {
  var popup = _ref.popup,
    popupOptions = _ref.popupOptions,
    authParams = _objectWithoutProperties(_ref, ['popup', 'popupOptions']);

  return authParams;
}

function webAuthOverrides() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    __tenant = _ref2.__tenant,
    __token_issuer = _ref2.__token_issuer;

  if (__tenant || __token_issuer) {
    return {
      __tenant: __tenant,
      __token_issuer: __token_issuer
    };
  }

  return null;
}
