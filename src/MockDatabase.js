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
exports.MockDatabase = void 0;
var uuid_1 = require("uuid");
var TestCollection_js_1 = require("./TestCollection.js");
var TestCard_js_1 = require("./TestCard.js");
var MockDatabase = /** @class */ (function () {
    /**
     * @param testCollections The mock database keeps track of the collections here
     */
    function MockDatabase() {
        this.testCollections = new Array();
    }
    MockDatabase.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var TestCollection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateCollection()];
                    case 1:
                        TestCollection = _a.sent();
                        this.testCollections.push(TestCollection);
                        return [2 /*return*/, TestCollection.gameId];
                }
            });
        });
    };
    MockDatabase.prototype.drawTestCard = function (gameID) {
        return __awaiter(this, void 0, void 0, function () {
            var TestCollection;
            return __generator(this, function (_a) {
                TestCollection = this.testCollections.find(function (TestCollection) { return TestCollection.gameId === gameID; });
                return [2 /*return*/, this.drawFromPack(TestCollection)];
            });
        });
    };
    MockDatabase.prototype.drawFromPack = function (TestCollection) {
        return __awaiter(this, void 0, void 0, function () {
            var choosenTestCard;
            return __generator(this, function (_a) {
                choosenTestCard = TestCollection.cardSet.find(function (TestCard) { return TestCard.state === TestCard_js_1.TestState.Ready; });
                choosenTestCard.state = TestCard_js_1.TestState.Started;
                return [2 /*return*/, choosenTestCard];
            });
        });
    };
    MockDatabase.prototype.generateCollection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cardList, gameId, testCollection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateCards()];
                    case 1:
                        cardList = _a.sent();
                        gameId = (0, uuid_1.v4)();
                        testCollection = new TestCollection_js_1.TestCollection(gameId, cardList);
                        return [2 /*return*/, testCollection];
                }
            });
        });
    };
    MockDatabase.prototype.generateCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cardsList;
            return __generator(this, function (_a) {
                cardsList = new Array();
                cardsList.push({ name: 'test01', script: './src/TestFiles/test01.spec.ts', state: TestCard_js_1.TestState.Ready });
                cardsList.push({ name: 'test02', script: './src/TestFiles/test02.spec.ts', state: TestCard_js_1.TestState.Ready });
                cardsList.push({ name: 'test03', script: './src/TestFiles/test03.spec.ts', state: TestCard_js_1.TestState.Ready });
                cardsList.push({ name: 'test04', script: './src/TestFiles/test04.spec.ts', state: TestCard_js_1.TestState.Ready });
                cardsList.push({ name: 'test05', script: './src/TestFiles/test05.spec.ts', state: TestCard_js_1.TestState.Ready });
                return [2 /*return*/, cardsList];
            });
        });
    };
    MockDatabase.prototype.startGameDev = function () {
        return __awaiter(this, void 0, void 0, function () {
            var TestCollection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateCollectionDev()];
                    case 1:
                        TestCollection = _a.sent();
                        this.testCollections.push(TestCollection);
                        return [2 /*return*/, TestCollection.gameId];
                }
            });
        });
    };
    MockDatabase.prototype.generateCollectionDev = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cardList, gameId, testCollection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateCards()];
                    case 1:
                        cardList = _a.sent();
                        gameId = 'testgameid123';
                        testCollection = new TestCollection_js_1.TestCollection(gameId, cardList);
                        return [2 /*return*/, testCollection];
                }
            });
        });
    };
    return MockDatabase;
}());
exports.MockDatabase = MockDatabase;
/**
 * Drawing mechanism
 * Choose the right game by gameId, then the game should handle
 * the test selection
 *
 * StartGame
 * startGame() -> generateCollection() -> generateCards()
 * returns game id, pushes game <- combines gameId and cards <- generates cards
 */ 
