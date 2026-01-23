/*
Дан массива строк  [‘10-02-2022’, ‘тест’, ‘11/12/2023’, ‘00/13/2022’, ‘41/12/2023’];

Необходимо написать функцию, которая бы удаляла бы из массива все строки,
 которые нельзя перевести в дату (можно: 10-02-2022 и 11/12/2023) 
 и возвращала новый массив вида:

[‘10-02-2022’, ‘12-11-2023’]
*/

const data = [
    '10-02 - 2022', 
    'тест',
    '11 / 12 / 2023',
    '00 / 13 / 2022',
    '41 / 12 / 2023'
]

function parseDate(value) {
   
        let day, month, year;

    if (value.includes('-')) {
        const parts = value.split('-');
        if (parts.length !== 3)
            return null;
        day = Number(parts[0]);
        month = Number(parts[1]);
        year = Number(parts[2]);
    } else if (value.includes('/')) {
        const parts = value.split('/');
         if (parts.length !== 3)
        return null;
        day = Number(parts[0]);
        month = Number(parts[1]);
        year = Number(parts[2]);
    } else {
        return null;
        }

if (!Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year)
) {
    return null;
}
if (day < 1 || day > 31) {
    return null;

}
if (month < 1 || month > 12) {
    return null;
}
return { day, month, year };
}
function formatDate({ day, month, year }) {
    
    const formattedDate = day < 10 ? '0' + day : String(day);
    const formattedMonth = month < 10 ? '0' + month : String(month);

    return formattedDate + '-' + formattedMonth + '-' + year;
}

function filterDates(arr) {
    return arr.reduce((acc, value) => {
        const parsed = parseDate(value);
        if (parsed) {
            acc.push(formatDate(parsed));
        }
        return acc;
    }, []);
}
console.log(filterDates(data));