/*
Написать функцию, которая принимает объект query
 параметров и возвращает строку для вставки:
 */
const user = {
    search: 'Вася',
    take: 10,
};

function toQueryString(params) {
    return Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
}

const queryString = toQueryString(user);
console.log(queryString);

