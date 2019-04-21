//task 1
//A function which prints str after n seconds.
function printTimeout(str, n) {
    let interval = n * 1000;
    let printStr = function(){
        console.log(str);
    }
    let result = setTimeout(printStr, interval);
}
printTimeout('hello', 10);

//task2
//A function which returns sum of all numbers from 1 to n using recursion.
function sumAll(n) {
    let result = 0;
    for(i = 0; i <= n; i++){
        result += i;
    }
    return result;
}
console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10


//version2
function sumAllVersion2(n) {
    let result = (n * (n+1)) / 2;
    return result;
}
console.log(sumAllVersion2(2)); // 3
console.log(sumAllVersion2(4)); // 10


//task3
//A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str
function bombTimer(str, time) {
    let timer = setInterval( function(){
        if (time >= 1){
            console.log(time--)
        } else {
            console.log(str);
            console.log('****************');
            clearInterval(timer);
        }
    },1000);
}
bombTimer('Boooom', 3); //3 2 1 Boooom


//task4
//A function which returns factorial of number using recursion.
function factorial(n) {
    if (n==0 || n==1){
        return 1;
    }
    return factorial(n-1)*n;
}
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

//task5
//Implement function from task №3 (bombTimer) using recursion and setTimeout.
function bombTimer5(str, time) {
    let timer = () => {
        console.log(time);
        if (time === 1) {
            setTimeout(() => console.log(str), 1000);
            clearTimeout(settingTimes);
        }
        while (time > 1 ) {
            return bombTimer(str, time - 1 );
        }
    }
    let settingTimes = setTimeout(timer,1000);
}
bombTimer5('Boooom', 3);

//task6
//A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.
function filterNumbers(arr, maxNumber) {
    let array = [];
    arr.filter (number => {
        if (number < maxNumber){
            array.push(number);
        };
    });
    return array;
}
console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]

//task7
//A function that returns object with min and max numbers from array of numbers.
function minMax(arr){
    //ES6 spread syntax (...arr)
    return 'Max value: ' + Math.max(...arr) + ' Min value: ' + Math.min(...arr);
}
console.log(minMax([1, 4, 8, 2, 20]));

//task8
//A function that returns average of numbers in array.
function average(arr) {
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    });
    let arrAverage = sum / arr.length;
    let result = arrAverage.toFixed(2);
    return (result);
}
console.log(average([1,4,2])); // 2.33


//task9
//A function which concats all first-nested arrays in one array (use reduce):
function concatFirstNestedArrays(arr) {
    let result = [].concat(...arr);
    return result;
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]

//version2
function concatFirstNestedArrays2(arr) {
    var result = arr.reduce(function (elem1, elem2) {
        return elem1.concat(elem2);
    });
    return result;
}
console.log(concatFirstNestedArrays2([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]

//task10
//A function accepts array of users and returns object of users where key is user id and value user data.
const users = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
    let newUser = {};
    for (i=0;i < users.length; i++){
        newUser[users[i]['id']] = users[i];
    }
    return newUser;
}
console.log(usersToObject(users));
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };

//task11
//A function returns array of users that have birthdays in a specific month.
const users2 = [
    { name: 'John', birthday: '1999-2-12' },
    { name: 'Bill', birthday: '1999-1-19' },
    { name: 'Carol', birthday: '1999-4-11' },
    { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users2, month) {
    let result="";
    users2.forEach((usr)=>{
        let birth = new Date(usr.birthday);
        if (birth.getMonth() === month){
            result = usr;
        };
    })
    return result;
}
console.log(filterUsersByMonth(users2, 0)); // [{ name: 'Bill', birthday: '1999-1-19' }]


//task12
//A function returns name and age of users separated by comma that are older than 18.
const users3 = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users3) {
    let adult = [];
    const currentYear = new Date().getFullYear();
    users3.forEach((usr)=>{
        const userYear = new Date(usr.birthday).getFullYear();
        const addult = currentYear - userYear;
        if (addult >=18){
            adult.push(`${usr.name} ${addult}`);
        };
    });
    return adult.join();
}
console.log(getAdultNames(users3)); // 'John 19, Luce 18'