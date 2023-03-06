"use strict";
exports.__esModule = true;
exports.TestCollection = void 0;
var TestCollection = /** @class */ (function () {
    /**
     *
     * @param gameID A randomly generated id, uniwue to each game
     * @param Cardset An array of test the contained in the collection
     */
    function TestCollection(gameID, Cardset) {
        this.gameId = gameID;
        this.cardSet = Cardset;
    }
    return TestCollection;
}());
exports.TestCollection = TestCollection;
