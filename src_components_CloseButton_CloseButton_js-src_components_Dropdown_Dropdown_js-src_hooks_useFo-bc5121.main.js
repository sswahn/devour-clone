"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdevour_clone"] = self["webpackChunkdevour_clone"] || []).push([["src_components_CloseButton_CloseButton_js-src_components_Dropdown_Dropdown_js-src_hooks_useFo-bc5121"],{

/***/ "./src/components/CloseButton/CloseButton.js"
/*!***************************************************!*\
  !*** ./src/components/CloseButton/CloseButton.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/ArrowLeftIcon/ArrowLeftIcon */ \"./src/components/Icons/ArrowLeftIcon/ArrowLeftIcon.js\");\n/* harmony import */ var _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseButton.module.css */ \"./src/components/CloseButton/CloseButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction CloseButton(_ref) {\n  var overlay = _ref.overlay,\n    close = _ref.close;\n  var action = function action() {\n    close();\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _CloseButton_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": \"close \".concat(overlay)\n  }, /*#__PURE__*/React.createElement(_Icons_ArrowLeftIcon_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/CloseButton/CloseButton.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icons_EllipsisVerticalIcon_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon */ \"./src/components/Icons/EllipsisVerticalIcon/EllipsisVerticalIcon.js\");\n/* harmony import */ var _DropdownButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownButton.module.css */ \"./src/components/Dropdown/DropdownButton/DropdownButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction DropdownButton(_ref) {\n  var id = _ref.id,\n    label = _ref.label,\n    isOpen = _ref.isOpen,\n    open = _ref.open,\n    close = _ref.close,\n    buttonRef = _ref.buttonRef;\n  var action = function action() {\n    isOpen ? close() : open();\n  };\n  var onClick = function onClick(event) {\n    action();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      action();\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    id: \"dropdown-button-\".concat(id),\n    className: _DropdownButton_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dropdownButton,\n    ref: buttonRef,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    \"aria-label\": label,\n    \"aria-haspopup\": \"menu\",\n    \"aria-expanded\": isOpen,\n    \"aria-controls\": \"dropdown-list-\".concat(id)\n  }, /*#__PURE__*/React.createElement(_Icons_EllipsisVerticalIcon_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownButton/DropdownButton.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/DropdownList/DropdownList.js"
/*!**************************************************************!*\
  !*** ./src/components/Dropdown/DropdownList/DropdownList.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useListControlKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useListControlKeys */ \"./src/hooks/useListControlKeys.js\");\n/* harmony import */ var _ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListItemButton/ListItemButton */ \"./src/components/Dropdown/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownList.module.css */ \"./src/components/Dropdown/DropdownList/DropdownList.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\nfunction DropdownList(_ref) {\n  var id = _ref.id,\n    items = _ref.items,\n    isOpen = _ref.isOpen,\n    open = _ref.open,\n    close = _ref.close,\n    isMounted = _ref.isMounted,\n    mountList = _ref.mountList,\n    buttonRef = _ref.buttonRef,\n    listRef = _ref.listRef;\n  var onMount = function onMount() {\n    if (!isMounted) {\n      mountList();\n      listRef.current.firstElementChild.firstElementChild.focus();\n    }\n  };\n  var offClickClose = function offClickClose(event) {\n    if (!listRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {\n      close(false);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener('click', offClickClose);\n    return function () {\n      document.removeEventListener('click', offClickClose);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // Wait for the next repaint to transition:\n    var timer = requestAnimationFrame(onMount);\n    (0,_hooks_useListControlKeys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listRef.current, {\n      enter: enter,\n      escape: escape,\n      close: close\n    });\n    return function () {\n      cancelAnimationFrame(timer);\n    };\n  }, []);\n  return /*#__PURE__*/React.createElement(\"ul\", {\n    id: \"dropdown-list-\".concat(id),\n    className: \"\".concat(_DropdownList_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dropdownList, \" \").concat(isMounted ? _DropdownList_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].open : ''),\n    ref: listRef,\n    role: \"menu\",\n    \"aria-labelledby\": \"dropdown-button-\".concat(id),\n    hidden: !isOpen\n  }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {\n    return /*#__PURE__*/React.createElement(\"li\", {\n      key: index,\n      role: \"none\"\n    }, /*#__PURE__*/React.createElement(_ListItemButton_ListItemButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    /* buttonRef={buttonRef} \n     listRef={listRef} */, {\n      text: item.text,\n      method: item.method,\n      close: close\n    }));\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownList);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/DropdownList/DropdownList.js?\n}");

/***/ },

/***/ "./src/components/Dropdown/ListItemButton/ListItemButton.js"
/*!******************************************************************!*\
  !*** ./src/components/Dropdown/ListItemButton/ListItemButton.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemButton.module.css */ \"./src/components/Dropdown/ListItemButton/ListItemButton.module.css\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction ListItemButton(_ref) {\n  var buttonRef = _ref.buttonRef,\n    listRef = _ref.listRef,\n    text = _ref.text,\n    method = _ref.method,\n    close = _ref.close;\n  var focusPrev = function focusPrev(button) {\n    button === listRef.current.firstElementChild.firstElementChild ? listRef.current.lastElementChild.firstElementChild.focus() : button.parentElement.previousElementSibling.firstElementChild.focus();\n  };\n  var focusNext = function focusNext(button) {\n    button === listRef.current.lastElementChild.firstElementChild ? listRef.current.firstElementChild.firstElementChild.focus() : button.parentElement.nextElementSibling.firstElementChild.focus();\n  };\n  var escape = function escape() {\n    close();\n    buttonRef.current.focus();\n  };\n  var onClick = function onClick(event) {\n    method();\n  };\n  var onKeyDown = function onKeyDown(event) {\n    switch (event.key) {\n      case 'Enter':\n        event.preventDefault();\n        return method();\n      case 'Tab':\n        return close();\n      // Standard behavior: Close menu if user tabs out\n      case 'Escape':\n        event.stopPropagation();\n        event.preventDefault();\n        return escape();\n      // Return focus to button on close\n      case 'ArrowDown':\n        event.preventDefault();\n        return focusNext(event.target);\n      case 'ArrowUp':\n        event.preventDefault();\n        return focusPrev(event.target);\n      default:\n        return;\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: _ListItemButton_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listItemButton,\n    onClick: onClick,\n    onKeyDown: onKeyDown,\n    type: \"button\",\n    role: \"menuitem\",\n    tabIndex: \"-1\"\n  }, text);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemButton);\n\n//# sourceURL=webpack://devour-clone/./src/components/Dropdown/ListItemButton/ListItemButton.js?\n}");

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

/***/ "./src/hooks/useFocusTrap.js"
/*!***********************************!*\
  !*** ./src/hooks/useFocusTrap.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Providers/FocusTrapProvider */ \"./src/components/Providers/FocusTrapProvider.js\");\n\n\nfunction useFocusTrap() {\n  var focusRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Providers_FocusTrapProvider__WEBPACK_IMPORTED_MODULE_1__.FocusTrapContext);\n  if (!focusRef) {\n    // -->\n  }\n  return focusRef;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFocusTrap);\n\n//# sourceURL=webpack://devour-clone/./src/hooks/useFocusTrap.js?\n}");

/***/ },

/***/ "./src/hooks/useListControlKeys.js"
/*!*****************************************!*\
  !*** ./src/hooks/useListControlKeys.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useListControlKeys(list, methods) {\n  var focusPrev = function focusPrev(button) {\n    button === list.firstElementChild.firstElementChild ? list.lastElementChild.firstElementChild.focus() : button.parentElement.previousElementSibling.firstElementChild.focus();\n  };\n  var focusNext = function focusNext(button) {\n    button === list.lastElementChild.firstElementChild ? list.firstElementChild.firstElementChild.focus() : button.parentElement.nextElementSibling.firstElementChild.focus();\n  };\n\n  // 3 methods: enter(), close(), escape()\n\n  var onKeyDown = function onKeyDown(event) {\n    event.stopPropagation();\n    switch (event.key) {\n      case 'Enter':\n        event.preventDefault();\n        return methods.enter();\n      case 'Tab':\n        return close();\n      // Standard behavior (no preventDefault): Close menu if user tabs out\n      case 'Escape':\n        event.preventDefault();\n        return methods.escape();\n      // Return focus to button on close\n      case 'ArrowDown':\n        event.preventDefault();\n        return focusNext(event.target);\n      case 'ArrowUp':\n        event.preventDefault();\n        return focusPrev(event.target);\n      default:\n        return;\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    list.addEventListener('keydown', onKeyDown);\n    return function () {\n      list.removeEventListener('keydown', onKeyDown);\n    };\n  }, []);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useListControlKeys);\n\n//# sourceURL=webpack://devour-clone/./src/hooks/useListControlKeys.js?\n}");

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

/***/ }

}]);