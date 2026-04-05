"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdevour_clone"] = self["webpackChunkdevour_clone"] || []).push([["src_components_Notifications_Notifications_js"],{

/***/ "./src/components/Notifications/Notifications.js"
/*!*******************************************************!*\
  !*** ./src/components/Notifications/Notifications.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Notifications_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.module.css */ \"./src/components/Notifications/Notifications.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n// notifications arrive from server push events\n// the button must 'know' of updates so they will be set via context\n\nfunction Notifications(_ref) {\n  var _context$notification;\n  var closeNotifications = _ref.closeNotifications;\n  var context = {\n    notifications: [1, 2, 3]\n  };\n\n  // use bottomsheet\n  // .notifications class is the overlay, and contains the bottomsheet\n  // \n\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: _Notifications_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notifications\n  }, /*#__PURE__*/React.createElement(\"section\", null, /*#__PURE__*/React.createElement(\"div\", null), /*#__PURE__*/React.createElement(\"ul\", null, (_context$notification = context.notifications) === null || _context$notification === void 0 ? void 0 : _context$notification.map(function (notification) {\n    return /*#__PURE__*/React.createElement(\"li\", null, notification);\n  }))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);\n\n//# sourceURL=webpack://devour-clone/./src/components/Notifications/Notifications.js?\n}");

/***/ },

/***/ "./src/components/Notifications/Notifications.module.css"
/*!***************************************************************!*\
  !*** ./src/components/Notifications/Notifications.module.css ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"notifications\":\"EW8UjTxcaJyjDU58ZAQw\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Notifications/Notifications.module.css?\n}");

/***/ }

}]);