"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdevour_clone"] = self["webpackChunkdevour_clone"] || []).push([["src_features_Authentication_LoginForm_LoginForm_js"],{

/***/ "./src/components/Checkbox/Checkbox.js"
/*!*********************************************!*\
  !*** ./src/components/Checkbox/Checkbox.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons_CheckboxIcon_CheckedIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/CheckboxIcon/CheckedIcon.js */ \"./src/components/Icons/CheckboxIcon/CheckedIcon.js\");\n/* harmony import */ var _Icons_CheckboxIcon_UncheckedIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/CheckboxIcon/UncheckedIcon.js */ \"./src/components/Icons/CheckboxIcon/UncheckedIcon.js\");\n/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox.module.css */ \"./src/components/Checkbox/Checkbox.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\nvar Checkbox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref) {\n  var label = _ref.label,\n    checked = _ref.checked,\n    onChange = _ref.onChange;\n  var checkboxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var action = function action() {\n    checkboxRef.current.click();\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      action();\n    }\n  };\n\n  // the icons should be conditionally rendered in a button\n  // it should receive the onClick and onKeyDown methods as props\n\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].checkbox\n  }, /*#__PURE__*/React.createElement(\"label\", {\n    onClick: onClick,\n    onKeyDown: onKeyDown\n  }, label), /*#__PURE__*/React.createElement(\"input\", {\n    ref: checkboxRef,\n    type: \"checkbox\",\n    checked: checked,\n    onChange: onChange\n  }), checked ? /*#__PURE__*/React.createElement(_Icons_CheckboxIcon_CheckedIcon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null) : /*#__PURE__*/React.createElement(_Icons_CheckboxIcon_UncheckedIcon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);\n\n//# sourceURL=webpack://devour-clone/./src/components/Checkbox/Checkbox.js?\n}");

/***/ },

/***/ "./src/components/Icons/CheckboxIcon/CheckedIcon.js"
/*!**********************************************************!*\
  !*** ./src/components/Icons/CheckboxIcon/CheckedIcon.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar CheckedIcon = function CheckedIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 448 512\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"checked checkbox icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckedIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/CheckboxIcon/CheckedIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/CheckboxIcon/UncheckedIcon.js"
/*!************************************************************!*\
  !*** ./src/components/Icons/CheckboxIcon/UncheckedIcon.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar UncheckedIcon = function UncheckedIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 448 512\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"unchecked checkbox icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UncheckedIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/CheckboxIcon/UncheckedIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/LockIcon/LockIcon.js"
/*!***************************************************!*\
  !*** ./src/components/Icons/LockIcon/LockIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar LockIcon = function LockIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 448 512\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"lock icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/LockIcon/LockIcon.js?\n}");

/***/ },

/***/ "./src/features/Authentication/LoginForm/LoginForm.js"
/*!************************************************************!*\
  !*** ./src/features/Authentication/LoginForm/LoginForm.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Providers/SessionProvider */ \"./src/components/Providers/SessionProvider.js\");\n/* harmony import */ var _components_Icons_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Icons/UserIcon/UserIcon */ \"./src/components/Icons/UserIcon/UserIcon.js\");\n/* harmony import */ var _components_Icons_LockIcon_LockIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Icons/LockIcon/LockIcon */ \"./src/components/Icons/LockIcon/LockIcon.js\");\n/* harmony import */ var _components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Checkbox/Checkbox */ \"./src/components/Checkbox/Checkbox.js\");\n/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/LoadingSpinner/LoadingSpinner */ \"./src/components/LoadingSpinner/LoadingSpinner.js\");\n/* harmony import */ var _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginForm.module.css */ \"./src/features/Authentication/LoginForm/LoginForm.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\n\nfunction LoginForm() {\n  var setSession = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Providers_SessionProvider__WEBPACK_IMPORTED_MODULE_2__.SetSessionContext); // onSubmit, setSession({isAuthenticated: true, ...user_data})\n  var _useState = useState(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    checked = _useState2[0],\n    setChecked = _useState2[1];\n  var handleCheckbox = function handleCheckbox(event) {\n    setChecked(function (prevState) {\n      return !prevState;\n    });\n  };\n\n  // buttons should go to their own componenets\n  var forgotPassword = function forgotPassword(event) {};\n  var registerUser = function registerUser(event) {};\n  return /*#__PURE__*/React.createElement(\"form\", {\n    className: _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loginForm,\n    onSubmit: onSubmit,\n    \"aria-label\": \"login form\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Sign In\"), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"input\", {\n    id: \"username\",\n    type: \"text\",\n    placeholder: \"Username\",\n    required: true,\n    minLength: 2,\n    maxLength: 50,\n    autoComplete: \"off\",\n    \"aria-label\": \"username\"\n  }), /*#__PURE__*/React.createElement(_components_Icons_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"input\", {\n    id: \"password\",\n    type: \"password\",\n    placeholder: \"Password\",\n    required: true,\n    minLength: 8,\n    maxLength: 130,\n    autoComplete: \"off\",\n    \"aria-label\": \"password\"\n  }), /*#__PURE__*/React.createElement(_components_Icons_LockIcon_LockIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/React.createElement(_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    label: \"Remember me\",\n    checked: checked,\n    onChange: handleCheckbox\n  }), loading && /*#__PURE__*/React.createElement(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), !loading && /*#__PURE__*/React.createElement(\"button\", {\n    onClick: \"\",\n    onKeyDown: \"\",\n    type: \"submit\",\n    disabled: !!message\n  }, \"Sign In\"), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"button\", {\n    onClick: forgotPassword,\n    type: \"button\",\n    \"aria-label\": \"open forgot password form\"\n  }, \"Forgot password?\"), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: registerUser,\n    type: \"button\",\n    \"aria-label\": \"open registration form\"\n  }, \"Create an account\")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);\n\n//# sourceURL=webpack://devour-clone/./src/features/Authentication/LoginForm/LoginForm.js?\n}");

/***/ },

/***/ "./src/components/Checkbox/Checkbox.module.css"
/*!*****************************************************!*\
  !*** ./src/components/Checkbox/Checkbox.module.css ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"checkbox\":\"sy8lKVWP56AlOR7ys_9A\",\"icon\":\"mxKv9GsNwFl8FMJJFnJg\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Checkbox/Checkbox.module.css?\n}");

/***/ },

/***/ "./src/features/Authentication/LoginForm/LoginForm.module.css"
/*!********************************************************************!*\
  !*** ./src/features/Authentication/LoginForm/LoginForm.module.css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"loginForm\":\"DZ0S8wRAGVyW9Xa9BSBu\"});\n\n//# sourceURL=webpack://devour-clone/./src/features/Authentication/LoginForm/LoginForm.module.css?\n}");

/***/ }

}]);