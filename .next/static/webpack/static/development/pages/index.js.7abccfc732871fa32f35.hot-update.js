webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@material-ui/core/esm/Box/Box.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Box/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Container/Container.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Container/Container.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/@material-ui/core/esm/utils/index.js");








var styles = function styles(theme) {
  var _root;

  return {
    /* Styles applied to the root element. */
    root: (_root = {
      width: '100%',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      marginRight: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_root, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_root, theme.breakpoints.up('md'), {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }), _root),

    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];

      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }

      return acc;
    }, {}),

    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.up('xs'), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),

    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.up('sm'), {
      maxWidth: theme.breakpoints.values.sm
    }),

    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.up('md'), {
      maxWidth: theme.breakpoints.values.md
    }),

    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.up('lg'), {
      maxWidth: theme.breakpoints.values.lg
    }),

    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.up('xl'), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function Container(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "component", "fixed", "maxWidth"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, fixed && classes.fixed, maxWidth !== false && classes["maxWidth".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["capitalize"])(String(maxWidth)))]),
    ref: ref
  }, other));
});
 true ? Container.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   */
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiContainer'
})(Container));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Container/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Container/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (deprecatedPropType);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/index.js ***!
  \***********************************************************/
/*! exports provided: deprecatedPropType, capitalize, createChainedFunction, isMuiElement, setRef, useForkRef, useIsFocusVisible, ownerDocument, ownerWindow, requirePropFactory, unsupportedProp, useEventCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deprecatedPropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecatedPropType", function() { return _deprecatedPropType__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./node_modules/@material-ui/core/esm/utils/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChainedFunction", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__["createChainedFunction"]; });

/* harmony import */ var _reactHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactHelpers */ "./node_modules/@material-ui/core/esm/utils/reactHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMuiElement", function() { return _reactHelpers__WEBPACK_IMPORTED_MODULE_2__["isMuiElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return _reactHelpers__WEBPACK_IMPORTED_MODULE_2__["setRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForkRef", function() { return _reactHelpers__WEBPACK_IMPORTED_MODULE_2__["useForkRef"]; });

/* harmony import */ var _focusVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusVisible */ "./node_modules/@material-ui/core/esm/utils/focusVisible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsFocusVisible", function() { return _focusVisible__WEBPACK_IMPORTED_MODULE_3__["useIsFocusVisible"]; });

/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerDocument", function() { return _ownerDocument__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerWindow", function() { return _ownerWindow__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _requirePropFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requirePropFactory */ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requirePropFactory", function() { return _requirePropFactory__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _unsupportedProp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsupportedProp", function() { return _unsupportedProp__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return _useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerDocument.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/* harmony default export */ __webpack_exports__["default"] = (ownerDocument);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerWindow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");


function ownerWindow(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc.defaultView || window;
}

/* harmony default export */ __webpack_exports__["default"] = (ownerWindow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function requirePropFactory(componentNameInError) {
  if (false) {}

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

/* harmony default export */ __webpack_exports__["default"] = (requirePropFactory);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (unsupportedProp);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/borders.js":
false,

/***/ "./node_modules/@material-ui/system/esm/breakpoints.js":
false,

/***/ "./node_modules/@material-ui/system/esm/compose.js":
false,

/***/ "./node_modules/@material-ui/system/esm/css.js":
false,

/***/ "./node_modules/@material-ui/system/esm/display.js":
false,

/***/ "./node_modules/@material-ui/system/esm/flexbox.js":
false,

/***/ "./node_modules/@material-ui/system/esm/index.js":
false,

/***/ "./node_modules/@material-ui/system/esm/memoize.js":
false,

/***/ "./node_modules/@material-ui/system/esm/merge.js":
false,

/***/ "./node_modules/@material-ui/system/esm/palette.js":
false,

/***/ "./node_modules/@material-ui/system/esm/positions.js":
false,

/***/ "./node_modules/@material-ui/system/esm/responsivePropType.js":
false,

/***/ "./node_modules/@material-ui/system/esm/shadows.js":
false,

/***/ "./node_modules/@material-ui/system/esm/sizing.js":
false,

/***/ "./node_modules/@material-ui/system/esm/spacing.js":
false,

/***/ "./node_modules/@material-ui/system/esm/style.js":
false,

/***/ "./node_modules/@material-ui/system/esm/typography.js":
false,

/***/ "./pages/layouts/App.js":
/*!******************************!*\
  !*** ./pages/layouts/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");





var _jsxFileName = "C:\\Users\\Admin\\Documents\\PI\\if\\pages\\layouts\\App.js";



var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, "Ciao"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7abccfc732871fa32f35.hot-update.js.map