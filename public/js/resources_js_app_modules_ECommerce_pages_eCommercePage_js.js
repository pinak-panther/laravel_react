(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_modules_ECommerce_pages_eCommercePage_js"],{

/***/ "./resources/js/app/modules/ECommerce/_redux/customers/customersActions.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/customers/customersActions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCustomers": () => (/* binding */ fetchCustomers),
/* harmony export */   "fetchCustomer": () => (/* binding */ fetchCustomer),
/* harmony export */   "deleteCustomer": () => (/* binding */ deleteCustomer),
/* harmony export */   "createCustomer": () => (/* binding */ createCustomer),
/* harmony export */   "updateCustomer": () => (/* binding */ updateCustomer),
/* harmony export */   "updateCustomersStatus": () => (/* binding */ updateCustomersStatus),
/* harmony export */   "deleteCustomers": () => (/* binding */ deleteCustomers)
/* harmony export */ });
/* harmony import */ var _customersCrud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customersCrud */ "./resources/js/app/modules/ECommerce/_redux/customers/customersCrud.js");
/* harmony import */ var _customersSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customersSlice */ "./resources/js/app/modules/ECommerce/_redux/customers/customersSlice.js");


var actions = _customersSlice__WEBPACK_IMPORTED_MODULE_1__.customersSlice.actions;
var fetchCustomers = function fetchCustomers(queryParams) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
    }));
    return _customersCrud__WEBPACK_IMPORTED_MODULE_0__.findCustomers(queryParams).then(function (response) {
      var _response$data = response.data,
          totalCount = _response$data.totalCount,
          entities = _response$data.entities;
      dispatch(actions.customersFetched({
        totalCount: totalCount,
        entities: entities
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find customers";
      dispatch(actions.catchError({
        error: error,
        callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
      }));
    });
  };
};
var fetchCustomer = function fetchCustomer(id) {
  return function (dispatch) {
    if (!id) {
      return dispatch(actions.customerFetched({
        customerForEdit: undefined
      }));
    }

    dispatch(actions.startCall({
      callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _customersCrud__WEBPACK_IMPORTED_MODULE_0__.getCustomerById(id).then(function (response) {
      var customer = response.data;
      dispatch(actions.customerFetched({
        customerForEdit: customer
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find customer";
      dispatch(actions.catchError({
        error: error,
        callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteCustomer = function deleteCustomer(id) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _customersCrud__WEBPACK_IMPORTED_MODULE_0__.deleteCustomer(id).then(function (response) {
      dispatch(actions.customerDeleted({
        id: id
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete customer";
      dispatch(actions.catchError({
        error: error,
        callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var createCustomer = function createCustomer(customerForCreation) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _customersCrud__WEBPACK_IMPORTED_MODULE_0__.createCustomer(customerForCreation).then(function (response) {
      var customer = response.data.customer;
      dispatch(actions.customerCreated({
        customer: customer
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't create customer";
      dispatch(actions.catchError({
        error: error,
        callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var updateCustomer = function updateCustomer(customer) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _customersCrud__WEBPACK_IMPORTED_MODULE_0__.updateCustomer(customer).then(function () {
      dispatch(actions.customerUpdated({
        customer: customer
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't update customer";
      dispatch(actions.catchError({
        error: error,
        callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var updateCustomersStatus = function updateCustomersStatus(ids, status) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _customersCrud__WEBPACK_IMPORTED_MODULE_0__.updateStatusForCustomers(ids, status).then(function () {
      dispatch(actions.customersStatusUpdated({
        ids: ids,
        status: status
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't update customers status";
      dispatch(actions.catchError({
        error: error,
        callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteCustomers = function deleteCustomers(ids) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _customersCrud__WEBPACK_IMPORTED_MODULE_0__.deleteCustomers(ids).then(function () {
      dispatch(actions.customersDeleted({
        ids: ids
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete customers";
      dispatch(actions.catchError({
        error: error,
        callType: _customersSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/_redux/customers/customersCrud.js":
/*!******************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/customers/customersCrud.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CUSTOMERS_URL": () => (/* binding */ CUSTOMERS_URL),
/* harmony export */   "createCustomer": () => (/* binding */ createCustomer),
/* harmony export */   "getAllCustomers": () => (/* binding */ getAllCustomers),
/* harmony export */   "getCustomerById": () => (/* binding */ getCustomerById),
/* harmony export */   "findCustomers": () => (/* binding */ findCustomers),
/* harmony export */   "updateCustomer": () => (/* binding */ updateCustomer),
/* harmony export */   "updateStatusForCustomers": () => (/* binding */ updateStatusForCustomers),
/* harmony export */   "deleteCustomer": () => (/* binding */ deleteCustomer),
/* harmony export */   "deleteCustomers": () => (/* binding */ deleteCustomers)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var CUSTOMERS_URL = "api/customers"; // CREATE =>  POST: add a new customer to the server

function createCustomer(customer) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(CUSTOMERS_URL, {
    customer: customer
  });
} // READ

function getAllCustomers() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(CUSTOMERS_URL);
}
function getCustomerById(customerId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(CUSTOMERS_URL, "/").concat(customerId));
} // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result

function findCustomers(queryParams) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(CUSTOMERS_URL, "/find"), {
    queryParams: queryParams
  });
} // UPDATE => PUT: update the customer on the server

function updateCustomer(customer) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(CUSTOMERS_URL, "/").concat(customer.id), {
    customer: customer
  });
} // UPDATE Status

function updateStatusForCustomers(ids, status) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(CUSTOMERS_URL, "/updateStatusForCustomers"), {
    ids: ids,
    status: status
  });
} // DELETE => delete the customer from the server

function deleteCustomer(customerId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete("".concat(CUSTOMERS_URL, "/").concat(customerId));
} // DELETE Customers by ids

function deleteCustomers(ids) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(CUSTOMERS_URL, "/deleteCustomers"), {
    ids: ids
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/_redux/products/productsActions.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/products/productsActions.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProducts": () => (/* binding */ fetchProducts),
/* harmony export */   "fetchProduct": () => (/* binding */ fetchProduct),
/* harmony export */   "deleteProduct": () => (/* binding */ deleteProduct),
/* harmony export */   "createProduct": () => (/* binding */ createProduct),
/* harmony export */   "updateProduct": () => (/* binding */ updateProduct),
/* harmony export */   "updateProductsStatus": () => (/* binding */ updateProductsStatus),
/* harmony export */   "deleteProducts": () => (/* binding */ deleteProducts)
/* harmony export */ });
/* harmony import */ var _productsCrud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsCrud */ "./resources/js/app/modules/ECommerce/_redux/products/productsCrud.js");
/* harmony import */ var _productsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsSlice */ "./resources/js/app/modules/ECommerce/_redux/products/productsSlice.js");


var actions = _productsSlice__WEBPACK_IMPORTED_MODULE_1__.productsSlice.actions;
var fetchProducts = function fetchProducts(queryParams) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
    }));
    return _productsCrud__WEBPACK_IMPORTED_MODULE_0__.findProducts(queryParams).then(function (response) {
      var _response$data = response.data,
          totalCount = _response$data.totalCount,
          entities = _response$data.entities;
      dispatch(actions.productsFetched({
        totalCount: totalCount,
        entities: entities
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find products";
      dispatch(actions.catchError({
        error: error,
        callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
      }));
    });
  };
};
var fetchProduct = function fetchProduct(id) {
  return function (dispatch) {
    if (!id) {
      return dispatch(actions.productFetched({
        productForEdit: undefined
      }));
    }

    dispatch(actions.startCall({
      callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _productsCrud__WEBPACK_IMPORTED_MODULE_0__.getProductById(id).then(function (response) {
      var product = response.data;
      dispatch(actions.productFetched({
        productForEdit: product
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find product";
      dispatch(actions.catchError({
        error: error,
        callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteProduct = function deleteProduct(id) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _productsCrud__WEBPACK_IMPORTED_MODULE_0__.deleteProduct(id).then(function (response) {
      dispatch(actions.productDeleted({
        id: id
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete product";
      dispatch(actions.catchError({
        error: error,
        callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var createProduct = function createProduct(productForCreation) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _productsCrud__WEBPACK_IMPORTED_MODULE_0__.createProduct(productForCreation).then(function (response) {
      var product = response.data.product;
      dispatch(actions.productCreated({
        product: product
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't create product";
      dispatch(actions.catchError({
        error: error,
        callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var updateProduct = function updateProduct(product) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _productsCrud__WEBPACK_IMPORTED_MODULE_0__.updateProduct(product).then(function () {
      dispatch(actions.productUpdated({
        product: product
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't update product";
      dispatch(actions.catchError({
        error: error,
        callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var updateProductsStatus = function updateProductsStatus(ids, status) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _productsCrud__WEBPACK_IMPORTED_MODULE_0__.updateStatusForProducts(ids, status).then(function () {
      dispatch(actions.productsStatusUpdated({
        ids: ids,
        status: status
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't update products status";
      dispatch(actions.catchError({
        error: error,
        callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteProducts = function deleteProducts(ids) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _productsCrud__WEBPACK_IMPORTED_MODULE_0__.deleteProducts(ids).then(function () {
      dispatch(actions.productsDeleted({
        ids: ids
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete products";
      dispatch(actions.catchError({
        error: error,
        callType: _productsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/_redux/products/productsCrud.js":
/*!****************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/products/productsCrud.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCTS_URL": () => (/* binding */ PRODUCTS_URL),
/* harmony export */   "createProduct": () => (/* binding */ createProduct),
/* harmony export */   "getAllProducts": () => (/* binding */ getAllProducts),
/* harmony export */   "getProductById": () => (/* binding */ getProductById),
/* harmony export */   "findProducts": () => (/* binding */ findProducts),
/* harmony export */   "updateProduct": () => (/* binding */ updateProduct),
/* harmony export */   "updateStatusForProducts": () => (/* binding */ updateStatusForProducts),
/* harmony export */   "deleteProduct": () => (/* binding */ deleteProduct),
/* harmony export */   "deleteProducts": () => (/* binding */ deleteProducts)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var PRODUCTS_URL = "api/products"; // CREATE =>  POST: add a new product to the server

function createProduct(product) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(PRODUCTS_URL, {
    product: product
  });
} // READ

function getAllProducts() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(PRODUCTS_URL);
}
function getProductById(productId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(PRODUCTS_URL, "/").concat(productId));
} // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result

function findProducts(queryParams) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(PRODUCTS_URL, "/find"), {
    queryParams: queryParams
  });
} // UPDATE => PUT: update the procuct on the server

function updateProduct(product) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(PRODUCTS_URL, "/").concat(product.id), {
    product: product
  });
} // UPDATE Status

function updateStatusForProducts(ids, status) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(PRODUCTS_URL, "/updateStatusForProducts"), {
    ids: ids,
    status: status
  });
} // DELETE => delete the product from the server

function deleteProduct(productId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete("".concat(PRODUCTS_URL, "/").concat(productId));
} // DELETE Products by ids

function deleteProducts(ids) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(PRODUCTS_URL, "/deleteProducts"), {
    ids: ids
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksActions.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/remarks/remarksActions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchRemarks": () => (/* binding */ fetchRemarks),
/* harmony export */   "fetchRemark": () => (/* binding */ fetchRemark),
/* harmony export */   "deleteRemark": () => (/* binding */ deleteRemark),
/* harmony export */   "createRemark": () => (/* binding */ createRemark),
/* harmony export */   "updateRemark": () => (/* binding */ updateRemark),
/* harmony export */   "deleteRemarks": () => (/* binding */ deleteRemarks)
/* harmony export */ });
/* harmony import */ var _remarksCrud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remarksCrud */ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksCrud.js");
/* harmony import */ var _remarksSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remarksSlice */ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksSlice.js");


var actions = _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.remarksSlice.actions;
var fetchRemarks = function fetchRemarks(queryParams, productId) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
    }));

    if (!productId) {
      return dispatch(actions.remarksFetched({
        totalCount: 0,
        entities: null
      }));
    }

    return _remarksCrud__WEBPACK_IMPORTED_MODULE_0__.findRemarks(queryParams, productId).then(function (response) {
      var _response$data = response.data,
          totalCount = _response$data.totalCount,
          entities = _response$data.entities;
      dispatch(actions.remarksFetched({
        totalCount: totalCount,
        entities: entities
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({
        error: error,
        callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
      }));
    });
  };
};
var fetchRemark = function fetchRemark(id) {
  return function (dispatch) {
    if (!id) {
      return dispatch(actions.remarkFetched({
        remarkForEdit: undefined
      }));
    }

    dispatch(actions.startCall({
      callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _remarksCrud__WEBPACK_IMPORTED_MODULE_0__.getRemarkById(id).then(function (response) {
      var remark = response.data;
      dispatch(actions.remarkFetched({
        remarkForEdit: remark
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find remark";
      dispatch(actions.catchError({
        error: error,
        callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteRemark = function deleteRemark(id) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _remarksCrud__WEBPACK_IMPORTED_MODULE_0__.deleteRemark(id).then(function (response) {
      dispatch(actions.remarkDeleted({
        id: id
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete remark";
      dispatch(actions.catchError({
        error: error,
        callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var createRemark = function createRemark(remarkForCreation) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _remarksCrud__WEBPACK_IMPORTED_MODULE_0__.createRemark(remarkForCreation).then(function (response) {
      var remark = response.data.remark;
      dispatch(actions.remarkCreated({
        remark: remark
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't create remark";
      dispatch(actions.catchError({
        error: error,
        callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var updateRemark = function updateRemark(remark) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _remarksCrud__WEBPACK_IMPORTED_MODULE_0__.updateRemark(remark).then(function () {
      dispatch(actions.remarkUpdated({
        remark: remark
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't update remark";
      dispatch(actions.catchError({
        error: error,
        callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteRemarks = function deleteRemarks(ids) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _remarksCrud__WEBPACK_IMPORTED_MODULE_0__.deleteRemarks(ids).then(function () {
      console.log("delete return");
      dispatch(actions.remarksDeleted({
        ids: ids
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete remarks";
      dispatch(actions.catchError({
        error: error,
        callType: _remarksSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksCrud.js":
/*!**************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/remarks/remarksCrud.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REMARKS_URL": () => (/* binding */ REMARKS_URL),
/* harmony export */   "createRemark": () => (/* binding */ createRemark),
/* harmony export */   "getAllProductRemarksByProductId": () => (/* binding */ getAllProductRemarksByProductId),
/* harmony export */   "getRemarkById": () => (/* binding */ getRemarkById),
/* harmony export */   "findRemarks": () => (/* binding */ findRemarks),
/* harmony export */   "updateRemark": () => (/* binding */ updateRemark),
/* harmony export */   "deleteRemark": () => (/* binding */ deleteRemark),
/* harmony export */   "deleteRemarks": () => (/* binding */ deleteRemarks)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var REMARKS_URL = "api/remarks"; // CREATE =>  POST: add a new remark to the server

function createRemark(remark) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(REMARKS_URL, {
    remark: remark
  });
} // READ
// Server should return filtered remarks by productId

function getAllProductRemarksByProductId(productId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(REMARKS_URL, "?productId=").concat(productId));
}
function getRemarkById(remarkId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(REMARKS_URL, "/").concat(remarkId));
} // Server should return sorted/filtered remarks and merge with items from state
// TODO: Change your URL to REAL API, right now URL is 'api/remarksfind/{productId}'. Should be 'api/remarks/find/{productId}'!!!

function findRemarks(queryParams, productId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(REMARKS_URL, "find/").concat(productId), {
    queryParams: queryParams
  });
} // UPDATE => PUT: update the remark

function updateRemark(remark) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(REMARKS_URL, "/").concat(remark.id), {
    remark: remark
  });
} // DELETE => delete the remark

function deleteRemark(remarkId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete("".concat(REMARKS_URL, "/").concat(remarkId));
} // DELETE Remarks by ids

function deleteRemarks(ids) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(REMARKS_URL, "/deleteRemarks"), {
    ids: ids
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsActions.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/specifications/specificationsActions.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchSpecifications": () => (/* binding */ fetchSpecifications),
/* harmony export */   "fetchSpecification": () => (/* binding */ fetchSpecification),
/* harmony export */   "deleteSpecification": () => (/* binding */ deleteSpecification),
/* harmony export */   "createSpecification": () => (/* binding */ createSpecification),
/* harmony export */   "updateSpecification": () => (/* binding */ updateSpecification),
/* harmony export */   "deleteSpecifications": () => (/* binding */ deleteSpecifications)
/* harmony export */ });
/* harmony import */ var _specificationsCrud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specificationsCrud */ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsCrud.js");
/* harmony import */ var _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specificationsSlice */ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsSlice.js");


var actions = _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.specificationsSlice.actions;
var fetchSpecifications = function fetchSpecifications(queryParams, productId) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
    }));

    if (!productId) {
      return dispatch(actions.specificationsFetched({
        totalCount: 0,
        entities: null
      }));
    }

    return _specificationsCrud__WEBPACK_IMPORTED_MODULE_0__.findSpecifications(queryParams, productId).then(function (response) {
      var _response$data = response.data,
          totalCount = _response$data.totalCount,
          entities = _response$data.entities;
      dispatch(actions.specificationsFetched({
        totalCount: totalCount,
        entities: entities
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find specifications";
      dispatch(actions.catchError({
        error: error,
        callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.list
      }));
    });
  };
};
var fetchSpecification = function fetchSpecification(id) {
  return function (dispatch) {
    if (!id) {
      return dispatch(actions.specificationFetched({
        specificationForEdit: undefined
      }));
    }

    dispatch(actions.startCall({
      callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _specificationsCrud__WEBPACK_IMPORTED_MODULE_0__.getSpecificationById(id).then(function (response) {
      var specification = response.data;
      dispatch(actions.specificationFetched({
        specificationForEdit: specification
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't find specification";
      dispatch(actions.catchError({
        error: error,
        callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteSpecification = function deleteSpecification(id) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _specificationsCrud__WEBPACK_IMPORTED_MODULE_0__.deleteSpecification(id).then(function (response) {
      dispatch(actions.specificationDeleted({
        id: id
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete specification";
      dispatch(actions.catchError({
        error: error,
        callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var createSpecification = function createSpecification(specificationForCreation) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _specificationsCrud__WEBPACK_IMPORTED_MODULE_0__.createSpecification(specificationForCreation).then(function (response) {
      var specification = response.data.specification;
      dispatch(actions.specificationCreated({
        specification: specification
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't create specification";
      dispatch(actions.catchError({
        error: error,
        callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var updateSpecification = function updateSpecification(specification) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _specificationsCrud__WEBPACK_IMPORTED_MODULE_0__.updateSpecification(specification).then(function () {
      dispatch(actions.specificationUpdated({
        specification: specification
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't update specification";
      dispatch(actions.catchError({
        error: error,
        callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};
var deleteSpecifications = function deleteSpecifications(ids) {
  return function (dispatch) {
    dispatch(actions.startCall({
      callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
    }));
    return _specificationsCrud__WEBPACK_IMPORTED_MODULE_0__.deleteSpecifications(ids).then(function () {
      dispatch(actions.specificationsDeleted({
        ids: ids
      }));
    })["catch"](function (error) {
      error.clientMessage = "Can't delete specifications";
      dispatch(actions.catchError({
        error: error,
        callType: _specificationsSlice__WEBPACK_IMPORTED_MODULE_1__.callTypes.action
      }));
    });
  };
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsCrud.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/_redux/specifications/specificationsCrud.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPECIFICATIONS_URL": () => (/* binding */ SPECIFICATIONS_URL),
/* harmony export */   "createSpecification": () => (/* binding */ createSpecification),
/* harmony export */   "getAllProductSpecificationsByProductId": () => (/* binding */ getAllProductSpecificationsByProductId),
/* harmony export */   "getSpecificationById": () => (/* binding */ getSpecificationById),
/* harmony export */   "findSpecifications": () => (/* binding */ findSpecifications),
/* harmony export */   "updateSpecification": () => (/* binding */ updateSpecification),
/* harmony export */   "deleteSpecification": () => (/* binding */ deleteSpecification),
/* harmony export */   "deleteSpecifications": () => (/* binding */ deleteSpecifications)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var SPECIFICATIONS_URL = "api/specifications"; // CREATE =>  POST: add a new specifications to the server

function createSpecification(specification) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(SPECIFICATIONS_URL, {
    specification: specification
  });
} // READ
// Server should return filtered specifications by productId

function getAllProductSpecificationsByProductId(productId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(SPECIFICATIONS_URL, "?productId=").concat(productId));
}
function getSpecificationById(specificationId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(SPECIFICATIONS_URL, "/").concat(specificationId));
} // Server should return sorted/filtered specifications and merge with items from state
// TODO: Change your URL to REAL API, right now URL is 'api/specificationsfind/{productId}'. Should be 'api/specifications/find/{productId}'!!!

function findSpecifications(queryParams, productId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(SPECIFICATIONS_URL, "find/").concat(productId), {
    queryParams: queryParams
  });
} // UPDATE => PUT: update the specification

function updateSpecification(specification) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(SPECIFICATIONS_URL, "/").concat(specification.id), {
    specification: specification
  });
} // DELETE => delete the specification

function deleteSpecification(specificationId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete("".concat(SPECIFICATIONS_URL, "/").concat(specificationId));
} // DELETE specifications by ids

function deleteSpecifications(ids) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(SPECIFICATIONS_URL, "/deleteSpecifications"), {
    ids: ids
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/CustomersCard.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/CustomersCard.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersCard": () => (/* binding */ CustomersCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _customers_filter_CustomersFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-filter/CustomersFilter */ "./resources/js/app/modules/ECommerce/pages/customers/customers-filter/CustomersFilter.js");
/* harmony import */ var _customers_table_CustomersTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-table/CustomersTable */ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/CustomersTable.js");
/* harmony import */ var _customers_grouping_CustomersGrouping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-grouping/CustomersGrouping */ "./resources/js/app/modules/ECommerce/pages/customers/customers-grouping/CustomersGrouping.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function CustomersCard() {
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_5__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: customersUIContext.ids,
      newCustomerButtonClick: customersUIContext.newCustomerButtonClick
    };
  }, [customersUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.Card, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
      title: "Customers list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.CardHeaderToolbar, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: customersUIProps.newCustomerButtonClick,
          children: "New Customer"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_customers_filter_CustomersFilter__WEBPACK_IMPORTED_MODULE_2__.CustomersFilter, {}), customersUIProps.ids.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_customers_grouping_CustomersGrouping__WEBPACK_IMPORTED_MODULE_4__.CustomersGrouping, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_customers_table_CustomersTable__WEBPACK_IMPORTED_MODULE_3__.CustomersTable, {})]
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/CustomersPage.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/CustomersPage.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPage": () => (/* binding */ CustomersPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _customers_loading_dialog_CustomersLoadingDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers-loading-dialog/CustomersLoadingDialog */ "./resources/js/app/modules/ECommerce/pages/customers/customers-loading-dialog/CustomersLoadingDialog.js");
/* harmony import */ var _customer_edit_dialog_CustomerEditDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-edit-dialog/CustomerEditDialog */ "./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditDialog.js");
/* harmony import */ var _customer_delete_dialog_CustomerDeleteDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-delete-dialog/CustomerDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/customers/customer-delete-dialog/CustomerDeleteDialog.js");
/* harmony import */ var _customers_delete_dialog_CustomersDeleteDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-delete-dialog/CustomersDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/customers/customers-delete-dialog/CustomersDeleteDialog.js");
/* harmony import */ var _customers_fetch_dialog_CustomersFetchDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-fetch-dialog/CustomersFetchDialog */ "./resources/js/app/modules/ECommerce/pages/customers/customers-fetch-dialog/CustomersFetchDialog.js");
/* harmony import */ var _customers_update_status_dialog_CustomersUpdateStateDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers-update-status-dialog/CustomersUpdateStateDialog */ "./resources/js/app/modules/ECommerce/pages/customers/customers-update-status-dialog/CustomersUpdateStateDialog.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var _CustomersCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomersCard */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersCard.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












function CustomersPage(_ref) {
  var history = _ref.history;
  var customersUIEvents = {
    newCustomerButtonClick: function newCustomerButtonClick() {
      history.push("/e-commerce/customers/new");
    },
    openEditCustomerDialog: function openEditCustomerDialog(id) {
      history.push("/e-commerce/customers/".concat(id, "/edit"));
    },
    openDeleteCustomerDialog: function openDeleteCustomerDialog(id) {
      history.push("/e-commerce/customers/".concat(id, "/delete"));
    },
    openDeleteCustomersDialog: function openDeleteCustomersDialog() {
      history.push("/e-commerce/customers/deleteCustomers");
    },
    openFetchCustomersDialog: function openFetchCustomersDialog() {
      history.push("/e-commerce/customers/fetch");
    },
    openUpdateCustomersStatusDialog: function openUpdateCustomersStatusDialog() {
      history.push("/e-commerce/customers/updateStatus");
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_CustomersUIContext__WEBPACK_IMPORTED_MODULE_7__.CustomersUIProvider, {
    customersUIEvents: customersUIEvents,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customers_loading_dialog_CustomersLoadingDialog__WEBPACK_IMPORTED_MODULE_1__.CustomersLoadingDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/e-commerce/customers/new",
      children: function children(_ref2) {
        var history = _ref2.history,
            match = _ref2.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customer_edit_dialog_CustomerEditDialog__WEBPACK_IMPORTED_MODULE_2__.CustomerEditDialog, {
          show: match != null,
          onHide: function onHide() {
            history.push("/e-commerce/customers");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/e-commerce/customers/:id/edit",
      children: function children(_ref3) {
        var history = _ref3.history,
            match = _ref3.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customer_edit_dialog_CustomerEditDialog__WEBPACK_IMPORTED_MODULE_2__.CustomerEditDialog, {
          show: match != null,
          id: match && match.params.id,
          onHide: function onHide() {
            history.push("/e-commerce/customers");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/e-commerce/customers/deleteCustomers",
      children: function children(_ref4) {
        var history = _ref4.history,
            match = _ref4.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customers_delete_dialog_CustomersDeleteDialog__WEBPACK_IMPORTED_MODULE_4__.CustomersDeleteDialog, {
          show: match != null,
          onHide: function onHide() {
            history.push("/e-commerce/customers");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/e-commerce/customers/:id/delete",
      children: function children(_ref5) {
        var history = _ref5.history,
            match = _ref5.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customer_delete_dialog_CustomerDeleteDialog__WEBPACK_IMPORTED_MODULE_3__.CustomerDeleteDialog, {
          show: match != null,
          id: match && match.params.id,
          onHide: function onHide() {
            history.push("/e-commerce/customers");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/e-commerce/customers/fetch",
      children: function children(_ref6) {
        var history = _ref6.history,
            match = _ref6.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customers_fetch_dialog_CustomersFetchDialog__WEBPACK_IMPORTED_MODULE_5__.CustomersFetchDialog, {
          show: match != null,
          onHide: function onHide() {
            history.push("/e-commerce/customers");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/e-commerce/customers/updateStatus",
      children: function children(_ref7) {
        var history = _ref7.history,
            match = _ref7.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customers_update_status_dialog_CustomersUpdateStateDialog__WEBPACK_IMPORTED_MODULE_6__.CustomersUpdateStateDialog, {
          show: match != null,
          onHide: function onHide() {
            history.push("/e-commerce/customers");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_CustomersCard__WEBPACK_IMPORTED_MODULE_8__.CustomersCard, {})]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCustomersUIContext": () => (/* binding */ useCustomersUIContext),
/* harmony export */   "CustomersUIConsumer": () => (/* binding */ CustomersUIConsumer),
/* harmony export */   "CustomersUIProvider": () => (/* binding */ CustomersUIProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomersUIHelpers */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var CustomersUIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useCustomersUIContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CustomersUIContext);
}
var CustomersUIConsumer = CustomersUIContext.Consumer;
function CustomersUIProvider(_ref) {
  var customersUIEvents = _ref.customersUIEvents,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__.initialFilter),
      _useState2 = _slicedToArray(_useState, 2),
      queryParams = _useState2[0],
      setQueryParamsBase = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      ids = _useState4[0],
      setIds = _useState4[1];

  var setQueryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextQueryParams) {
    setQueryParamsBase(function (prevQueryParams) {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isFunction)(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);
  var initCustomer = {
    id: undefined,
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    gender: "Female",
    status: 0,
    dateOfBbirth: "",
    ipAddress: "",
    type: 1
  };
  var value = {
    queryParams: queryParams,
    setQueryParamsBase: setQueryParamsBase,
    ids: ids,
    setIds: setIds,
    setQueryParams: setQueryParams,
    initCustomer: initCustomer,
    newCustomerButtonClick: customersUIEvents.newCustomerButtonClick,
    openEditCustomerDialog: customersUIEvents.openEditCustomerDialog,
    openDeleteCustomerDialog: customersUIEvents.openDeleteCustomerDialog,
    openDeleteCustomersDialog: customersUIEvents.openDeleteCustomersDialog,
    openFetchCustomersDialog: customersUIEvents.openFetchCustomersDialog,
    openUpdateCustomersStatusDialog: customersUIEvents.openUpdateCustomersStatusDialog
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CustomersUIContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerStatusCssClasses": () => (/* binding */ CustomerStatusCssClasses),
/* harmony export */   "CustomerStatusTitles": () => (/* binding */ CustomerStatusTitles),
/* harmony export */   "CustomerTypeCssClasses": () => (/* binding */ CustomerTypeCssClasses),
/* harmony export */   "CustomerTypeTitles": () => (/* binding */ CustomerTypeTitles),
/* harmony export */   "defaultSorted": () => (/* binding */ defaultSorted),
/* harmony export */   "sizePerPageList": () => (/* binding */ sizePerPageList),
/* harmony export */   "initialFilter": () => (/* binding */ initialFilter)
/* harmony export */ });
var CustomerStatusCssClasses = ["danger", "success", "info", ""];
var CustomerStatusTitles = ["Suspended", "Active", "Pending", ""];
var CustomerTypeCssClasses = ["success", "primary", ""];
var CustomerTypeTitles = ["Business", "Individual", ""];
var defaultSorted = [{
  dataField: "id",
  order: "asc"
}];
var sizePerPageList = [{
  text: "3",
  value: 3
}, {
  text: "5",
  value: 5
}, {
  text: "10",
  value: 10
}];
var initialFilter = {
  filter: {
    lastName: "",
    firstName: "",
    email: "",
    ipAddress: ""
  },
  sortOrder: "asc",
  // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customer-delete-dialog/CustomerDeleteDialog.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customer-delete-dialog/CustomerDeleteDialog.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDeleteDialog": () => (/* binding */ CustomerDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/customers/customersActions */ "./resources/js/app/modules/ECommerce/_redux/customers/customersActions.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function CustomerDeleteDialog(_ref) {
  var id = _ref.id,
      show = _ref.show,
      onHide = _ref.onHide;
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_4__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams
    };
  }, [customersUIContext]); // Customers Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.customers.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // if !id we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!id) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [id]); // looking for loading/dispatch

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]);

  var deleteCustomer = function deleteCustomer() {
    // server request for deleting customer by id
    dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__.deleteCustomer(id)).then(function () {
      // refresh list after deletion
      dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__.fetchCustomers(customersUIProps.queryParams)); // clear selections list

      customersUIProps.setIds([]); // closing delete modal

      onHide();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Customer Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete this customer?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Customer is deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteCustomer,
          className: "btn btn-primary btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditDialog.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditDialog.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerEditDialog": () => (/* binding */ CustomerEditDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_redux/customers/customersActions */ "./resources/js/app/modules/ECommerce/_redux/customers/customersActions.js");
/* harmony import */ var _CustomerEditDialogHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomerEditDialogHeader */ "./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditDialogHeader.js");
/* harmony import */ var _CustomerEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomerEditForm */ "./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditForm.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function CustomerEditDialog(_ref) {
  var id = _ref.id,
      show = _ref.show,
      onHide = _ref.onHide;
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_5__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      initCustomer: customersUIContext.initCustomer
    };
  }, [customersUIContext]); // Customers Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      actionsLoading: state.customers.actionsLoading,
      customerForEdit: state.customers.customerForEdit
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      actionsLoading = _useSelector.actionsLoading,
      customerForEdit = _useSelector.customerForEdit;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // server call for getting Customer by id
    dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_2__.fetchCustomer(id));
  }, [id, dispatch]); // server request for saving customer

  var saveCustomer = function saveCustomer(customer) {
    if (!id) {
      // server request for creating customer
      dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_2__.createCustomer(customer)).then(function () {
        return onHide();
      });
    } else {
      // server request for updating customer
      dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_2__.updateCustomer(customer)).then(function () {
        return onHide();
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
    size: "lg",
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CustomerEditDialogHeader__WEBPACK_IMPORTED_MODULE_3__.CustomerEditDialogHeader, {
      id: id
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CustomerEditForm__WEBPACK_IMPORTED_MODULE_4__.CustomerEditForm, {
      saveCustomer: saveCustomer,
      actionsLoading: actionsLoading,
      customer: customerForEdit || customersUIProps.initCustomer,
      onHide: onHide
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditDialogHeader.js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditDialogHeader.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerEditDialogHeader": () => (/* binding */ CustomerEditDialogHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function CustomerEditDialogHeader(_ref) {
  var id = _ref.id;

  // Customers Redux state
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      customerForEdit: state.customers.customerForEdit,
      actionsLoading: state.customers.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      customerForEdit = _useSelector.customerForEdit,
      actionsLoading = _useSelector.actionsLoading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1]; // Title couting


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _title = id ? "" : "New Customer";

    if (customerForEdit && id) {
      _title = "Edit customer '".concat(customerForEdit.firstName, " ").concat(customerForEdit.lastName, "'");
    }

    setTitle(_title); // eslint-disable-next-line
  }, [customerForEdit, actionsLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [actionsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: title
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditForm.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customer-edit-dialog/CustomerEditForm.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerEditForm": () => (/* binding */ CustomerEditForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10




 // Validation schema




var CustomerEditSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
  firstName: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Firstname is required"),
  lastName: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Lastname is required"),
  email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email("Invalid email").required("Email is required"),
  userName: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Username is required"),
  dateOfBbirth: yup__WEBPACK_IMPORTED_MODULE_2__.mixed().nullable(false).required("Date of Birth is required"),
  ipAddress: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("IP Address is required")
});
function CustomerEditForm(_ref) {
  var saveCustomer = _ref.saveCustomer,
      customer = _ref.customer,
      actionsLoading = _ref.actionsLoading,
      onHide = _ref.onHide;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      enableReinitialize: true,
      initialValues: customer,
      validationSchema: CustomerEditSchema,
      onSubmit: function onSubmit(values) {
        saveCustomer(values);
      },
      children: function children(_ref2) {
        var handleSubmit = _ref2.handleSubmit;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            className: "overlay overlay-block cursor-default",
            children: [actionsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "overlay-layer bg-transparent",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "spinner spinner-lg spinner-success"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
              className: "form form-label-right",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "firstName",
                    component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                    placeholder: "First Name",
                    label: "First Name"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "lastName",
                    component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                    placeholder: "Last Name",
                    label: "Last Name"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "userName",
                    component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                    placeholder: "Login",
                    label: "Login"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    type: "email",
                    name: "email",
                    component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                    placeholder: "Email",
                    label: "Email"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.DatePickerField, {
                    name: "dateOfBbirth",
                    label: "Date of Birth"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "ipAddress",
                    component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                    placeholder: "IP Address",
                    label: "IP Address",
                    customFeedbackLabel: "We'll never share customer IP Address with anyone else"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                    name: "Gender",
                    label: "Gender",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "Female",
                      children: "Female"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "Male",
                      children: "Male"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                    name: "type",
                    label: "Type",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "0",
                      children: "Business"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "1",
                      children: "Individual"
                    })]
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              onClick: onHide,
              className: "btn btn-light btn-elevate",
              children: "Cancel"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: " "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "submit",
              onClick: function onClick() {
                return handleSubmit();
              },
              className: "btn btn-primary btn-elevate",
              children: "Save"
            })]
          })]
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-delete-dialog/CustomersDeleteDialog.js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-delete-dialog/CustomersDeleteDialog.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersDeleteDialog": () => (/* binding */ CustomersDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_redux/customers/customersActions */ "./resources/js/app/modules/ECommerce/_redux/customers/customersActions.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function CustomersDeleteDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide;
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_3__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams
    };
  }, [customersUIContext]); // Customers Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.customers.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // if customers weren't selected we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [customersUIProps.ids]); // looking for loading/dispatch

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]);

  var deleteCustomers = function deleteCustomers() {
    // server request for deleting customer by selected ids
    dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_2__.deleteCustomers(customersUIProps.ids)).then(function () {
      // refresh list after deletion
      dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_2__.fetchCustomers(customersUIProps.queryParams)).then(function () {
        // clear selections list
        customersUIProps.setIds([]); // closing delete modal

        onHide();
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_4__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Customers Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete selected customers?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Customer are deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteCustomers,
          className: "btn btn-primary btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-fetch-dialog/CustomersFetchDialog.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-fetch-dialog/CustomersFetchDialog.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersFetchDialog": () => (/* binding */ CustomersFetchDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomersUIHelpers */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var selectedCustomers = function selectedCustomers(entities, ids) {
  var _customers = [];
  ids.forEach(function (id) {
    var customer = entities.find(function (el) {
      return el.id === id;
    });

    if (customer) {
      _customers.push(customer);
    }
  });
  return _customers;
};

function CustomersFetchDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide;
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_3__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: customersUIContext.ids
    };
  }, [customersUIContext]); // Customers Redux state

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      customers: selectedCustomers(state.customers.entities, customersUIProps.ids)
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      customers = _useSelector.customers; // if customers weren't selected we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [customersUIProps.ids]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Fetch selected elements"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
        className: "table table table-head-custom table-vertical-center overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: "STATUS"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: "CUSTOMER"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
          children: customers.map(function (customer) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: customer.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  className: "label label-lg label-light-".concat(_CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__.CustomerStatusCssClasses[customer.status], " label-inline"),
                  children: [" ", _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__.CustomerStatusTitles[customer.status]]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  className: "ml-3",
                  children: [customer.lastName, ", ", customer.firstName]
                })
              })]
            }, "id".concat(customer.id));
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-primary btn-elevate",
          children: "Ok"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-filter/CustomersFilter.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-filter/CustomersFilter.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersFilter": () => (/* binding */ CustomersFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var prepareFilter = function prepareFilter(queryParams, values) {
  var status = values.status,
      type = values.type,
      searchText = values.searchText;

  var newQueryParams = _objectSpread({}, queryParams);

  var filter = {}; // Filter by status

  filter.status = status !== "" ? +status : undefined; // Filter by type

  filter.type = type !== "" ? +type : undefined; // Filter by all fields

  filter.lastName = searchText;

  if (searchText) {
    filter.firstName = searchText;
    filter.email = searchText;
    filter.ipAddress = searchText;
  }

  newQueryParams.filter = filter;
  return newQueryParams;
};

function CustomersFilter(_ref) {
  var listLoading = _ref.listLoading;
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_3__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      queryParams: customersUIContext.queryParams,
      setQueryParams: customersUIContext.setQueryParams
    };
  }, [customersUIContext]); // queryParams, setQueryParams,

  var applyFilter = function applyFilter(values) {
    var newQueryParams = prepareFilter(customersUIProps.queryParams, values);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(newQueryParams, customersUIProps.queryParams)) {
      newQueryParams.pageNumber = 1; // update list by queryParams

      customersUIProps.setQueryParams(newQueryParams);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      initialValues: {
        status: "",
        // values => All=""/Susspended=0/Active=1/Pending=2
        type: "",
        // values => All=""/Business=0/Individual=1
        searchText: ""
      },
      onSubmit: function onSubmit(values) {
        applyFilter(values);
      },
      children: function children(_ref2) {
        var values = _ref2.values,
            handleSubmit = _ref2.handleSubmit,
            handleBlur = _ref2.handleBlur,
            handleChange = _ref2.handleChange,
            setFieldValue = _ref2.setFieldValue;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
          onSubmit: handleSubmit,
          className: "form form-label-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "form-group row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                className: "form-control",
                name: "status",
                placeholder: "Filter by Status" // TODO: Change this code
                ,
                onChange: function onChange(e) {
                  setFieldValue("status", e.target.value);
                  handleSubmit();
                },
                onBlur: handleBlur,
                value: values.status,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "",
                  children: "All"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "0",
                  children: "Susspended"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "1",
                  children: "Active"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "2",
                  children: "Pending"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                className: "form-text text-muted",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Filter"
                }), " by Status"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                className: "form-control",
                placeholder: "Filter by Type",
                name: "type",
                onBlur: handleBlur,
                onChange: function onChange(e) {
                  setFieldValue("type", e.target.value);
                  handleSubmit();
                },
                value: values.type,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "",
                  children: "All"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "0",
                  children: "Business"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "1",
                  children: "Individual"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                className: "form-text text-muted",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Filter"
                }), " by Type"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                className: "form-control",
                name: "searchText",
                placeholder: "Search",
                onBlur: handleBlur,
                value: values.searchText,
                onChange: function onChange(e) {
                  setFieldValue("searchText", e.target.value);
                  handleSubmit();
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                className: "form-text text-muted",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Search"
                }), " in all fields"]
              })]
            })]
          })
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-grouping/CustomersGrouping.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-grouping/CustomersGrouping.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersGrouping": () => (/* binding */ CustomersGrouping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function CustomersGrouping() {
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_1__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      openDeleteCustomersDialog: customersUIContext.openDeleteCustomersDialog,
      openFetchCustomersDialog: customersUIContext.openFetchCustomersDialog,
      openUpdateCustomersStatusDialog: customersUIContext.openUpdateCustomersStatusDialog
    };
  }, [customersUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "form",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "row align-items-center form-group-actions margin-top-20 margin-bottom-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-xl-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "form-group form-group-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "form-label form-label-no-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              className: "font-bold font-danger",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                children: ["Selected records count: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
                  children: customersUIProps.ids.length
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-danger font-weight-bolder font-size-sm",
              onClick: customersUIProps.openDeleteCustomersDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-trash"
              }), " Delete All"]
            }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-light-primary font-weight-bolder font-size-sm",
              onClick: customersUIProps.openFetchCustomersDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-stream"
              }), " Fetch Selected"]
            }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-light-primary font-weight-bolder font-size-sm",
              onClick: customersUIProps.openUpdateCustomersStatusDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-sync-alt"
              }), " Update Status"]
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-loading-dialog/CustomersLoadingDialog.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-loading-dialog/CustomersLoadingDialog.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersLoadingDialog": () => (/* binding */ CustomersLoadingDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function CustomersLoadingDialog() {
  // Customers Redux state
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.customers.listLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // looking for loading/dispatch


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.LoadingDialog, {
    isLoading: isLoading,
    text: "Loading ..."
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/CustomersTable.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-table/CustomersTable.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersTable": () => (/* binding */ CustomersTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/customers/customersActions */ "./resources/js/app/modules/ECommerce/_redux/customers/customersActions.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CustomersUIHelpers */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js");
/* harmony import */ var _column_formatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./column-formatters */ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html













function CustomersTable() {
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_8__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams,
      setQueryParams: customersUIContext.setQueryParams,
      openEditCustomerDialog: customersUIContext.openEditCustomerDialog,
      openDeleteCustomerDialog: customersUIContext.openDeleteCustomerDialog
    };
  }, [customersUIContext]); // Getting curret state of customers list from store (Redux)

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return {
      currentState: state.customers
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual),
      currentState = _useSelector.currentState;

  var totalCount = currentState.totalCount,
      entities = currentState.entities,
      listLoading = currentState.listLoading; // Customers Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // clear selections list
    customersUIProps.setIds([]); // server call by queryParams

    dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__.fetchCustomers(customersUIProps.queryParams)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.queryParams, dispatch]); // Table columns

  var columns = [{
    dataField: "id",
    text: "ID",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.sortCaret,
    headerSortingClasses: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.headerSortingClasses
  }, {
    dataField: "firstName",
    text: "Firstname",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.sortCaret,
    headerSortingClasses: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.headerSortingClasses
  }, {
    dataField: "lastName",
    text: "Lastname",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.sortCaret,
    headerSortingClasses: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.headerSortingClasses
  }, {
    dataField: "email",
    text: "Email",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.sortCaret,
    headerSortingClasses: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.headerSortingClasses
  }, {
    dataField: "gender",
    text: "Gender",
    sort: false,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.sortCaret
  }, {
    dataField: "status",
    text: "Status",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.sortCaret,
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.StatusColumnFormatter,
    headerSortingClasses: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.headerSortingClasses
  }, {
    dataField: "type",
    text: "Type",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.sortCaret,
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.TypeColumnFormatter
  }, {
    dataField: "action",
    text: "Actions",
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.ActionsColumnFormatter,
    formatExtraData: {
      openEditCustomerDialog: customersUIProps.openEditCustomerDialog,
      openDeleteCustomerDialog: customersUIProps.openDeleteCustomerDialog
    },
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px"
    }
  }]; // Table pagination properties

  var paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_5__.sizePerPageList,
    sizePerPage: customersUIProps.queryParams.pageSize,
    page: customersUIProps.queryParams.pageNumber
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      pagination: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paginationOptions),
      children: function children(_ref) {
        var paginationProps = _ref.paginationProps,
            paginationTableProps = _ref.paginationTableProps;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_7__.Pagination, {
          isLoading: listLoading,
          paginationProps: paginationProps,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
            wrapperClasses: "table-responsive",
            bordered: false,
            classes: "table table-head-custom table-vertical-center overflow-hidden",
            bootstrap4: true,
            remote: true,
            keyField: "id",
            data: entities === null ? [] : entities,
            columns: columns,
            defaultSorted: _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_5__.defaultSorted,
            onTableChange: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.getHandlerTableChange)(customersUIProps.setQueryParams),
            selectRow: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.getSelectRow)({
              entities: entities,
              ids: customersUIProps.ids,
              setIds: customersUIProps.setIds
            })
          }, paginationTableProps), {}, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.PleaseWaitMessage, {
              entities: entities
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.NoRecordsFoundMessage, {
              entities: entities
            })]
          }))
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/ActionsColumnFormatter.js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/ActionsColumnFormatter.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsColumnFormatter": () => (/* binding */ ActionsColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */






function ActionsColumnFormatter(cellContent, row, rowIndex, _ref) {
  var openEditCustomerDialog = _ref.openEditCustomerDialog,
      openDeleteCustomerDialog = _ref.openDeleteCustomerDialog;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      title: "Edit customer",
      className: "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
      onClick: function onClick() {
        return openEditCustomerDialog(row.id);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "svg-icon svg-icon-md svg-icon-primary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__.default, {
          src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/Communication/Write.svg")
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: " "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      title: "Delete customer",
      className: "btn btn-icon btn-light btn-hover-danger btn-sm",
      onClick: function onClick() {
        return openDeleteCustomerDialog(row.id);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "svg-icon svg-icon-md svg-icon-danger",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__.default, {
          src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/General/Trash.svg")
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/StatusColumnFormatter.js":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/StatusColumnFormatter.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusColumnFormatter": () => (/* binding */ StatusColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CustomersUIHelpers */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel



function StatusColumnFormatter(cellContent, row) {
  var getLabelCssClasses = function getLabelCssClasses() {
    return "label label-lg label-light-".concat(_CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_1__.CustomerStatusCssClasses[row.status], " label-inline");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: getLabelCssClasses(),
    children: _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_1__.CustomerStatusTitles[row.status]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/TypeColumnFormatter.js":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/TypeColumnFormatter.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeColumnFormatter": () => (/* binding */ TypeColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CustomersUIHelpers */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel





function TypeColumnFormatter(cellContent, row) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "label label-dot label-".concat(_CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_1__.CustomerTypeCssClasses[row.type], " mr-2")
    }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "font-bold font-".concat(_CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_1__.CustomerTypeCssClasses[row.type]),
      children: _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_1__.CustomerTypeTitles[row.type]
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/index.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusColumnFormatter": () => (/* reexport safe */ _StatusColumnFormatter__WEBPACK_IMPORTED_MODULE_0__.StatusColumnFormatter),
/* harmony export */   "TypeColumnFormatter": () => (/* reexport safe */ _TypeColumnFormatter__WEBPACK_IMPORTED_MODULE_1__.TypeColumnFormatter),
/* harmony export */   "ActionsColumnFormatter": () => (/* reexport safe */ _ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_2__.ActionsColumnFormatter)
/* harmony export */ });
/* harmony import */ var _StatusColumnFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/StatusColumnFormatter.js");
/* harmony import */ var _TypeColumnFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/TypeColumnFormatter.js");
/* harmony import */ var _ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionsColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/customers/customers-table/column-formatters/ActionsColumnFormatter.js");
// TODO: Rename all formatters




/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/customers/customers-update-status-dialog/CustomersUpdateStateDialog.js":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/customers/customers-update-status-dialog/CustomersUpdateStateDialog.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersUpdateStateDialog": () => (/* binding */ CustomersUpdateStateDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomersUIHelpers */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIHelpers.js");
/* harmony import */ var _redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/customers/customersActions */ "./resources/js/app/modules/ECommerce/_redux/customers/customersActions.js");
/* harmony import */ var _CustomersUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CustomersUIContext */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var selectedCustomers = function selectedCustomers(entities, ids) {
  var _customers = [];
  ids.forEach(function (id) {
    var customer = entities.find(function (el) {
      return el.id === id;
    });

    if (customer) {
      _customers.push(customer);
    }
  });
  return _customers;
};

function CustomersUpdateStateDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide;
  // Customers UI Context
  var customersUIContext = (0,_CustomersUIContext__WEBPACK_IMPORTED_MODULE_4__.useCustomersUIContext)();
  var customersUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams
    };
  }, [customersUIContext]); // Customers Redux state

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      customers: selectedCustomers(state.customers.entities, customersUIProps.ids),
      isLoading: state.customers.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      customers = _useSelector.customers,
      isLoading = _useSelector.isLoading; // if !id we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [customersUIProps.ids]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var updateStatus = function updateStatus() {
    // server request for update customers status by selected ids
    dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__.updateCustomersStatus(customersUIProps.ids, status)).then(function () {
      // refresh list after deletion
      dispatch(_redux_customers_customersActions__WEBPACK_IMPORTED_MODULE_3__.fetchCustomers(customersUIProps.queryParams)).then(function () {
        // clear selections list
        customersUIProps.setIds([]); // closing delete modal

        onHide();
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Status has been updated for selected customers"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      className: "overlay overlay-block cursor-default",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "overlay-layer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "spinner spinner-lg spinner-primary"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
        className: "table table table-head-custom table-vertical-center overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              children: "STATUS"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              children: "CUSTOMER"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
          children: customers.map(function (customer) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: customer.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "label label-lg label-light-".concat(_CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__.CustomerStatusCssClasses[customer.status], " label-inline"),
                  children: [" ", _CustomersUIHelpers__WEBPACK_IMPORTED_MODULE_2__.CustomerStatusTitles[customer.status]]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "ml-3",
                  children: [customer.lastName, ", ", customer.firstName]
                })
              })]
            }, "id".concat(customer.id));
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      className: "form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
          className: "form-control",
          value: status,
          onChange: function onChange(e) {
            return setStatus(+e.target.value);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "0",
            children: "Suspended"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "1",
            children: "Active"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "2",
            children: "Pending"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate mr-3",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: updateStatus,
          className: "btn btn-primary btn-elevate",
          children: "Update Status"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/eCommercePage.js":
/*!*******************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/eCommercePage.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eCommercePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _customers_CustomersPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers/CustomersPage */ "./resources/js/app/modules/ECommerce/pages/customers/CustomersPage.js");
/* harmony import */ var _products_ProductsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/ProductsPage */ "./resources/js/app/modules/ECommerce/pages/products/ProductsPage.js");
/* harmony import */ var _products_product_edit_ProductEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/product-edit/ProductEdit */ "./resources/js/app/modules/ECommerce/pages/products/product-edit/ProductEdit.js");
/* harmony import */ var _metronic_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_metronic/layout */ "./resources/js/_metronic/layout/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function eCommercePage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_layout__WEBPACK_IMPORTED_MODULE_4__.LayoutSplashScreen, {}),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, {
      children: [
      /*#__PURE__*/

      /* Redirect from eCommerce root URL to /customers */
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
        exact: true,
        from: "/e-commerce",
        to: "/e-commerce/customers"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_layout__WEBPACK_IMPORTED_MODULE_4__.ContentRoute, {
        path: "/e-commerce/customers",
        component: _customers_CustomersPage__WEBPACK_IMPORTED_MODULE_1__.CustomersPage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_layout__WEBPACK_IMPORTED_MODULE_4__.ContentRoute, {
        path: "/e-commerce/products/new",
        component: _products_product_edit_ProductEdit__WEBPACK_IMPORTED_MODULE_3__.ProductEdit
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_layout__WEBPACK_IMPORTED_MODULE_4__.ContentRoute, {
        path: "/e-commerce/products/:id/edit",
        component: _products_product_edit_ProductEdit__WEBPACK_IMPORTED_MODULE_3__.ProductEdit
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_layout__WEBPACK_IMPORTED_MODULE_4__.ContentRoute, {
        path: "/e-commerce/products",
        component: _products_ProductsPage__WEBPACK_IMPORTED_MODULE_2__.ProductsPage
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/ProductsCard.js":
/*!***************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/ProductsCard.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsCard": () => (/* binding */ ProductsCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _products_filter_ProductsFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-filter/ProductsFilter */ "./resources/js/app/modules/ECommerce/pages/products/products-filter/ProductsFilter.js");
/* harmony import */ var _products_table_ProductsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-table/ProductsTable */ "./resources/js/app/modules/ECommerce/pages/products/products-table/ProductsTable.js");
/* harmony import */ var _products_grouping_ProductsGrouping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-grouping/ProductsGrouping */ "./resources/js/app/modules/ECommerce/pages/products/products-grouping/ProductsGrouping.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function ProductsCard() {
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_5__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: productsUIContext.ids,
      queryParams: productsUIContext.queryParams,
      setQueryParams: productsUIContext.setQueryParams,
      newProductButtonClick: productsUIContext.newProductButtonClick,
      openDeleteProductsDialog: productsUIContext.openDeleteProductsDialog,
      openEditProductPage: productsUIContext.openEditProductPage,
      openUpdateProductsStatusDialog: productsUIContext.openUpdateProductsStatusDialog,
      openFetchProductsDialog: productsUIContext.openFetchProductsDialog
    };
  }, [productsUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.Card, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
      title: "Products list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.CardHeaderToolbar, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: productsUIProps.newProductButtonClick,
          children: "New Product"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_1__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_products_filter_ProductsFilter__WEBPACK_IMPORTED_MODULE_2__.ProductsFilter, {}), productsUIProps.ids.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_products_grouping_ProductsGrouping__WEBPACK_IMPORTED_MODULE_4__.ProductsGrouping, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_products_table_ProductsTable__WEBPACK_IMPORTED_MODULE_3__.ProductsTable, {})]
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/ProductsPage.js":
/*!***************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/ProductsPage.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _products_loading_dialog_ProductsLoadingDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-loading-dialog/ProductsLoadingDialog */ "./resources/js/app/modules/ECommerce/pages/products/products-loading-dialog/ProductsLoadingDialog.js");
/* harmony import */ var _product_delete_dialog_ProductDeleteDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-delete-dialog/ProductDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-delete-dialog/ProductDeleteDialog.js");
/* harmony import */ var _products_delete_dialog_ProductsDeleteDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-delete-dialog/ProductsDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/products/products-delete-dialog/ProductsDeleteDialog.js");
/* harmony import */ var _products_fetch_dialog_ProductsFetchDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-fetch-dialog/ProductsFetchDialog */ "./resources/js/app/modules/ECommerce/pages/products/products-fetch-dialog/ProductsFetchDialog.js");
/* harmony import */ var _products_update_status_dialog_ProductsUpdateStatusDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-update-status-dialog/ProductsUpdateStatusDialog */ "./resources/js/app/modules/ECommerce/pages/products/products-update-status-dialog/ProductsUpdateStatusDialog.js");
/* harmony import */ var _ProductsCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductsCard */ "./resources/js/app/modules/ECommerce/pages/products/ProductsCard.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function ProductsPage(_ref) {
  var history = _ref.history;
  var productsUIEvents = {
    newProductButtonClick: function newProductButtonClick() {
      history.push("/e-commerce/products/new");
    },
    openEditProductPage: function openEditProductPage(id) {
      history.push("/e-commerce/products/".concat(id, "/edit"));
    },
    openDeleteProductDialog: function openDeleteProductDialog(id) {
      history.push("/e-commerce/products/".concat(id, "/delete"));
    },
    openDeleteProductsDialog: function openDeleteProductsDialog() {
      history.push("/e-commerce/products/deleteProducts");
    },
    openFetchProductsDialog: function openFetchProductsDialog() {
      history.push("/e-commerce/products/fetch");
    },
    openUpdateProductsStatusDialog: function openUpdateProductsStatusDialog() {
      history.push("/e-commerce/products/updateStatus");
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ProductsUIContext__WEBPACK_IMPORTED_MODULE_7__.ProductsUIProvider, {
    productsUIEvents: productsUIEvents,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_products_loading_dialog_ProductsLoadingDialog__WEBPACK_IMPORTED_MODULE_1__.ProductsLoadingDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/e-commerce/products/deleteProducts",
      children: function children(_ref2) {
        var history = _ref2.history,
            match = _ref2.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_products_delete_dialog_ProductsDeleteDialog__WEBPACK_IMPORTED_MODULE_3__.ProductsDeleteDialog, {
          show: match != null,
          onHide: function onHide() {
            history.push("/e-commerce/products");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/e-commerce/products/:id/delete",
      children: function children(_ref3) {
        var history = _ref3.history,
            match = _ref3.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_product_delete_dialog_ProductDeleteDialog__WEBPACK_IMPORTED_MODULE_2__.ProductDeleteDialog, {
          show: match != null,
          id: match && match.params.id,
          onHide: function onHide() {
            history.push("/e-commerce/products");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/e-commerce/products/fetch",
      children: function children(_ref4) {
        var history = _ref4.history,
            match = _ref4.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_products_fetch_dialog_ProductsFetchDialog__WEBPACK_IMPORTED_MODULE_4__.ProductsFetchDialog, {
          show: match != null,
          onHide: function onHide() {
            history.push("/e-commerce/products");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/e-commerce/products/updateStatus",
      children: function children(_ref5) {
        var history = _ref5.history,
            match = _ref5.match;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_products_update_status_dialog_ProductsUpdateStatusDialog__WEBPACK_IMPORTED_MODULE_5__.ProductsUpdateStatusDialog, {
          show: match != null,
          onHide: function onHide() {
            history.push("/e-commerce/products");
          }
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ProductsCard__WEBPACK_IMPORTED_MODULE_6__.ProductsCard, {})]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js":
/*!********************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProductsUIContext": () => (/* binding */ useProductsUIContext),
/* harmony export */   "ProductsUIConsumer": () => (/* binding */ ProductsUIConsumer),
/* harmony export */   "ProductsUIProvider": () => (/* binding */ ProductsUIProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsUIHelpers */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ProductsUIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useProductsUIContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ProductsUIContext);
}
var ProductsUIConsumer = ProductsUIContext.Consumer;
function ProductsUIProvider(_ref) {
  var productsUIEvents = _ref.productsUIEvents,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_2__.initialFilter),
      _useState2 = _slicedToArray(_useState, 2),
      queryParams = _useState2[0],
      setQueryParamsBase = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      ids = _useState4[0],
      setIds = _useState4[1];

  var setQueryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextQueryParams) {
    setQueryParamsBase(function (prevQueryParams) {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isFunction)(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);
  var value = {
    queryParams: queryParams,
    setQueryParamsBase: setQueryParamsBase,
    ids: ids,
    setIds: setIds,
    setQueryParams: setQueryParams,
    newProductButtonClick: productsUIEvents.newProductButtonClick,
    openEditProductPage: productsUIEvents.openEditProductPage,
    openDeleteProductDialog: productsUIEvents.openDeleteProductDialog,
    openDeleteProductsDialog: productsUIEvents.openDeleteProductsDialog,
    openFetchProductsDialog: productsUIEvents.openFetchProductsDialog,
    openUpdateProductsStatusDialog: productsUIEvents.openUpdateProductsStatusDialog
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ProductsUIContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js":
/*!********************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStatusCssClasses": () => (/* binding */ ProductStatusCssClasses),
/* harmony export */   "ProductStatusTitles": () => (/* binding */ ProductStatusTitles),
/* harmony export */   "ProductConditionCssClasses": () => (/* binding */ ProductConditionCssClasses),
/* harmony export */   "ProductConditionTitles": () => (/* binding */ ProductConditionTitles),
/* harmony export */   "defaultSorted": () => (/* binding */ defaultSorted),
/* harmony export */   "sizePerPageList": () => (/* binding */ sizePerPageList),
/* harmony export */   "initialFilter": () => (/* binding */ initialFilter),
/* harmony export */   "AVAILABLE_COLORS": () => (/* binding */ AVAILABLE_COLORS),
/* harmony export */   "AVAILABLE_MANUFACTURES": () => (/* binding */ AVAILABLE_MANUFACTURES)
/* harmony export */ });
var ProductStatusCssClasses = ["success", "info", ""];
var ProductStatusTitles = ["Selling", "Sold"];
var ProductConditionCssClasses = ["success", "danger", ""];
var ProductConditionTitles = ["New", "Used"];
var defaultSorted = [{
  dataField: "id",
  order: "asc"
}];
var sizePerPageList = [{
  text: "3",
  value: 3
}, {
  text: "5",
  value: 5
}, {
  text: "10",
  value: 10
}];
var initialFilter = {
  filter: {
    model: "",
    manufacture: "",
    VINCode: ""
  },
  sortOrder: "asc",
  // asc||desc
  sortField: "VINCode",
  pageNumber: 1,
  pageSize: 10
};
var AVAILABLE_COLORS = ["Red", "CadetBlue", "Eagle", "Gold", "LightSlateGrey", "RoyalBlue", "Crimson", "Blue", "Sienna", "Indigo", "Green", "Violet", "GoldenRod", "OrangeRed", "Khaki", "Teal", "Purple", "Orange", "Pink", "Black", "DarkTurquoise"];
var AVAILABLE_MANUFACTURES = ["Pontiac", "Kia", "Lotus", "Subaru", "Jeep", "Isuzu", "Mitsubishi", "Oldsmobile", "Chevrolet", "Chrysler", "Audi", "Suzuki", "GMC", "Cadillac", "Infinity", "Mercury", "Dodge", "Ram", "Lexus", "Lamborghini", "Honda", "Nissan", "Ford", "Hyundai", "Saab", "Toyota"];

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-delete-dialog/ProductDeleteDialog.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-delete-dialog/ProductDeleteDialog.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDeleteDialog": () => (/* binding */ ProductDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/products/productsActions */ "./resources/js/app/modules/ECommerce/_redux/products/productsActions.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-restricted-imports */









function ProductDeleteDialog(_ref) {
  var id = _ref.id,
      show = _ref.show,
      onHide = _ref.onHide;
  // Products UI Context
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_4__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      setIds: productsUIContext.setIds,
      queryParams: productsUIContext.queryParams
    };
  }, [productsUIContext]); // Products Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.products.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // if !id we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!id) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [id]); // looking for loading/dispatch

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]);

  var deleteProduct = function deleteProduct() {
    // server request for deleting product by id
    dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__.deleteProduct(id)).then(function () {
      // refresh list after deletion
      dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__.fetchProducts(productsUIProps.queryParams)); // clear selections list

      productsUIProps.setIds([]); // closing delete modal

      onHide();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {
      variant: "query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Product Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete this product?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Product is deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteProduct,
          className: "btn btn-delete btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-edit/ProductEdit.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-edit/ProductEdit.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductEdit": () => (/* binding */ ProductEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_products_productsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_redux/products/productsActions */ "./resources/js/app/modules/ECommerce/_redux/products/productsActions.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _ProductEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductEditForm */ "./resources/js/app/modules/ECommerce/pages/products/product-edit/ProductEditForm.js");
/* harmony import */ var _product_specifications_Specifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-specifications/Specifications */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/Specifications.js");
/* harmony import */ var _product_specifications_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-specifications/SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var _metronic_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../_metronic/layout */ "./resources/js/_metronic/layout/index.js");
/* harmony import */ var _product_remarks_RemarksUIContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-remarks/RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var _product_remarks_Remarks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-remarks/Remarks */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/Remarks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */















var initProduct = {
  id: undefined,
  model: "",
  manufacture: "Pontiac",
  modelYear: 2020,
  mileage: 0,
  description: "",
  color: "Red",
  price: 10000,
  condition: 1,
  status: 0,
  VINCode: ""
};
function ProductEdit(_ref) {
  var history = _ref.history,
      id = _ref.match.params.id;
  // Subheader
  var suhbeader = (0,_metronic_layout__WEBPACK_IMPORTED_MODULE_7__.useSubheader)(); // Tabs

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("basic"),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // const layoutDispatch = useContext(LayoutContext.Dispatch);

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      actionsLoading: state.products.actionsLoading,
      productForEdit: state.products.productForEdit
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      actionsLoading = _useSelector.actionsLoading,
      productForEdit = _useSelector.productForEdit;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_2__.fetchProduct(id));
  }, [id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _title = id ? "" : "New Product";

    if (productForEdit && id) {
      _title = "Edit product '".concat(productForEdit.manufacture, " ").concat(productForEdit.model, " - ").concat(productForEdit.modelYear, "'");
    }

    setTitle(_title);
    suhbeader.setTitle(_title); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productForEdit, id]);

  var saveProduct = function saveProduct(values) {
    if (!id) {
      dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_2__.createProduct(values)).then(function () {
        return backToProductsList();
      });
    } else {
      dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_2__.updateProduct(values)).then(function () {
        return backToProductsList();
      });
    }
  };

  var btnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var saveProductClick = function saveProductClick() {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  var backToProductsList = function backToProductsList() {
    history.push("/e-commerce/products");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Card, {
    children: [actionsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
      title: title,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.CardHeaderToolbar, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          type: "button",
          onClick: backToProductsList,
          className: "btn btn-light",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("i", {
            className: "fa fa-arrow-left"
          }), "Back"]
        }), "  ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: "btn btn-light ml-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("i", {
            className: "fa fa-redo"
          }), "Reset"]
        }), "  ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
          type: "submit",
          className: "btn btn-primary ml-2",
          onClick: saveProductClick,
          children: "Save"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ul", {
        className: "nav nav-tabs nav-tabs-line ",
        role: "tablist",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
          className: "nav-item",
          onClick: function onClick() {
            return setTab("basic");
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
            className: "nav-link ".concat(tab === "basic" && "active"),
            "data-toggle": "tab",
            role: "tab",
            "aria-selected": (tab === "basic").toString(),
            children: "Basic info"
          })
        }), id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return setTab("remarks");
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              className: "nav-link ".concat(tab === "remarks" && "active"),
              "data-toggle": "tab",
              role: "button",
              "aria-selected": (tab === "remarks").toString(),
              children: "Product remarks"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
            className: "nav-item",
            onClick: function onClick() {
              return setTab("specs");
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              className: "nav-link ".concat(tab === "specs" && "active"),
              "data-toggle": "tab",
              role: "tab",
              "aria-selected": (tab === "specs").toString(),
              children: "Product specifications"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "mt-5",
        children: [tab === "basic" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ProductEditForm__WEBPACK_IMPORTED_MODULE_4__.ProductEditForm, {
          actionsLoading: actionsLoading,
          product: productForEdit || initProduct,
          btnRef: btnRef,
          saveProduct: saveProduct
        }), tab === "remarks" && id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_product_remarks_RemarksUIContext__WEBPACK_IMPORTED_MODULE_8__.RemarksUIProvider, {
          currentProductId: id,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_product_remarks_Remarks__WEBPACK_IMPORTED_MODULE_9__.Remarks, {})
        }), tab === "specs" && id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_product_specifications_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_6__.SpecificationsUIProvider, {
          currentProductId: id,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_product_specifications_Specifications__WEBPACK_IMPORTED_MODULE_5__.Specifications, {})
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-edit/ProductEditForm.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-edit/ProductEditForm.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductEditForm": () => (/* binding */ ProductEditForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductsUIHelpers */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10




 // Validation schema




var ProductEditSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
  model: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(2, "Minimum 2 symbols").max(50, "Maximum 50 symbols").required("Model is required"),
  manufacture: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(2, "Minimum 2 symbols").max(50, "Maximum 50 symbols").required("Manufacture is required"),
  modelYear: yup__WEBPACK_IMPORTED_MODULE_2__.number().min(1950, "1950 is minimum").max(2020, "2020 is maximum").required("Model year is required"),
  mileage: yup__WEBPACK_IMPORTED_MODULE_2__.number().min(0, "0 is minimum").max(1000000, "1000000 is maximum").required("Mileage is required"),
  color: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Color is required"),
  price: yup__WEBPACK_IMPORTED_MODULE_2__.number().min(1, "$1 is minimum").max(1000000, "$1000000 is maximum").required("Price is required"),
  VINCode: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("VINCode is required")
});
function ProductEditForm(_ref) {
  var product = _ref.product,
      btnRef = _ref.btnRef,
      saveProduct = _ref.saveProduct;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      enableReinitialize: true,
      initialValues: product,
      validationSchema: ProductEditSchema,
      onSubmit: function onSubmit(values) {
        saveProduct(values);
      },
      children: function children(_ref2) {
        var handleSubmit = _ref2.handleSubmit;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
            className: "form form-label-right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                  name: "model",
                  component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                  placeholder: "Model",
                  label: "Model"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                  name: "manufacture",
                  label: "Manufacture",
                  children: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__.AVAILABLE_MANUFACTURES.map(function (manufacture) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                      value: manufacture,
                      children: manufacture
                    }, manufacture);
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                  type: "number",
                  name: "modelYear",
                  component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                  placeholder: "Model year",
                  label: "Model year"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                  type: "number",
                  name: "mileage",
                  component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                  placeholder: "Mileage",
                  label: "Mileage"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                  name: "color",
                  label: "Color",
                  children: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__.AVAILABLE_COLORS.map(function (color) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                      value: color,
                      children: color
                    }, color);
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                  type: "number",
                  name: "price",
                  component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                  placeholder: "Price",
                  label: "Price ($)",
                  customFeedbackLabel: "Please enter Price"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                  name: "VINCode",
                  component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                  placeholder: "VIN code",
                  label: "VIN code"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                  name: "status",
                  label: "Status",
                  children: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__.ProductStatusTitles.map(function (status, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                      value: index,
                      children: status
                    }, status);
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                  name: "condition",
                  label: "Condition",
                  children: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__.ProductConditionTitles.map(function (condition, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                      value: index,
                      children: condition
                    }, condition);
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                children: "Description"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                name: "description",
                as: "textarea",
                className: "form-control"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "submit",
              style: {
                display: "none"
              },
              ref: btnRef,
              onSubmit: function onSubmit() {
                return handleSubmit();
              }
            })]
          })
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarkDeleteDialog.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarkDeleteDialog.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarkDeleteDialog": () => (/* binding */ RemarkDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/remarks/remarksActions */ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksActions.js");
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-restricted-imports */









function RemarkDeleteDialog() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_4__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      id: remarksUIContext.selectedId,
      setIds: remarksUIContext.setIds,
      productId: remarksUIContext.productId,
      queryParams: remarksUIContext.queryParams,
      showDeleteRemarkDialog: remarksUIContext.showDeleteRemarkDialog,
      closeDeleteRemarkDialog: remarksUIContext.closeDeleteRemarkDialog
    };
  }, [remarksUIContext]); // Remarks Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.remarks.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // if !id we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!remarksUIProps.id) {
      remarksUIProps.closeDeleteRemarkDialog();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [remarksUIProps.id]); // looking for loading/dispatch

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]);

  var deleteRemark = function deleteRemark() {
    // server request for deleting remark by id
    dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__.deleteRemark(remarksUIProps.id)).then(function () {
      // refresh list after deletion
      dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__.fetchRemarks(remarksUIProps.queryParams, remarksUIProps.productId)); // clear selections list

      remarksUIProps.setIds([]); // closing delete modal

      remarksUIProps.closeDeleteRemarkDialog();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: remarksUIProps.showDeleteRemarkDialog,
    onHide: remarksUIProps.closeDeleteRemarkDialog,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {
      variant: "query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Remark Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete this remark?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Remark is deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: remarksUIProps.closeDeleteRemarkDialog,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteRemark,
          className: "btn btn-primary btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/Remarks.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/Remarks.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Remarks": () => (/* binding */ Remarks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RemarksFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemarksFilter */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksFilter.js");
/* harmony import */ var _RemarksTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemarksTable */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksTable.js");
/* harmony import */ var _RemarksLoadingDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemarksLoadingDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksLoadingDialog.js");
/* harmony import */ var _RemarksDeleteDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemarksDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksDeleteDialog.js");
/* harmony import */ var _RemarkDeleteDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RemarkDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarkDeleteDialog.js");
/* harmony import */ var _RemarksFetchDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RemarksFetchDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksFetchDialog.js");
/* harmony import */ var _RemarksGrouping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RemarksGrouping */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksGrouping.js");
/* harmony import */ var _remark_edit_dialog_RemarkEditDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remark-edit-dialog/RemarkEditDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditDialog.js");
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













function Remarks() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_9__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: remarksUIContext.ids
    };
  }, [remarksUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemarksLoadingDialog__WEBPACK_IMPORTED_MODULE_3__.RemarksLoadingDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_remark_edit_dialog_RemarkEditDialog__WEBPACK_IMPORTED_MODULE_8__.RemarkEditDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemarkDeleteDialog__WEBPACK_IMPORTED_MODULE_5__.RemarkDeleteDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemarksDeleteDialog__WEBPACK_IMPORTED_MODULE_4__.RemarksDeleteDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemarksFetchDialog__WEBPACK_IMPORTED_MODULE_6__.RemarksFetchDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "form margin-b-30",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemarksFilter__WEBPACK_IMPORTED_MODULE_1__.RemarksFilter, {}), remarksUIProps.ids.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemarksGrouping__WEBPACK_IMPORTED_MODULE_7__.RemarksGrouping, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemarksTable__WEBPACK_IMPORTED_MODULE_2__.RemarksTable, {})]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksDeleteDialog.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksDeleteDialog.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarksDeleteDialog": () => (/* binding */ RemarksDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/remarks/remarksActions */ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksActions.js");
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-restricted-imports */









function RemarksDeleteDialog() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_4__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: remarksUIContext.ids,
      setIds: remarksUIContext.setIds,
      productId: remarksUIContext.productId,
      queryParams: remarksUIContext.queryParams,
      showDeleteRemarksDialog: remarksUIContext.showDeleteRemarksDialog,
      closeDeleteRemarksDialog: remarksUIContext.closeDeleteRemarksDialog
    };
  }, [remarksUIContext]);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.remarks.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!remarksUIProps.ids || remarksUIProps.ids.length === 0) {
      remarksUIProps.closeDeleteRemarksDialog();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [remarksUIProps.ids]);

  var deleteRemarks = function deleteRemarks() {
    dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__.deleteRemarks(remarksUIProps.ids)).then(function () {
      dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__.fetchRemarks(remarksUIProps.queryParams, remarksUIProps.productId)).then(function () {
        remarksUIProps.setIds([]);
        remarksUIProps.closeDeleteRemarksDialog();
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: remarksUIProps.showDeleteRemarksDialog,
    onHide: remarksUIProps.closeDeleteRemarksDialog,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {
      variant: "query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Remarks Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete selected remarks?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Remarks are deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: remarksUIProps.closeDeleteRemarksDialog,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteRemarks,
          className: "btn btn-primary btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksFetchDialog.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksFetchDialog.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarksFetchDialog": () => (/* binding */ RemarksFetchDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var selectedRemarks = function selectedRemarks(entities, ids) {
  var _remarks = [];
  ids.forEach(function (id) {
    var remark = entities.find(function (el) {
      return el.id === id;
    });

    if (remark) {
      _remarks.push(remark);
    }
  });
  return _remarks;
};

function RemarksFetchDialog() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_2__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: remarksUIContext.ids,
      queryParams: remarksUIContext.queryParams,
      showFetchRemarksDialog: remarksUIContext.showFetchRemarksDialog,
      closeFetchRemarksDialog: remarksUIContext.closeFetchRemarksDialog
    };
  }, [remarksUIContext]);

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      remarks: selectedRemarks(state.remarks.entities, remarksUIProps.ids)
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      remarks = _useSelector.remarks;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!remarksUIProps.ids || remarksUIProps.ids.length === 0) {
      remarksUIProps.closeFetchRemarksDialog();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [remarksUIProps.ids]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    show: remarksUIProps.showFetchRemarksDialog,
    onHide: remarksUIProps.closeFetchRemarksDialog,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Fetch selected elements"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Body, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "list-timeline list-timeline-skin-light padding-30",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "list-timeline-items",
          children: remarks.map(function (remark) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "list-timeline-item mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                className: "list-timeline-text",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "label label-lg label-light-success label-inline",
                  style: {
                    width: "60px"
                  },
                  children: ["ID: ", remark.id]
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "ml-5",
                  children: [remark.text, " "]
                })]
              })
            }, remark.id);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          onClick: remarksUIProps.closeFetchRemarksDialog,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          onClick: remarksUIProps.closeFetchRemarksDialog,
          className: "btn btn-primary btn-elevate",
          children: "Ok"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksFilter.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksFilter.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarksFilter": () => (/* binding */ RemarksFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var prepareFilter = function prepareFilter(queryParams, values) {
  var searchText = values.searchText;

  var newQueryParams = _objectSpread({}, queryParams);

  var filter = {};
  filter.text = searchText;
  newQueryParams.filter = filter;
  return newQueryParams;
};

function RemarksFilter() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_3__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      setQueryParams: remarksUIContext.setQueryParams,
      openNewRemarkDialog: remarksUIContext.openNewRemarkDialog,
      queryParams: remarksUIContext.queryParams
    };
  }, [remarksUIContext]);

  var applyFilter = function applyFilter(values) {
    var newQueryParams = prepareFilter(remarksUIProps.queryParams, values);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(newQueryParams, remarksUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      remarksUIProps.setQueryParams(newQueryParams);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "form-filtration",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-md-2 margin-bottom-10-mobile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
            initialValues: {
              searchText: ""
            },
            onSubmit: function onSubmit(values) {
              applyFilter(values);
            },
            children: function children(_ref) {
              var values = _ref.values,
                  handleSubmit = _ref.handleSubmit,
                  handleBlur = _ref.handleBlur,
                  handleChange = _ref.handleChange,
                  setFieldValue = _ref.setFieldValue;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
                onSubmit: handleSubmit,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    className: "form-control",
                    name: "searchText",
                    placeholder: "Search",
                    onBlur: handleBlur,
                    value: values.searchText,
                    onChange: function onChange(e) {
                      setFieldValue("searchText", e.target.value);
                      handleSubmit();
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                    className: "form-text text-muted",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                      children: "Search"
                    }), " in all fields"]
                  })]
                })
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-md-8 margin-bottom-10-mobile"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-md-2 text-right margin-bottom-10-mobile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: "btn btn-primary",
            onClick: function onClick() {
              return remarksUIProps.openNewRemarkDialog();
            },
            children: "Create new remark"
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksGrouping.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksGrouping.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarksGrouping": () => (/* binding */ RemarksGrouping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function RemarksGrouping() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_1__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: remarksUIContext.ids,
      openDeleteRemarksDialog: remarksUIContext.openDeleteRemarksDialog,
      openFetchRemarksDialog: remarksUIContext.openFetchRemarksDialog
    };
  }, [remarksUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "form",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "row align-items-center form-group-actions margin-top-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-xl-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "form-group form-group-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "form-label form-label-no-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              className: "font-bold font-danger mt-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                children: ["Selected records count: ", remarksUIProps.ids.length]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "form-group-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-danger font-weight-bolder font-size-sm",
              onClick: remarksUIProps.openDeleteRemarksDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-trash"
              }), " Delete All"]
            }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-light-primary font-weight-bolder font-size-sm",
              onClick: remarksUIProps.openFetchRemarksDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-stream"
              }), " Fetch Selected"]
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksLoadingDialog.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksLoadingDialog.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarksLoadingDialog": () => (/* binding */ RemarksLoadingDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function RemarksLoadingDialog() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.remarks.listLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.LoadingDialog, {
    isLoading: isLoading,
    text: "Loading ..."
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksTable.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksTable.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarksTable": () => (/* binding */ RemarksTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/remarks/remarksActions */ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksActions.js");
/* harmony import */ var _column_formatters_ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column-formatters/ActionsColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/column-formatters/ActionsColumnFormatter.js");
/* harmony import */ var _RemarksUIHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RemarksUIHelper */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIHelper.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html













function RemarksTable() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_8__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: remarksUIContext.ids,
      setIds: remarksUIContext.setIds,
      queryParams: remarksUIContext.queryParams,
      setQueryParams: remarksUIContext.setQueryParams,
      productId: remarksUIContext.productId,
      openEditRemarkDialog: remarksUIContext.openEditRemarkDialog,
      openDeleteRemarkDialog: remarksUIContext.openDeleteRemarkDialog
    };
  }, [remarksUIContext]); // Getting curret state of products list from store (Redux)

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      currentState: state.remarks
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      currentState = _useSelector.currentState;

  var totalCount = currentState.totalCount,
      entities = currentState.entities,
      listLoading = currentState.listLoading;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    remarksUIProps.setIds([]);
    dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_3__.fetchRemarks(remarksUIProps.queryParams, remarksUIProps.productId)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remarksUIProps.queryParams, dispatch, remarksUIProps.productId]);
  var columns = [{
    dataField: "id",
    text: "ID",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.sortCaret
  }, {
    dataField: "text",
    text: "Text",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.sortCaret
  }, {
    dataField: "dueDate",
    text: "Due date",
    sort: false
  }, {
    dataField: "action",
    text: "Actions",
    formatter: _column_formatters_ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_4__.ActionsColumnFormatter,
    formatExtraData: {
      openEditRemarkDialog: remarksUIProps.openEditRemarkDialog,
      openDeleteRemarkDialog: remarksUIProps.openDeleteRemarkDialog
    },
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px"
    }
  }];
  var paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: _RemarksUIHelper__WEBPACK_IMPORTED_MODULE_5__.sizePerPageList,
    sizePerPage: remarksUIProps.queryParams.pageSize,
    page: remarksUIProps.queryParams.pageNumber
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      pagination: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paginationOptions),
      children: function children(_ref) {
        var paginationProps = _ref.paginationProps,
            paginationTableProps = _ref.paginationTableProps;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_6__.Pagination, {
          isLoading: listLoading,
          paginationProps: paginationProps,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
            wrapperClasses: "table-responsive",
            classes: "table table-head-custom table-vertical-center overflow-hidden",
            bordered: false,
            bootstrap4: true,
            remote: true,
            keyField: "id",
            data: entities === null ? [] : entities,
            columns: columns,
            defaultSorted: _RemarksUIHelper__WEBPACK_IMPORTED_MODULE_5__.defaultSorted,
            onTableChange: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.getHandlerTableChange)(remarksUIProps.setQueryParams),
            selectRow: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.getSelectRow)({
              entities: entities,
              ids: remarksUIProps.ids,
              setIds: remarksUIProps.setIds
            })
          }, paginationTableProps), {}, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.PleaseWaitMessage, {
              entities: entities
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.NoRecordsFoundMessage, {
              entities: entities
            })]
          }))
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRemarksUIContext": () => (/* binding */ useRemarksUIContext),
/* harmony export */   "RemarksUIConsumer": () => (/* binding */ RemarksUIConsumer),
/* harmony export */   "RemarksUIProvider": () => (/* binding */ RemarksUIProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RemarksUIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemarksUIHelper */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-unused-vars */




var RemarksUIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useRemarksUIContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RemarksUIContext);
}
var RemarksUIConsumer = RemarksUIContext.Consumer;
function RemarksUIProvider(_ref) {
  var currentProductId = _ref.currentProductId,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentProductId),
      _useState2 = _slicedToArray(_useState, 2),
      productId = _useState2[0],
      setProductId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_RemarksUIHelper__WEBPACK_IMPORTED_MODULE_2__.initialFilter),
      _useState4 = _slicedToArray(_useState3, 2),
      queryParams = _useState4[0],
      setQueryParamsBase = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      ids = _useState6[0],
      setIds = _useState6[1];

  var setQueryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextQueryParams) {
    setQueryParamsBase(function (prevQueryParams) {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isFunction)(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedId = _useState8[0],
      setSelectedId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showEditRemarkDialog = _useState10[0],
      setShowEditRemarkDialog = _useState10[1];

  var initRemark = {
    id: undefined,
    text: "",
    type: 0,
    dueDate: "01/07/2020",
    carId: productId
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initRemark.productId = currentProductId;
    initRemark.carId = currentProductId;
    setProductId(currentProductId); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProductId]);

  var openNewRemarkDialog = function openNewRemarkDialog() {
    setSelectedId(undefined);
    setShowEditRemarkDialog(true);
  };

  var openEditRemarkDialog = function openEditRemarkDialog(id) {
    setSelectedId(id);
    setShowEditRemarkDialog(true);
  };

  var closeEditRemarkDialog = function closeEditRemarkDialog() {
    setSelectedId(undefined);
    setShowEditRemarkDialog(false);
  };

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showDeleteRemarkDialog = _useState12[0],
      setShowDeleteRemarkDialog = _useState12[1];

  var openDeleteRemarkDialog = function openDeleteRemarkDialog(id) {
    setSelectedId(id);
    setShowDeleteRemarkDialog(true);
  };

  var closeDeleteRemarkDialog = function closeDeleteRemarkDialog() {
    setSelectedId(undefined);
    setShowDeleteRemarkDialog(false);
  };

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      showDeleteRemarksDialog = _useState14[0],
      setShowDeleteRemarksDialog = _useState14[1];

  var openDeleteRemarksDialog = function openDeleteRemarksDialog() {
    setShowDeleteRemarksDialog(true);
  };

  var closeDeleteRemarksDialog = function closeDeleteRemarksDialog() {
    setShowDeleteRemarksDialog(false);
  };

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      showFetchRemarksDialog = _useState16[0],
      setShowFetchRemarksDialog = _useState16[1];

  var openFetchRemarksDialog = function openFetchRemarksDialog() {
    setShowFetchRemarksDialog(true);
  };

  var closeFetchRemarksDialog = function closeFetchRemarksDialog() {
    setShowFetchRemarksDialog(false);
  };

  var value = {
    ids: ids,
    setIds: setIds,
    productId: productId,
    setProductId: setProductId,
    queryParams: queryParams,
    setQueryParams: setQueryParams,
    initRemark: initRemark,
    selectedId: selectedId,
    showEditRemarkDialog: showEditRemarkDialog,
    openNewRemarkDialog: openNewRemarkDialog,
    openEditRemarkDialog: openEditRemarkDialog,
    closeEditRemarkDialog: closeEditRemarkDialog,
    showDeleteRemarkDialog: showDeleteRemarkDialog,
    openDeleteRemarkDialog: openDeleteRemarkDialog,
    closeDeleteRemarkDialog: closeDeleteRemarkDialog,
    showDeleteRemarksDialog: showDeleteRemarksDialog,
    openDeleteRemarksDialog: openDeleteRemarksDialog,
    closeDeleteRemarksDialog: closeDeleteRemarksDialog,
    openFetchRemarksDialog: openFetchRemarksDialog,
    closeFetchRemarksDialog: closeFetchRemarksDialog,
    showFetchRemarksDialog: showFetchRemarksDialog
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RemarksUIContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIHelper.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIHelper.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSorted": () => (/* binding */ defaultSorted),
/* harmony export */   "sizePerPageList": () => (/* binding */ sizePerPageList),
/* harmony export */   "initialFilter": () => (/* binding */ initialFilter)
/* harmony export */ });
var defaultSorted = [{
  dataField: "id",
  order: "asc"
}];
var sizePerPageList = [{
  text: "1",
  value: 1
}, {
  text: "3",
  value: 3
}, {
  text: "5",
  value: 5
}];
var initialFilter = {
  filter: {
    text: ""
  },
  sortOrder: "asc",
  // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 5
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/column-formatters/ActionsColumnFormatter.js":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/column-formatters/ActionsColumnFormatter.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsColumnFormatter": () => (/* binding */ ActionsColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */







var ActionsColumnFormatter = function ActionsColumnFormatter(cellContent, row, rowIndex, _ref) {
  var openEditRemarkDialog = _ref.openEditRemarkDialog,
      openDeleteRemarkDialog = _ref.openDeleteRemarkDialog;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
      overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "customers-edit-tooltip",
        children: "Edit remark"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        className: "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
        onClick: function onClick() {
          return openEditRemarkDialog(row.id);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "svg-icon svg-icon-md svg-icon-primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__.default, {
            src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/Communication/Write.svg")
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: " "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
      overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "customers-delete-tooltip",
        children: "Delete remark"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        className: "btn btn-icon btn-light btn-hover-danger btn-sm",
        onClick: function onClick() {
          return openDeleteRemarkDialog(row.id);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "svg-icon svg-icon-md svg-icon-danger",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__.default, {
            src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/General/Trash.svg")
          })
        })
      })
    })]
  });
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditDialog.js":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditDialog.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarkEditDialog": () => (/* binding */ RemarkEditDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_redux/remarks/remarksActions */ "./resources/js/app/modules/ECommerce/_redux/remarks/remarksActions.js");
/* harmony import */ var _RemarkEditDialogHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemarkEditDialogHeader */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditDialogHeader.js");
/* harmony import */ var _RemarkEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemarkEditForm */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditForm.js");
/* harmony import */ var _RemarksUIContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RemarksUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/RemarksUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function getFormattedDate(date) {
  if (typeof date === "string") {
    return date;
  }

  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;
  return month + "/" + day + "/" + year;
}

function RemarkEditDialog() {
  // Remarks UI Context
  var remarksUIContext = (0,_RemarksUIContext__WEBPACK_IMPORTED_MODULE_5__.useRemarksUIContext)();
  var remarksUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      id: remarksUIContext.selectedId,
      setIds: remarksUIContext.setIds,
      productId: remarksUIContext.productId,
      queryParams: remarksUIContext.queryParams,
      showEditRemarkDialog: remarksUIContext.showEditRemarkDialog,
      closeEditRemarkDialog: remarksUIContext.closeEditRemarkDialog,
      initRemark: remarksUIContext.initRemark
    };
  }, [remarksUIContext]); // Remarks Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      actionsLoading: state.remarks.actionsLoading,
      remarkForEdit: state.remarks.remarkForEdit
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      actionsLoading = _useSelector.actionsLoading,
      remarkForEdit = _useSelector.remarkForEdit;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // server request for getting remark by seleted id
    dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_2__.fetchRemark(remarksUIProps.id));
  }, [remarksUIProps.id, dispatch]);

  var saveRemark = function saveRemark(remark) {
    remark.dueDate = getFormattedDate(remark.dueDate);

    if (!remarksUIProps.id) {
      // server request for creating remarks
      dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_2__.createRemark(remark)).then(function () {
        // refresh list after deletion
        dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_2__.fetchRemarks(remarksUIProps.queryParams, remarksUIProps.productId)).then(function () {
          // clear selections list
          remarksUIProps.setIds([]); // closing edit modal

          remarksUIProps.closeEditRemarkDialog();
        });
      });
    } else {
      // server request for updating remarks
      dispatch(_redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_2__.updateRemark(remark)).then(function () {
        // refresh list after deletion
        dispatch( // refresh list after deletion
        _redux_remarks_remarksActions__WEBPACK_IMPORTED_MODULE_2__.fetchRemarks(remarksUIProps.queryParams, remarksUIProps.productId)).then(function () {
          // clear selections list
          remarksUIProps.setIds([]); // closing edit modal

          remarksUIProps.closeEditRemarkDialog();
        });
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
    show: remarksUIProps.showEditRemarkDialog,
    onHide: remarksUIProps.closeEditRemarkDialog,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RemarkEditDialogHeader__WEBPACK_IMPORTED_MODULE_3__.RemarkEditDialogHeader, {
      id: remarksUIProps.id
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RemarkEditForm__WEBPACK_IMPORTED_MODULE_4__.RemarkEditForm, {
      saveRemark: saveRemark,
      actionsLoading: actionsLoading,
      remark: remarkForEdit || remarksUIProps.initRemark,
      onHide: remarksUIProps.closeEditRemarkDialog
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditDialogHeader.js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditDialogHeader.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarkEditDialogHeader": () => (/* binding */ RemarkEditDialogHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-restricted-imports */







function RemarkEditDialogHeader(_ref) {
  var id = _ref.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1]; // Remarks Redux state


  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      remarkForEdit: state.remarks.remarkForEdit,
      actionsLoading: state.remarks.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      remarkForEdit = _useSelector.remarkForEdit,
      actionsLoading = _useSelector.actionsLoading;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _title = id ? "" : "New Remark";

    if (remarkForEdit && id) {
      _title = "Edit remark";
    }

    setTitle(_title); // eslint-disable-next-line
  }, [remarkForEdit, actionsLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [actionsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {
      variant: "query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: title
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditForm.js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-remarks/remark-edit-dialog/RemarkEditForm.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemarkEditForm": () => (/* binding */ RemarkEditForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10




 // Validation schema




var RemarkEditSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
  text: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(2, "Minimum 2 symbols").max(50, "Maximum 50 symbols").required("Text is required"),
  type: yup__WEBPACK_IMPORTED_MODULE_2__.number().required("Type is required"),
  dueDate: yup__WEBPACK_IMPORTED_MODULE_2__.mixed().nullable(false).required("Due date is required")
});
function RemarkEditForm(_ref) {
  var saveRemark = _ref.saveRemark,
      remark = _ref.remark,
      actionsLoading = _ref.actionsLoading,
      onHide = _ref.onHide;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      enableReinitialize: true,
      initialValues: remark,
      validationSchema: RemarkEditSchema,
      onSubmit: function onSubmit(values) {
        return saveRemark(values);
      },
      children: function children(_ref2) {
        var handleSubmit = _ref2.handleSubmit;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            className: "overlay overlay-block cursor-default",
            children: [actionsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "overlay-layer bg-transparent",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "spinner spinner-lg spinner-success"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
              className: "form form-label-right",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "form-group row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "text",
                    component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                    placeholder: "Text",
                    label: "Text"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "form-group row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.DatePickerField, {
                    name: "dueDate",
                    label: "Due date"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "form-group row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                    name: "type",
                    label: "Type",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "0",
                      children: "Info"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "1",
                      children: "Note"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "2",
                      children: "Reminder"
                    })]
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              onClick: onHide,
              className: "btn btn-light btn-elevate",
              children: "Cancel"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: " "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "submit",
              onClick: function onClick() {
                return handleSubmit();
              },
              className: "btn btn-primary btn-elevate",
              children: "Save"
            })]
          })]
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationDeleteDialog.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationDeleteDialog.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationDeleteDialog": () => (/* binding */ SpecificationDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/specifications/specificationsActions */ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsActions.js");
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-restricted-imports */









function SpecificationDeleteDialog() {
  // Specifications UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_4__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      id: specsUIContext.selectedId,
      productId: specsUIContext.productId,
      show: specsUIContext.showDeleteSpecificationDialog,
      onHide: specsUIContext.closeDeleteSpecificationDialog,
      queryParams: specsUIContext.queryParams,
      setIds: specsUIContext.setIds
    };
  }, [specsUIContext]); // Specs Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.specifications.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // if !id we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!specsUIProps.id) {
      specsUIProps.onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [specsUIProps.id]); // looking for loading/dispatch

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]);

  var deleteSpecification = function deleteSpecification() {
    // server request for deleting spec by id
    dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__.deleteSpecification(specsUIProps.id)).then(function () {
      // refresh list after deletion
      dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__.fetchSpecifications(specsUIProps.queryParams, specsUIProps.productId));
      specsUIProps.setIds([]);
      specsUIProps.onHide();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: specsUIProps.show,
    onHide: specsUIProps.onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {
      variant: "query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Specification Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete this specification?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Specification is deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: specsUIProps.onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteSpecification,
          className: "btn btn-primary btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/Specifications.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/Specifications.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Specifications": () => (/* binding */ Specifications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SpecificationsFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpecificationsFilter */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsFilter.js");
/* harmony import */ var _SpecificationsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecificationsTable */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsTable.js");
/* harmony import */ var _SpecificationsLoadingDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecificationsLoadingDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsLoadingDialog.js");
/* harmony import */ var _SpecificationsDeleteDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpecificationsDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsDeleteDialog.js");
/* harmony import */ var _SpecificationDeleteDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpecificationDeleteDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationDeleteDialog.js");
/* harmony import */ var _SpecificationsFetchDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpecificationsFetchDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsFetchDialog.js");
/* harmony import */ var _SpecificationsGrouping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpecificationsGrouping */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsGrouping.js");
/* harmony import */ var _specification_edit_dialog_SpecificationEditDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./specification-edit-dialog/SpecificationEditDialog */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditDialog.js");
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













function Specifications() {
  // Specifications UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_9__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: specsUIContext.ids
    };
  }, [specsUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SpecificationsLoadingDialog__WEBPACK_IMPORTED_MODULE_3__.SpecificationsLoadingDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_specification_edit_dialog_SpecificationEditDialog__WEBPACK_IMPORTED_MODULE_8__.SpecificationEditDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SpecificationDeleteDialog__WEBPACK_IMPORTED_MODULE_5__.SpecificationDeleteDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SpecificationsDeleteDialog__WEBPACK_IMPORTED_MODULE_4__.SpecificationsDeleteDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SpecificationsFetchDialog__WEBPACK_IMPORTED_MODULE_6__.SpecificationsFetchDialog, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "form margin-b-30",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SpecificationsFilter__WEBPACK_IMPORTED_MODULE_1__.SpecificationsFilter, {}), specsUIProps.ids.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SpecificationsGrouping__WEBPACK_IMPORTED_MODULE_7__.SpecificationsGrouping, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {})]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SpecificationsTable__WEBPACK_IMPORTED_MODULE_2__.SpecificationsTable, {})]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsDeleteDialog.js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsDeleteDialog.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationsDeleteDialog": () => (/* binding */ SpecificationsDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/specifications/specificationsActions */ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsActions.js");
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-restricted-imports */









function SpecificationsDeleteDialog() {
  // Specs UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_4__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      productId: specsUIContext.productId,
      ids: specsUIContext.ids,
      show: specsUIContext.showDeleteSpecificationsDialog,
      onHide: specsUIContext.closeDeleteSpecificationsDialog,
      setIds: specsUIContext.setIds,
      queryParams: specsUIContext.queryParams
    };
  }, [specsUIContext]); // Specs Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.specifications.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // looking for loading/dispatch


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]); // if there weren't selected specs we should close modal

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!specsUIProps.ids || specsUIProps.ids.length === 0) {
      specsUIProps.onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [specsUIProps.ids]);

  var deleteSpecifications = function deleteSpecifications() {
    // server request for selected deleting specs
    dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__.deleteSpecifications(specsUIProps.ids)).then(function () {
      // refresh list after deletion
      dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__.fetchSpecifications(specsUIProps.queryParams, specsUIProps.productId)).then(function () {
        specsUIProps.setIds([]);
        specsUIProps.onHide();
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: specsUIProps.show,
    onHide: specsUIProps.onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {
      variant: "query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Specifications Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete selected specifications?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Specifications are deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: specsUIProps.onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteSpecifications,
          className: "btn btn-primary btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsFetchDialog.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsFetchDialog.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationsFetchDialog": () => (/* binding */ SpecificationsFetchDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var selectedSpecifications = function selectedSpecifications(entities, ids) {
  var _specifications = [];
  ids.forEach(function (id) {
    var specification = entities.find(function (el) {
      return el.id === id;
    });

    if (specification) {
      _specifications.push(specification);
    }
  });
  return _specifications;
};

function SpecificationsFetchDialog() {
  // Specs UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_2__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: specsUIContext.ids,
      show: specsUIContext.showFetchSpecificationsDialog,
      onHide: specsUIContext.closeFetchSpecificationsDialog,
      queryParams: specsUIContext.queryParams
    };
  }, [specsUIContext]); // Specs Redux state

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      specifications: selectedSpecifications(state.specifications.entities, specsUIProps.ids)
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      specifications = _useSelector.specifications;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!specsUIProps.ids || specsUIProps.ids.length === 0) {
      specsUIProps.onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [specsUIProps.ids]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    show: specsUIProps.show,
    onHide: specsUIProps.onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Fetch selected elements"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Body, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "list-timeline list-timeline-skin-light padding-30",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "list-timeline-items",
          children: specifications.map(function (specification) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "list-timeline-item mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                className: "list-timeline-text",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "label label-lg label-light-success label-inline",
                  style: {
                    width: "60px"
                  },
                  children: ["ID: ", specification.id]
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "ml-5",
                  children: [specification.name, ": ", specification.value, " "]
                })]
              })
            }, specification.id);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          onClick: specsUIProps.onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          onClick: specsUIProps.onHide,
          className: "btn btn-primary btn-elevate",
          children: "Ok"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsFilter.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsFilter.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationsFilter": () => (/* binding */ SpecificationsFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var prepareFilter = function prepareFilter(queryParams, values) {
  var searchText = values.searchText;

  var newQueryParams = _objectSpread({}, queryParams);

  var filter = {};
  filter.value = searchText;

  if (searchText) {
    filter.name = searchText;
  }

  newQueryParams.filter = filter;
  return newQueryParams;
};

function SpecificationsFilter() {
  // Specs UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_3__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      openNewSpecificationDialog: specsUIContext.openNewSpecificationDialog,
      setQueryParams: specsUIContext.setQueryParams,
      queryParams: specsUIContext.queryParams
    };
  }, [specsUIContext]);

  var applyFilter = function applyFilter(values) {
    var newQueryParams = prepareFilter(specsUIProps.queryParams, values);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(newQueryParams, specsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      specsUIProps.setQueryParams(newQueryParams);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "form-filtration",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-md-2 margin-bottom-10-mobile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
            initialValues: {
              searchText: ""
            },
            onSubmit: function onSubmit(values) {
              applyFilter(values);
            },
            children: function children(_ref) {
              var values = _ref.values,
                  handleSubmit = _ref.handleSubmit,
                  handleBlur = _ref.handleBlur,
                  handleChange = _ref.handleChange,
                  setFieldValue = _ref.setFieldValue;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
                onSubmit: handleSubmit,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    className: "form-control",
                    name: "searchText",
                    placeholder: "Search",
                    onBlur: handleBlur,
                    value: values.searchText,
                    onChange: function onChange(e) {
                      setFieldValue("searchText", e.target.value);
                      handleSubmit();
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                    className: "form-text text-muted",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                      children: "Search"
                    }), " in all fields"]
                  })]
                })
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-md-7 margin-bottom-10-mobile"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-md-3 text-right margin-bottom-10-mobile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: "btn btn-primary",
            onClick: function onClick() {
              return specsUIProps.openNewSpecificationDialog();
            },
            children: "Create new specification"
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsGrouping.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsGrouping.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationsGrouping": () => (/* binding */ SpecificationsGrouping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function SpecificationsGrouping() {
  // Specs UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_1__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: specsUIContext.ids,
      openDeleteSpecificationsDialog: specsUIContext.openDeleteSpecificationsDialog,
      openFetchSpecificationsDialog: specsUIContext.openFetchSpecificationsDialog
    };
  }, [specsUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "form",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "row align-items-center form-group-actions margin-top-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-xl-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "form-group form-group-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "form-label form-label-no-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              className: "font-bold font-danger mt-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                children: ["Selected records count: ", specsUIProps.ids.length]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "form-group-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-danger font-weight-bolder font-size-sm",
              onClick: specsUIProps.openDeleteSpecificationsDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-trash"
              }), " Delete All"]
            }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-light-primary font-weight-bolder font-size-sm",
              onClick: specsUIProps.openFetchSpecificationsDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-stream"
              }), " Fetch Selected"]
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsLoadingDialog.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsLoadingDialog.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationsLoadingDialog": () => (/* binding */ SpecificationsLoadingDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function SpecificationsLoadingDialog() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.specifications.listLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.LoadingDialog, {
    isLoading: isLoading,
    text: "Loading ..."
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsTable.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsTable.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationsTable": () => (/* binding */ SpecificationsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/specifications/specificationsActions */ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsActions.js");
/* harmony import */ var _column_formatters_ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column-formatters/ActionsColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/column-formatters/ActionsColumnFormatter.js");
/* harmony import */ var _SpecificationsUIHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpecificationsUIHelper */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIHelper.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html













function SpecificationsTable() {
  // Specs UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_8__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      queryParams: specsUIContext.queryParams,
      setQueryParams: specsUIContext.setQueryParams,
      openEditSpecificationDialog: specsUIContext.openEditSpecificationDialog,
      openDeleteSpecificationDialog: specsUIContext.openDeleteSpecificationDialog,
      ids: specsUIContext.ids,
      setIds: specsUIContext.setIds,
      productId: specsUIContext.productId
    };
  }, [specsUIContext]); // Specs Redux state
  // Getting curret state of products list from store (Redux)

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      currentState: state.specifications
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      currentState = _useSelector.currentState;

  var totalCount = currentState.totalCount,
      entities = currentState.entities,
      listLoading = currentState.listLoading;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    specsUIProps.setIds([]);
    dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_3__.fetchSpecifications(specsUIProps.queryParams, specsUIProps.productId)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specsUIProps.queryParams, dispatch, specsUIProps.productId]);
  var columns = [{
    dataField: "name",
    text: "Specification Type",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.sortCaret
  }, {
    dataField: "value",
    text: "Value",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.sortCaret
  }, {
    dataField: "action",
    text: "Actions",
    formatter: _column_formatters_ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_4__.ActionsColumnFormatter,
    formatExtraData: {
      openEditSpecificationDialog: specsUIProps.openEditSpecificationDialog,
      openDeleteSpecificationDialog: specsUIProps.openDeleteSpecificationDialog
    },
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px"
    }
  }]; // Table pagination properties

  var paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: _SpecificationsUIHelper__WEBPACK_IMPORTED_MODULE_5__.sizePerPageList,
    sizePerPage: specsUIProps.queryParams.pageSize,
    page: specsUIProps.queryParams.pageNumber
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      pagination: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paginationOptions),
      children: function children(_ref) {
        var paginationProps = _ref.paginationProps,
            paginationTableProps = _ref.paginationTableProps;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_6__.Pagination, {
          isLoading: listLoading,
          paginationProps: paginationProps,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
            wrapperClasses: "table-responsive",
            classes: "table table-head-custom table-vertical-center overflow-hidden",
            bordered: false,
            bootstrap4: true,
            remote: true,
            keyField: "id",
            data: entities === null ? [] : entities,
            columns: columns,
            defaultSorted: _SpecificationsUIHelper__WEBPACK_IMPORTED_MODULE_5__.defaultSorted,
            onTableChange: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.getHandlerTableChange)(specsUIProps.setQueryParams),
            selectRow: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.getSelectRow)({
              entities: entities,
              ids: specsUIProps.ids,
              setIds: specsUIProps.setIds
            })
          }, paginationTableProps), {}, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.PleaseWaitMessage, {
              entities: entities
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.NoRecordsFoundMessage, {
              entities: entities
            })]
          }))
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSpecificationsUIContext": () => (/* binding */ useSpecificationsUIContext),
/* harmony export */   "SpecificationsUIConsumer": () => (/* binding */ SpecificationsUIConsumer),
/* harmony export */   "SpecificationsUIProvider": () => (/* binding */ SpecificationsUIProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpecificationsUIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecificationsUIHelper */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-unused-vars */




var SpecificationsUIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useSpecificationsUIContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SpecificationsUIContext);
}
var SpecificationsUIConsumer = SpecificationsUIContext.Consumer;
function SpecificationsUIProvider(_ref) {
  var currentProductId = _ref.currentProductId,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentProductId),
      _useState2 = _slicedToArray(_useState, 2),
      productId = _useState2[0],
      setProductId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_SpecificationsUIHelper__WEBPACK_IMPORTED_MODULE_2__.initialFilter),
      _useState4 = _slicedToArray(_useState3, 2),
      queryParams = _useState4[0],
      setQueryParamsBase = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      ids = _useState6[0],
      setIds = _useState6[1];

  var setQueryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextQueryParams) {
    setQueryParamsBase(function (prevQueryParams) {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isFunction)(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedId = _useState8[0],
      setSelectedId = _useState8[1];

  var initSpecification = {
    id: undefined,
    value: "",
    specId: 0,
    carId: productId
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initSpecification.carId = currentProductId;
    initSpecification.productId = currentProductId;
    setProductId(currentProductId); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProductId]);

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showEditSpecificationDialog = _useState10[0],
      setShowEditSpecificationDialog = _useState10[1];

  var openNewSpecificationDialog = function openNewSpecificationDialog() {
    setSelectedId(undefined);
    setShowEditSpecificationDialog(true);
  };

  var openEditSpecificationDialog = function openEditSpecificationDialog(id) {
    setSelectedId(id);
    setShowEditSpecificationDialog(true);
  };

  var closeEditSpecificationDialog = function closeEditSpecificationDialog() {
    setSelectedId(undefined);
    setShowEditSpecificationDialog(false);
  };

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showDeleteSpecificationDialog = _useState12[0],
      setShowDeleteSpecificationDialog = _useState12[1];

  var openDeleteSpecificationDialog = function openDeleteSpecificationDialog(id) {
    setSelectedId(id);
    setShowDeleteSpecificationDialog(true);
  };

  var closeDeleteSpecificationDialog = function closeDeleteSpecificationDialog() {
    setSelectedId(undefined);
    setShowDeleteSpecificationDialog(false);
  };

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      showDeleteSpecificationsDialog = _useState14[0],
      setShowDeleteSpecificationsDialog = _useState14[1];

  var openDeleteSpecificationsDialog = function openDeleteSpecificationsDialog() {
    setShowDeleteSpecificationsDialog(true);
  };

  var closeDeleteSpecificationsDialog = function closeDeleteSpecificationsDialog() {
    setShowDeleteSpecificationsDialog(false);
  };

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      showFetchSpecificationsDialog = _useState16[0],
      setShowFetchSpecificationsDialog = _useState16[1];

  var openFetchSpecificationsDialog = function openFetchSpecificationsDialog() {
    setShowFetchSpecificationsDialog(true);
  };

  var closeFetchSpecificationsDialog = function closeFetchSpecificationsDialog() {
    setShowFetchSpecificationsDialog(false);
  };

  var value = {
    ids: ids,
    setIds: setIds,
    productId: productId,
    setProductId: setProductId,
    queryParams: queryParams,
    setQueryParams: setQueryParams,
    initSpecification: initSpecification,
    selectedId: selectedId,
    showEditSpecificationDialog: showEditSpecificationDialog,
    openEditSpecificationDialog: openEditSpecificationDialog,
    openNewSpecificationDialog: openNewSpecificationDialog,
    closeEditSpecificationDialog: closeEditSpecificationDialog,
    showDeleteSpecificationDialog: showDeleteSpecificationDialog,
    openDeleteSpecificationDialog: openDeleteSpecificationDialog,
    closeDeleteSpecificationDialog: closeDeleteSpecificationDialog,
    showDeleteSpecificationsDialog: showDeleteSpecificationsDialog,
    openDeleteSpecificationsDialog: openDeleteSpecificationsDialog,
    closeDeleteSpecificationsDialog: closeDeleteSpecificationsDialog,
    showFetchSpecificationsDialog: showFetchSpecificationsDialog,
    openFetchSpecificationsDialog: openFetchSpecificationsDialog,
    closeFetchSpecificationsDialog: closeFetchSpecificationsDialog
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpecificationsUIContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIHelper.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIHelper.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSorted": () => (/* binding */ defaultSorted),
/* harmony export */   "sizePerPageList": () => (/* binding */ sizePerPageList),
/* harmony export */   "initialFilter": () => (/* binding */ initialFilter),
/* harmony export */   "SPECIFICATIONS_DICTIONARY": () => (/* binding */ SPECIFICATIONS_DICTIONARY)
/* harmony export */ });
var defaultSorted = [{
  dataField: "id",
  order: "asc"
}];
var sizePerPageList = [{
  text: "1",
  value: 1
}, {
  text: "3",
  value: 3
}, {
  text: "5",
  value: 5
}];
var initialFilter = {
  filter: {
    value: ""
  },
  sortOrder: "asc",
  // asc||desc
  sortField: "name",
  pageNumber: 1,
  pageSize: 5
};
var SPECIFICATIONS_DICTIONARY = [{
  id: 0,
  name: "Seats"
}, {
  id: 1,
  name: "Fuel Type"
}, {
  id: 2,
  name: "Stock"
}, {
  id: 3,
  name: "Door count"
}, {
  id: 4,
  name: "Engine"
}, {
  id: 5,
  name: "Transmission"
}, {
  id: 6,
  name: "Drivetrain"
}, {
  id: 7,
  name: "Combined MPG"
}, {
  id: 8,
  name: "Warranty"
}, {
  id: 9,
  name: "Wheels"
}];

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/column-formatters/ActionsColumnFormatter.js":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/column-formatters/ActionsColumnFormatter.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsColumnFormatter": () => (/* binding */ ActionsColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */







function ActionsColumnFormatter(cellContent, row, rowIndex, _ref) {
  var openEditSpecificationDialog = _ref.openEditSpecificationDialog,
      openDeleteSpecificationDialog = _ref.openDeleteSpecificationDialog;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
      overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "specs-edit-tooltip",
        children: "Edit specification"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        className: "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
        onClick: function onClick() {
          return openEditSpecificationDialog(row.id);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "svg-icon svg-icon-md svg-icon-primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__.default, {
            src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/Communication/Write.svg")
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: " "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
      overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "spec-delete-tooltip",
        children: "Delete specification"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        className: "btn btn-icon btn-light btn-hover-danger btn-sm",
        onClick: function onClick() {
          return openDeleteSpecificationDialog(row.id);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "svg-icon svg-icon-md svg-icon-danger",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__.default, {
            src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/General/Trash.svg")
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditDialog.js":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditDialog.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationEditDialog": () => (/* binding */ SpecificationEditDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_redux/specifications/specificationsActions */ "./resources/js/app/modules/ECommerce/_redux/specifications/specificationsActions.js");
/* harmony import */ var _SpecificationEditDialogHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecificationEditDialogHeader */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditDialogHeader.js");
/* harmony import */ var _SpecificationEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpecificationEditForm */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditForm.js");
/* harmony import */ var _SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SpecificationsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function SpecificationEditDialog() {
  // Specifications UI Context
  var specsUIContext = (0,_SpecificationsUIContext__WEBPACK_IMPORTED_MODULE_5__.useSpecificationsUIContext)();
  var specsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      id: specsUIContext.selectedId,
      show: specsUIContext.showEditSpecificationDialog,
      onHide: specsUIContext.closeEditSpecificationDialog,
      productId: specsUIContext.productId,
      queryParams: specsUIContext.queryParams,
      initSpecification: specsUIContext.initSpecification
    };
  }, [specsUIContext]); // Specifications Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      actionsLoading: state.specifications.actionsLoading,
      specificationForEdit: state.specifications.specificationForEdit
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      actionsLoading = _useSelector.actionsLoading,
      specificationForEdit = _useSelector.specificationForEdit;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // server request for getting spec by seleted id
    dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_2__.fetchSpecification(specsUIProps.id));
  }, [specsUIProps.id, dispatch]);

  var saveSpecification = function saveSpecification(specification) {
    if (!specsUIProps.id) {
      dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_2__.createSpecification(specification)).then(function () {
        dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_2__.fetchSpecifications(specsUIProps.queryParams, specsUIProps.productId)).then(function () {
          return specsUIProps.onHide();
        });
      });
    } else {
      dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_2__.updateSpecification(specification)).then(function () {
        dispatch(_redux_specifications_specificationsActions__WEBPACK_IMPORTED_MODULE_2__.fetchSpecifications(specsUIProps.queryParams, specsUIProps.productId)).then(function () {
          return specsUIProps.onHide();
        });
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
    show: specsUIProps.show,
    onHide: specsUIProps.onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SpecificationEditDialogHeader__WEBPACK_IMPORTED_MODULE_3__.SpecificationEditDialogHeader, {
      id: specsUIProps.id
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SpecificationEditForm__WEBPACK_IMPORTED_MODULE_4__.SpecificationEditForm, {
      saveSpecification: saveSpecification,
      actionsLoading: actionsLoading,
      specification: specificationForEdit || specsUIProps.initSpecification,
      onHide: specsUIProps.onHide
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditDialogHeader.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditDialogHeader.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationEditDialogHeader": () => (/* binding */ SpecificationEditDialogHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-restricted-imports */







function SpecificationEditDialogHeader(_ref) {
  var id = _ref.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1]; // Specs Redux state


  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      specificationForEdit: state.specifications.specificationForEdit,
      actionsLoading: state.specifications.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      specificationForEdit = _useSelector.specificationForEdit,
      actionsLoading = _useSelector.actionsLoading;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _title = id ? "" : "New Specification";

    if (specificationForEdit && id) {
      _title = "Edit Specification";
    }

    setTitle(_title); // eslint-disable-next-line
  }, [specificationForEdit, actionsLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [actionsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {
      variant: "query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: title
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditForm.js":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/product-specifications/specification-edit-dialog/SpecificationEditForm.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationEditForm": () => (/* binding */ SpecificationEditForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _SpecificationsUIHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SpecificationsUIHelper */ "./resources/js/app/modules/ECommerce/pages/products/product-specifications/SpecificationsUIHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10





 // Validation schema




var SpecificationEditSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
  value: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(2, "Minimum 2 symbols").max(50, "Maximum 50 symbols").required("Value is required"),
  specId: yup__WEBPACK_IMPORTED_MODULE_2__.number().required("Specification type is required")
});
function SpecificationEditForm(_ref) {
  var saveSpecification = _ref.saveSpecification,
      specification = _ref.specification,
      actionsLoading = _ref.actionsLoading,
      onHide = _ref.onHide;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      enableReinitialize: true,
      initialValues: specification,
      validationSchema: SpecificationEditSchema,
      onSubmit: function onSubmit(values) {
        saveSpecification(values);
      },
      children: function children(_ref2) {
        var handleSubmit = _ref2.handleSubmit;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
            className: "overlay overlay-block cursor-default",
            children: [actionsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "overlay-layer bg-transparent",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "spinner spinner-lg spinner-success"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
              className: "form form-label-right",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "form-group row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Select, {
                    name: "specId",
                    label: "Specification Type",
                    children: _SpecificationsUIHelper__WEBPACK_IMPORTED_MODULE_4__.SPECIFICATIONS_DICTIONARY.map(function (spec) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                        value: spec.id,
                        children: spec.name
                      }, spec.id);
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "form-group row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "value",
                    component: _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_3__.Input,
                    placeholder: "Value",
                    label: "Value"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              onClick: onHide,
              className: "btn btn-light btn-elevate",
              children: "Cancel"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: " "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "submit",
              onClick: function onClick() {
                return handleSubmit();
              },
              className: "btn btn-primary btn-elevate",
              children: "Save"
            })]
          })]
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-delete-dialog/ProductsDeleteDialog.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-delete-dialog/ProductsDeleteDialog.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsDeleteDialog": () => (/* binding */ ProductsDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/products/productsActions */ "./resources/js/app/modules/ECommerce/_redux/products/productsActions.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-restricted-imports */









function ProductsDeleteDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide;
  // Products UI Context
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_4__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: productsUIContext.ids,
      setIds: productsUIContext.setIds,
      queryParams: productsUIContext.queryParams
    };
  }, [productsUIContext]); // Products Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.products.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading; // looking for loading/dispatch


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading, dispatch]); // if there weren't selected products we should close modal

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!productsUIProps.ids || productsUIProps.ids.length === 0) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [productsUIProps.ids]);

  var deleteProducts = function deleteProducts() {
    // server request for deleting product by seleted ids
    dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__.deleteProducts(productsUIProps.ids)).then(function () {
      // refresh list after deletion
      dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__.fetchProducts(productsUIProps.queryParams)).then(function () {
        // clear selections list
        productsUIProps.setIds([]); // closing delete modal

        onHide();
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.ModalProgressBar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Products Delete"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Are you sure to permanently delete selected products?"
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Products are deleting..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: deleteProducts,
          className: "btn btn-primary btn-elevate",
          children: "Delete"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-fetch-dialog/ProductsFetchDialog.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-fetch-dialog/ProductsFetchDialog.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsFetchDialog": () => (/* binding */ ProductsFetchDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductsUIHelpers */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var selectedProducts = function selectedProducts(entities, ids) {
  var _products = [];
  ids.forEach(function (id) {
    var product = entities.find(function (el) {
      return el.id === id;
    });

    if (product) {
      _products.push(product);
    }
  });
  return _products;
};

function ProductsFetchDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide;
  // Products UI Context
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_3__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: productsUIContext.ids,
      queryParams: productsUIContext.queryParams
    };
  }, [productsUIContext]); // Products Redux state

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      products: selectedProducts(state.products.entities, productsUIProps.ids)
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      products = _useSelector.products; // if there weren't selected ids we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!productsUIProps.ids || productsUIProps.ids.length === 0) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [productsUIProps.ids]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Fetch selected elements"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "list-timeline list-timeline-skin-light padding-30",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "list-timeline-items",
          children: products.map(function (product) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "list-timeline-item mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                className: "list-timeline-text",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  className: "label label-lg label-light-".concat(_ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_2__.ProductStatusCssClasses[product.status], " label-inline"),
                  style: {
                    width: "60px"
                  },
                  children: ["ID: ", product.id]
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  className: "ml-5",
                  children: [product.manufacture, ", ", product.model]
                })]
              })
            }, product.id);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-primary btn-elevate",
          children: "Ok"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-filter/ProductsFilter.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-filter/ProductsFilter.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsFilter": () => (/* binding */ ProductsFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var prepareFilter = function prepareFilter(queryParams, values) {
  var status = values.status,
      condition = values.condition,
      searchText = values.searchText;

  var newQueryParams = _objectSpread({}, queryParams);

  var filter = {}; // Filter by status

  filter.status = status !== "" ? +status : undefined; // Filter by condition

  filter.condition = condition !== "" ? +condition : undefined; // Filter by all fields

  filter.model = searchText;

  if (searchText) {
    filter.manufacture = searchText;
    filter.VINCode = searchText;
  }

  newQueryParams.filter = filter;
  return newQueryParams;
};

function ProductsFilter(_ref) {
  var listLoading = _ref.listLoading;
  // Products UI Context
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_3__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      setQueryParams: productsUIContext.setQueryParams,
      queryParams: productsUIContext.queryParams
    };
  }, [productsUIContext]);

  var applyFilter = function applyFilter(values) {
    var newQueryParams = prepareFilter(productsUIProps.queryParams, values);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(newQueryParams, productsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      productsUIProps.setQueryParams(newQueryParams);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      initialValues: {
        status: "",
        // values => All=""/Selling=0/Sold=1
        condition: "",
        // values => All=""/New=0/Used=1
        searchText: ""
      },
      onSubmit: function onSubmit(values) {
        applyFilter(values);
      },
      children: function children(_ref2) {
        var values = _ref2.values,
            handleSubmit = _ref2.handleSubmit,
            handleBlur = _ref2.handleBlur,
            handleChange = _ref2.handleChange,
            setFieldValue = _ref2.setFieldValue;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
          onSubmit: handleSubmit,
          className: "form form-label-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "form-group row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                className: "form-control",
                name: "status",
                placeholder: "Filter by Status",
                onChange: function onChange(e) {
                  setFieldValue("status", e.target.value);
                  handleSubmit();
                },
                onBlur: handleBlur,
                value: values.status,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "",
                  children: "All"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "0",
                  children: "Selling"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "1",
                  children: "Sold"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                className: "form-text text-muted",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Filter"
                }), " by Status"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                className: "form-control",
                placeholder: "Filter by Type",
                name: "condition",
                onBlur: handleBlur,
                onChange: function onChange(e) {
                  setFieldValue("condition", e.target.value);
                  handleSubmit();
                },
                value: values.condition,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "",
                  children: "All"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "0",
                  children: "New"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "1",
                  children: "Used"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                className: "form-text text-muted",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Filter"
                }), " by Condition"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                className: "form-control",
                name: "searchText",
                placeholder: "Search",
                onBlur: handleBlur,
                value: values.searchText,
                onChange: function onChange(e) {
                  setFieldValue("searchText", e.target.value);
                  handleSubmit();
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                className: "form-text text-muted",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Search"
                }), " in all fields"]
              })]
            })]
          })
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-grouping/ProductsGrouping.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-grouping/ProductsGrouping.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsGrouping": () => (/* binding */ ProductsGrouping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function ProductsGrouping() {
  // Products UI Context
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_1__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: productsUIContext.ids,
      setIds: productsUIContext.setIds,
      openDeleteProductsDialog: productsUIContext.openDeleteProductsDialog,
      openFetchProductsDialog: productsUIContext.openFetchProductsDialog,
      openUpdateProductsStatusDialog: productsUIContext.openUpdateProductsStatusDialog
    };
  }, [productsUIContext]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "form",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "row align-items-center form-group-actions margin-top-20 margin-bottom-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-xl-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "form-group form-group-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "form-label form-label-no-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              className: "-font-bold font-danger-",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                children: ["Selected records count: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
                  children: productsUIProps.ids.length
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-danger font-weight-bolder font-size-sm",
              onClick: productsUIProps.openDeleteProductsDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-trash"
              }), " Delete All"]
            }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-light-primary font-weight-bolder font-size-sm",
              onClick: productsUIProps.openFetchProductsDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-stream"
              }), " Fetch Selected"]
            }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-light-primary font-weight-bolder font-size-sm",
              onClick: productsUIProps.openUpdateProductsStatusDialog,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-sync-alt"
              }), " Update Status"]
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-loading-dialog/ProductsLoadingDialog.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-loading-dialog/ProductsLoadingDialog.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsLoadingDialog": () => (/* binding */ ProductsLoadingDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function ProductsLoadingDialog() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      isLoading: state.products.listLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      isLoading = _useSelector.isLoading;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [isLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_2__.LoadingDialog, {
    isLoading: isLoading,
    text: "Loading ..."
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-table/ProductsTable.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-table/ProductsTable.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsTable": () => (/* binding */ ProductsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/products/productsActions */ "./resources/js/app/modules/ECommerce/_redux/products/productsActions.js");
/* harmony import */ var _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductsUIHelpers */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var _column_formatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./column-formatters */ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/index.js");
/* harmony import */ var _metronic_partials_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../_metronic/_partials/controls */ "./resources/js/_metronic/_partials/controls/index.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html













function ProductsTable() {
  // Products UI Context
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_8__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: productsUIContext.ids,
      setIds: productsUIContext.setIds,
      queryParams: productsUIContext.queryParams,
      setQueryParams: productsUIContext.setQueryParams,
      openEditProductPage: productsUIContext.openEditProductPage,
      openDeleteProductDialog: productsUIContext.openDeleteProductDialog
    };
  }, [productsUIContext]); // Getting curret state of products list from store (Redux)

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return {
      currentState: state.products
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual),
      currentState = _useSelector.currentState;

  var totalCount = currentState.totalCount,
      entities = currentState.entities,
      listLoading = currentState.listLoading; // Products Redux state

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // clear selections list
    productsUIProps.setIds([]); // server call by queryParams

    dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__.fetchProducts(productsUIProps.queryParams)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsUIProps.queryParams, dispatch]); // Table columns

  var columns = [{
    dataField: "VINCode",
    text: "VIN Code (ID)",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret
  }, {
    dataField: "manufacture",
    text: "Manufacture",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret
  }, {
    dataField: "model",
    text: "Model",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret
  }, {
    dataField: "modelYear",
    text: "Model Year",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret
  }, {
    dataField: "color",
    text: "Color",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret,
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.ColorColumnFormatter
  }, {
    dataField: "price",
    text: "Price",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret,
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.PriceColumnFormatter
  }, {
    dataField: "status",
    text: "Status",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret,
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.StatusColumnFormatter
  }, {
    dataField: "condition",
    text: "Condition",
    sort: true,
    sortCaret: _metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.sortCaret,
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.ConditionColumnFormatter
  }, {
    dataField: "action",
    text: "Actions",
    formatter: _column_formatters__WEBPACK_IMPORTED_MODULE_6__.ActionsColumnFormatter,
    formatExtraData: {
      openEditProductPage: productsUIProps.openEditProductPage,
      openDeleteProductDialog: productsUIProps.openDeleteProductDialog
    },
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px"
    }
  }]; // Table pagination properties

  var paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__.sizePerPageList,
    sizePerPage: productsUIProps.queryParams.pageSize,
    page: productsUIProps.queryParams.pageNumber
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      pagination: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-paginator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paginationOptions),
      children: function children(_ref) {
        var paginationProps = _ref.paginationProps,
            paginationTableProps = _ref.paginationTableProps;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_partials_controls__WEBPACK_IMPORTED_MODULE_7__.Pagination, {
          isLoading: listLoading,
          paginationProps: paginationProps,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table-next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
            wrapperClasses: "table-responsive",
            classes: "table table-head-custom table-vertical-center overflow-hidden",
            bootstrap4: true,
            bordered: false,
            remote: true,
            keyField: "id",
            data: entities === null ? [] : entities,
            columns: columns,
            defaultSorted: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_4__.defaultSorted,
            onTableChange: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.getHandlerTableChange)(productsUIProps.setQueryParams),
            selectRow: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.getSelectRow)({
              entities: entities,
              ids: productsUIProps.ids,
              setIds: productsUIProps.setIds
            })
          }, paginationTableProps), {}, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.PleaseWaitMessage, {
              entities: entities
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_5__.NoRecordsFoundMessage, {
              entities: entities
            })]
          }))
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ActionsColumnFormatter.js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ActionsColumnFormatter.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsColumnFormatter": () => (/* binding */ ActionsColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../_metronic/_helpers */ "./resources/js/_metronic/_helpers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */







var ActionsColumnFormatter = function ActionsColumnFormatter(cellContent, row, rowIndex, _ref) {
  var openEditProductPage = _ref.openEditProductPage,
      openDeleteProductDialog = _ref.openDeleteProductDialog;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
      overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "products-edit-tooltip",
        children: "Edit product"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        className: "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
        onClick: function onClick() {
          return openEditProductPage(row.id);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "svg-icon svg-icon-md svg-icon-primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__.default, {
            src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/Communication/Write.svg")
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: " "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
      overlay: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "products-delete-tooltip",
        children: "Delete product"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        className: "btn btn-icon btn-light btn-hover-danger btn-sm",
        onClick: function onClick() {
          return openDeleteProductDialog(row.id);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "svg-icon svg-icon-md svg-icon-danger",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__.default, {
            src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.toAbsoluteUrl)("/media/svg/icons/General/Trash.svg")
          })
        })
      })
    })]
  });
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ColorColumnFormatter.js":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ColorColumnFormatter.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorColumnFormatter": () => (/* binding */ ColorColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var ColorColumnFormatter = function ColorColumnFormatter(cellContent, row) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    style: {
      color: row.color
    },
    children: row.color
  });
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ConditionColumnFormatter.js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ConditionColumnFormatter.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionColumnFormatter": () => (/* binding */ ConditionColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ProductsUIHelpers */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ConditionColumnFormatter = function ConditionColumnFormatter(cellContent, row) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "badge badge-".concat(_ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_1__.ProductConditionCssClasses[row.condition], " badge-dot")
    }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "font-bold font-".concat(_ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_1__.ProductConditionCssClasses[row.condition]),
      children: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_1__.ProductConditionTitles[row.condition]
    })]
  });
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/PriceColumnFormatter.js":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/PriceColumnFormatter.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceColumnFormatter": () => (/* binding */ PriceColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var PriceColumnFormatter = function PriceColumnFormatter(cellContent, row) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["$", row.price]
  });
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/StatusColumnFormatter.js":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/StatusColumnFormatter.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusColumnFormatter": () => (/* binding */ StatusColumnFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ProductsUIHelpers */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var StatusColumnFormatter = function StatusColumnFormatter(cellContent, row) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: "label label-lg label-light-".concat(_ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_1__.ProductStatusCssClasses[row.status], " label-inline"),
    children: _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_1__.ProductStatusTitles[row.status]
  });
};

/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/index.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusColumnFormatter": () => (/* reexport safe */ _StatusColumnFormatter__WEBPACK_IMPORTED_MODULE_0__.StatusColumnFormatter),
/* harmony export */   "ConditionColumnFormatter": () => (/* reexport safe */ _ConditionColumnFormatter__WEBPACK_IMPORTED_MODULE_1__.ConditionColumnFormatter),
/* harmony export */   "ColorColumnFormatter": () => (/* reexport safe */ _ColorColumnFormatter__WEBPACK_IMPORTED_MODULE_2__.ColorColumnFormatter),
/* harmony export */   "PriceColumnFormatter": () => (/* reexport safe */ _PriceColumnFormatter__WEBPACK_IMPORTED_MODULE_3__.PriceColumnFormatter),
/* harmony export */   "ActionsColumnFormatter": () => (/* reexport safe */ _ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_4__.ActionsColumnFormatter)
/* harmony export */ });
/* harmony import */ var _StatusColumnFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/StatusColumnFormatter.js");
/* harmony import */ var _ConditionColumnFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ConditionColumnFormatter.js");
/* harmony import */ var _ColorColumnFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ColorColumnFormatter.js");
/* harmony import */ var _PriceColumnFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PriceColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/PriceColumnFormatter.js");
/* harmony import */ var _ActionsColumnFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionsColumnFormatter */ "./resources/js/app/modules/ECommerce/pages/products/products-table/column-formatters/ActionsColumnFormatter.js");
// TODO: Rename all formatters






/***/ }),

/***/ "./resources/js/app/modules/ECommerce/pages/products/products-update-status-dialog/ProductsUpdateStatusDialog.js":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/app/modules/ECommerce/pages/products/products-update-status-dialog/ProductsUpdateStatusDialog.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsUpdateStatusDialog": () => (/* binding */ ProductsUpdateStatusDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductsUIHelpers */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIHelpers.js");
/* harmony import */ var _redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_redux/products/productsActions */ "./resources/js/app/modules/ECommerce/_redux/products/productsActions.js");
/* harmony import */ var _ProductsUIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductsUIContext */ "./resources/js/app/modules/ECommerce/pages/products/ProductsUIContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var selectedProducts = function selectedProducts(entities, ids) {
  var _products = [];
  ids.forEach(function (id) {
    var product = entities.find(function (el) {
      return el.id === id;
    });

    if (product) {
      _products.push(product);
    }
  });
  return _products;
};

function ProductsUpdateStatusDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide;
  // Products UI Context
  var productsUIContext = (0,_ProductsUIContext__WEBPACK_IMPORTED_MODULE_4__.useProductsUIContext)();
  var productsUIProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      ids: productsUIContext.ids,
      setIds: productsUIContext.setIds,
      queryParams: productsUIContext.queryParams
    };
  }, [productsUIContext]); // Products Redux state

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      products: selectedProducts(state.products.entities, productsUIProps.ids),
      isLoading: state.products.actionsLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
      products = _useSelector.products,
      isLoading = _useSelector.isLoading; // if there weren't selected products we should close modal


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (productsUIProps.ids || productsUIProps.ids.length === 0) {
      onHide();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [productsUIProps.ids]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var updateStatus = function updateStatus() {
    // server request for updateing product by ids
    dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__.updateProductsStatus(productsUIProps.ids, status)).then(function () {
      // refresh list after deletion
      dispatch(_redux_products_productsActions__WEBPACK_IMPORTED_MODULE_3__.fetchProducts(productsUIProps.queryParams)).then(function () {
        // clear selections list
        productsUIProps.setIds([]); // closing delete modal

        onHide();
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "example-modal-sizes-title-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "example-modal-sizes-title-lg",
        children: "Status has been updated for selected products"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      className: "overlay overlay-block cursor-default",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "overlay-layer bg-transparent",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "spinner spinner-lg spinner-warning"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "list-timeline list-timeline-skin-light padding-30",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "list-timeline-items",
          children: products.map(function (product) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "list-timeline-item mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "list-timeline-text",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "label label-lg label-light-".concat(_ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_2__.ProductStatusCssClasses[product.status], " label-inline"),
                  style: {
                    width: "60px"
                  },
                  children: ["ID: ", product.id]
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "ml-5",
                  children: [product.manufacture, ", ", product.model]
                })]
              })
            }, product.id);
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, {
      className: "form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
          className: "form-control ".concat(_ProductsUIHelpers__WEBPACK_IMPORTED_MODULE_2__.ProductStatusCssClasses[status]),
          value: status,
          onChange: function onChange(e) {
            return setStatus(+e.target.value);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "0",
            children: "Selling"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "1",
            children: "Sold"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: onHide,
          className: "btn btn-light btn-elevate",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: updateStatus,
          className: "btn btn-primary btn-elevate",
          children: "Update Status"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/activeElement.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/activeElement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activeElement)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__.default)();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClass)
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isDocument.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isDocument.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDocument)
/* harmony export */ });
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isWindow.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isWindow.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWindow)
/* harmony export */ });
/* harmony import */ var _isDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDocument */ "./node_modules/dom-helpers/esm/isDocument.js");

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if ((0,_isDocument__WEBPACK_IMPORTED_MODULE_0__.default)(node)) return node.defaultView || false;
  return false;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClass)
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollbarSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollbarSize.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scrollbarSize)
/* harmony export */ });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/BootstrapModalManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/BootstrapModalManager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BootstrapModalManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var dom_helpers_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-overlays/ModalManager */ "./node_modules/react-overlays/esm/ModalManager.js");





var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager = /*#__PURE__*/function (_ModalManager) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    return _ModalManager.apply(this, arguments) || this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.adjustAndStore = function adjustAndStore(prop, element, adjust) {
    var _css;

    var actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    (0,dom_helpers_css__WEBPACK_IMPORTED_MODULE_1__.default)(element, (_css = {}, _css[prop] = parseFloat((0,dom_helpers_css__WEBPACK_IMPORTED_MODULE_1__.default)(element, prop)) + adjust + "px", _css));
  };

  _proto.restore = function restore(prop, element) {
    var value = element.dataset[prop];

    if (value !== undefined) {
      var _css2;

      delete element.dataset[prop];
      (0,dom_helpers_css__WEBPACK_IMPORTED_MODULE_1__.default)(element, (_css2 = {}, _css2[prop] = value, _css2));
    }
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('paddingRight', el, size);
    });
    (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, -size);
    });
    (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.restore('paddingRight', el);
    });
    (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
    (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
  };

  return BootstrapModalManager;
}(react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4__.default);



/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CloseButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CloseButton.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _excluded = ["label", "onClick", "className"];



var propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
var defaultProps = {
  label: 'Close'
};
var CloseButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref,
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('close', className),
    onClick: onClick
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "sr-only"
  }, label));
});
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Modal.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_addEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/addEventListener */ "./node_modules/dom-helpers/esm/addEventListener.js");
/* harmony import */ var dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var dom_helpers_removeEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-helpers/removeEventListener */ "./node_modules/dom-helpers/esm/removeEventListener.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @restart/hooks/useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");
/* harmony import */ var dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dom-helpers/transitionEnd */ "./node_modules/dom-helpers/esm/transitionEnd.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_overlays_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-overlays/Modal */ "./node_modules/react-overlays/esm/Modal.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _BootstrapModalManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./BootstrapModalManager */ "./node_modules/react-bootstrap/esm/BootstrapModalManager.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var _ModalBody__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ModalBody */ "./node_modules/react-bootstrap/esm/ModalBody.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/esm/ModalContext.js");
/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalDialog */ "./node_modules/react-bootstrap/esm/ModalDialog.js");
/* harmony import */ var _ModalFooter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ModalFooter */ "./node_modules/react-bootstrap/esm/ModalFooter.js");
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ModalHeader */ "./node_modules/react-bootstrap/esm/ModalHeader.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ModalTitle */ "./node_modules/react-bootstrap/esm/ModalTitle.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");


var _excluded = ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"];






















var manager;
var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog__WEBPACK_IMPORTED_MODULE_14__.default
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_15__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    timeout: null
  }));
}

function BackdropTransition(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_15__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    timeout: null
  }));
}
/* eslint-enable no-use-before-define */


var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      style = _ref.style,
      dialogClassName = _ref.dialogClassName,
      contentClassName = _ref.contentClassName,
      children = _ref.children,
      Dialog = _ref.dialogAs,
      ariaLabelledby = _ref['aria-labelledby'],
      show = _ref.show,
      animation = _ref.animation,
      backdrop = _ref.backdrop,
      keyboard = _ref.keyboard,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      onShow = _ref.onShow,
      onHide = _ref.onHide,
      container = _ref.container,
      autoFocus = _ref.autoFocus,
      enforceFocus = _ref.enforceFocus,
      restoreFocus = _ref.restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onExited = _ref.onExited,
      backdropClassName = _ref.backdropClassName,
      propsManager = _ref.manager,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({}),
      modalStyle = _useState[0],
      setStyle = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      animateStaticModal = _useState2[0],
      setAnimateStaticModal = _useState2[1];

  var waitingForMouseUpRef = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(false);
  var ignoreBackdropClickRef = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(false);
  var removeStaticModalAnimationRef = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null); // TODO: what's this type

  var _useCallbackRef = (0,_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_8__.default)(),
      modal = _useCallbackRef[0],
      setModalRef = _useCallbackRef[1];

  var handleHide = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__.default)(onHide);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_16__.useBootstrapPrefix)(bsPrefix, 'modal');
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useImperativeHandle)(ref, function () {
    return {
      get _modal() {
         true ? warning__WEBPACK_IMPORTED_MODULE_13___default()(false, 'Accessing `_modal` is not supported and will be removed in a future release') : 0;
        return modal;
      }

    };
  }, [modal]);
  var modalContext = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(function () {
    return {
      onHide: handleHide
    };
  }, [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    if (!manager) manager = new _BootstrapModalManager__WEBPACK_IMPORTED_MODULE_17__.default();
    return manager;
  }

  function updateDialogStyle(node) {
    if (!dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_4__.default) return;
    var containerIsOverflowing = getModalManager().isContainerOverflowing(modal);
    var modalIsOverflowing = node.scrollHeight > (0,dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__.default)(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_7__.default)() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_7__.default)() : undefined
    });
  }

  var handleWindowResize = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__.default)(function () {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  (0,_restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_10__.default)(function () {
    (0,dom_helpers_removeEventListener__WEBPACK_IMPORTED_MODULE_6__.default)(window, 'resize', handleWindowResize);

    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  var handleDialogMouseDown = function handleDialogMouseDown() {
    waitingForMouseUpRef.current = true;
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  var handleStaticModalAnimation = function handleStaticModalAnimation() {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = (0,dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_11__.default)(modal.dialog, function () {
      setAnimateStaticModal(false);
    });
  };

  var handleStaticBackdropClick = function handleStaticBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  var handleClick = function handleClick(e) {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide();
  };

  var handleEscapeKeyDown = function handleEscapeKeyDown(e) {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in react-overlays,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  var handleEnter = function handleEnter(node) {
    if (node) {
      node.style.display = 'block';
      updateDialogStyle(node);
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (onEnter) onEnter.apply(void 0, [node].concat(args));
  };

  var handleExit = function handleExit(node) {
    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (onExit) onExit.apply(void 0, [node].concat(args));
  };

  var handleEntering = function handleEntering(node) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if (onEntering) onEntering.apply(void 0, [node].concat(args)); // FIXME: This should work even when animation is disabled.

    (0,dom_helpers_addEventListener__WEBPACK_IMPORTED_MODULE_3__.default)(window, 'resize', handleWindowResize);
  };

  var handleExited = function handleExited(node) {
    if (node) node.style.display = ''; // RHL removes it sometimes

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    if (onExited) onExited.apply(void 0, args); // FIXME: This should work even when animation is disabled.

    (0,dom_helpers_removeEventListener__WEBPACK_IMPORTED_MODULE_6__.default)(window, 'resize', handleWindowResize);
  };

  var renderBackdrop = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(function (backdropProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, backdropProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
    }));
  }, [animation, backdropClassName, bsPrefix]);

  var baseModalStyle = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, style, modalStyle); // Sets `display` always block when `animation` is false


  if (!animation) {
    baseModalStyle.display = 'block';
  }

  var renderDialog = function renderDialog(dialogProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      role: "dialog"
    }, dialogProps, {
      style: baseModalStyle,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, animateStaticModal && bsPrefix + "-static"),
      onClick: backdrop ? handleClick : undefined,
      onMouseUp: handleMouseUp,
      "aria-labelledby": ariaLabelledby
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(Dialog, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName
    }), children));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ModalContext__WEBPACK_IMPORTED_MODULE_18__.default.Provider, {
    value: modalContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_overlays_Modal__WEBPACK_IMPORTED_MODULE_19__.default, {
    show: show,
    ref: setModalRef,
    backdrop: backdrop,
    container: container,
    keyboard: true // Always set true - see handleEscapeKeyDown
    ,
    autoFocus: autoFocus,
    enforceFocus: enforceFocus,
    restoreFocus: restoreFocus,
    restoreFocusOptions: restoreFocusOptions,
    onEscapeKeyDown: handleEscapeKeyDown,
    onShow: onShow,
    onHide: onHide,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: onEntered,
    onExit: handleExit,
    onExiting: onExiting,
    onExited: handleExited,
    manager: getModalManager(),
    containerClassName: bsPrefix + "-open",
    transition: animation ? DialogTransition : undefined,
    backdropTransition: animation ? BackdropTransition : undefined,
    renderBackdrop: renderBackdrop,
    renderDialog: renderDialog
  }));
});
Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps;
Modal.Body = _ModalBody__WEBPACK_IMPORTED_MODULE_20__.default;
Modal.Header = _ModalHeader__WEBPACK_IMPORTED_MODULE_21__.default;
Modal.Title = _ModalTitle__WEBPACK_IMPORTED_MODULE_22__.default;
Modal.Footer = _ModalFooter__WEBPACK_IMPORTED_MODULE_23__.default;
Modal.Dialog = _ModalDialog__WEBPACK_IMPORTED_MODULE_14__.default;
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ModalBody.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ModalBody.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__.default)('modal-body'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ModalContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ModalContext.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var ModalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide: function onHide() {}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ModalDialog.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ModalDialog.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");


var _excluded = ["bsPrefix", "className", "contentClassName", "centered", "size", "children", "scrollable"];



var ModalDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      contentClassName = _ref.contentClassName,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bsPrefix + "-content", contentClassName)
  }, children));
});
ModalDialog.displayName = 'ModalDialog';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalDialog);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ModalFooter.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ModalFooter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__.default)('modal-footer'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ModalHeader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ModalHeader.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/esm/CloseButton.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/esm/ModalContext.js");


var _excluded = ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"];






var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var ModalHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'modal-header');
  var context = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_ModalContext__WEBPACK_IMPORTED_MODULE_6__.default);
  var handleClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__.default)(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children, closeButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_7__.default, {
    label: closeLabel,
    onClick: handleClick
  }));
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ModalTitle.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ModalTitle.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/esm/divWithClassName.js");


var DivStyledAsH4 = (0,_divWithClassName__WEBPACK_IMPORTED_MODULE_0__.default)('h4');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_1__.default)('modal-title', {
  Component: DivStyledAsH4
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (className) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (p, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

/***/ }),

/***/ "./node_modules/react-overlays/esm/Modal.js":
/*!**************************************************!*\
  !*** ./node_modules/react-overlays/esm/Modal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/activeElement */ "./node_modules/dom-helpers/esm/activeElement.js");
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _restart_hooks_useMounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @restart/hooks/useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @restart/hooks/useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");
/* harmony import */ var _restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @restart/hooks/usePrevious */ "./node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/react-overlays/esm/ModalManager.js");
/* harmony import */ var _useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useWaitForDOMRef */ "./node_modules/react-overlays/esm/useWaitForDOMRef.js");



/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */













var manager;

function getManager() {
  if (!manager) manager = new _ModalManager__WEBPACK_IMPORTED_MODULE_13__.default();
  return manager;
}

function useModalManager(provided) {
  var modalManager = provided || getManager();
  var modal = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: function add(container, className) {
      return modalManager.add(modal.current, container, className);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  });
}

var Modal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function (_ref, ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'dialog' : _ref$role,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      _ref$backdrop = _ref.backdrop,
      backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      onBackdropClick = _ref.onBackdropClick,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      transition = _ref.transition,
      backdropTransition = _ref.backdropTransition,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
      _ref$enforceFocus = _ref.enforceFocus,
      enforceFocus = _ref$enforceFocus === void 0 ? true : _ref$enforceFocus,
      _ref$restoreFocus = _ref.restoreFocus,
      restoreFocus = _ref$restoreFocus === void 0 ? true : _ref$restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      renderDialog = _ref.renderDialog,
      _ref$renderBackdrop = _ref.renderBackdrop,
      renderBackdrop = _ref$renderBackdrop === void 0 ? function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", props);
  } : _ref$renderBackdrop,
      providedManager = _ref.manager,
      containerRef = _ref.container,
      containerClassName = _ref.containerClassName,
      onShow = _ref.onShow,
      _ref$onHide = _ref.onHide,
      onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
      onExit = _ref.onExit,
      onExited = _ref.onExited,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);

  var container = (0,_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_14__.default)(containerRef);
  var modal = useModalManager(providedManager);
  var isMounted = (0,_restart_hooks_useMounted__WEBPACK_IMPORTED_MODULE_9__.default)();
  var prevShow = (0,_restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_11__.default)(show);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(!show),
      exited = _useState[0],
      setExited = _useState[1];

  var lastFocusRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useImperativeHandle)(ref, function () {
    return modal;
  }, [modal]);

  if (dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_4__.default && !prevShow && show) {
    lastFocusRef.current = (0,dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__.default)();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  var handleShow = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__.default)(function () {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = (0,dom_helpers_listen__WEBPACK_IMPORTED_MODULE_5__.default)(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = (0,dom_helpers_listen__WEBPACK_IMPORTED_MODULE_5__.default)(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    function () {
      return setTimeout(handleEnforceFocus);
    }, true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      var currentActiveElement = (0,dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__.default)(document);

      if (modal.dialog && currentActiveElement && !(0,dom_helpers_contains__WEBPACK_IMPORTED_MODULE_3__.default)(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  var handleHide = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__.default)(function () {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  (0,_restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_10__.default)(function () {
    handleHide();
  }); // --------------------------------

  var handleEnforceFocus = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__.default)(function () {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    var currentActiveElement = (0,dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__.default)();

    if (modal.dialog && currentActiveElement && !(0,dom_helpers_contains__WEBPACK_IMPORTED_MODULE_3__.default)(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  var handleBackdropClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__.default)(function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  var handleDocumentKeyDown = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__.default)(function (e) {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  var removeFocusListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)();
  var removeKeydownListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)();

  var handleHidden = function handleHidden() {
    setExited(true);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onExited == null ? void 0 : onExited.apply(void 0, args);
  };

  var Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  var dialogProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    role: role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style: style,
    className: className,
    tabIndex: -1
  });

  var dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", dialogProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.cloneElement(children, {
    role: 'document'
  }));

  if (Transition) {
    dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Transition, {
      appear: true,
      unmountOnExit: true,
      "in": !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }

  var backdropElement = null;

  if (backdrop) {
    var BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(BackdropTransition, {
        appear: true,
        "in": !!show
      }, backdropElement);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, backdropElement, dialog), container));
});
var propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Include a backdrop component.
   */
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    preventScroll: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
  }),

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: prop_types__WEBPACK_IMPORTED_MODULE_6___default().instanceOf(_ModalManager__WEBPACK_IMPORTED_MODULE_13__.default)
};
Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Modal, {
  Manager: _ModalManager__WEBPACK_IMPORTED_MODULE_13__.default
}));

/***/ }),

/***/ "./node_modules/react-overlays/esm/ModalManager.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/esm/ModalManager.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var dom_helpers_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var _isOverflowing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isOverflowing */ "./node_modules/react-overlays/esm/isOverflowing.js");
/* harmony import */ var _manageAriaHidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manageAriaHidden */ "./node_modules/react-overlays/esm/manageAriaHidden.js");







function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }

    return false;
  });
  return idx;
}

/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */
var ModalManager = /*#__PURE__*/function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

    this.hideSiblingNodes = void 0;
    this.handleContainerOverflow = void 0;
    this.modals = void 0;
    this.containers = void 0;
    this.data = void 0;
    this.scrollbarSize = void 0;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__.default)();
  }

  var _proto = ModalManager.prototype;

  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };

  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt((0,dom_helpers_css__WEBPACK_IMPORTED_MODULE_2__.default)(container, 'paddingRight') || '0', 10) + this.scrollbarSize + "px";
    }

    (0,dom_helpers_css__WEBPACK_IMPORTED_MODULE_2__.default)(container, style);
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    Object.assign(container.style, containerState.style);
  };

  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      (0,_manageAriaHidden__WEBPACK_IMPORTED_MODULE_4__.hideSiblings)(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: (0,_isOverflowing__WEBPACK_IMPORTED_MODULE_5__.default)(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_0__.default.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_1__.default.bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        (0,_manageAriaHidden__WEBPACK_IMPORTED_MODULE_4__.showSiblings)(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      // otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
          backdrop = _data$modals.backdrop,
          dialog = _data$modals.dialog;
      (0,_manageAriaHidden__WEBPACK_IMPORTED_MODULE_4__.ariaHidden)(false, dialog);
      (0,_manageAriaHidden__WEBPACK_IMPORTED_MODULE_4__.ariaHidden)(false, backdrop);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);

/***/ }),

/***/ "./node_modules/react-overlays/esm/isOverflowing.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-overlays/esm/isOverflowing.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isOverflowing)
/* harmony export */ });
/* harmony import */ var dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");



function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0,dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__.default)(node) ? (0,dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__.default)() : (0,dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__.default)(node);
  var win = (0,dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__.default)(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = (0,dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__.default)(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

/***/ }),

/***/ "./node_modules/react-overlays/esm/manageAriaHidden.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-overlays/esm/manageAriaHidden.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ariaHidden": () => (/* binding */ ariaHidden),
/* harmony export */   "hideSiblings": () => (/* binding */ hideSiblings),
/* harmony export */   "showSiblings": () => (/* binding */ showSiblings)
/* harmony export */ });
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(hide, node) {
  if (!node) return;

  if (hide) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
function hideSiblings(container, _ref2) {
  var dialog = _ref2.dialog,
      backdrop = _ref2.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}
function showSiblings(container, _ref3) {
  var dialog = _ref3.dialog,
      backdrop = _ref3.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}

/***/ })

}]);