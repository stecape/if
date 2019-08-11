webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");









var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},

  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function InputAdornment(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disablePointer = props.disablePointerEvents,
      disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      position = props.position,
      variantProp = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__["useFormControl"])() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
     true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(variantProp !== muiFormControl.variant, 'Material-UI: The `InputAdornment` variant infers the variant prop ' + 'you do not have to provide one.') : undefined;
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: null
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, {
      filled: classes.filled
    }[variant], {
      start: classes.positionStart,
      end: classes.positionEnd
    }[position], {
      dense: classes.marginDense
    }[muiFormControl.margin]),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "textSecondary"
  }, children) : children));
});
 true ? InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the input on click.
   */
  disablePointerEvents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  muiFormControl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['start', 'end']),

  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputAdornment/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputAdornment/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputAdornment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputAdornment__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/layouts/App.js":
/*!******************************!*\
  !*** ./pages/layouts/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");



var _jsxFileName = "C:\\Users\\Admin\\Documents\\PI\\if\\pages\\layouts\\App.js";










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      flexBasis: 200
    }
  };
});
function App() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    Temperature: ''
  }),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange(name) {
    return function (event) {
      setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.value)));
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "static",
    color: "primary",
    root: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "IF"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "Temperature",
    label: "Temperature",
    value: values.Temperature,
    onChange: handleChange('Temperature'),
    type: "number",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    },
    InputProps: {
      startAdornment: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__["default"], {
        position: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\xB0F")
    },
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.9b49d20049976d336184.hot-update.js.map