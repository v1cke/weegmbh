"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio-details/[id]",{

/***/ "./src/components/extra-page/portfolio-details/index.jsx":
/*!***************************************************************!*\
  !*** ./src/components/extra-page/portfolio-details/index.jsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/common/breadcrumb/breadcrumb */ \"./src/components/common/breadcrumb/breadcrumb.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portfolio_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio-details */ \"./src/components/extra-page/portfolio-details/portfolio-details.jsx\");\n\n\n\n\nconst index = (param)=>{\n    let { item  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderOne, {\n                headerClass: \"header__two menu-sticky header__transparent\"\n            }, void 0, false, {\n                fileName: \"/Users/viktor.gruenwald/work/wee-gmbh/src/components/extra-page/portfolio-details/index.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Fahrzeugbeschreibung\",\n                subTitle: \"Fahrzeugbeschreibung\"\n            }, void 0, false, {\n                fileName: \"/Users/viktor.gruenwald/work/wee-gmbh/src/components/extra-page/portfolio-details/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portfolio_details__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: item\n            }, void 0, false, {\n                fileName: \"/Users/viktor.gruenwald/work/wee-gmbh/src/components/extra-page/portfolio-details/index.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/viktor.gruenwald/work/wee-gmbh/src/components/extra-page/portfolio-details/index.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9leHRyYS1wYWdlL3BvcnRmb2xpby1kZXRhaWxzL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBa0U7QUFDeEM7QUFDeUI7QUFHbkQsTUFBTUcsUUFBUSxTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFO0lBQ25CLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDO2dCQUFVQyxhQUFhOzs7Ozs7MEJBQ3hCLDhEQUFDUCxnRkFBVUE7Z0JBQUNRLE9BQU87Z0JBQXdCQyxVQUFVOzs7Ozs7MEJBQ3JELDhEQUFDUCwwREFBZ0JBO2dCQUFDRSxNQUFNQTs7Ozs7Ozs7Ozs7O0FBR3BDO0FBRUEsK0RBQWVELEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZXh0cmEtcGFnZS9wb3J0Zm9saW8tZGV0YWlscy9pbmRleC5qc3g/YjQzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJlYWRjcnVtYiBmcm9tICdAY29tcG9uZW50cy9jb21tb24vYnJlYWRjcnVtYi9icmVhZGNydW1iJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBvcnRmb2xpb0RldGFpbHMgZnJvbSAnLi9wb3J0Zm9saW8tZGV0YWlscyc7XHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoeyBpdGVtIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxIZWFkZXJPbmUgaGVhZGVyQ2xhc3M9eydoZWFkZXJfX3R3byBtZW51LXN0aWNreSBoZWFkZXJfX3RyYW5zcGFyZW50J30gLz5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9eydGYWhyemV1Z2Jlc2NocmVpYnVuZyd9IHN1YlRpdGxlPXsnRmFocnpldWdiZXNjaHJlaWJ1bmcnfSAvPlxyXG4gICAgICAgICAgICA8UG9ydGZvbGlvRGV0YWlscyBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiQnJlYWRjcnVtYiIsIlJlYWN0IiwiUG9ydGZvbGlvRGV0YWlscyIsImluZGV4IiwiaXRlbSIsIm1haW4iLCJIZWFkZXJPbmUiLCJoZWFkZXJDbGFzcyIsInRpdGxlIiwic3ViVGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/extra-page/portfolio-details/index.jsx\n"));

/***/ })

});