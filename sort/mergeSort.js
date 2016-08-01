// our first divide-and-conquer algorithm
// `O(n log n)`

const mergeSort = list => {
    let len = list.length;
    if (len < 2) return list;

    let mid = Math.floor(len/2);
    let left = list.slice(0, mid);
    let right = list.slice(mid, len);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return results.concat(left, right);
};

module.exports = mergeSort;
