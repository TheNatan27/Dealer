"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var ip_1 = require("ip");
var body_parser_1 = require("body-parser");
var multer_1 = require("multer");
var cors_1 = require("cors");
var MockDatabase_js_1 = require("./MockDatabase.js");
var endpoint = (0, express_1["default"])();
var backendPort = process.env.BACKEND_PORT || '30552';
var backendIp = process.env.BACKEND_PORT || ip_1["default"].address();
var singelGameID = 'testgameid123';
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, callback) {
        callback(null, './result-files');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = (0, multer_1["default"])({ storage: storage });
endpoint.use((0, cors_1["default"])());
endpoint.use(body_parser_1["default"].json());
endpoint.use(body_parser_1["default"].urlencoded({ extended: true }));
var mockDatabase = new MockDatabase_js_1.MockDatabase();
endpoint.post('/startgame', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var gameId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mockDatabase.startGame()];
            case 1:
                gameId = _a.sent();
                response.json({ 'gameID': gameId });
                return [2 /*return*/];
        }
    });
}); });
endpoint.get('/draw-card/:gameID', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var testCard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mockDatabase.drawTestCard(request.params.gameID)];
            case 1:
                testCard = _a.sent();
                response.download(testCard.script);
                console.log("Log: ".concat(testCard.name, " drawn"));
                return [2 /*return*/];
        }
    });
}); });
endpoint.post('/reveal-card/:gameID', upload.single('result'), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var folderMessage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.body];
            case 1:
                folderMessage = _a.sent();
                console.log("Log: reveived result card: ".concat(folderMessage.name));
                response.json({ 'received': 'ok' });
                return [2 /*return*/];
        }
    });
}); });
endpoint.listen(backendPort, function () {
    console.log("Log: server running at http://".concat(backendIp, ":").concat(backendPort));
});
endpoint.post('/startgame-dev', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var gameId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mockDatabase.startGame()];
            case 1:
                gameId = _a.sent();
                response.json({ 'gameID': gameId });
                return [2 /*return*/];
        }
    });
}); });
endpoint.get('/download/:gameID', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var testCard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mockDatabase.drawTestCard(request.params.gameID)];
            case 1:
                testCard = _a.sent();
                response.download(testCard.script);
                console.log("Log: ".concat(testCard.name, " drawn"));
                return [2 /*return*/];
        }
    });
}); });
