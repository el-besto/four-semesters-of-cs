// quickSort
const quickSort = list => {
    if (list.length < 2) return list;
    let limit = list.length - 1;
    let pivot = list[limit];
    let left = [];
    let right = [];
    for (let i = 0; i < limit; i++) {
        if (list[i] <= pivot) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));

}
// const quickSort = (list) => {
//     if (list.length <= 1) {
//         return list;
//     }
//     let pivot = list[list.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < list.length - 1; i++) {
//         if (list[i] < pivot) {
//             left.push(list[i]);
//         } else {
//             right.push(list[i]);
//         }
//     }
//     return quickSort(left).concat(pivot, quickSort(right));
// };

module.exports = quickSort;
