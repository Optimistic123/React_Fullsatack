"use strict";
(() => {
var exports = {};
exports.id = 962;
exports.ids = [962,281,545];
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

/***/ 9636:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _withUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4376);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5085);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1838);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_withUser__WEBPACK_IMPORTED_MODULE_4__, _components_Layout__WEBPACK_IMPORTED_MODULE_2__, _helpers_auth__WEBPACK_IMPORTED_MODULE_5__]);
([_withUser__WEBPACK_IMPORTED_MODULE_4__, _components_Layout__WEBPACK_IMPORTED_MODULE_2__, _helpers_auth__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// imports







const Update = ({ oldLink , token  })=>{
    // state
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: oldLink.title,
        url: oldLink.url,
        categories: oldLink.categories,
        loadedCategories: [],
        success: '',
        error: '',
        type: oldLink.type,
        medium: oldLink.medium
    });
    const { title , url , categories , loadedCategories , success , error: error1 , type , medium  } = state;
    // load categories when component mounts using useEffect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCategories();
    }, [
        success
    ]);
    const loadCategories = async ()=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__/* .API */ .bl}/categories`);
        setState({
            ...state,
            loadedCategories: response.data
        });
    };
    const handleTitleChange = (e)=>{
        setState({
            ...state,
            title: e.target.value,
            error: '',
            success: ''
        });
    };
    const handleURLChange = (e)=>{
        setState({
            ...state,
            url: e.target.value,
            error: '',
            success: ''
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.table({ title, url, categories, type, medium });
        // use update link based on logged in user role
        let dynamicUpdateUrl;
        if ((0,_helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)() && (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)().role === 'admin') {
            dynamicUpdateUrl = `${_config__WEBPACK_IMPORTED_MODULE_6__/* .API */ .bl}/link/admin/${oldLink._id}`;
        } else {
            dynamicUpdateUrl = `${_config__WEBPACK_IMPORTED_MODULE_6__/* .API */ .bl}/link/${oldLink._id}`;
        }
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().put(dynamicUpdateUrl, {
                title,
                url,
                categories,
                type,
                medium
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setState({
                ...state,
                success: 'Link is updated'
            });
        } catch (error) {
            console.log('LINK SUBMIT ERROR', error);
            setState({
                ...state,
                error: error.response.data.error
            });
        }
    };
    const handleTypeClick = (e)=>{
        setState({
            ...state,
            type: e.target.value,
            success: '',
            error: ''
        });
    };
    const handleMediumClick = (e)=>{
        setState({
            ...state,
            medium: e.target.value,
            success: '',
            error: ''
        });
    };
    const showMedium = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-check ml-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "form-check-label",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                onClick: handleMediumClick,
                                checked: medium === 'video',
                                value: "video",
                                className: "from-check-input",
                                name: "medium"
                            }),
                            ' ',
                            "Video"
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-check ml-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "form-check-label",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                onClick: handleMediumClick,
                                checked: medium === 'book',
                                value: "book",
                                className: "from-check-input",
                                name: "medium"
                            }),
                            ' ',
                            "Book"
                        ]
                    })
                })
            ]
        })
    ;
    const showTypes = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-check ml-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "form-check-label",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                onClick: handleTypeClick,
                                checked: type === 'free',
                                value: "free",
                                className: "from-check-input",
                                name: "type"
                            }),
                            ' ',
                            "Free"
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-check ml-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "form-check-label",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                onClick: handleTypeClick,
                                checked: type === 'paid',
                                value: "paid",
                                className: "from-check-input",
                                name: "type"
                            }),
                            ' ',
                            "Paid"
                        ]
                    })
                })
            ]
        })
    ;
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
                        checked: categories.includes(c._id),
                        onChange: handleToggle(c._id),
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
    // link create form
    const submitLinkForm = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-muted",
                            children: "Title"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: "form-control",
                            onChange: handleTitleChange,
                            value: title
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-muted",
                            children: "URL"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "url",
                            className: "form-control",
                            onChange: handleURLChange,
                            value: url
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        disabled: !token,
                        className: "btn btn-outline-warning",
                        type: "submit",
                        children: (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)() || token ? 'Update' : 'Login to update'
                    })
                })
            ]
        })
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-md-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Update Link/URL"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-4",
                        children: [
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-muted ml-4",
                                        children: "Type"
                                    }),
                                    showTypes()
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-muted ml-4",
                                        children: "Medium"
                                    }),
                                    showMedium()
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-8",
                        children: [
                            success && (0,_helpers_alerts__WEBPACK_IMPORTED_MODULE_7__/* .showSuccessMessage */ .r)(success),
                            error1 && (0,_helpers_alerts__WEBPACK_IMPORTED_MODULE_7__/* .showErrorMessage */ .U)(error1),
                            submitLinkForm()
                        ]
                    })
                ]
            })
        ]
    }));
};
Update.getInitialProps = async ({ req , token , query  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__/* .API */ .bl}/link/${query.id}`);
    return {
        oldLink: response.data,
        token
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withUser__WEBPACK_IMPORTED_MODULE_4__["default"])(Update));

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,212,789,376], () => (__webpack_exec__(9636)));
module.exports = __webpack_exports__;

})();