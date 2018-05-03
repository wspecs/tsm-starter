"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib/utils");
var chai_1 = require("chai");
describe('word parser', function () {
    beforeEach(function () {
    });
    it('initializes', function () {
        chai_1.expect(true).to.equal(true);
    });
    it('validates config', function () {
        var config = {
            destination: '/dest',
            name: 'name',
            repository: 'wspecs'
        };
        chai_1.expect(lib.validateConfig(config)).to.equal(true);
    });
});
