"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265,281,545];
exports.modules = {

/***/ 5468:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3677);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1838);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5030);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withAdmin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6398);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_withAdmin__WEBPACK_IMPORTED_MODULE_9__, _helpers_auth__WEBPACK_IMPORTED_MODULE_10__, _components_Layout__WEBPACK_IMPORTED_MODULE_2__]);
([_withAdmin__WEBPACK_IMPORTED_MODULE_9__, _helpers_auth__WEBPACK_IMPORTED_MODULE_10__, _components_Layout__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const Links = ({ token , links , totalLinks , linksLimit , linkSkip  })=>{
    const { 0: allLinks , 1: setAllLinks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(links);
    const { 0: limit , 1: setLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(linksLimit);
    const { 0: skip , 1: setSkip  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(totalLinks);
    const confirmDelete = (e, id)=>{
        e.preventDefault();
        // console.log('delete > ', slug);
        let answer = window.confirm("Are you sure you want to delete?");
        if (answer) {
            handleDelete(id);
        }
    };
    const handleDelete = async (id)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_4___default()["delete"](`${_config__WEBPACK_IMPORTED_MODULE_7__/* .API */ .bl}/link/admin/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("LINK DELETE SUCCESS ", response);
             false && 0;
        } catch (error) {
            console.log("LINK DELETE ", error);
        }
    };
    const listOfLinks = ()=>allLinks.map((l, i1)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row alert alert-primary p-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-8",
                        onClick: (e)=>handleClick(l._id)
                        ,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: l.url,
                            target: "_blank",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "pt-2",
                                    children: l.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "pt-2 text-danger",
                                    style: {
                                        fontSize: "12px"
                                    },
                                    children: l.url
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-4 pt-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "pull-right",
                                children: [
                                    moment__WEBPACK_IMPORTED_MODULE_6___default()(l.createdAt).fromNow(),
                                    " by ",
                                    l.postedBy.name
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "badge text-secondary pull-right",
                                children: [
                                    l.clicks,
                                    " clicks"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "badge text-dark",
                                children: [
                                    l.type,
                                    " / ",
                                    l.medium
                                ]
                            }),
                            l.categories.map((c, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "badge text-success",
                                    children: c.name
                                }, i)
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: (e)=>confirmDelete(e, l._id)
                                ,
                                className: "badge text-danger pull-right",
                                children: "Delete"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                href: `/user/link/${l._id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "badge text-warning pull-right",
                                        children: "Update"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }, i1)
        )
    ;
    const loadMore = async ()=>{
        let toSkip = skip + limit;
        const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${_config__WEBPACK_IMPORTED_MODULE_7__/* .API */ .bl}/links`, {
            skip: toSkip,
            limit
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setAllLinks([
            ...allLinks,
            ...response.data
        ]);
        // console.log('allLinks', allLinks);
        // console.log('response.data.links.length', response.data.links.length);
        setSize(response.data.length);
        setSkip(toSkip);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-md-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "display-4 font-weight-bold",
                        children: "All Links"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_8___default()), {
                pageStart: 0,
                loadMore: loadMore,
                hasMore: size > 0 && size >= limit,
                loader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/static/images/loading.gif",
                    alt: "loading"
                }, 0),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-12",
                        children: listOfLinks()
                    })
                })
            })
        ]
    }));
};
Links.getInitialProps = async ({ req  })=>{
    let skip = 0;
    let limit = 2;
    const token = (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_10__/* .getCookie */ .ej)("token", req);
    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${_config__WEBPACK_IMPORTED_MODULE_7__/* .API */ .bl}/links`, {
        skip,
        limit
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return {
        links: response.data,
        totalLinks: response.data.length,
        linksLimit: limit,
        linkSkip: skip,
        token
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withAdmin__WEBPACK_IMPORTED_MODULE_9__["default"])(Links));

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ 5030:
/***/ ((module) => {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ 3677:
/***/ ((module) => {

module.exports = require("react-render-html");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,212,789,398], () => (__webpack_exec__(5468)));
module.exports = __webpack_exports__;

})();