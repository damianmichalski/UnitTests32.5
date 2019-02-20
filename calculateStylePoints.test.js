const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {

    it('should return note', () => {
        
        const notes = [18.0,18.5,17.5,18.5,18.5];
        const actual = calculateStylePoints(notes);

        const expected = 55.0;

        assert.equal(actual, expected);
    });

    it('should return note if all notes are the same', () => {
        
        const notes = [18.5,18.5,18.5,18.5,18.5];
        const actual = calculateStylePoints(notes);

        const expected = 55.5;

        assert.equal(actual, expected);
    });
});