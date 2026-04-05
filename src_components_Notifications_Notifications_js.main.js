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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Notifications_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.module.css */ \"./src/components/Notifications/Notifications.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n// notifications arrive from server push events\n// the button must 'know' of updates so they will be set via context\n\nfunction Notifications(_ref) {\n  var _context$notification;\n  var closeNotifications = _ref.closeNotifications;\n  var bottomSheetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var dragging = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  var startY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);\n  var currentY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);\n  var context = {\n    notifications: [1, 2, 3]\n  };\n  var handlePointerDown = function handlePointerDown(event) {\n    dragging.current = true;\n    startY.current = event.clientY;\n    bottomSheetRef.current.style.animation = 'none';\n  };\n  var handlePointerMove = function handlePointerMove(event) {\n    if (!dragging.current) {\n      return;\n    }\n    var deltaY = event.clientY - startY.current;\n    if (deltaY > 0) {\n      bottomSheetRef.current.style.transform = \"translateY(\".concat(deltaY, \"px)\");\n    }\n  };\n  var handlePointerUp = function handlePointerUp(event) {\n    if (!dragging.current) {\n      return;\n    }\n    dragging.current = false;\n    var deltaY = event.clientY - startY.current;\n    var bottomSheet = bottomSheetRef.current;\n    if (deltaY > bottomSheet.offsetHeight / 2) {\n      closeNotifications();\n    } else {\n      bottomSheet.style.transform = \"translateY(0)\";\n    }\n  };\n  var handleClose = function handleClose(event) {\n    if (!bottomSheetRef.current.contains(event.target)) {\n      closeNotifications();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: _Notifications_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notifications,\n    onClick: handleClose\n  }, /*#__PURE__*/React.createElement(\"section\", {\n    ref: bottomSheetRef,\n    onPointerDown: handlePointerDown,\n    onPointerMove: handlePointerMove,\n    onPointerUp: handlePointerUp,\n    role: \"dialog\",\n    \"aria-modal\": \"true\",\n    \"aria-label\": \"notifications\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    id: \"grabber\",\n    role: \"presentation\"\n  }), /*#__PURE__*/React.createElement(\"ul\", {\n    role: \"listbox\",\n    \"aria-label\": \"user notifications list\"\n  }, (_context$notification = context.notifications) === null || _context$notification === void 0 ? void 0 : _context$notification.map(function (notification, index) {\n    return /*#__PURE__*/React.createElement(\"li\", {\n      key: index,\n      role: \"option\"\n    }, notification);\n  }))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);\n\n//# sourceURL=webpack://devour-clone/./src/components/Notifications/Notifications.js?\n}");

/***/ },

/***/ "./src/components/Notifications/Notifications.module.css"
/*!***************************************************************!*\
  !*** ./src/components/Notifications/Notifications.module.css ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"notifications\":\"EW8UjTxcaJyjDU58ZAQw\",\"slideUp\":\"U2Lkr9A4lQT7Ejdc_x7r\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Notifications/Notifications.module.css?\n}");

/***/ }

}]);