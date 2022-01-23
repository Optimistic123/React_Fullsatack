"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bl": () => (/* binding */ API),
/* harmony export */   "iC": () => (/* binding */ APP_NAME)
/* harmony export */ });
/* unused harmony exports DOMAIN, PRODUCTION, FB_APP_ID */
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const API = publicRuntimeConfig.API;
const APP_NAME = publicRuntimeConfig.APP_NAME;
const DOMAIN = publicRuntimeConfig.DOMAIN;
const PRODUCTION = publicRuntimeConfig.PRODUCTION;
const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;


/***/ }),

/***/ 5085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "YR": () => (/* binding */ authenticate),
/* harmony export */   "$D": () => (/* binding */ isAuth),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "Nq": () => (/* binding */ updateUser)
/* harmony export */ });
/* unused harmony exports setCookie, removeCookie, getCookieFromBrowser, getCookieFromServer, setLocalStorage, removeLocalStorage */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// set in cookie
const setCookie = (key, value)=>{
    if (false) {}
};
// remove from cookie
const removeCookie = (key)=>{
    if (false) {}
};
// get from cookie such as stored token
// will be useful when we need to make request to server with auth token
const getCookie = (key, req)=>{
    // if (process.browser) {
    //     return cookie.get(key);
    // }
    return  false ? 0 : getCookieFromServer(key, req);
};
const getCookieFromBrowser = (key)=>{
    return cookie.get(key);
};
const getCookieFromServer = (key, req)=>{
    if (!req.headers.cookie) {
        return undefined;
    }
    // console.log('req.headers.cookie', req.headers.cookie);
    let token = req.headers.cookie.split(';').find((c)=>c.trim().startsWith(`${key}=`)
    );
    if (!token) {
        return undefined;
    }
    let tokenValue = token.split('=')[1];
    // console.log('getCookieFromServer', tokenValue);
    return tokenValue;
};
// set in localstoarge
const setLocalStorage = (key, value)=>{
    if (false) {}
};
// remove from localstorage
const removeLocalStorage = (key)=>{
    if (false) {}
};
// authenticate user by passing data to cookie and localstorage during signin
const authenticate = (response, next)=>{
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.user);
    next();
};
// access user info from localstorage
const isAuth = ()=>{
    if (false) {}
};
const logout = ()=>{
    removeCookie('token');
    removeLocalStorage('user');
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
};
const updateUser = (user, next)=>{
    if (false) {}
};

});

/***/ })

};
;