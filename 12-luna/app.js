/*
Написать функцию проверки номера карты алгоритмом Луна.
 В функцию передаётся карта: 4561-2612-1234-5464,
 а функция возвращает true,
 если карта проходит алгоритм и false, если нет.
 */

const card = '4561-2612-1234-5464';

function validDateLuhn(value) {
    const digits = value.replace(/\D/g, '')
        .split('')
        .map(Number);
    let sum = 0;
    let shouldDouble = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
}

console.log(validDateLuhn(card));