"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib/utils");
var chai_1 = require("chai");
describe('util file', function () {
    beforeEach(function () {
        // Add before each test
    });
    it('can add two numbers', function () {
        chai_1.expect(lib.add(5, 2)).to.equal(7);
    });
});
