"use strict";
exports.__esModule = true;
exports.TestState = void 0;
var TestState;
(function (TestState) {
    TestState[TestState["Ready"] = 0] = "Ready";
    TestState[TestState["Started"] = 1] = "Started";
    TestState[TestState["Done"] = 2] = "Done";
    TestState[TestState["NotRun"] = 3] = "NotRun";
})(TestState = exports.TestState || (exports.TestState = {}));
