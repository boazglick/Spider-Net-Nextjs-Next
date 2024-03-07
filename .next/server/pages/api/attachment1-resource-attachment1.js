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
exports.id = "pages/api/attachment1-resource-attachment1";
exports.ids = ["pages/api/attachment1-resource-attachment1"];
exports.modules = {

/***/ "@teleporthq/cms-mappers/wordpress":
/*!****************************************************!*\
  !*** external "@teleporthq/cms-mappers/wordpress" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@teleporthq/cms-mappers/wordpress");;

/***/ }),

/***/ "(api)/./pages/api/attachment1-resource-attachment1.js":
/*!*******************************************************!*\
  !*** ./pages/api/attachment1-resource-attachment1.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _resources_attachment1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/attachment1 */ \"(api)/./resources/attachment1.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_resources_attachment1__WEBPACK_IMPORTED_MODULE_0__]);\n_resources_attachment1__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    try {\n        const response = await (0,_resources_attachment1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req.query);\n        return res.status(200).json(response);\n    } catch (error) {\n        return res.status(500).send(\"Something went wrong\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXR0YWNobWVudDEtcmVzb3VyY2UtYXR0YWNobWVudDEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFDOUMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1KLGtFQUFtQixDQUFDRSxHQUFHLENBQUNHLEtBQUssQ0FBQztRQUNyRCxPQUFPRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxRQUFRLENBQUM7SUFDdkMsRUFBRSxPQUFPSSxLQUFLLEVBQUU7UUFDZCxPQUFPTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BpZGVybmV0LW5leHRqcy1uZXcvLi9wYWdlcy9hcGkvYXR0YWNobWVudDEtcmVzb3VyY2UtYXR0YWNobWVudDEuanM/NGZhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXR0YWNobWVudDFSZXNvdXJjZSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvYXR0YWNobWVudDEnXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdHRhY2htZW50MVJlc291cmNlKHJlcS5xdWVyeSlcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG4gIH1cbn1cbiAgICAgICAgICAiXSwibmFtZXMiOlsiYXR0YWNobWVudDFSZXNvdXJjZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/attachment1-resource-attachment1.js\n");

/***/ }),

/***/ "(api)/./resources/attachment1.js":
/*!**********************************!*\
  !*** ./resources/attachment1.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @teleporthq/cms-mappers/wordpress */ \"@teleporthq/cms-mappers/wordpress\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__]);\n_teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(params = {}) {\n    const urlParams = {\n        ...params[\"include\"] && {\n            include: params[\"include\"]\n        }\n    };\n    const data = await fetch(`${process.env.CMS_URL}/wp-json/wp/v2/media?${new URLSearchParams(urlParams)}`, {\n        method: \"GET\",\n        headers: {\n            Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`\n        }\n    });\n    const response = data;\n    return (0,_teleporthq_cms_mappers_wordpress__WEBPACK_IMPORTED_MODULE_0__.normalize)(response, params);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9yZXNvdXJjZXMvYXR0YWNobWVudDEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFFN0QsNkJBQWUsMENBQWdCQyxNQUFNLEdBQUcsRUFBRSxFQUFFO0lBQzFDLE1BQU1DLFNBQVMsR0FBRztRQUNoQixHQUFJRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDdkJFLE9BQU8sRUFBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsTUFBTUcsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FDdEIsQ0FBQyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLHFCQUFxQixFQUFFLElBQUlDLGVBQWUsQ0FDL0RQLFNBQVMsQ0FDVixDQUFDLENBQUMsRUFDSDtRQUNFUSxNQUFNLEVBQUUsS0FBSztRQUNiQyxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sZ0JBQWdCLENBQUMsQ0FBQztTQUN4RDtLQUNGLENBQ0Y7SUFDRCxNQUFNQyxRQUFRLEdBQUdWLElBQUk7SUFDckIsT0FBT0osNEVBQVMsQ0FBQ2MsUUFBUSxFQUFFYixNQUFNLENBQUM7QUFDcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaWRlcm5ldC1uZXh0anMtbmV3Ly4vcmVzb3VyY2VzL2F0dGFjaG1lbnQxLmpzP2ZjNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnQHRlbGVwb3J0aHEvY21zLW1hcHBlcnMvd29yZHByZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocGFyYW1zID0ge30pIHtcbiAgY29uc3QgdXJsUGFyYW1zID0ge1xuICAgIC4uLihwYXJhbXNbJ2luY2x1ZGUnXSAmJiB7XG4gICAgICBpbmNsdWRlOiBwYXJhbXNbJ2luY2x1ZGUnXSxcbiAgICB9KSxcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7cHJvY2Vzcy5lbnYuQ01TX1VSTH0vd3AtanNvbi93cC92Mi9tZWRpYT8ke25ldyBVUkxTZWFyY2hQYXJhbXMoXG4gICAgICB1cmxQYXJhbXNcbiAgICApfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkNNU19BQ0NFU1NfVE9LRU59YCxcbiAgICAgIH0sXG4gICAgfVxuICApXG4gIGNvbnN0IHJlc3BvbnNlID0gZGF0YVxuICByZXR1cm4gbm9ybWFsaXplKHJlc3BvbnNlLCBwYXJhbXMpXG59XG4iXSwibmFtZXMiOlsibm9ybWFsaXplIiwicGFyYW1zIiwidXJsUGFyYW1zIiwiaW5jbHVkZSIsImRhdGEiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJDTVNfVVJMIiwiVVJMU2VhcmNoUGFyYW1zIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJDTVNfQUNDRVNTX1RPS0VOIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./resources/attachment1.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/attachment1-resource-attachment1.js"));
module.exports = __webpack_exports__;

})();