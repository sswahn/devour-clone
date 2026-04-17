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

/***/ "./src/components/CloseButton/CloseButton.js"
/*!***************************************************!*\
  !*** ./src/components/CloseButton/CloseButton.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/ArrowLeftIcon/ArrowLeftIcon */ \"./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js\");\n/* harmony import */ var _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseButton.module.css */ \"./src/components/CloseButton/CloseButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction CloseButton(_ref) {\n  var overlay = _ref.overlay,\n    close = _ref.close;\n  var action = function action() {\n    close();\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"close \".concat(overlay)\n  }, /*#__PURE__*/React.createElement(_Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/CloseButton/CloseButton.js?\n}");

/***/ },

/***/ "./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js"
/*!*************************************************************!*\
  !*** ./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ArrowLeftIcon = function ArrowLeftIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 448 512\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"arrow left icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowLeftIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/MinusIcon/MinusIcon.js"
/*!*****************************************************!*\
  !*** ./src/components/Icons/MinusIcon/MinusIcon.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction MinusIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 640 640\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"minus icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinusIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/MinusIcon/MinusIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/PlusIcon/PlusIcon.js"
/*!***************************************************!*\
  !*** ./src/components/Icons/PlusIcon/PlusIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction PlusIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 640 640\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"plus icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/PlusIcon/PlusIcon.js?\n}");

/***/ },

/***/ "./src/components/Profile/FollowButton/FollowButton.js"
/*!*************************************************************!*\
  !*** ./src/components/Profile/FollowButton/FollowButton.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons_PlusIcon_PlusIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icons/PlusIcon/PlusIcon */ \"./src/components/Icons/PlusIcon/PlusIcon.js\");\n/* harmony import */ var _Icons_MinusIcon_MinusIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/MinusIcon/MinusIcon */ \"./src/components/Icons/MinusIcon/MinusIcon.js\");\n/* harmony import */ var _FollowButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FollowButton.module.css */ \"./src/components/Profile/FollowButton/FollowButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction FollowButton() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    following = _useState2[0],\n    setFollowing = _useState2[1];\n  var action = function action() {\n    setFollowing(function (prevState) {\n      return !prevState;\n    });\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _FollowButton_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].followButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"{\".concat(following ? 'unfollow' : 'follow'),\n    \"aria-pressed\": following\n  }, following ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Icons_MinusIcon_MinusIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), \" Unfollow\") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Icons_PlusIcon_PlusIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), \" Follow\"));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowButton/FollowButton.js?\n}");

/***/ },

/***/ "./src/components/Profile/FollowStats/FollowStats.js"
/*!***********************************************************!*\
  !*** ./src/components/Profile/FollowStats/FollowStats.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FollowingButton_FollowingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FollowingButton/FollowingButton */ \"./src/components/Profile/FollowStats/FollowingButton/FollowingButton.js\");\n/* harmony import */ var _FollowersButton_FollowersButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FollowersButton/FollowersButton */ \"./src/components/Profile/FollowStats/FollowersButton/FollowersButton.js\");\n/* harmony import */ var _FollowStats_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FollowStats.module.css */ \"./src/components/Profile/FollowStats/FollowStats.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction FollowStats() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(600),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    followingCount = _useState2[0],\n    setFollowingCount = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(50),\n    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n    followersCount = _useState4[0],\n    setFollowersCount = _useState4[1];\n  var liveUpdateFollowing = function liveUpdateFollowing() {\n    var response = followingCount + 1;\n    setFollowingCount(response);\n  };\n  var liveUpdateFollowers = function liveUpdateFollowers() {\n    var response = followersCount + 1;\n    setFollowersCount(response);\n  };\n\n  // get live websocket updates on counts\n\n  return /*#__PURE__*/React.createElement(\"ul\", {\n    className: _FollowStats_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].followStats\n  }, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(_FollowingButton_FollowingButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    username: 'username',\n    count: followingCount\n  })), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(_FollowersButton_FollowersButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    username: 'username',\n    count: followersCount\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowStats);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowStats/FollowStats.js?\n}");

/***/ },

/***/ "./src/components/Profile/FollowStats/FollowersButton/FollowersButton.js"
/*!*******************************************************************************!*\
  !*** ./src/components/Profile/FollowStats/FollowersButton/FollowersButton.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FollowersButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FollowersButton.module.css */ \"./src/components/Profile/FollowStats/FollowersButton/FollowersButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n// consider sharing state with FollowersStats to immediately update followersCount (up or down, follow unfollow)\n\nfunction FollowersButton(_ref) {\n  var username = _ref.username,\n    count = _ref.count;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    viewFollowers = _useState2[0],\n    setViewFollowers = _useState2[1];\n  var action = function action() {\n    setViewFollowers(function (prevState) {\n      return !prevState;\n    });\n    alert('Followers button fired!');\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _FollowersButton_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].followersButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"view users following \".concat(username),\n    \"aria-pressed\": viewFollowers,\n    \"aria-controls\": \"profile-feed\"\n  }, /*#__PURE__*/React.createElement(\"strong\", null, count), \" \", /*#__PURE__*/React.createElement(\"span\", null, \"Followers\"));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowersButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowStats/FollowersButton/FollowersButton.js?\n}");

/***/ },

/***/ "./src/components/Profile/FollowStats/FollowingButton/FollowingButton.js"
/*!*******************************************************************************!*\
  !*** ./src/components/Profile/FollowStats/FollowingButton/FollowingButton.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FollowingButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FollowingButton.module.css */ \"./src/components/Profile/FollowStats/FollowingButton/FollowingButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nfunction FollowingButton(_ref) {\n  var username = _ref.username,\n    count = _ref.count;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    viewFollowing = _useState2[0],\n    setViewFollowing = _useState2[1];\n  var action = function action() {\n    setViewFollowing(function (prevState) {\n      return !prevState;\n    });\n    alert('Following button fired!');\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _FollowingButton_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].followingButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"view users followed by \".concat(username),\n    \"aria-pressed\": viewFollowing,\n    \"aria-controls\": \"profile-feed\"\n  }, /*#__PURE__*/React.createElement(\"strong\", null, count), \" \", /*#__PURE__*/React.createElement(\"span\", null, \"Following\"));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowingButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowStats/FollowingButton/FollowingButton.js?\n}");

/***/ },

/***/ "./src/components/Profile/Profile.js"
/*!*******************************************!*\
  !*** ./src/components/Profile/Profile.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Providers/FocusTrapProvider */ \"./src/components/Providers/FocusTrapProvider.js\");\n/* harmony import */ var _CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CloseButton/CloseButton */ \"./src/components/CloseButton/CloseButton.js\");\n/* harmony import */ var _FollowButton_FollowButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FollowButton/FollowButton */ \"./src/components/Profile/FollowButton/FollowButton.js\");\n/* harmony import */ var _FollowStats_FollowStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FollowStats/FollowStats */ \"./src/components/Profile/FollowStats/FollowStats.js\");\n/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Profile.module.css */ \"./src/components/Profile/Profile.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\nfunction Profile(_ref) {\n  var closeProfile = _ref.closeProfile;\n  var overlayRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__.FocusTrapContext);\n\n  /* \n  const geoRef = useRef(null)\n  const handleLocation = event => {\n    if (event.target.position) {\n      const { latitude, longitude } = event.target.position.coords\n      alert(`Coordinates: ${latitude}, ${longitude}`)\n    } else if (event.target.error) {\n      alert(`Error: ${event.target.error.message}`)\n    }\n  }\n  useEffect(() => {\n    const geo = geoRef.current\n    geo.addEventListener('location', handleLocation)\n    return () => {\n      geo.removeEventListener('location', handleLocation)\n    }\n  }, [])\n  <geolocation ref={geoRef}></geolocation>\n  */\n\n  return /*#__PURE__*/React.createElement(\"section\", {\n    id: \"profile\",\n    className: _Profile_module_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].profile,\n    ref: overlayRef,\n    tabIndex: -1,\n    role: \"dialog\",\n    \"aria-modal\": \"true\",\n    \"aria-labelledby\": \"username\",\n    \"aria-describedby\": \"biography\"\n  }, /*#__PURE__*/React.createElement(\"nav\", null, /*#__PURE__*/React.createElement(_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    overlay: \"profile\",\n    close: closeProfile\n  }), /*#__PURE__*/React.createElement(Dropdown, {\n    items: [{\n      text: 'alert message',\n      method: function method() {\n        return alert('dropdown item clicked.');\n      }\n    }, {\n      text: 'console log message',\n      method: function method() {\n        return console.log('dropdown item clicked.');\n      }\n    }]\n  })), /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"\",\n    alt: \"{''}'s profile picture\"\n  }), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", {\n    id: \"username\"\n  }, \"Username\"), /*#__PURE__*/React.createElement(\"address\", null, \"New York, NY\"), /*#__PURE__*/React.createElement(\"p\", {\n    id: \"biography\"\n  }, \"Some biographical information about Username.\"))), /*#__PURE__*/React.createElement(_FollowButton_FollowButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/React.createElement(_FollowStats_FollowStats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"profile-feed\",\n    role: \"feed\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.js?\n}");

/***/ },

/***/ "./src/components/CloseButton/CloseButton.module.css"
/*!***********************************************************!*\
  !*** ./src/components/CloseButton/CloseButton.module.css ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"closeButton\":\"nRmVNOUPXPt07q2izPkS\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/CloseButton/CloseButton.module.css?\n}");

/***/ },

/***/ "./src/components/Profile/FollowButton/FollowButton.module.css"
/*!*********************************************************************!*\
  !*** ./src/components/Profile/FollowButton/FollowButton.module.css ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"followButton\":\"LxVk1HYZYwEEuUZ934ZA\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowButton/FollowButton.module.css?\n}");

/***/ },

/***/ "./src/components/Profile/FollowStats/FollowStats.module.css"
/*!*******************************************************************!*\
  !*** ./src/components/Profile/FollowStats/FollowStats.module.css ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"followStats\":\"nhqSoBloQwWMoUudU1C4\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowStats/FollowStats.module.css?\n}");

/***/ },

/***/ "./src/components/Profile/FollowStats/FollowersButton/FollowersButton.module.css"
/*!***************************************************************************************!*\
  !*** ./src/components/Profile/FollowStats/FollowersButton/FollowersButton.module.css ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"followersButton\":\"TdNADfbRmDXUlRkNMYRO\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowStats/FollowersButton/FollowersButton.module.css?\n}");

/***/ },

/***/ "./src/components/Profile/FollowStats/FollowingButton/FollowingButton.module.css"
/*!***************************************************************************************!*\
  !*** ./src/components/Profile/FollowStats/FollowingButton/FollowingButton.module.css ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"followingButton\":\"s2g8IVHQcXdzvp0yLgzf\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/FollowStats/FollowingButton/FollowingButton.module.css?\n}");

/***/ },

/***/ "./src/components/Profile/Profile.module.css"
/*!***************************************************!*\
  !*** ./src/components/Profile/Profile.module.css ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"profile\":\"bRXXEOH49SRQPlqWmeUf\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.module.css?\n}");

/***/ }

}]);