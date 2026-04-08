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

/***/ "./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js"
/*!*************************************************************!*\
  !*** ./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ArrowLeftIcon = function ArrowLeftIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 448 512\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"arrow left icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowLeftIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js?\n}");

/***/ },

/***/ "./src/components/Profile/CloseProfileButton/CloseProfileButton.js"
/*!*************************************************************************!*\
  !*** ./src/components/Profile/CloseProfileButton/CloseProfileButton.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Icons/ArrowLeftIcon/ArrowLeftIcon */ \"./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js\");\n/* harmony import */ var _CloseProfileButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseProfileButton.module.css */ \"./src/components/Profile/CloseProfileButton/CloseProfileButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction CloseProfileButton(_ref) {\n  var name = _ref.name,\n    closeButtonRef = _ref.closeButtonRef,\n    close = _ref.close;\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _CloseProfileButton_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeProfileButton,\n    ref: closeButtonRef,\n    onClick: close,\n    type: \"button\",\n    \"aria-label\": \"close \".concat(name)\n  }, /*#__PURE__*/React.createElement(_Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseProfileButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/CloseProfileButton/CloseProfileButton.js?\n}");

/***/ },

/***/ "./src/components/Profile/Profile.js"
/*!*******************************************!*\
  !*** ./src/components/Profile/Profile.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CloseProfileButton_CloseProfileButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseProfileButton/CloseProfileButton */ \"./src/components/Profile/CloseProfileButton/CloseProfileButton.js\");\n/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.module.css */ \"./src/components/Profile/Profile.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nfunction Profile(_ref) {\n  var closeProfile = _ref.closeProfile;\n  var sentinelStartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var sentinelEndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var closeButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  // use sentinel focus trap pattern\n  // use useEffect to load initial focus on load, (header or close btn)\n\n  var focusLast = function focusLast(event) {};\n  var focusFirst = function focusFirst(event) {};\n  var handleFollow = function handleFollow(event) {};\n  var handleUnFollow = function handleUnFollow(event) {};\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var _closeButtonRef$curre;\n    (_closeButtonRef$curre = closeButtonRef.current) === null || _closeButtonRef$curre === void 0 || _closeButtonRef$curre.focus();\n  }, []);\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: _Profile_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].profile,\n    role: \"dialog\",\n    \"aria-modal\": \"true\",\n    \"aria-labelledby\": \"profile-username\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sentinel\",\n    ref: sentinelStartRef,\n    onFocus: focusLast,\n    tabIndex: \"0\",\n    \"aria-hidden\": \"true\"\n  }), /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(_CloseProfileButton_CloseProfileButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: \"profile\",\n    closeButtonRef: closeButtonRef,\n    close: closeProfile\n  }), /*#__PURE__*/React.createElement(\"figure\", null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"\",\n    alt: \"{''}'s profile\"\n  })), /*#__PURE__*/React.createElement(\"h1\", {\n    id: \"profile-username\"\n  }, \"Username\")), /*#__PURE__*/React.createElement(\"address\", null, \"Location\"), /*#__PURE__*/React.createElement(\"ul\", {\n    role: \"list\",\n    className: _Profile_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].statsList\n  }, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"600\"), \" Following\"), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"50\"), \" Followers\")), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: handleFollow,\n    type: \"button\"\n  }, \"+ Follow\"), /*#__PURE__*/React.createElement(\"div\", {\n    role: \"feed\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"sentinel\",\n    ref: sentinelEndRef,\n    onFocus: focusFirst,\n    tabIndex: \"0\",\n    \"aria-hidden\": \"true\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.js?\n}");

/***/ },

/***/ "./src/components/Profile/CloseProfileButton/CloseProfileButton.module.css"
/*!*********************************************************************************!*\
  !*** ./src/components/Profile/CloseProfileButton/CloseProfileButton.module.css ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"closeSearchButton\":\"z64vZcYbYKY5hmvEe6wd\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/CloseProfileButton/CloseProfileButton.module.css?\n}");

/***/ },

/***/ "./src/components/Profile/Profile.module.css"
/*!***************************************************!*\
  !*** ./src/components/Profile/Profile.module.css ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"profile\":\"bRXXEOH49SRQPlqWmeUf\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.module.css?\n}");

/***/ }

}]);