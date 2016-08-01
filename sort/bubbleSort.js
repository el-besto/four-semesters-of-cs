/*

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

*/
const bubbleSort = list => {
    let len = list.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (list[i] > list[i +1]) {
                let temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

module.exports = bubbleSort;
