const quickSort = require('../sort/quickSort');

describe('quickSort', () => {
    it ('should sort an array', (done) => {
        let nums = [4,5,3,1,2];
        expect(quickSort(nums)).toEqual([1,2,3,4,5]);
        done();
    })
});
