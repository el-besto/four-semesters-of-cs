const mergeSort = require('../sort/mergeSort');

describe('merge sort', () => {
    it('should sort an array of numbers', () => {
        let nums = [3,2,5,6,8,10,4,9,7,1];
        let result = mergeSort(nums);
        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});
