"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 6398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1838);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_auth__WEBPACK_IMPORTED_MODULE_3__]);
_helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const withAdmin = (Page)=>{
    const WithAdminUser = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Page, {
            ...props
        })
    ;
    WithAdminUser.getInitialProps = async (context)=>{
        const token = (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_3__/* .getCookie */ .ej)('token', context.req);
        let user = null;
        let userLinks = [];
        if (token) {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/admin`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                        contentType: 'application/json'
                    }
                });
                user = response.data.user;
                userLinks = response.data.links;
            } catch (error) {
                if (error.response.status === 401) {
                    user = null;
                }
            }
        }
        if (user === null) {
            // redirect
            context.res.writeHead(302, {
                Location: '/'
            });
            context.res.end();
        } else {
            return {
                ...Page.getInitialProps ? await Page.getInitialProps(context) : {},
                user,
                token,
                userLinks
            };
        }
    };
    return WithAdminUser;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAdmin);

});

/***/ })

};
;