"use strict";
exports.__esModule = true;
exports.WebBookAPI = void 0;
var axios_1 = require("axios");
var WebBookAPI = /** @class */ (function () {
    function WebBookAPI(args) {
        this.args = args;
        var axios = new axios_1.Axios();
        axios.get("".concat(args === null || args === void 0 ? void 0 : args.url, "?id=").concat(args === null || args === void 0 ? void 0 : args.id, "?pass=").concat(args === null || args === void 0 ? void 0 : args.password)).then(function (res) {
            console.log("".concat(args === null || args === void 0 ? void 0 : args.url, "?id=").concat(args === null || args === void 0 ? void 0 : args.id, "?pass=").concat(args === null || args === void 0 ? void 0 : args.password));
            console.log(res.data);
            return res.data;
        });
    }
    ;
    return WebBookAPI;
}());
exports.WebBookAPI = WebBookAPI;
new WebBookAPI({ id: '084084080', url: 'https://api.oxie.fr/webhook', password: 'esdsd/sd!' });
