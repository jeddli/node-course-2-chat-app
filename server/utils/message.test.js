var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        // store res in variable
        var from = "Admin";
        var text = "Hello";
        var message = generateMessage( from, text);

        // assert cratedAt is number
        expect(message.createdAt).toBeA('number');

        expect(message).toInclude( {from, text});
    });
});