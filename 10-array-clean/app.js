/*
Напишите функцию, которая принимает:

Массив чисел
Функцию удаления элементов
И возвращает отфильтрованный массив. 
При этом функция удаления элементов принимает 
число и возвращает true,если его надо удалить
 и false, если надо оставить.
 */


const arr = [3, 6, 9, 2];

function reverseFilter (arr, removeFn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!removeFn(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function removeGreatThanFive(num) {
    return num > 5;
}
let filteredArray = reverseFilter(arr, removeGreatThanFive);

console.log(filteredArray);

