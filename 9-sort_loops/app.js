/*
Дан массив чисел: arr = [1, 40, -5, 10, 0]
Написать функцию, которая сортирует данный 
массив при помощи циклов.
Подсказка:
Нужно использовать 2 цикла, вложенных друг в друга
Нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function sortArray(arr) {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray(arr));