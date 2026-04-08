"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdevour_clone"] = self["webpackChunkdevour_clone"] || []).push([["src_components_Profile_Profile_js"],{

/***/ "./src/components/Profile/Profile.js"
/*!*******************************************!*\
  !*** ./src/components/Profile/Profile.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.module.css */ \"./src/components/Profile/Profile.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Profile(_ref) {\n  var closeProfile = _ref.closeProfile;\n  var sentinelStartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var sentinelEndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  // use sentinel focus trap pattern\n  // use useEffect to load initial focus on load, (header or close btn)\n\n  var focusLast = function focusLast(event) {};\n  var focusFirst = function focusFirst(event) {};\n  var handleClose = function handleClose(event) {\n    closeProfile();\n  };\n  var handleFollow = function handleFollow(event) {};\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: _Profile_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].profile,\n    role: \"dialog\",\n    \"aria-modal\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sentinel\",\n    ref: sentinelStartRef,\n    onFocus: focusLast,\n    tabIndex: \"0\"\n  }), /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(\"button\", {\n    onClick: handleClose,\n    type: \"button\"\n  }, \"Close button\"), /*#__PURE__*/React.createElement(\"img\", {\n    src: \"\",\n    alt: \"\"\n  }), /*#__PURE__*/React.createElement(\"h1\", null, \"Username\"), /*#__PURE__*/React.createElement(\"address\", null, \"Location\"), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: handleFollow,\n    type: \"button\"\n  }, \"Follow\")), /*#__PURE__*/React.createElement(\"div\", null), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sentinel\",\n    ref: sentinelEndRef,\n    onFocus: focusFirst,\n    tabIndex: \"0\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.js?\n}");

/***/ },

/***/ "./src/components/Profile/Profile.module.css"
/*!***************************************************!*\
  !*** ./src/components/Profile/Profile.module.css ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"profile\":\"bRXXEOH49SRQPlqWmeUf\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.module.css?\n}");

/***/ }

}]);