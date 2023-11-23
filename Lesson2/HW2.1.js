// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = ['book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7', 'book8', 'book9', 'book10'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'title1',
    pageCount: 300,
    genre: 'fantastic'
}
let book2 = {
    title: 'title2',
    pageCount: 250,
    genre: 'drama'
}
let book3 = {
    title: 'title3',
    pageCount: 500,
    genre: 'mystic'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом. Кожен автор має поля name та age.

book1.authors = [
    {name: 'name1', age: 38},
    {name: 'name2', age: 32}
];
console.log(book1);
book2.authors = [
    {name: 'name3', age: 27},
    {name: 'name4', age: 33}
];
console.log(book2);
book1.authors = [
    {name: 'name5', age: 42},
    {name: 'name6', age: 35}
];
console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'user1', username: 'username1', password: 'al1783fn'},
    {name: 'user2', username: 'username2', password: 'nr11483d'},
    {name: 'user3', username: 'username3', password: 'jhrtk3fd'},
    {name: 'user4', username: 'username4', password: 'j48522fd'},
    {name: 'user5', username: 'username5', password: 'njl1578k'},
    {name: 'user6', username: 'username6', password: 'jl1583r1'},
    {name: 'user7', username: 'username7', password: 'jl1583ct'},
    {name: 'user8', username: 'username8', password: 'j78953fd'},
    {name: 'user9', username: 'username9', password: 'bygu83fm'},
    {name: 'user10', username: 'username10', password: 'jl15guig'}
];

console.log('user1:', users[0].password);
console.log('user2:', users[1].password);
console.log('user3:', users[2].password);
console.log('user4:', users[3].password);
console.log('user5:', users[4].password);
console.log('user6:', users[5].password);
console.log('user7:', users[6].password);
console.log('user8:', users[7].password);
console.log('user9:', users[8].password);
console.log('user10:', users[9].password);

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10;
if (x === 0) {
    console.log('Невірно')
} else {
    console.log('Вірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59;
if (time > 0 && time < 16) {
    console.log('першa частина години')
} else if (time > 15 && time < 31) {
    console.log('другa частина години')
} else if (time > 30 && time < 46) {
    console.log('третя частина години')
} else if (time > 45 && time < 60) {
    console.log('четверта частина години')
} else {
    console.log('число за межами від 0 до 59')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let date = 5;
if (date >=1 && date < 11) {
    console.log('першa декада місяця')
} else if (date > 10 && date < 21) {
    console.log('другa частина години')
} else if (date > 20 && date <= 31) {
    console.log('третя частина години')
} else {
    console.log('число за межами від 1 до 31')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що
// заплановано на цей день (можна замість плану на день, назву дня англійською).

let day = +prompt('введіть порядковий номер дня тижня');
switch (day){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
      console.log('thursday');
      break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a =5;
let b = 3;
if (a>b){
    console.log('max значення =',a);
}else if(a===b){
    console.log('числа рівні')
}else {
    console.log('max значення =',b)
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподібні, тобто приводиться до false)

let y=25;
let y1 = !!'';
let y2 = !!0;
let y3 = !!undefined;
let y4 = !!null;
let y5 = !!false;
let y6 = !!NaN;
let res = y1||y2||y3||y4||y5||y6;
if (!!y===res){
    console.log('default')
} else {
    console.log(y)
}


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
//     на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер')
}else {
    console.log('')
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер')
}else {
    console.log('')
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер')
}else {
    console.log('')
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер')
}else {
    console.log('')
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер')
}else {
    console.log('')
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер')
}else {
    console.log('')
}