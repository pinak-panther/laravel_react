(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_modules_UserProfile_UserProfilePage_js"],{

/***/ "./resources/js/app/modules/UserProfile/AccountInformation.js":
/*!********************************************************************!*\
  !*** ./resources/js/app/modules/UserProfile/AccountInformation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Auth */ "./resources/js/app/modules/Auth/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/anchor-is-valid */










function AccountInformation(props) {
  // Fields
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setloading = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [user]); // Methods

  var saveUser = function saveUser(values, setStatus, setSubmitting) {
    setloading(true);
    var updatedUser = Object.assign(user, {
      username: values.username,
      email: values.email,
      language: values.language,
      timeZone: values.timeZone,
      communication: {
        email: values.communicationEmail,
        sms: values.communicationSMS,
        phone: values.communicationPhone
      }
    }); // user for update preparation

    dispatch(props.setUser(updatedUser));
    setTimeout(function () {
      setloading(false);
      setSubmitting(false); // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  }; // UI Helpers


  var initialValues = {
    username: user.username,
    email: user.email,
    language: user.language,
    timeZone: user.timeZone,
    communicationEmail: user.communication.email,
    communicationSMS: user.communication.sms,
    communicationPhone: user.communication.phone
  };
  var Schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    username: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Username is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_3__.string().email("Wrong email format").required("Email is required"),
    language: yup__WEBPACK_IMPORTED_MODULE_3__.string(),
    timeZone: yup__WEBPACK_IMPORTED_MODULE_3__.string(),
    communicationEmail: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    communicationSMS: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    communicationPhone: yup__WEBPACK_IMPORTED_MODULE_3__.bool()
  });

  var getInputClasses = function getInputClasses(fieldname) {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: initialValues,
    validationSchema: Schema,
    onSubmit: function onSubmit(values, _ref) {
      var setStatus = _ref.setStatus,
          setSubmitting = _ref.setSubmitting;
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: function onReset(values, _ref2) {
      var resetForm = _ref2.resetForm;
      resetForm();
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
    className: "card card-custom",
    onSubmit: formik.handleSubmit,
    children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "card-header py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "card-title align-items-start flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "card-label font-weight-bolder text-dark",
          children: "Account Information"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "text-muted font-weight-bold font-size-sm mt-1",
          children: "Change your account settings"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "card-toolbar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "submit",
          className: "btn btn-success mr-2",
          disabled: formik.isSubmitting || formik.touched && !formik.isValid,
          children: ["Save Changes", formik.isSubmitting]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
          to: "/user-profile/profile-overview",
          className: "btn btn-secondary",
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "form",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "font-weight-bold mb-6",
              children: "Account:"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Username"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", _objectSpread({
                type: "text",
                className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("username")),
                name: "username"
              }, formik.getFieldProps("username"))), formik.touched.username && formik.errors.username ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "invalid-feedback",
                children: formik.errors.username
              }) : null]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Email Address"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "input-group input-group-lg input-group-solid",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "input-group-text",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                    className: "fa fa-at"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", _objectSpread({
                type: "text",
                placeholder: "Email",
                className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("email")),
                name: "email"
              }, formik.getFieldProps("email"))), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "invalid-feedback",
                children: formik.errors.email
              }) : null]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "form-text text-muted",
              children: ["Email will not be publicly displayed.", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: "#",
                className: "font-weight-bold",
                children: "Learn more"
              }), "."]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Language"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", _objectSpread(_objectSpread({
              className: "form-control form-control-lg form-control-solid",
              name: "language"
            }, formik.getFieldProps("language")), {}, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                children: "Select Language..."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "id",
                children: "Bahasa Indonesia - Indonesian"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "msa",
                children: "Bahasa Melayu - Malay"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "ca",
                children: "Catal\xE0 - Catalan"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "cs",
                children: "\u010Ce\u0161tina - Czech"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "da",
                children: "Dansk - Danish"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "de",
                children: "Deutsch - German"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "en",
                children: "English"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "en-gb",
                children: "English UK - British English"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "es",
                children: "Espa\xF1ol - Spanish"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "eu",
                children: "Euskara - Basque (beta)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "fil",
                children: "Filipino"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "fr",
                children: "Fran\xE7ais - French"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "pt",
                children: "Portugu\xEAs - Portuguese"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "ro",
                children: "Rom\xE2n\u0103 - Romanian"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "ru",
                children: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 - Russian"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "sr",
                children: "\u0421\u0440\u043F\u0441\u043A\u0438 - Serbian"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "uk",
                children: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430 - Ukrainian"
              })]
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Time Zone"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", _objectSpread(_objectSpread({
              className: "form-control form-control-lg form-control-solid",
              name: "timeZone"
            }, formik.getFieldProps("timeZone")), {}, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "International Date Line West",
                children: "(GMT-11:00) International Date Line West"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Midway Island",
                children: "(GMT-11:00) Midway Island"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Central America",
                children: "(GMT-06:00) Central America"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Central Time (US & Canada)",
                children: "(GMT-05:00) Central Time (US & Canada)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Eastern Time (US & Canada)",
                children: "(GMT-04:00) Eastern Time (US & Canada)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Indiana (East)",
                children: "(GMT-04:00) Indiana (East)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Georgetown",
                children: "(GMT-04:00) Georgetown"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Buenos Aires",
                children: "(GMT-03:00) Buenos Aires"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Newfoundland",
                children: "(GMT-02:30) Newfoundland"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Mid-Atlantic",
                children: "(GMT-02:00) Mid-Atlantic"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Cape Verde Is.",
                children: "(GMT-01:00) Cape Verde Is."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "UTC",
                children: "(GMT) UTC"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Dublin",
                children: "(GMT+01:00) Dublin"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Edinburgh",
                children: "(GMT+01:00) Edinburgh"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "London",
                children: "(GMT+01:00) London"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Prague",
                children: "(GMT+02:00) Prague"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Helsinki",
                children: "(GMT+03:00) Helsinki"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Abu Dhabi",
                children: "(GMT+04:00) Abu Dhabi"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Tehran",
                children: "(GMT+04:30) Tehran"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Islamabad",
                children: "(GMT+05:00) Islamabad"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Karachi",
                children: "(GMT+05:00) Karachi"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Tashkent",
                children: "(GMT+05:00) Tashkent"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Kathmandu",
                children: "(GMT+05:45) Kathmandu"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "Astana",
                children: "(GMT+06:00) Astana"
              })]
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Communication"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "checkbox-inline",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "communicationEmail",
                  checked: formik.values.communicationEmail,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Email"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", _objectSpread(_objectSpread({
                  type: "checkbox",
                  name: "communicationSMS",
                  checked: formik.values.communicationSMS
                }, formik.getFieldProps("communicationSMS")), {}, {
                  onChange: formik.handleChange
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "SMS"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", _objectSpread(_objectSpread({
                  type: "checkbox",
                  name: "communicationPhone",
                  checked: formik.values.communicationPhone
                }, formik.getFieldProps("communicationPhone")), {}, {
                  onChange: formik.handleChange
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Phone"]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "separator separator-dashed my-5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "font-weight-bold mb-6",
              children: "Security:"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Login verification"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-light-primary font-weight-bold btn-sm",
              children: "Setup login verification"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "form-text text-muted pt-2",
              children: ["After you log in, you will be asked for additional information to confirm your identity and protect your account from being compromised. ", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: "#",
                className: "font-weight-bold",
                children: "Learn more"
              }), "."]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Password reset verification"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "checkbox-inline",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox m-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Require personal information to reset your password."]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "form-text text-muted py-2",
              children: ["For extra security, this requires you to confirm your email or phone number when you reset your password.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: "#",
                className: "font-weight-boldk",
                children: "Learn more"
              }), "."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-light-danger font-weight-bold btn-sm",
              children: "Deactivate your account ?"
            })]
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _Auth__WEBPACK_IMPORTED_MODULE_5__.actions)(AccountInformation));

/***/ }),

/***/ "./resources/js/app/modules/UserProfile/ChangePassword.js":
/*!****************************************************************!*\
  !*** ./resources/js/app/modules/UserProfile/ChangePassword.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Auth */ "./resources/js/app/modules/Auth/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/anchor-is-valid */












function ChangePassword(props) {
  // Fields
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setloading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setisError = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [user]); // Methods

  var saveUser = function saveUser(values, setStatus, setSubmitting) {
    setloading(true);
    setisError(false);
    var updatedUser = Object.assign(user, {
      password: values.password
    }); // user for update preparation

    dispatch(props.setUser(updatedUser));
    setTimeout(function () {
      setloading(false);
      setSubmitting(false);
      setisError(true); // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  }; // UI Helpers


  var initialValues = {
    currentPassword: "",
    password: "",
    cPassword: ""
  };
  var Schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    currentPassword: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Current password is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("New Password is required"),
    cPassword: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Password confirmation is required").when("password", {
      is: function is(val) {
        return val && val.length > 0 ? true : false;
      },
      then: yup__WEBPACK_IMPORTED_MODULE_3__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_3__.ref("password")], "Password and Confirm Password didn't match")
    })
  });

  var getInputClasses = function getInputClasses(fieldname) {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: initialValues,
    validationSchema: Schema,
    onSubmit: function onSubmit(values, _ref) {
      var setStatus = _ref.setStatus,
          setSubmitting = _ref.setSubmitting;
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: function onReset(values, _ref2) {
      var resetForm = _ref2.resetForm;
      resetForm();
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
    className: "card card-custom",
    onSubmit: formik.handleSubmit,
    children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "card-header py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "card-title align-items-start flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
          className: "card-label font-weight-bolder text-dark",
          children: "Change Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "text-muted font-weight-bold font-size-sm mt-1",
          children: "Change your account password"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "card-toolbar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          type: "submit",
          className: "btn btn-success mr-2",
          disabled: formik.isSubmitting || formik.touched && !formik.isValid,
          children: ["Save Changes", formik.isSubmitting]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
          to: "/user-profile/profile-overview",
          className: "btn btn-secondary",
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "form",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "card-body",
        children: [isError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "alert alert-custom alert-light-danger fade show mb-10",
          role: "alert",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "alert-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              className: "svg-icon svg-icon-3x svg-icon-danger",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_9__.default, {
                src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.toAbsoluteUrl)("/media/svg/icons/Code/Info-circle.svg")
              }), " "]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "alert-text font-weight-bold",
            children: ["Configure user passwords to expire periodically. Users will need warning that their passwords are going to expire,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), "or they might inadvertently get locked out of the system!"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "alert-close",
            onClick: function onClick() {
              return setisError(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "alert",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                "aria-hidden": "true",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
                  className: "ki ki-close"
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label text-alert",
            children: "Current Password"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
              type: "password",
              placeholder: "Current Password",
              className: "form-control form-control-lg form-control-solid mb-2 ".concat(getInputClasses("currentPassword")),
              name: "currentPassword"
            }, formik.getFieldProps("currentPassword"))), formik.touched.currentPassword && formik.errors.currentPassword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback",
              children: formik.errors.currentPassword
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              href: "#",
              className: "text-sm font-weight-bold",
              children: "Forgot password ?"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label text-alert",
            children: "New Password"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
              type: "password",
              placeholder: "New Password",
              className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("password")),
              name: "password"
            }, formik.getFieldProps("password"))), formik.touched.password && formik.errors.password ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback",
              children: formik.errors.password
            }) : null]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label text-alert",
            children: "Verify Password"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
              type: "password",
              placeholder: "Verify Password",
              className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("cPassword")),
              name: "cPassword"
            }, formik.getFieldProps("cPassword"))), formik.touched.cPassword && formik.errors.cPassword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback",
              children: formik.errors.cPassword
            }) : null]
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _Auth__WEBPACK_IMPORTED_MODULE_6__.actions)(ChangePassword));

/***/ }),

/***/ "./resources/js/app/modules/UserProfile/EmailSettings.js":
/*!***************************************************************!*\
  !*** ./resources/js/app/modules/UserProfile/EmailSettings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Auth */ "./resources/js/app/modules/Auth/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function EmailSettings(props) {
  // Fields
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setloading = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [user]); // Methods

  var saveUser = function saveUser(values, setStatus, setSubmitting) {
    setloading(true);
    var updatedUser = Object.assign(user, {
      emailSettings: {
        emailNotification: values.emailNotification,
        sendCopyToPersonalEmail: values.sendCopyToPersonalEmail,
        activityRelatesEmail: {
          youHaveNewNotifications: values.youHaveNewNotifications,
          youAreSentADirectMessage: values.youAreSentADirectMessage,
          someoneAddsYouAsAsAConnection: values.someoneAddsYouAsAsAConnection,
          uponNewOrder: values.uponNewOrder,
          newMembershipApproval: values.newMembershipApproval,
          memberRegistration: values.memberRegistration
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: values.newsAboutKeenthemesProductsAndFeatureUpdates,
          tipsOnGettingMoreOutOfKeen: values.tipsOnGettingMoreOutOfKeen,
          thingsYouMissedSindeYouLastLoggedIntoKeen: values.thingsYouMissedSindeYouLastLoggedIntoKeen,
          newsAboutMetronicOnPartnerProductsAndOtherServices: values.newsAboutMetronicOnPartnerProductsAndOtherServices,
          tipsOnMetronicBusinessProducts: values.tipsOnMetronicBusinessProducts
        }
      }
    }); // user for update preparation

    dispatch(props.setUser(updatedUser));
    setTimeout(function () {
      setloading(false);
      setSubmitting(false); // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  }; // UI Helpers


  var initialValues = {
    emailNotification: user.emailSettings.emailNotification,
    sendCopyToPersonalEmail: user.emailSettings.sendCopyToPersonalEmail,
    youHaveNewNotifications: user.emailSettings.activityRelatesEmail.youHaveNewNotifications,
    youAreSentADirectMessage: user.emailSettings.activityRelatesEmail.youAreSentADirectMessage,
    someoneAddsYouAsAsAConnection: user.emailSettings.activityRelatesEmail.someoneAddsYouAsAsAConnection,
    uponNewOrder: user.emailSettings.activityRelatesEmail.uponNewOrder,
    newMembershipApproval: user.emailSettings.activityRelatesEmail.newMembershipApproval,
    memberRegistration: user.emailSettings.activityRelatesEmail.memberRegistration,
    newsAboutKeenthemesProductsAndFeatureUpdates: user.emailSettings.updatesFromKeenthemes.newsAboutKeenthemesProductsAndFeatureUpdates,
    tipsOnGettingMoreOutOfKeen: user.emailSettings.updatesFromKeenthemes.tipsOnGettingMoreOutOfKeen,
    thingsYouMissedSindeYouLastLoggedIntoKeen: user.emailSettings.updatesFromKeenthemes.thingsYouMissedSindeYouLastLoggedIntoKeen,
    newsAboutMetronicOnPartnerProductsAndOtherServices: user.emailSettings.updatesFromKeenthemes.newsAboutMetronicOnPartnerProductsAndOtherServices,
    tipsOnMetronicBusinessProducts: user.emailSettings.updatesFromKeenthemes.tipsOnMetronicBusinessProducts
  };
  var Schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    emailNotification: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    sendCopyToPersonalEmail: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    youHaveNewNotifications: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    youAreSentADirectMessage: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    someoneAddsYouAsAsAConnection: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    uponNewOrder: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    newMembershipApproval: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    memberRegistration: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    newsAboutKeenthemesProductsAndFeatureUpdates: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    tipsOnGettingMoreOutOfKeen: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    thingsYouMissedSindeYouLastLoggedIntoKeen: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    newsAboutMetronicOnPartnerProductsAndOtherServices: yup__WEBPACK_IMPORTED_MODULE_3__.bool(),
    tipsOnMetronicBusinessProducts: yup__WEBPACK_IMPORTED_MODULE_3__.bool()
  });
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: initialValues,
    validationSchema: Schema,
    onSubmit: function onSubmit(values, _ref) {
      var setStatus = _ref.setStatus,
          setSubmitting = _ref.setSubmitting;
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: function onReset(values, _ref2) {
      var resetForm = _ref2.resetForm;
      resetForm();
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
    className: "card card-custom",
    onSubmit: formik.handleSubmit,
    children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "card-header py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "card-title align-items-start flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "card-label font-weight-bolder text-dark",
          children: "Email Settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "text-muted font-weight-bold font-size-sm mt-1",
          children: "Change your email settings"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "card-toolbar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "submit",
          className: "btn btn-success mr-2",
          disabled: formik.isSubmitting || formik.touched && !formik.isValid,
          children: ["Save Changes", formik.isSubmitting]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
          to: "/user-profile/profile-overview",
          className: "btn btn-secondary",
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "form",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "font-weight-bold mb-6",
              children: "Setup Email Notification:"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right",
            children: "Email Notification"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "switch switch-sm",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "emailNotification",
                  checked: formik.values.emailNotification,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {})]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right",
            children: "Send Copy To Personal Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "switch switch-sm",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "sendCopyToPersonalEmail",
                  checked: formik.values.sendCopyToPersonalEmail,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {})]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "separator separator-dashed my-10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "font-weight-bold mb-6",
              children: "Activity Related Emails:"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right",
            children: "When To Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "checkbox-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "youHaveNewNotifications",
                  checked: formik.values.youHaveNewNotifications,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "You have new notifications"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "youAreSentADirectMessage",
                  checked: formik.values.youAreSentADirectMessage,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "You're sent a direct message"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "someoneAddsYouAsAsAConnection",
                  checked: formik.values.someoneAddsYouAsAsAConnection,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Someone adds you as a connection"]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right",
            children: "When To Escalate Emails"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "checkbox-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox checkbox-primary",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "uponNewOrder",
                  checked: formik.values.uponNewOrder,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Upon new order"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox checkbox-primary",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "newMembershipApproval",
                  checked: formik.values.newMembershipApproval,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "New membership approval"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox checkbox-primary",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "memberRegistration",
                  checked: formik.values.memberRegistration,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Member registration"]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "separator separator-dashed my-10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "font-weight-bold mb-6",
              children: "Updates From Keenthemes:"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right",
            children: "Email You With"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "checkbox-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "newsAboutKeenthemesProductsAndFeatureUpdates",
                  checked: formik.values.newsAboutKeenthemesProductsAndFeatureUpdates,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "News about Keenthemes products and feature updates"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "tipsOnGettingMoreOutOfKeen",
                  checked: formik.values.tipsOnGettingMoreOutOfKeen,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Tips on getting more out of Keen"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "thingsYouMissedSindeYouLastLoggedIntoKeen",
                  checked: formik.values.thingsYouMissedSindeYouLastLoggedIntoKeen,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Things you missed since you last logged into Keen"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "newsAboutMetronicOnPartnerProductsAndOtherServices",
                  checked: formik.values.newsAboutMetronicOnPartnerProductsAndOtherServices,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "News about Metronic on partner products and other services"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "checkbox",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "checkbox",
                  name: "tipsOnMetronicBusinessProducts",
                  checked: formik.values.tipsOnMetronicBusinessProducts,
                  onChange: formik.handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), "Tips on Metronic business products"]
              })]
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _Auth__WEBPACK_IMPORTED_MODULE_5__.actions)(EmailSettings));

/***/ }),

/***/ "./resources/js/app/modules/UserProfile/PersonaInformation.js":
/*!********************************************************************!*\
  !*** ./resources/js/app/modules/UserProfile/PersonaInformation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Auth */ "./resources/js/app/modules/Auth/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function PersonaInformation(props) {
  // Fields
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setloading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      pic = _useState4[0],
      setPic = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user.pic) {
      setPic(user.pic);
    }
  }, [user]); // Methods

  var saveUser = function saveUser(values, setStatus, setSubmitting) {
    setloading(true);
    var updatedUser = Object.assign(user, values); // user for update preparation

    dispatch(props.setUser(updatedUser));
    setTimeout(function () {
      setloading(false);
      setSubmitting(false); // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  }; // UI Helpers


  var initialValues = {
    pic: user.pic,
    firstname: user.firstname,
    lastname: user.lastname,
    companyName: user.companyName,
    phone: user.phone,
    email: user.email,
    website: user.website
  };
  var Schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    pic: yup__WEBPACK_IMPORTED_MODULE_3__.string(),
    firstname: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("First name is required"),
    lastname: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Last name is required"),
    companyName: yup__WEBPACK_IMPORTED_MODULE_3__.string(),
    phone: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Phone is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_3__.string().email("Wrong email format").required("Email is required"),
    website: yup__WEBPACK_IMPORTED_MODULE_3__.string()
  });

  var getInputClasses = function getInputClasses(fieldname) {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: initialValues,
    validationSchema: Schema,
    onSubmit: function onSubmit(values, _ref) {
      var setStatus = _ref.setStatus,
          setSubmitting = _ref.setSubmitting;
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: function onReset(values, _ref2) {
      var resetForm = _ref2.resetForm;
      resetForm();
    }
  });

  var getUserPic = function getUserPic() {
    if (!pic) {
      return "none";
    }

    return "url(".concat(pic, ")");
  };

  var removePic = function removePic() {
    setPic("");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
    className: "card card-custom card-stretch",
    onSubmit: formik.handleSubmit,
    children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "card-header py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "card-title align-items-start flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
          className: "card-label font-weight-bolder text-dark",
          children: "Personal Information"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "text-muted font-weight-bold font-size-sm mt-1",
          children: "Update your personal informaiton"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "card-toolbar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          type: "submit",
          className: "btn btn-success mr-2",
          disabled: formik.isSubmitting || formik.touched && !formik.isValid,
          children: ["Save Changes", formik.isSubmitting]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
          to: "/user-profile/profile-overview",
          className: "btn btn-secondary",
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "form",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
              className: "font-weight-bold mb-6",
              children: "Customer Info"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Avatar"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "image-input image-input-outline",
              id: "kt_profile_avatar",
              style: {
                backgroundImage: "url(".concat((0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.toAbsoluteUrl)("/media/users/blank.png"))
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "image-input-wrapper",
                style: {
                  backgroundImage: "".concat(getUserPic())
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
                className: "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
                "data-action": "change",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Change avatar",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
                  className: "fa fa-pen icon-sm text-muted"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  type: "file" // name="pic"
                  ,
                  accept: ".png, .jpg, .jpeg" // {...formik.getFieldProps("pic")}

                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  type: "hidden",
                  name: "profile_avatar_remove"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
                "data-action": "cancel",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Cancel avatar",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
                  className: "ki ki-bold-close icon-xs text-muted"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                onClick: removePic,
                className: "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
                "data-action": "remove",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Remove avatar",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
                  className: "ki ki-bold-close icon-xs text-muted"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "form-text text-muted",
              children: "Allowed file types: png, jpg, jpeg."
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "First Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
              type: "text",
              placeholder: "First name",
              className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("firstname")),
              name: "firstname"
            }, formik.getFieldProps("firstname"))), formik.touched.firstname && formik.errors.firstname ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback",
              children: formik.errors.firstname
            }) : null]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Last Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
              type: "text",
              placeholder: "Last name",
              className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("lastname")),
              name: "lastname"
            }, formik.getFieldProps("lastname"))), formik.touched.lastname && formik.errors.lastname ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback",
              children: formik.errors.lastname
            }) : null]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Company Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
              type: "text",
              placeholder: "Company name",
              className: "form-control form-control-lg form-control-solid",
              name: "companyName"
            }, formik.getFieldProps("companyName"))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "form-text text-muted",
              children: "If you want your invoices addressed to a company. Leave blank to use your full name."
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "col-lg-9 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
              className: "font-weight-bold mt-10 mb-6",
              children: "Contact Info"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Contact Phone"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "input-group input-group-lg input-group-solid",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "input-group-text",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
                    className: "fa fa-phone"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
                type: "text",
                placeholder: "+1(123)112-11-11",
                className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("phone")),
                name: "phone"
              }, formik.getFieldProps("phone")))]
            }), formik.touched.phone && formik.errors.phone ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback display-block",
              children: formik.errors.phone
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "form-text text-muted",
              children: "We'll never share your phone with anyone else."
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Email Address"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "input-group input-group-lg input-group-solid",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "input-group-text",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
                    className: "fa fa-at"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
                type: "email",
                placeholder: "Email",
                className: "form-control form-control-lg form-control-solid ".concat(getInputClasses("email")),
                name: "email"
              }, formik.getFieldProps("email")))]
            }), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback display-block",
              children: formik.errors.email
            }) : null]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "form-group row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "col-xl-3 col-lg-3 col-form-label",
            children: "Company Site"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "col-lg-9 col-xl-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "input-group input-group-lg input-group-solid",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", _objectSpread({
                type: "text",
                placeholder: "https://keenthemes.com",
                className: "form-control form-control-lg form-control-solid",
                name: "website"
              }, formik.getFieldProps("website")))
            }), formik.touched.website && formik.errors.website ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "invalid-feedback display-block",
              children: formik.errors.website
            }) : null]
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _Auth__WEBPACK_IMPORTED_MODULE_6__.actions)(PersonaInformation));

/***/ }),

/***/ "./resources/js/app/modules/UserProfile/ProfileOverview.js":
/*!*****************************************************************!*\
  !*** ./resources/js/app/modules/UserProfile/ProfileOverview.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileOverview": () => (/* binding */ ProfileOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _metronic_partials_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_metronic/_partials/widgets */ "./resources/js/_metronic/_partials/widgets/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 // import { toAbsoluteUrl } from "../../../_metronic/_helpers";



function ProfileOverview() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "col-lg-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_metronic_partials_widgets__WEBPACK_IMPORTED_MODULE_1__.ListsWidget14, {
        className: "card-stretch gutter-b"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "col-lg-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_metronic_partials_widgets__WEBPACK_IMPORTED_MODULE_1__.ListsWidget10, {
        className: "card-stretch gutter-b"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "col-lg-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_metronic_partials_widgets__WEBPACK_IMPORTED_MODULE_1__.AdvanceTablesWidget7, {
        className: "card-stretch gutter-b"
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/UserProfile/UserProfilePage.js":
/*!*****************************************************************!*\
  !*** ./resources/js/app/modules/UserProfile/UserProfilePage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserProfilePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _metronic_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_metronic/layout */ "./resources/js/_metronic/layout/index.js");
/* harmony import */ var _AccountInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountInformation */ "./resources/js/app/modules/UserProfile/AccountInformation.js");
/* harmony import */ var _ProfileOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileOverview */ "./resources/js/app/modules/UserProfile/ProfileOverview.js");
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChangePassword */ "./resources/js/app/modules/UserProfile/ChangePassword.js");
/* harmony import */ var _PersonaInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PersonaInformation */ "./resources/js/app/modules/UserProfile/PersonaInformation.js");
/* harmony import */ var _EmailSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmailSettings */ "./resources/js/app/modules/UserProfile/EmailSettings.js");
/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ProfileCard */ "./resources/js/app/modules/UserProfile/components/ProfileCard.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function UserProfilePage() {
  var suhbeader = (0,_metronic_layout__WEBPACK_IMPORTED_MODULE_1__.useSubheader)();
  suhbeader.setTitle("User profile");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "d-flex flex-row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_7__.ProfileCard, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "flex-row-fluid ml-lg-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
          from: "/user-profile",
          exact: true,
          to: "/user-profile/profile-overview"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          path: "/user-profile/profile-overview",
          component: _ProfileOverview__WEBPACK_IMPORTED_MODULE_3__.ProfileOverview
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          path: "/user-profile/account-information",
          component: _AccountInformation__WEBPACK_IMPORTED_MODULE_2__.default
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          path: "/user-profile/change-password",
          component: _ChangePassword__WEBPACK_IMPORTED_MODULE_4__.default
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          path: "/user-profile/email-settings",
          component: _EmailSettings__WEBPACK_IMPORTED_MODULE_6__.default
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          path: "/user-profile/personal-information",
          component: _PersonaInformation__WEBPACK_IMPORTED_MODULE_5__.default
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/UserProfile/components/ProfileCard.js":
/*!************************************************************************!*\
  !*** ./resources/js/app/modules/UserProfile/components/ProfileCard.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileCard": () => (/* binding */ ProfileCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var _metronic_partials_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_metronic/_partials/dropdowns */ "./resources/js/_metronic/_partials/dropdowns/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable jsx-a11y/anchor-is-valid */










function ProfileCard() {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (_ref) {
    var auth = _ref.auth;
    return auth.user;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {};
  }, [user]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex-row-auto offcanvas-mobile w-250px w-xxl-350px",
      id: "kt_profile_aside",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "card card-custom card-stretch",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "card-body pt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "d-flex justify-content-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "dropdown dropdown-inline",
              alignRight: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Toggle, {
                className: "btn btn-clean btn-hover-light-primary btn-sm btn-icon cursor-pointer",
                variant: "transparent",
                id: "dropdown-toggle-top-user-profile",
                as: _metronic_partials_dropdowns__WEBPACK_IMPORTED_MODULE_3__.DropdownCustomToggler,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: "ki ki-bold-more-hor"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Menu, {
                className: "dropdown-menu dropdown-menu-sm dropdown-menu-right",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_metronic_partials_dropdowns__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu4, {})
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "symbol-label",
                style: {
                  backgroundImage: "url(".concat(user.pic, ")")
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: "symbol-badge bg-success"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: "#",
                className: "font-weight-bolder font-size-h5 text-dark-75 text-hover-primary",
                children: [user.firstname, " ", user.lastname]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-muted",
                children: user.occupation
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: "#",
                  className: "btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1",
                  children: "Chat"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: "#",
                  className: "btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1",
                  children: "Follow"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "py-9",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "d-flex align-items-center justify-content-between mb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "font-weight-bold mr-2",
                children: "Email:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-muted text-hover-primary",
                children: user.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "d-flex align-items-center justify-content-between mb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "font-weight-bold mr-2",
                children: "Phone:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-muted",
                children: user.phone
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "d-flex align-items-center justify-content-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "font-weight-bold mr-2",
                children: "Location:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-muted",
                children: user.address.city
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "navi navi-bold navi-hover navi-active navi-link-rounded",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                to: "/user-profile/profile-overview",
                className: "navi-link py-4",
                activeClassName: "active",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-icon mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "svg-icon",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                      src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/Design/Layers.svg")
                    }), " "]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-text font-size-lg",
                  children: "Profile Overview"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                to: "/user-profile/personal-information",
                className: "navi-link py-4",
                activeClassName: "active",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-icon mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "svg-icon",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                      src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/General/User.svg")
                    }), " "]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-text font-size-lg",
                  children: "Personal Information"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                to: "/user-profile/account-information",
                className: "navi-link py-4",
                activeClassName: "active",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-icon mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "svg-icon",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                      src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/Code/Compiling.svg")
                    }), " "]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-text font-size-lg",
                  children: "Account Information"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                to: "/user-profile/change-password",
                className: "navi-link py-4",
                activeClassName: "active",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-icon mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "svg-icon",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                      src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/Communication/Shield-user.svg")
                    }), " "]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-text font-size-lg",
                  children: "Change Password"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-label",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "label label-light-danger label-rounded font-weight-bold",
                    children: "5"
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                to: "/user-profile/email-settings",
                className: "navi-link py-4",
                activeClassName: "active",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-icon mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "svg-icon",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                      src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/Communication/Mail-opened.svg")
                    }), " "]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "navi-text font-size-lg",
                  children: "Email settings"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
                placement: "right",
                overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
                  children: "Coming soon..."
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "#",
                  className: "navi-link py-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "navi-icon mr-2",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "svg-icon",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                        src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/Layout/Layout-top-panel-6.svg")
                      }), " "]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "navi-text font-size-lg",
                    children: "Saved Credit Cards"
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
                placement: "right",
                overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
                  children: "Coming soon..."
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "#",
                  className: "navi-link py-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "navi-icon mr-2",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "svg-icon",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                        src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/Files/File.svg")
                      }), " "]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "navi-text font-size-lg",
                    children: "Tax information"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "navi-label",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "label label-light-primary label-inline font-weight-bold",
                      children: "new"
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "navi-item mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
                placement: "right",
                overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
                  children: "Coming soon..."
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "#",
                  className: "navi-link py-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "navi-icon mr-2",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "svg-icon",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.default, {
                        src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)("/media/svg/icons/Text/Article.svg")
                      }), " "]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "navi-text",
                    children: "Statements"
                  })]
                })
              })
            })]
          })]
        })
      })
    })
  });
}

/***/ })

}]);