"use strict";
(() => {
var exports = {};
exports.id = 880;
exports.ids = [880,281,545];
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

/***/ 8739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1398);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1838);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2933);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5789);
/* harmony import */ var _withAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6398);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_withAdmin__WEBPACK_IMPORTED_MODULE_8__, _components_Layout__WEBPACK_IMPORTED_MODULE_7__]);
([_withAdmin__WEBPACK_IMPORTED_MODULE_8__, _components_Layout__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const ReactQuill = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "admin\\category\\create.js -> " + "react-quill"
        ]
    },
    ssr: false
});
const Create = ({ user , token  })=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: '',
        error: '',
        success: '',
        buttonText: 'Create',
        image: ''
    });
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: imageUploadButtonName , 1: setImageUploadButtonName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Upload image');
    const { name: name1 , success , error: error1 , image , buttonText , imageUploadText  } = state;
    const handleChange = (name)=>(e)=>{
            setState({
                ...state,
                [name]: e.target.value,
                error: '',
                success: ''
            });
        }
    ;
    const handleContent = (e)=>{
        console.log(e);
        setContent(e);
        setState({
            ...state,
            success: '',
            error: ''
        });
    };
    const handleImage = (event)=>{
        let fileInput = false;
        if (event.target.files[0]) {
            fileInput = true;
        }
        setImageUploadButtonName(event.target.files[0].name);
        if (fileInput) {
            react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4___default().imageFileResizer(event.target.files[0], 300, 300, 'JPEG', 100, 0, (uri)=>{
                // console.log(uri);
                setState({
                    ...state,
                    image: uri,
                    success: '',
                    error: ''
                });
            }, 'base64');
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setState({
            ...state,
            buttonText: 'Creating'
        });
        console.table({
            name: name1,
            content,
            image
        });
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${_config__WEBPACK_IMPORTED_MODULE_5__/* .API */ .bl}/category`, {
                name: name1,
                content,
                image
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('CATEGORY CREATE RESPONSE', response);
            setImageUploadButtonName('Upload image');
            setContent('');
            setState({
                ...state,
                name: '',
                formData: '',
                buttonText: 'Created',
                imageUploadText: 'Upload image',
                success: `${response.data.name} is created`
            });
        } catch (error) {
            console.log('CATEGORY CREATE ERROR', error);
            setState({
                ...state,
                buttonText: 'Create',
                error: error.response.data.error
            });
        }
    };
    const createCategoryForm = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-muted",
                            children: "Name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleChange('name'),
                            value: name1,
                            type: "text",
                            className: "form-control",
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-muted",
                            children: "Content"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactQuill, {
                            value: content,
                            onChange: handleContent,
                            placeholder: "Write something...",
                            theme: "bubble",
                            className: "pb-5 mb-3",
                            style: {
                                border: '1px solid #666'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "btn btn-outline-secondary",
                        children: [
                            imageUploadButtonName,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: handleImage,
                                type: "file",
                                accept: "image/*",
                                className: "form-control",
                                hidden: true
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-outline-warning",
                        children: buttonText
                    })
                })
            ]
        })
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-6 offset-md-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Create category"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    success && (0,_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__/* .showSuccessMessage */ .r)(success),
                    error1 && (0,_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__/* .showErrorMessage */ .U)(error1),
                    createCategoryForm()
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withAdmin__WEBPACK_IMPORTED_MODULE_8__["default"])(Create));

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 1398:
/***/ ((module) => {

module.exports = require("react-image-file-resizer");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,152,212,789,398], () => (__webpack_exec__(8739)));
module.exports = __webpack_exports__;

})();