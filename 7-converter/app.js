/*
Написать функцию, которая получает на вход 3 параметра:

суммой средств - 1000
валютой средств - руб
целевой валютой - $
целевой валютой - EUR
Возвращает число в новой валюте, если конвертация поддерживается,
 или null, если нет. Ставки конвертации хранятся внутри функции.
 */

function convertCurrency(amount, currencyOfFunds, targetCurrency) {
    let rate = null;
    switch (currencyOfFunds) {
        case 'RUB':
            if (targetCurrency === 'USD') {
                rate = 0.03;
            } else if (targetCurrency === 'EUR') {
                rate = 0.027;
            }
            break;
        case 'USD':
            if (targetCurrency === 'RUB') {
                rate = 33;
            } else if (targetCurrency === 'EUR') {
                rate = 0.9;
            }
            break;
         case 'EUR':
            if (targetCurrency === 'RUB') {
                rate = 37;
            } else if (targetCurrency === 'USD') {
                rate = 1.1;
            }
            break;
        default:
            rate = null;
    }
    if (rate === null) {
        return null;
       
    }
    return amount * rate;
}


console.log(convertCurrency(1000, 'RUB', 'USD'));
console.log(convertCurrency(50, 'USD', 'RUB'));
console.log(convertCurrency(1000, 'RUB', 'EUR'));
console.log(convertCurrency(50, 'EUR', 'RUB'));
console.log(convertCurrency(50, 'RUB', 'PLN'));