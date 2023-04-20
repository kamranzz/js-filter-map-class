// Task 1.

// 1.1 forEach methodunu özün yaz.
// 1.2 map methodunu özün yaz.
// 1.3 filter methodunu özün yaz.
// 1.4 find methodunu özün yaz.
// 1.5 every methodunu özün yaz.
// 1.6 some methodunu özün yaz.
// 1.7 reduce methodunu özün yaz.


// task 1
// var numbers = [1, 2, 3, 4, 5];
// for (var i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i]*2;
// }
// console.log(numbers);


// task 2
// var newNumbers = []
// var numbers = [1, 2, 3, 4, 5];
// for (var i = 0; i < numbers.length; i++) {
//     newNumbers.push(numbers[i] * 10)
// }
// console.log(newNumbers);


// task 3
// var newNumbers = []
// var numbers = [1, 2, 3, 4, 5];
// for (var i = 0; i < numbers.length; i++) {
//     if(i<3){
//         newNumbers.push(numbers[i])
//     }
// }
// console.log(newNumbers);


// task 4
// var newNumbers = []
// var numbers = [1, 2, 3, 4, 5];
// for (var i = 0; i < numbers.length; i++) {
//     if(i<3){
//         newNumbers.push(numbers[i])
//         break;
//     }
// }
// console.log(newNumbers);


// task 5
// function allAreTrue(arr) {
//     return arr.every(element => element === "salam");
//   }

//   console.log(allAreTrue(["salam", "salam"]));
//   console.log(allAreTrue(["salam", "sagol"]));


//   task6
// var bool = true;
// var newNumbers = []
// var numbers = [1, 2, 3, 4, 5];
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 3) {
//         console.log(bool);
//         break
//     }
//     else {
//         console.log(!bool);
//         if (bool == !bool) {
//             console.log(false);
//             break
//         }
//     }
// }


// task 7
// Array.prototype.myReduce = function (callbackfn) {
//     var a = 0;
//     for (let i = 0; i < this.length; i++) {
//         callbackfn(a = a + this[i])
//     }
//     return a;
// }
// var arr = [5,21,61,9,1]
// let result = arr.myReduce((acc,item)=>acc+item);
// console.log(result);


// Task 2.

// let numbers = [1,2,3,4,5,6,7,8,9]

// 2.1 array içərisindəki tək ədədləri tapıb başqa bir arraydə göstərin.
// 2.2 alınan yeni arrayin elementlərinin kvadratını alıb başqa bir arraydə göstərin.
// 2.3 alınan ən son arraydə 10dan böyük olanların cəmini ekranda göstərin.


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]   
// var odds = []
// var sqrt = []
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     if (i % 2 == 0) {
//         odds.push(numbers[i])
//     }
// }
// for (var i = 0; i < odds.length; i++) {
//     sqrt.push(numbers[i] ** 2)
// }
// for (var i = 0; i < sqrt.length; i++) {
//     if (sqrt[i] > 10) {
//         sum+=sqrt[i];
//     }
// }
// console.log(sum);


// Task 3.

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

 
// 3.1 Bütün adlardan ibarət array əldə edin.
// 3.2 Bütün yüksəkliklərdən ibarət array əldə edin.
// 3.3 Kütləsi 100-dən çox olan xarakterləri əldə edin.
// 3.4 Hündürlüyü 200-dən az olan xarakterləri əldə edin.
// 3.5 Bütün kişi userləri alın.
// 3.6 Bütün qadın userləri əldə edin.
// 3.7 Hər bir userin mavi gözləri varmı?
// 3.8 Hər bir userin kütləsi 40-dan çoxdur?
// 3.9 Hər userin hündürlüyü 200-dən qısadır?
// 3.10 Bütün userlər kişidir?
// 3.12 Ən azı bir kişi xarakteri varmı?
// 3.13 Mavi gözlü ən azı bir personaj varmı?
// 3.14 200-dən yuxarı ən azı bir simvol varmı?
// 3.15 Kütləsi 50-dən az olan ən azı bir simvol varmı?
// 3.16 Adlara görə sırala
// 3.17 Masslara görə sırala
