const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('mammoth', () => {
        it('should return distance points where distance < kPoint', () => {
            
            const actual = calculateDistancePoints(186.0,'mammoth',200);

            const expected = 103.2;

            assert.equal(actual, expected);
        });

        it('should return distance points where distance > kPoint', () => {
            
            const actual = calculateDistancePoints(227.5, 'mammoth', 200);

            const expected = 153.0;

            assert.equal(actual, expected);
        });
    });

    describe('big', () => {
        it('should return distance points where distance < kPoint', () => {
            
            const actual = calculateDistancePoints(109.5,'big',120);

            const expected = 41.1;

            assert.equal(actual, expected);
        });

        it('should return distance points where distance > kPoint', () => {
            
            const actual = calculateDistancePoints(133.5,'big',120);

            const expected = 84.3;

            assert.equal(actual, expected);
        });
    });

    describe('normal', () => {
        it('should return distance points where distance < kPoint', () => {
            
            const actual = calculateDistancePoints(83.0,'normal',98);

            const expected = 30.0;

            assert.equal(actual, expected);
        });

        it('should return distance points where distance > kPoint', () => {
            
            const actual = calculateDistancePoints(106.5,'normal',98);

            const expected = 77.0;

            assert.equal(actual, expected);
        });
    });
});