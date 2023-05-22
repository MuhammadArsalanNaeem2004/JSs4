// Chapter 21 (Changing Case)


// Question 1

// var allLower = userInput.toLowerCase;
// var allLower = userInput.toLowerCase();


// Question 2

// var x = "ARSALAN";

// x = x.toLowerCase();
// console.log(x)


// Question 3

// var x = "arsalan";

// x = x.toUpperCase();
// console.log(x)


// Question 4

// var x = "ARSALAN";

// var x1 = x.toLowerCase();
// console.log(x1)


// Question 5

// var a =["ARSALAN","UMAR","BASHIR","SONO",];

// for (var i = 0; i < a.length; i++) {

// var x = a[i].toLowerCase();
// console.log(x)
// }


// Question 6

// var a = "arsalan";

// a = a.toUpperCase();

// alert(a);


// Question 7

// var cityName = "kaRachi";

// var firstLetter = cityName.slice(0,1);
// firstLetter = firstLetter.toUpperCase()

// var otherLetters = cityName.slice(1);
// otherLetters = otherLetters.toLowerCase();

// var cityName = firstLetter + otherLetters;

// alert(cityName);



// Chapter 22 - 25 (Strings)



// Question 1

// var someWord = "captain";

// var someWord1 = someWord.slice(1,3)

// alert(someWord1)


// Question 2

// var a = "number of characters";


// Question 3

// var animal = "Elephant";

// var seg = animal.slice(2,6);

// alert(seg)


// Question 4

// var a = "Arsalan";

// var b = a.length;

// alert(b);


// Question 5

// var a = "Pakistan";
// alert(a.length)

// var b = a.slice(1, a.length-3);
// alert(b)


// Question 6

// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// alert(indx)
//Answer = 3


// Question 7

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// alert(indx)

// Answer = 16


// Question 8

// var a = "You have to go";

// var b = a.lastIndexOf("go")

// alert(b)


// Question 9

// if(indexNum !== -1){}


// Question 10

// var string = "abcde";

// alert(string.charAt(2))
//Answer = c


// Question 11

// var text = "There is some text";

// var cha = text.charAt(9)

// alert(cha)
//Answer = s


// Question 12

// var a = "There is some text";

// var b = a.charAt(a.length -1);

// alert(b)
//Answer = t


// Question 13

// var input = "There is some text";

// var cha = input.charAt(4)

// alert(cha)
//Answer = e


// Question 14

// if (var2.indexOf(var1.slice(0, 3)) !== -1)


// Question 15

// var a = "Some text here";

// var arr = [];

// for (var i = 0; i < a.length; i++) {
//     arr[i] = a.charAt(i);
//     console.log(arr[i]); 
// }



// Chapter 26 (Rounding Numbers)



// Question 1

// var a = 1.5;
// a = Math.round(a);
// alert(a)


// Question 2

// var origNum = 1.2;
// var roundNum = Math.ceil(origNum);
// alert(roundNum)


// Question 3

// var origNum = 1.8;
// var roundNum = Math.floor(origNum);
// alert(roundNum)


// Question 4

// var a = 1.5;
// var b = Math.round(a);
// alert(b)


// Question 5
// var a = 0.5;



// var b = Math.floor(a);

// alert(b)



// Chapter 27 (Random Numbers)



// Question 1

// var a = Math.random()

// a = Math.floor(a * 50) + 1;

// alert(a)



// Question 2


// var a = Math.random()

// var b = Math.floor(a * 50) + 1;

// alert(b)



// Question 3

// var dice = Math.random()

// var rollDice = Math.floor(dice * 6) + 1;

// alert("Dice Number is " + rollDice)



// Question 4

// var toss = Math.random()

// var tossDecision = Math.floor(toss * 2) + 1;

// if(tossDecision == 1){
//     alert("Heads");
// }

// else{
//     alert("Tails")
// }



// Chapter 28, 29 (Converting Strings)



// Question 1

// var a = "45";

// var b =  +(a);
// or
// var b =  parseInt(a);
// var b =  Number(a);



// Question 2

// var a = "45";

// var b =  +(a);

// console.log(b)


// Question 3

// var a = "45.45";

// var b =  parseFloat(a);
// or
// var b =  Number(a);


// Question 4

// var a = "45";

// var b =  +(a);

// console.log(typeof(b))



// Question 5

// var a = 45;

// var b =  toString(a);

// console.log(typeof(b))


// Question 6

// var a = 42;

// var b =  toString(a);

// console.log(b)


// Question 7

// var a = "3.14";

// var b = parseFloat(a);

// alert(b)



// / Chapter 30 (Controlling the length of decimals)



// Question 1


// var a = 3.55456;

// var b = a.toFixed(4)

// console.log(typeof(b))

// alert(b)


// Question 2


// var a = 3.55456;

// var b = +a.toFixed(2)

// console.log(typeof(b))

// alert(b)



// Question 3


// var a = +prompt("");

// if (a.toFixed(2).length > 4)
// {
// alert(a)
// }
// else{
//     alert("Type At least 10")
// }



// Question 4


// var a = 3.55456;

// var b = +a.toFixed(2)

// alert(b)


  
// Chapter 31 - 34 (Date & Time)



// Question 1


// var dObj = new Date();


// Question 2


// var dObj = new Date();

// var dStr = toString(dObj);

// alert(typeof(dStr))



// Question 3


// var d = new Date();

// var day = d.getDay()
// console.log(day)


// Question 4


// var d = new Date();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day = d.getDay()
// console.log(dayNames[day])



// Question 5

// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth() + 1; 
// var day = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);



// Question 6


// var d = new Date("10, 5, 2021");
// console.log(d)



// Question 7


// var d = new Date("1, 1, 1992");
// console.log(d)