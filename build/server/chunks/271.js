exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 64164:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 7439:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89232))

/***/ }),

/***/ 42793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useGlobalContext),
/* harmony export */   m: () => (/* binding */ globalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_globalReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70658);
/* __next_internal_client_entry_do_not_use__ globalContext,useGlobalContext auto */ 

const globalContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    state: _reducers_globalReducer__WEBPACK_IMPORTED_MODULE_1__/* .init_state_global */ .Nq,
    dispatch: ()=>{}
});
const useGlobalContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(globalContext);


/***/ }),

/***/ 89232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(40541);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(23824);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/app/reducers/globalReducer.ts
var globalReducer = __webpack_require__(70658);
// EXTERNAL MODULE: ./src/app/context/globalContext.ts
var globalContext = __webpack_require__(42793);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(74284);
;// CONCATENATED MODULE: ./src/app/providers.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Providers({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react.SessionProvider, {
        children: children
    });
}
/* harmony default export */ const providers = (Providers);

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
function RootLayout({ children }) {
    const [state, dispatch] = (0,react_.useReducer)(globalReducer/* globalReducer */.ot, globalReducer/* init_state_global */.Nq);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(globalContext/* globalContext */.m.Provider, {
                value: {
                    state,
                    dispatch
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(providers, {
                    children: children
                })
            })
        })
    });
}


/***/ }),

/***/ 70658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nq: () => (/* binding */ init_state_global),
/* harmony export */   SQ: () => (/* binding */ reducerTypes),
/* harmony export */   f2: () => (/* binding */ chatTypes),
/* harmony export */   ot: () => (/* binding */ globalReducer)
/* harmony export */ });
var chatTypes;
(function(chatTypes) {
    chatTypes["Answer"] = "Answer";
    chatTypes["Question"] = "Question";
})(chatTypes || (chatTypes = {}));
var reducerTypes;
(function(reducerTypes) {
    reducerTypes["ADD_CHAT"] = "ADD_CHAT";
    reducerTypes["SET_JWT"] = "SET_JWT";
})(reducerTypes || (reducerTypes = {}));
const init_state_global = {
    chats: [],
    jwt: ""
};
const globalReducer = (state, action)=>{
    switch(action.type){
        case reducerTypes.ADD_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    action.payloadGlobal
                ]
            };
        case reducerTypes.SET_JWT:
            return {
                ...state,
                jwt: action.payloadGlobal
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/dilumrathnayake/Documents/GitHub/chat-ai/src/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 23824:
/***/ (() => {



/***/ })

};
;