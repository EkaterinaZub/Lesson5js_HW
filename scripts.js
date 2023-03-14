"Use strict"

//  Task 1
// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

{
    function countExample(a, b, c) {
        let result = (a - b) / c;
        console.log(result)

    }
    countExample(30, 3, 3);


}
{
    const countExample = (a, b, c) => {
        return (a - b) / c;
    }

    console.log(countExample(30, 3, 3));
}

// Task 2
// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

{
    function countSquare(a) {
        let square = Math.pow(a, 2);
        let cube = Math.pow(a, 3);
        return [`квадрат чиста а = ${square}, куб числа а = ${cube}`];

    }

    console.log(countSquare(5));

}

// Task 3
// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

{
    function maxNumber(a, b) {
        if (a > b) {
            return a;
        } else
            return b;

    }

    const number = maxNumber(55, 34);
    console.log(number);
}

//  Task 4
// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

// {
//     let a = +prompt("Введите число");

//     function enterNumber(a) {

//     let arr=[]; 


// }console.log(arr);
//     enterNumber(a)
//     console.log(enterNumber(arr));



// }

// Task 5 
// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

{
    function isEven(s) {
        return s % 2 === 0 ? "true" : "false";
    }

    console.log(isEven(9));

}

// Task 6
// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
{

    let arr = [2, 3, 4, 10, 6, 7, 8, 21, 56, 87]
    let arr2 = [];

    function outputEven(a) {

        for (let i = 0; i <= arr.length; i++) {

            if (arr[i] % 2 === 0) {
                arr2.push(arr[i]);
            }
        }
    }

    outputEven(arr);
    console.log(arr2);
}

// Task 7
// Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//     циклы):
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:

//     Курс «JS».

//     *
//     **
//     ***
//     ****
//     *****
//     ******
//     *******
//     ********
//     *********

{
    let height = 9;
    let string = "";

    for (let i = 1; i <= height; i++) {
        string += "*"
        console.log(string)

    }
}



{
    const height = +prompt("Задайте высоту пирамиды");

    function drawPyramid(height) {

        for (let i = 1; i <= height; i++) {
            let string = ""
            for (let j = 1; j <= i; j++) {
                string += `${i}`

            }

            console.log(string);
        }

    }


    drawPyramid(height)
}




// Task 8
// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

//      *
//     ***
//    *****
//   *******
//  *********

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.

{
    let height = 6
    let string = ["*"]
    let whitespace = height-1;

    function drawTriangle(height) {

        for (let i=1;i<=height; i++){
          let symbol = " ".repeat(whitespace) ; 
          whitespace--
          console.log(`${symbol}${string.join(``)}${symbol}`);
          string.push(`**`)
        }

    }
    drawTriangle(height);

}

// let height = 6
// let string = ""
// function drawTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//         string += "*"
//         console.log(string)
//         let space = " "
//         for (let j = height; j >= i - 1; j--) {
//             space += space
//             console.log(space)

//         }
//         //   console.log(string)



//     }
// }
// drawTriangle(height)





// Task 9
// Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

{
    function generateFibonacci(number) {
        let fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        for (let i = 2; i < number; i++) {
            fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        return fibonacci;
    }
    let result = generateFibonacci(1000);
    console.log(result);

   
}


// Task 10
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.
{
    function addNumbers(a) {
        a = String(a)
        let sum = 0;
        for (let i = 0; i < a.length; i++) {

            let digit = Number(a[i]);
            sum += digit;
        }
        if (sum > 9) {
            return addNumbers(sum);
        } else {
            return sum;
        }

    }

    const resulte = addNumbers(68);
    console.log(resulte);

}

// Task 11
// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

{
    // let arr = [2, 4, 6, 8, 0, 46, 87, 987];

    // function printNumber(arr) {
    //     arr[i++];
    //     if (arr[i] <= arr.length) {

    //         return printNumber(arr);

    //     } else {
    //         return arr;
    //     }

    // }

    // printNumber(arr);
    // console.log(printNumber(arr));

}

// С помощью цикла
{
    let arr = [2, 4, 6, 8, 0, 46];

    function printNumber(arr) {
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
    }

    printNumber(arr)
console.log(arr)
}

// Task 12
// Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:

// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************

// Размер рамки должен определятся автоматически по самой длинной строке.
// Рамку вывести в консоль.

{
        let name = prompt("Введите Ваше имя");
        let surname = prompt("Введите Вашу фамилию");
        let surname2 = prompt("Введите Ваше отчество");
        let group = prompt("Введите № Вашей группы");


        function getLongString(arr){
            let longString = 0;
            for (let value of arr){
                if (value.length > longString){
                    longString = value.length;
                }

            }
            return longString;
        }

        function createData(arr, longString) {
            for (let i=0; i< arr.length; i++){
                const countRepeat = longString -arr[i].length;

                arr[i]= `* ${arr[i]}${` `.repeat(countRepeat)} *`
            }
            arr.push(`*`.repeat(longString + 4))
            arr.unshift(`*`.repeat(longString +4))
        }




    function displayInformation (name, surname, surname2, group){

        let arr = [` Домашняя работа: "функции" `, ` Выпонил: студент гр. ${group} `, ` ${surname} ${name} ${surname2} `];
        let longString = getLongString(arr);
        createData(arr, longString);

        for (let value of arr){
            console.log(value)
        }



    }

    displayInformation (name, surname, surname2, group)


}

// Task 13
// Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:

// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.

// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;

// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.

{


}


