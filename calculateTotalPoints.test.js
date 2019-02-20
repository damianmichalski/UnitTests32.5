const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('mammoth', () => {
        it('should return total points where distance < kPoint', () => {
            
            const notes = [17.0,16.5,17.0,17.0,16.5];
            const actual = calculateTotalPoints(194.0, 'mammoth', 200, notes, -5.2, 0);

            const expected = 158.1;

            assert.equal(actual, expected);
        });

        it('should return total points where distance > kPoint', () => {
            
            const notes = [18.0,18.5,18.0,18.0,19.0];
            const actual = calculateTotalPoints(225.0, 'mammoth', 200, notes, -9.9, 8.7);

            const expected = 203.3;

            assert.equal(actual, expected);
        });
    });

    describe('big', () => {
        it('should return total points where distance < kPoint', () => {
            
            const notes = [17.5,17.5,17.5,17.5,17.5];
            const actual = calculateTotalPoints(118.5, 'big', 120, notes, -1.8, 0);

            const expected = 108.0;

            assert.equal(actual, expected);
        });

        it('should return total points where distance > kPoint', () => {
            
            const notes = [17.5,18.0,17.5,18.0,18.0];
            const actual = calculateTotalPoints(129.0, 'big', 120, notes, -6.5, 0);

            const expected = 123.2;

            assert.equal(actual, expected);
        });
    });

    describe('normal', () => {
        it('should return total points where distance < kPoint', () => {
            
            const notes = [16.0,16.0,16.0,16.0,16.0];
            const actual = calculateTotalPoints(85.5, 'normal', 98, notes, -10.7, 0);

            const expected = 72.3;

            assert.equal(actual, expected);
        });

        it('should return total points where distance > kPoint', () => {
            
            const notes = [18.5,18.5,18.5,19.0,19.0];
            const actual = calculateTotalPoints(106.5, 'normal', 98, notes, -13.5, 6.4);

            const expected = 125.9;

            assert.equal(actual, expected);
        });
    });
});