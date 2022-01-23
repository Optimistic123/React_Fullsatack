"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646,281,545];
exports.modules = {

/***/ 2933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ showSuccessMessage),
/* harmony export */   "U": () => (/* binding */ showErrorMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const showSuccessMessage = (success)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "alert alert-success",
        children: success
    })
;
const showErrorMessage = (error)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "alert alert-danger",
        children: error
    })
;


/***/ }),

/***/ 673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5789);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2933);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1838);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5085);
/* harmony import */ var _withUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4376);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_withUser__WEBPACK_IMPORTED_MODULE_8__, _components_Layout__WEBPACK_IMPORTED_MODULE_2__, _helpers_auth__WEBPACK_IMPORTED_MODULE_7__]);
([_withUser__WEBPACK_IMPORTED_MODULE_8__, _components_Layout__WEBPACK_IMPORTED_MODULE_2__, _helpers_auth__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const Profile = ({ user , token  })=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: user.name,
        email: user.email,
        password: '',
        error: '',
        success: '',
        buttonText: 'Update',
        loadedCategories: [],
        categories: user.categories
    });
    const { name: name1 , email , password , error: error1 , success , buttonText , loadedCategories , categories  } = state;
    // load categories when component mounts using useEffect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCategories();
    }, []);
    const loadCategories = async ()=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__/* .API */ .bl}/categories`);
        setState({
            ...state,
            loadedCategories: response.data
        });
    };
    const handleToggle = (c)=>()=>{
            // return the first index or -1
            const clickedCategory = categories.indexOf(c);
            const all = [
                ...categories
            ];
            if (clickedCategory === -1) {
                all.push(c);
            } else {
                all.splice(clickedCategory, 1);
            }
            console.log('all >> categories', all);
            setState({
                ...state,
                categories: all,
                success: '',
                error: ''
            });
        }
    ;
    // show categories > checkbox
    const showCategories = ()=>{
        return loadedCategories && loadedCategories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "list-unstyled",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "checkbox",
                        onChange: handleToggle(c._id),
                        checked: categories.includes(c._id),
                        className: "mr-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "form-check-label",
                        children: c.name
                    })
                ]
            }, c._id)
        );
    };
    const handleChange = (name)=>(e)=>{
            setState({
                ...state,
                [name]: e.target.value,
                error: '',
                success: '',
                buttonText: 'Update'
            });
        }
    ;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setState({
            ...state,
            buttonText: 'Updating...'
        });
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().put(`${_config__WEBPACK_IMPORTED_MODULE_6__/* .API */ .bl}/user`, {
                name: name1,
                password,
                categories
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_7__/* .updateUser */ .Nq)(response.data, ()=>{
                setState({
                    ...state,
                    buttonText: 'Updated',
                    success: 'Profile updated successfully'
                });
            });
        } catch (error) {
            console.log(error);
            setState({
                ...state,
                buttonText: 'Update',
                error: error.response.data.error
            });
        }
    };
    const updateForm = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: name1,
                        onChange: handleChange('name'),
                        type: "text",
                        className: "form-control",
                        placeholder: "Type your name",
                        required: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: email,
                        onChange: handleChange('email'),
                        type: "email",
                        className: "form-control",
                        placeholder: "Type your email",
                        required: true,
                        disabled: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: password,
                        onChange: handleChange('password'),
                        type: "password",
                        className: "form-control",
                        placeholder: "Type your password"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-muted ml-4",
                            children: "Category"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            style: {
                                maxHeight: '100px',
                                overflowY: 'scroll'
                            },
                            children: showCategories()
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-outline-warning",
                        children: buttonText
                    })
                })
            ]
        })
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-md-6 offset-md-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Update Profile"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                success && (0,_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__/* .showSuccessMessage */ .r)(success),
                error1 && (0,_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__/* .showErrorMessage */ .U)(error1),
                updateForm()
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withUser__WEBPACK_IMPORTED_MODULE_8__["default"])(Profile));

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,212,789,376], () => (__webpack_exec__(673)));
module.exports = __webpack_exports__;

})();