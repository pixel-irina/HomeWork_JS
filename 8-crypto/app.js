/*
Написать 2 функции:

шифратор пароля - функция принимает пароль, разбивает по символам, 
меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
проверка пароля - принимает зашифрованный пароль и второй пароль.
Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, 
если он совпадает со втором паролем и false, если нет.

crypto(‘password’) -> ssapdorw
check(‘ssapdorw’, ‘password’) -> true
check(‘ssapdorw’, ‘wrong’) -> false
*/

function crypto(password) {
    let arr = password.split('');
    
    let encrypted = [
        arr[3],
        arr[2],
        arr[1],
        arr[0],
        arr[7],
        arr[5],
        arr[6],
        arr[4]
    ];
    return encrypted.join('');
    
}

function check(encryptedPassword, password) {
    let arr = encryptedPassword.split('');
 
    let decrypted = [
        arr[3],
        arr[2],
        arr[1],
        arr[0],
        arr[7],
        arr[5],
        arr[6],
        arr[4]
    ];
   
    return decrypted.join('') === 'password';
     
}
console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));