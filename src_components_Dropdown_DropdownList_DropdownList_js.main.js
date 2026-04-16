"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdevour_clone"] = self["webpackChunkdevour_clone"] || []).push([["src_components_Dropdown_DropdownList_DropdownList_js"],{

/***/ "./src/components/Dropdown/DropdownList/DropdownList.js"
/*!**************************************************************!*\
  !*** ./src/components/Dropdown/DropdownList/DropdownList.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ListItemButton/ListItemButton */ \"./src/components/Dropdown/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownList.module.css */ \"./src/components/Dropdown/DropdownList/DropdownList.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nfunction DropdownList(_ref) {\n  var id = _ref.id,\n    isOpen = _ref.isOpen,\n    close = _ref.close,\n    items = _ref.items,\n    buttonRef = _ref.buttonRef;\n  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var clickToClose = function clickToClose(event) {\n    if (!listRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {\n      setIsOpen(false);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener('mousedown', clickToClose);\n    return function () {\n      document.removeEventListener('mousedown', clickToClose);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (isOpen) {\n      listRef.current.firstElementChild.firstElementChild.focus();\n    }\n  }, [isOpen]);\n  return /*#__PURE__*/React.createElement(\"ul\", {\n    id: \"dropdown-list-\".concat(id),\n    className: _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dropdownList,\n    ref: listRef,\n    role: \"menu\",\n    \"aria-labelledby\": \"dropdown-button-\".concat(id),\n    hidden: !isOpen\n  }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {\n    return /*#__PURE__*/React.createElement(\"li\", {\n      key: index,\n      role: \"none\"\n    }, /*#__PURE__*/React.createElement(_ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      buttonRef: buttonRef,\n      listRef: listRef,\n      text: item.text,\n      method: item.method,\n      close: close\n    }));\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownList);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownList/DropdownList.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/ListItemButton/ListItemButton.js"
/*!******************************************************************!*\
  !*** ./src/components/Dropdown/ListItemButton/ListItemButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemButton.module.css */ \"./src/components/Dropdown/ListItemButton/ListItemButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction ListItemButton(_ref) {\n  var buttonRef = _ref.buttonRef,\n    listRef = _ref.listRef,\n    text = _ref.text,\n    method = _ref.method,\n    close = _ref.close;\n  var focusPrev = function focusPrev(button) {\n    var prevButton = button.parentElement.previousElementSibling.firstElementChild;\n    prevButton ? prevButton.focus() : listRef.current.lastElementChild.firstElementChild.focus();\n  };\n  var focusNext = function focusNext(button) {\n    var nextButton = button.parentElement.nextElementSibling.firstElementChild;\n    nextButton ? nextButton.focus() : listRef.current.firstElementChild.firstElementChild.focus();\n  };\n  var escape = function escape() {\n    close();\n    buttonRef.current.focus();\n  };\n  var onClick = function onClick(event) {\n    method();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    switch (event.key) {\n      case 'Enter':\n        return method();\n      case 'Tab':\n        return close();\n      // Standard behavior: Close menu if user tabs out\n      case 'Escape':\n        return escape();\n      // Return focus to button on close\n      case 'ArrowDown':\n        event.preventDefault(); // Prevents scrolling\n        return focusNext(event.target);\n      case 'ArrowUp':\n        event.preventDefault(); // Prevents scrolling\n        return focusPrev(event.target);\n      default:\n        return;\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItemButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    role: \"menuitem\",\n    tabIndex: \"-1\"\n  }, text);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/ListItemButton/ListItemButton.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/DropdownList/DropdownList.module.css"
/*!**********************************************************************!*\
  !*** ./src/components/Dropdown/DropdownList/DropdownList.module.css ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"dropdownList\":\"SaGbxhcxIln6hpTb0Klg\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownList/DropdownList.module.css?\n}");

/***/ },

/***/ "./src/components/Dropdown/ListItemButton/ListItemButton.module.css"
/*!**************************************************************************!*\
  !*** ./src/components/Dropdown/ListItemButton/ListItemButton.module.css ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"listItemButton\":\"OGbMvckCuIXNF7ZaS8mY\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/ListItemButton/ListItemButton.module.css?\n}");

/***/ }

}]);