// good to use if you know you have a list that is mostly sorted
// We need two loops

/*
 Insertion sort!

 The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
 The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
 loop goes over the sorted part of the list and inserts it into the correct position in the array.

 */

const insertionSort = list => {
    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < i; j++) {
            if (list[i] < list[j]) {
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
}


// implementation from: http://algorithms.openmymind.net/sort/insertionsort.html
const insertionSortFoundOnline = (list) => {
    let length = list.length;
    let i = 1; // we start at 1 because we assume that the item of i at first position is already "sorted" since its a single item array.
    for (; i < length; i++) {
        let temp = list[i]; // hold first element, to compare below.
        let j = i - 1;
        for (; j >= 0 && list[j] > temp; j--) {
            list[j+1] = list[j];
        }
        list[j+1] = temp;
    }
}


// solution using splice
const insertionSortWithSplice = nums => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                // this is a one item array [] that holds the
                let spliced = nums.splice(i, 1); // nums below has been mutated, it no longer has the value at the i index.
                // now we put the lower number back in front of the higher-number
                nums.splice(j, 0, spliced[0]); // 0 indicates that we are not going to be deleting any items from array, we are just splicing in the num
                // spliced[0] was used just to unpack the result of the single array.
            }
        }
    }
};

module.exports = insertionSort;