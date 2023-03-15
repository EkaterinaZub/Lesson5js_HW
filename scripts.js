"Use strict"

//  Task 1
// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.
{
    let str = `aaa@bbb@ccc`;
    console.log(str.replace(/@/gi, `!`));
}

// Task 2
// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.
{
    let time = `2025-12-31`;
     // console.log(time.replace(/-/gi, `/`));
    console.log(time.replace(/(2025)(-)(12)(-)(31)/, `$5/$3/$1`));
   
}
// Task 3
// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).