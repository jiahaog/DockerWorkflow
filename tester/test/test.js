var request = require('request');
var assert = require('chai').assert;

describe('Can communicate with the web page', function () {
    this.timeout(10000);
    it('Should be able to make a request to the page', function () {
        request('http://server:3000', function (error, response, body) {
            if (error) {
                done(error);
                return;
            }

            done();
        });
    });
});

describe('Array', function(){
    describe('indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});