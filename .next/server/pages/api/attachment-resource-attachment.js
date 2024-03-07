"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/attachment-resource-attachment";
exports.ids = ["pages/api/attachment-resource-attachment"];
exports.modules = {

/***/ "@teleporthq/cms-mappers/wordpress":
/*!****************************************************!*\
  !*** external "@teleporthq/cms-mappers/wordpress" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@teleporthq/cms-mappers/wordpress");;

/***/ }),

/***/ "(api)/./pages/api/attachment-resource-attachment.js":
/*!*****************************************************!*\
  !*** ./pages/api/attachment-resource-attachment.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _resources_attachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/attachment */ \"(api)/./resources/attachment.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_resources_attachment__WEBPACK_IMPORTED_MODULE_0__]);\n_resources_attachment__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    try {\n        const response = await (0,_resources_attachment__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req.query);\n        return res.status(200).json(response);\n    } catch (error) {\n        return res.status(500).send(\"Something went wrong\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXR0YWNobWVudC1yZXNvdXJjZS1hdHRhY2htZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJEO0FBQzVDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNSixpRUFBa0IsQ0FBQ0UsR0FBRyxDQUFDRyxLQUFLLENBQUM7UUFDcEQsT0FBT0YsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsUUFBUSxDQUFDO0lBQ3ZDLEVBQUUsT0FBT0ksS0FBSyxFQUFFO1FBQ2QsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcm5ldC1uZXh0anMtbmV3Ly4vcGFnZXMvYXBpL2F0dGFjaG1lbnQtcmVzb3VyY2UtYXR0YWNobWVudC5qcz83NGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdHRhY2htZW50UmVzb3VyY2UgZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2F0dGFjaG1lbnQnXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdHRhY2htZW50UmVzb3VyY2UocmVxLnF1ZXJ5KVxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcbiAgfVxufVxuICAgICAgICAgICJdLCJuYW1lcyI6WyJhdHRhY2htZW50UmVzb3VyY2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/attachment-resource-attachment.js\n");

/***/ }),

/***/ "(api)/./resources/attachment.js":
/*!*********************************!*\
  !*** ./resources/attachment.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @teleporthq/cms-mappers/wordpress */ \"@teleporthq/cms-mappers/wordpress\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__]);\n_teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(params = {}) {\n    const urlParams = {\n        ...params[\"include\"] && {\n            include: params[\"include\"]\n        }\n    };\n    const data = await fetch(`${process.env.CMS_URL}/wp-json/wp/v2/media?${new URLSearchParams(urlParams)}`, {\n        method: \"GET\",\n        headers: {\n            Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`\n        }\n    });\n    const response = data;\n    return (0,_teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__.normalize)(response, params);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9yZXNvdXJjZXMvYXR0YWNobWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RDtBQUU3RCw2QkFBZSwwQ0FBZ0JDLE1BQU0sR0FBRyxFQUFFLEVBQUU7SUFDMUMsTUFBTUMsU0FBUyxHQUFHO1FBQ2hCLEdBQUlELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUN2QkUsT0FBTyxFQUFFRixNQUFNLENBQUMsU0FBUyxDQUFDO1NBQzNCO0tBQ0Y7SUFDRCxNQUFNRyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUN0QixDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSUMsZUFBZSxDQUMvRFAsU0FBUyxDQUNWLENBQUMsQ0FBQyxFQUNIO1FBQ0VRLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtZQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3hEO0tBQ0YsQ0FDRjtJQUNELE1BQU1DLFFBQVEsR0FBR1YsSUFBSTtJQUNyQixPQUFPSiw0RUFBUyxDQUFDYyxRQUFRLEVBQUViLE1BQU0sQ0FBQztBQUNwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpZGVybmV0LW5leHRqcy1uZXcvLi9yZXNvdXJjZXMvYXR0YWNobWVudC5qcz84OWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ0B0ZWxlcG9ydGhxL2Ntcy1tYXBwZXJzL3dvcmRwcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XG4gIGNvbnN0IHVybFBhcmFtcyA9IHtcbiAgICAuLi4ocGFyYW1zWydpbmNsdWRlJ10gJiYge1xuICAgICAgaW5jbHVkZTogcGFyYW1zWydpbmNsdWRlJ10sXG4gICAgfSksXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52LkNNU19VUkx9L3dwLWpzb24vd3AvdjIvbWVkaWE/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKFxuICAgICAgdXJsUGFyYW1zXG4gICAgKX1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5DTVNfQUNDRVNTX1RPS0VOfWAsXG4gICAgICB9LFxuICAgIH1cbiAgKVxuICBjb25zdCByZXNwb25zZSA9IGRhdGFcbiAgcmV0dXJuIG5vcm1hbGl6ZShyZXNwb25zZSwgcGFyYW1zKVxufVxuIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZSIsInBhcmFtcyIsInVybFBhcmFtcyIsImluY2x1ZGUiLCJkYXRhIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQ01TX1VSTCIsIlVSTFNlYXJjaFBhcmFtcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQ01TX0FDQ0VTU19UT0tFTiIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./resources/attachment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/attachment-resource-attachment.js"));
module.exports = __webpack_exports__;

})();