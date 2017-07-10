var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {
        // store res in variable
        var from = "Admin";
        var latitude = 15;
        var longitude = 19;
        var url = `https://www.google.com/maps?q=15,19`;
        var message = generateLocationMessage( from, latitude, longitude);

        // assert cratedAt is number
        expect(message.createdAt).toBeA('number');

        expect(message).toInclude( {from, url});
    });
});