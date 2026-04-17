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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/ArrowLeftIcon/ArrowLeftIcon */ \"./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js\");\n/* harmony import */ var _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseButton.module.css */ \"./src/components/CloseButton/CloseButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction CloseButton(_ref) {\n  var overlay = _ref.overlay,\n    close = _ref.close;\n  var action = function action() {\n    close();\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    event.preventDefault();\n    if (event.key === 'Enter') {\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"close \".concat(overlay)\n  }, /*#__PURE__*/React.createElement(_Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/CloseButton/CloseButton.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/Dropdown.js"
/*!*********************************************!*\
  !*** ./src/components/Dropdown/Dropdown.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DropdownButton_DropdownButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownButton/DropdownButton */ \"./src/components/Dropdown/DropdownButton/DropdownButton.js\");\n/* harmony import */ var _DropdownList_DropdownList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownList/DropdownList */ \"./src/components/Dropdown/DropdownList/DropdownList.js\");\n/* harmony import */ var _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown.module.css */ \"./src/components/Dropdown/Dropdown.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction Dropdown(_ref) {\n  var _ref$id = _ref.id,\n    id = _ref$id === void 0 ? 0 : _ref$id,\n    _ref$label = _ref.label,\n    label = _ref$label === void 0 ? 'dropdown' : _ref$label,\n    items = _ref.items;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    isOpen = _useState2[0],\n    setIsOpen = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n    isMounted = _useState4[0],\n    setIsMounted = _useState4[1];\n  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var open = function open() {\n    setIsOpen(true);\n  };\n  var close = function close() {\n    listRef.current.addEventListener('transitionend', function () {\n      return setIsOpen(false);\n    }, {\n      once: true\n    });\n    setIsMounted(false);\n  };\n  var mountList = function mountList() {\n    setIsMounted(true);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return function () {\n      setIsOpen(false);\n    };\n  }, []);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: _Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dropdown\n  }, /*#__PURE__*/React.createElement(_DropdownButton_DropdownButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    id: id,\n    label: label,\n    isOpen: isOpen,\n    open: open,\n    close: close,\n    buttonRef: buttonRef\n  }), isOpen && /*#__PURE__*/React.createElement(_DropdownList_DropdownList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    id: id,\n    items: items,\n    isOpen: isOpen,\n    open: open,\n    close: close,\n    isMounted: isMounted,\n    mountList: mountList,\n    buttonRef: buttonRef,\n    listRef: listRef\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/Dropdown.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/DropdownButton/DropdownButton.js"
/*!******************************************************************!*\
  !*** ./src/components/Dropdown/DropdownButton/DropdownButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icons_EllipsisVerticalIcon_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon */ \"./src/components/Icons/EllipsisVerticalIcon/EllipsisVerticalIcon.js\");\n/* harmony import */ var _DropdownButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownButton.module.css */ \"./src/components/Dropdown/DropdownButton/DropdownButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction DropdownButton(_ref) {\n  var id = _ref.id,\n    label = _ref.label,\n    isOpen = _ref.isOpen,\n    open = _ref.open,\n    close = _ref.close,\n    buttonRef = _ref.buttonRef;\n  var action = function action() {\n    isOpen ? close() : open();\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    id: \"dropdown-button-\".concat(id),\n    className: _DropdownButton_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dropdownButton,\n    ref: buttonRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": label,\n    \"aria-haspopup\": \"menu\",\n    \"aria-expanded\": isOpen,\n    \"aria-controls\": \"dropdown-list-\".concat(id)\n  }, /*#__PURE__*/React.createElement(_Icons_EllipsisVerticalIcon_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownButton/DropdownButton.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/DropdownList/DropdownList.js"
/*!**************************************************************!*\
  !*** ./src/components/Dropdown/DropdownList/DropdownList.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ListItemButton/ListItemButton */ \"./src/components/Dropdown/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownList.module.css */ \"./src/components/Dropdown/DropdownList/DropdownList.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nfunction DropdownList(_ref) {\n  var id = _ref.id,\n    items = _ref.items,\n    isOpen = _ref.isOpen,\n    open = _ref.open,\n    close = _ref.close,\n    isMounted = _ref.isMounted,\n    mountList = _ref.mountList,\n    buttonRef = _ref.buttonRef,\n    listRef = _ref.listRef;\n  var onMount = function onMount() {\n    if (!isMounted) {\n      mountList();\n      listRef.current.firstElementChild.firstElementChild.focus();\n    }\n  };\n  var offClickClose = function offClickClose(event) {\n    if (!listRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {\n      close(false);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener('click', offClickClose);\n    return function () {\n      document.removeEventListener('click', offClickClose);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // Wait for the next repaint to transition:\n    var timer = requestAnimationFrame(onMount);\n    return function () {\n      cancelAnimationFrame(timer);\n    };\n  }, []);\n  return /*#__PURE__*/React.createElement(\"ul\", {\n    id: \"dropdown-list-\".concat(id),\n    className: \"\".concat(_DropdownList_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dropdownList, \" \").concat(isMounted ? _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].open : ''),\n    ref: listRef,\n    role: \"menu\",\n    \"aria-labelledby\": \"dropdown-button-\".concat(id),\n    hidden: !isOpen\n  }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {\n    return /*#__PURE__*/React.createElement(\"li\", {\n      key: index,\n      role: \"none\"\n    }, /*#__PURE__*/React.createElement(_ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      buttonRef: buttonRef,\n      listRef: listRef,\n      text: item.text,\n      method: item.method,\n      close: close\n    }));\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownList);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownList/DropdownList.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/ListItemButton/ListItemButton.js"
/*!******************************************************************!*\
  !*** ./src/components/Dropdown/ListItemButton/ListItemButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemButton.module.css */ \"./src/components/Dropdown/ListItemButton/ListItemButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction ListItemButton(_ref) {\n  var buttonRef = _ref.buttonRef,\n    listRef = _ref.listRef,\n    text = _ref.text,\n    method = _ref.method,\n    close = _ref.close;\n  var focusPrev = function focusPrev(button) {\n    var prevButton = button.parentElement.previousElementSibling.firstElementChild;\n    prevButton ? prevButton.focus() : listRef.current.lastElementChild.firstElementChild.focus();\n  };\n  var focusNext = function focusNext(button) {\n    var nextButton = button.parentElement.nextElementSibling.firstElementChild;\n    nextButton ? nextButton.focus() : listRef.current.firstElementChild.firstElementChild.focus();\n  };\n  var escape = function escape() {\n    close();\n    buttonRef.current.focus();\n  };\n  var onClick = function onClick(event) {\n    method();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    switch (event.key) {\n      case 'Enter':\n        return method();\n      case 'Tab':\n        return close();\n      // Standard behavior: Close menu if user tabs out\n      case 'Escape':\n        return escape();\n      // Return focus to button on close\n      case 'ArrowDown':\n        event.preventDefault(); // Prevents scrolling\n        return focusNext(event.target);\n      case 'ArrowUp':\n        event.preventDefault(); // Prevents scrolling\n        return focusPrev(event.target);\n      default:\n        return;\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItemButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    role: \"menuitem\",\n    tabIndex: \"-1\"\n  }, text);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/ListItemButton/ListItemButton.js?\n}");

/***/ },

/***/ "./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js"
/*!*************************************************************!*\
  !*** ./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction ArrowLeftIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 448 512\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"arrow left icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowLeftIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js?\n}");

/***/ },

/***/ "./src/components/Icons/EllipsisVerticalIcon/EllipsisVerticalIcon.js"
/*!***************************************************************************!*\
  !*** ./src/components/Icons/EllipsisVerticalIcon/EllipsisVerticalIcon.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction EllipsisVerticalIcon(_ref) {\n  var _ref$size = _ref.size,\n    size = _ref$size === void 0 ? 24 : _ref$size;\n  return /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 640 640\",\n    width: size,\n    height: size,\n    role: \"img\",\n    \"aria-label\": \"vertical ellipsis icon\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EllipsisVerticalIcon);\n\n//# sourceURL=webpack://devour-clone/./src/components/Icons/EllipsisVerticalIcon/EllipsisVerticalIcon.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useFocusTrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useFocusTrap */ \"./src/hooks/useFocusTrap.js\");\n/* harmony import */ var _CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CloseButton/CloseButton */ \"./src/components/CloseButton/CloseButton.js\");\n/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dropdown/Dropdown */ \"./src/components/Dropdown/Dropdown.js\");\n/* harmony import */ var _FollowButton_FollowButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FollowButton/FollowButton */ \"./src/components/Profile/FollowButton/FollowButton.js\");\n/* harmony import */ var _FollowStats_FollowStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FollowStats/FollowStats */ \"./src/components/Profile/FollowStats/FollowStats.js\");\n/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Profile.module.css */ \"./src/components/Profile/Profile.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\nfunction Profile(_ref) {\n  var closeProfile = _ref.closeProfile;\n  var focusRef = (0,_hooks_useFocusTrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  /* \n  const geoRef = useRef(null)\n  const handleLocation = event => {\n    if (event.target.position) {\n      const { latitude, longitude } = event.target.position.coords\n      alert(`Coordinates: ${latitude}, ${longitude}`)\n    } else if (event.target.error) {\n      alert(`Error: ${event.target.error.message}`)\n    }\n  }\n  useEffect(() => {\n    const geo = geoRef.current\n    geo.addEventListener('location', handleLocation)\n    return () => {\n      geo.removeEventListener('location', handleLocation)\n    }\n  }, [])\n  <geolocation ref={geoRef}></geolocation>\n  */\n\n  return /*#__PURE__*/React.createElement(\"section\", {\n    id: \"profile\",\n    className: _Profile_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].profile,\n    ref: focusRef,\n    tabIndex: -1,\n    role: \"dialog\",\n    \"aria-modal\": \"true\",\n    \"aria-labelledby\": \"username\",\n    \"aria-describedby\": \"biography\"\n  }, /*#__PURE__*/React.createElement(\"nav\", null, /*#__PURE__*/React.createElement(_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    overlay: \"profile\",\n    close: closeProfile\n  }), /*#__PURE__*/React.createElement(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    items: [{\n      text: 'alert message',\n      method: function method() {\n        return alert('dropdown item clicked.');\n      }\n    }, {\n      text: 'console log message',\n      method: function method() {\n        return console.log('dropdown item clicked.');\n      }\n    }]\n  })), /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"\",\n    alt: \"{''}'s profile picture\"\n  }), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", {\n    id: \"username\"\n  }, \"Username\"), /*#__PURE__*/React.createElement(\"address\", null, \"New York, NY\"), /*#__PURE__*/React.createElement(\"p\", {\n    id: \"biography\"\n  }, \"Some biographical information about Username.\"))), /*#__PURE__*/React.createElement(_FollowButton_FollowButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/React.createElement(_FollowStats_FollowStats__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"profile-feed\",\n    role: \"feed\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.js?\n}");

/***/ },

/***/ "./src/hooks/useFocusTrap.js"
/*!***********************************!*\
  !*** ./src/hooks/useFocusTrap.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Providers/FocusTrapProvider */ \"./src/components/Providers/FocusTrapProvider.js\");\n\n\nfunction useFocusTrap() {\n  var focusRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__.FocusTrapContext);\n  if (!focusRef) {\n    // -->\n  }\n  return focusRef;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFocusTrap);\n\n//# sourceURL=webpack://devour-clone/./src/hooks/useFocusTrap.js?\n}");

/***/ },

/***/ "./src/components/CloseButton/CloseButton.module.css"
/*!***********************************************************!*\
  !*** ./src/components/CloseButton/CloseButton.module.css ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"closeButton\":\"nRmVNOUPXPt07q2izPkS\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/CloseButton/CloseButton.module.css?\n}");

/***/ },

/***/ "./src/components/Dropdown/Dropdown.module.css"
/*!*****************************************************!*\
  !*** ./src/components/Dropdown/Dropdown.module.css ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"dropdown\":\"fsRjQsePCOqWh1LwmMMg\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/Dropdown.module.css?\n}");

/***/ },

/***/ "./src/components/Dropdown/DropdownButton/DropdownButton.module.css"
/*!**************************************************************************!*\
  !*** ./src/components/Dropdown/DropdownButton/DropdownButton.module.css ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"dropdownButton\":\"abpuI_3Na2ydJj24PSqD\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownButton/DropdownButton.module.css?\n}");

/***/ },

/***/ "./src/components/Dropdown/DropdownList/DropdownList.module.css"
/*!**********************************************************************!*\
  !*** ./src/components/Dropdown/DropdownList/DropdownList.module.css ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"dropdownList\":\"SaGbxhcxIln6hpTb0Klg\",\"open\":\"ANLuoq2GOx9WvRvddcjR\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownList/DropdownList.module.css?\n}");

/***/ },

/***/ "./src/components/Dropdown/ListItemButton/ListItemButton.module.css"
/*!**************************************************************************!*\
  !*** ./src/components/Dropdown/ListItemButton/ListItemButton.module.css ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"listItemButton\":\"OGbMvckCuIXNF7ZaS8mY\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/ListItemButton/ListItemButton.module.css?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"profile\":\"bRXXEOH49SRQPlqWmeUf\",\"search\":\"WMUjEeFRanmV9SHehMGp\"});\n\n//# sourceURL=webpack://devour-clone/./src/components/Profile/Profile.module.css?\n}");

/***/ }

}]);