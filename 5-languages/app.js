/*Написать код, который при передаче
 пользователем языка: en, ru, de 
 выводит в консоль соответствующее 
 приветствие на указанном языке.
Пример: de -> ‘Gutten tag!’*/

const query = prompt('Введите язык ');

switch (query) {
    case 'EN':
    case 'en':
        console.log('Good Morning!');
        break;
    case 'DE':
    case 'de':
        console.log('Gutten tag!');
        break;
    case 'RU':
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'PL':
    case 'pl':
        console.log('Dzień dobry');
        break;
    case 'RO':
    case 'ro':
        console.log('Bună ziua');
        break;
    default:
        console.log('Вы не ввели язык');
}