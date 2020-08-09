//chapter # 21 (STRING METHODS )
///////Task 1
 //1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var fname=prompt("Enter your first name");
// var lname=prompt("Enter your last name");
// document.write(`
//     Welcome to my page Mr. ${fname} ${lname}
// `);
//////////Task 2
 ///. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var favormodel=prompt("Enter your Favourite mobile model");
// document.write(`
// <div style="border:1px blue solid;">
//     My favorite phone is :${favormodel} <br>
//     Length of string : ${favormodel.length}
// </div>

// `);
/////////////Task 3
//////Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// var str="Pakistani";
// document.write(`
// <div style="border:1px blue solid;">
//     String :${str} <br>
//     Index of 'n' : ${str.indexOf('n')}
// </div>

// `);
//////////Task 
////Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var str="Hello World";
// document.write(`
// <div style="border:1px blue solid;">
//     String :${str} <br>
//     Index of 'n' : ${str.lastIndexOf('l')}
// </div>

// `);
///Task 5
///////. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var str="Pakistani";
// document.write(`
// <div style="border:1px blue solid;">
//     String :${str} <br>
//     Index of '3' : ${str.charAt(3)}
// </div>

// `);

/////////////////Task 6 
///////////Reapeat Q1 by using concat method 
//6. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var fname=prompt("Enter your first name");
// var lname=prompt("Enter your last name");
// document.write(`
//     Welcome to my page Mr. ${fname.concat(lname)}
// `);
//////Task 7
////Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// var city='Hyderabad';
// document.write(`
//  <div style="border:1px blue solid;">
//      City :${city} <br>
//      After replacement : ${city.replace("Hyder",'Islam')}
//  </div>

//  `);
///////////Task 8
/////////Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// document.write(`
//  <div style="border:1px blue solid;">
//      Message :${message} <br>
//      After replacement : ${message.replace(/and/g,'&')}
//  </div>

//  `);
////////Task 9
///Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var val = prompt('Enter a number');
// var new_val = Number(val)
// document.write(`
//  <div style="border:1px blue solid;">
//      Value :${val} <br>
//      Type :${typeof(val)} <br>
//      Value :${new_val} <br>
//      Type :${typeof(new_val)} <br>
//  </div>

//  `);
 /////////Task 10 
/////////Write a program that takes user input. Convert and show the input in capital letters.
//  var drf = prompt('Enter your favourite Dry fruit');
// document.write(`
//  <div style="border:1px blue solid;">
//      User input :${drf} <br>
//      Upper Case :${drf.toLocaleUpperCase()} <br>   
  //  </div>

//  `);
//////////////Task 11
//////////Write a program that takes user input. Convert and show the input in title case.
//  var usrinpt = prompt('Enter your favourite Programming Language');
//  var uper = usrinpt.slice(0,1).toUpperCase();
//  var otherchar = usrinpt.slice(1);
 // document.write(`
//  <div style="border:1px blue solid;">
//      User input :${usrinpt} <br>
//      Title Case :${uper + otherchar} <br>   
  //  </div>

//  `);
/////////Task 12
///////Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser
// var num = 35.36;
// var str =num.toString();
// var dot=str.indexOf('.');
// str = (str.slice(0,dot)+str.slice(dot+1));
// // var nextchars = num.slice(2);
// document.write(`
//  <div style="border:1px blue solid;">
//      Number :${num} <br>
//      Result :${str} <br>     
//  </div>

//  `);

////////////////////task 13
/////////////13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// var usrname = prompt("enter your name");
// var message;
// if((usrname.search('!') || (usrname.search(',')) || (usrname.search('.')) || (usrname.search('@')))){
    //     message = 'enter a valid username.';
    // }

// if((usrname.search(String.fromCharCode(33))) || (usrname.search(String.fromCharCode(44))) || (usrname.search(String.fromCharCode(46))) || (usrname.search(String.fromCharCode(64)))){
    //     message = 'enter a valid username.';
    // }
    // else {
        //     message = "your name is valid ";
        // }
// prompt(message);

/////////////Task 14 
/////////You have an array
///Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
// Arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userSearch = prompt('Welcome to our Bakery . What do you want to order sir/ma`am ?').toLowerCase();
// if(Arr.indexOf(userSearch)>=0){   
     // index = Arr.indexOf(userSearch);  
      // ava = 'avaliable';
    //     document.write(`
//     <div style="border:1px blue solid;">
//          ${userSearch} is avaliable at index ${Arr.indexOf(userSearch)} in our backery
//     </div>

//  `);
// }
// else{
    //     document.write(`
//     <div style="border:1px blue solid;">
//          We are sorry . ${userSearch} is not avaliable in our backery
//     </div>

//  `);
// }

/////////////Task 15//
//15. Write a program to take password as an input from user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.



/////////////////Task 16 
//////////////16. Write a program to convert the following string to an array using string split method.
// var university = 'University of Karachi';
// var arr = university.split('');
// document.write(`
//      <div style="border:1px blue solid;">
// `);
// for(i=0;i<university.length ;i++){
    //     document.write(`${arr[i]} <br> `);
    // }
// document.write(`

        //      </div>

//   `);

//////////Task 17////////////
///17. Write a program to display the last character of a user input.
// var usrinpt = 'Pakistan'
//     document.write(`
//     <div style="border:1px blue solid;">
//          User input:${usrinpt} <br>
//          Last character of input:${usrinpt.slice(-1)}
//     </div>

//   `);////////////Task 18
///////You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// var text  ='The quick brown fox jumps over the lazy dog';
// var lowr_text = text.toLowerCase();
// var occur = lowr_text.match(/the/g);
// document.write(`
//      <div style="border:1px blue solid;">
//           Text:${text} <br>
//           There are ${occur.length} occurrence(s) of the word 'the'
//      </div>

//    `);

//////////////////Chapter 26-30(MATH METHODS)
///Task 1
//////////Write a program that takes a positive integer from user & display the following in your browser.
//a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = 3.45214;
// document.write(`
//     <div style="border:1px blue solid ">
//         number:${num}<br>
//         round off value:${Math.round(num)}<br>
//         floor value:${Math.floor(num)}<br>
//         Ceil value:${Math.ceil(num)}<br>
//     </div>


// `);

/////Task 2 
////////Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num2 = -2.673;
// document.write(`
//     <div style="border:1px blue solid ">
//         number:${num2}<br>
//         round off value:${Math.round(num2)}<br>
//         floor value:${Math.floor(num2)}<br>
//         Ceil value:${Math.ceil(num2)}<br>
//     </div>


// `);


/////////Task 3
/////Write a program that displays the absolute value of anumber.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var abso = -4;
// document.write(`
//     <div style="border:1px blue solid ">
//         The absolute of ${abso} is ${Math.abs(abso)}<br>
        
//     </div>


// `);
///////////Task 4
////4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
//var ran1 = Math.floor(Math.random()*6) + 1;
// var ran2 = Math.floor(Math.random()*6) + 1;
// document.write( `
//     <div style="border:1px blue solid;margin-bottom:2px; ">
//         random dice value is: ${ran1}
//     </div>
//     <div style="border:1px blue solid">
//         random dice value is: ${ran2}
//     </div>
// `);

///////////////////Task 5 
////////////Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
// var ran3 = Math.floor(Math.random()*2) + 1;
// var toss;
// if (ran3 === 1){
//     toss = 'Tails';
// }
// else{
//     toss = 'Heads';
// }
// document.write( `
//     <div style="border:1px blue solid;margin-bottom:2px; ">
//         ${ran3} <br>
//         random coin value is: ${toss}
//     </div>
    
// `);

////////////////Task 6
/////Write a program that shows a random number between 1 and 100 in your browser.
// var ran4 = Math.floor(Math.random()*100) + 1;
// document.write( `
//     <div style="border:1px blue solid;margin-bottom:2px; ">
//         random number between 1 and 100 is: ${ran4}
//     </div>
    
// `);


////////////////Task 7 
/////////////Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = (prompt('Enter your weight in kilograms'));
// document.write( `
//     <div style="border:1px blue solid;margin-bottom:2px; ">
//         The Weight of user is ${Math.abs(weight)} Kilograms
//     </div>
    
// `);

//////////////////Task 8 
/////8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var randm = Math.floor(Math.random()*10)+1;
// var usrgust = parseInt(prompt("Enter a number between 1 and 10"));
// var message;
// if(randm == usrgust){
//     message=`congratulations Dear User you have Wonderfull guest..!`;

// }
// else{
//     message='Try Again';
// }

// prompt(message);
// document.write(`
//     <div style="border:1px blue solid;>
//         ${message} 
        
//     </div>
// `);

////////////////////Chapter 31-34 (DATE METHODS)

////////Task 1 Write a program that displays current date and time in your browser. 
// var date = new Date();
// document.write(`
//     <div style="border:1px solid blue;">
//         ${date}
//     </div>
// `);

/////////////Task 2 
//Write a program that alerts the current month in words.For example December.

// var date = new Date();
// months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// var mon=date.getMonth();
// document.write(`
//     <div style="border:1px solid blue;">
//         Current month: ${months[mon]}
//     </div>
// `);


//////Task 3
//////Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show Sun.
// var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var date = new Date('December 5 2010');
// var wekday=date.getDay();
// document.write(`
//     <div style="border:1px solid blue;">
//         Today is ${dayOfWeek[wekday]}
//     </div>
// `);


////////////////Task 4
//////////////Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var date = new Date('December 1 2010');
// var wekday = date.getDay();
// var message ;
// if(dayOfWeek[wekday] === 'Saturday' || dayOfWeek[wekday] === 'Sunday'){
//     message = "It's Fun day";
// }
// else{
//     message = 'Get Ready for Work day !'
// }
// document.write(`
//     <div style="border:1px solid blue;">
//          ${message}
//     </div>
// `);

//////////////Task 5
///////Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var date = new Date();
// var monDate = date.getDate();
// var message ;
// if(monDate <=15){
//     message = "First fifteen days of the month";
// }
// else{
//     message = 'Last days of the month'
// }

// document.write(`
//     <div style="border:1px solid blue;">
//          ${message}
//     </div>
// `);

/////////////////////Task 6
///////////////////Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
// var curdate = new Date();
// var prevdate = new Date('January 1 1970');

// document.write(`
//     <div style="border:1px solid blue;">
//          Current Date: ${curdate} <br>
//          Elapsed milliseconds since ${prevdate.toDateString()}:${curdate.getTime()} <br>
//          Elapsed minutes since ${prevdate.toDateString()}:${(curdate.getTime() / 1000) * 60 *60}
//     </div>
// `);


////////////Task 7 
///////////////////Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var date = new Date();
// var noon;
// if(date.getHours() >= 12){
//     noon = 'PM';
// }
// else {
//     noon ='AM';
// }

// document.write(`
//     <div style="border:1px solid blue;">
//          It's ${noon} <br>
//     </div>
// `);




/////////////Task 8
//////. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate
// var date = new Date('December 31 2020');

// document.write(`
//      <div style="border:1px solid blue;">
//           It's ${date} <br>
//     </div>
//  `);

//////Task 9
/////////Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015
// var ramdate = new Date(`June 18 2015`);
// var currentDate = new Date('December 5 2015');
// var curmilliseconds = currentDate.getTime();
// var rammilliseconds = ramdate.getTime();
// var diff = curmilliseconds - rammilliseconds ; 
// var dayspassed = Math.floor((diff/(1000 * 60 * 60 * 24)));

// document.write(`
//      <div style="border:1px solid blue;">
//         ${dayspassed} days have passed since 1st Ramadan ,${ramdate.getFullYear()} <br>
//     </div>
//  `);


////////Task 10
//Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
// var prevdate = new Date(`January 1 2015`);
    
// var currentDate = new Date('December 5 2015');
// currentDate.setHours(22);
// currentDate.setMinutes(50);
// currentDate.setSeconds(16);
// var curmilliseconds = currentDate.getTime();
// var prevmilliseconds = prevdate.getTime();
// var diff = curmilliseconds - prevmilliseconds;
// var secondpassed = Math.floor((diff/(1000 * 60)));

// document.write(`
//      <div style="border:1px solid blue;">
//         On reference date ${currentDate} , ${secondpassed} seconds had passed since beginning of 2015
//     </div>
//  `);






/////////////////////////////////task 11


    
// var today = new Date();
// var hourAgo = today.getHours();
// hourAgo = hourAgo-1
// document.write("current date: " + today + "<br>");
// today.setHours(hourAgo);
// document.write("1 hour ago, it was " + today);

// Task 12
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);






/////////Task 13 
/////////Write a program to ask the user about his age. Calculate and show his birth year in your browser.
// var DOB = new Date(prompt('Enter your date of birth in this format',"January 1 2020"));
// var now = new Date();

// var diff =now.getTime() -  DOB.getTime()  ;
// var actual_age = Math.floor((diff/ (1000 * 60 * 60 * 24 * 30 * 12  )));

// document.write(`

//     <div style="border:1px solid blue;">
//         Your age is ${actual_age} <br>
//         Your birth year is <b>${DOB.getFullYear()}</b> 
        
//     </div>

// `);





///////////Task 14 
//////Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// var cusname = prompt('Name of Customer');
// var units = parseInt(prompt('Units'));
// var per_unit = 16;
// var Net_Amount_Payable = units *  per_unit;
// var late_payment_surcharge = 350 ;
// var Gross_amount_payable = Net_Amount_Payable + late_payment_surcharge;
// var date = new Date();
//  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//  var mon=date.getMonth();


          




// document.write(`

//     <div style="border-radius:20px;box-shadow:4px 4px 4px 4px #ccc;padding-bottom:20px;padding-left:10px;width:50%;">
//         <h1>K-Electric bill</h1>
//         Customer Name: <b>${cusname}</b> <br>
//         Month: <b>${months[mon]}</b> <br>
//         Number of units: <b>${units}</b> <br>
//         Charges per unit: <b>${per_unit}</b> <br> <br>

        
//         Net Amount Payable (within Due Date): <b>${Net_Amount_Payable}</b> <br>
//         Late Payment Surcharge: <b>${late_payment_surcharge}</b> <br>
//         Gross Amount Payable (after Due Date): <b>${Gross_amount_payable}</b> <br>
//     </div>

// `);
//////////////////////////End of 31 - 34

////////////////////////////Chapter 35 - 38 (FUNCTION)
/////////////////Task 1 
/////////// Write a function that displays current date & time in your browser.  
// function curdate() {
//     date = new Date('December 5 2015')
//     date.setHours(22);
//     date.setMinutes(18);
//     date.setSeconds(39);
//     return date;
     
// }

// document.write( `
//     <div style="border:1px solid blue;">

//         ${curdate()}

//     </div>



// `);

///////////Task 2 
/////////////Write a function that takes first & last name and then it greets the user using his full name. 
// fname = prompt('Enter your first Name');
// lname = prompt('Enter your last Name');


// function greet() {
//     return `Welcome to our Website ${fname} ${lname}`;    
// }
// document.write(`
//     <div style="border:1px solid blue;">
//         ${greet()}
//     <div>
// `);

//////////Task 3
//////////// Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
// fnum = parseInt(prompt('Enter your first Number'));
// lnum = parseInt(prompt('Enter your last Number'));


// function add() {
//     return `Addittion of ${fnum} + ${lnum} = ${fnum + lnum}`;    
// }
// document.write(`
//     <div style="border:1px solid blue;">
//         ${add()}
//     <div>
// `);



///////////////////////Task 4 
//. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// var num1 =parseInt(prompt("Enter First Number"));
// var num2 =parseInt(prompt("Enter Second Number"));
// var opr =prompt("Enter Operation");
// var result ;
// var operation;

// function calculator() {
//     if(opr === '+'){
//          result =  num1 + num2;
        
//     }
//     else if(opr === '-'){
//         result =  num1 - num2;
//         operation = "Subtraction";
//     }
//     else if(opr === '*'){
//          result =  num1 * num2;
//         operation = "Multiplication";
//     }
//     else if(opr === '/'){
//         result =  num1 / num2;
//         operation = "Divison";
//     }
//     return result;
// }
// function opera(params) {
//     if(opr === '+'){
//         operation = "Addition";
       
//    }
//    else if(opr === '-'){
       
//        operation = "Subtraction";
//    }
//    else if(opr === '*'){
       
//        operation = "Multiplication";
//    }
//    else if(opr === '/'){
       
//        operation = "Divison";
//    }
//    return operation;
// }
// document.write(`

//      <div style="border:1px solid blue;">
//          After ${opera()} of  ${num1} & ${num2} the result is = ${calculator()}
//     <div>

// `);

/////////////////Task 5
///////////////// Write a function that squares its argument. 
// var sq = parseInt(prompt('Enter the number to which you want to make a square off !!'));

// function squareee() {
//     sqre = Math.pow(sq,2);
//     return sqre;
// }
// alert(squareee());

///////////////Task 6
/////////////6. Write a function that computes factorial of a number. 

// function factorial(number) {
//     if(number === 0){
//         return 1;
//     }
//     else {
//         return number * (factorial(number - 1) );
//     }
// }
// factinput = parseInt(prompt('Enter the number of which you wants to make factorial off !!'));

// document.write(`

//      <div style="border:1px solid blue;">
//          factorial of ${factinput} is ${factorial(factinput)}
//     <div>

// `);

//////////////////////Task 7
//Write a function that take start and end number as inputs & display counting in your browser. 
// function count(first,second){
    
// }
// var num1 = parseInt(prompt("Enter starting number "));
// var num2 = parseInt(prompt("Enter ending number "));
// function count(first,second) {
//     for(i=first ; i<=second;i++){
//         document.write(`${i} <br>`)
//     }
// }
//  count(num1,num2);

////////////////////Task 8
////////// Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2 function | JAVASCRIPT  

//Take base and perpendicular as inputs. 
//Outer function : calculateHypotenuse() 
//Inner function: calculateSquare()


// function calculateHypotenuse(base,perpendicular){
//     var base,perpendicular;
//     function calculateSquare(num){
//        num = num * num;
//        return num;
//     }
//     base = calculateSquare(base);
//     perpendicular = calculateSquare(perpendicular);
//     var hypotenuse = base + perpendicular; 
//     return hypotenuse;
// }
// var base = +prompt("Enter base of a right angle triagnle:");
// var perpendicular = +prompt("Enter perpendicular of a right angle triagnle:");
// var hyp = calculateHypotenuse(base,perpendicular);
// alert("hypotenuse of a right angle triangle: " + hyp);
     

/////////////////Task 9
////////////// Write a function that calculates the area of a rectangle.    
////  A = width * height

// function area(width,height) {
//     return width * height;
// }
// var wdth =  parseInt(prompt("Enter the Width"));
// var hiht =  parseInt(prompt("Enter the Height"));

// alert(area(wdth,hiht));



//////////////////Task 10
//Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.


// var palin = []; 
// var message;


//  function palindrom(str) {
//     for(i=str.length-1;i>=0;i--){
//          palin.push(str[i]);
     
//     }
//     if(palin.join('') === str)
//     {
//         message="Palindrome";
//     }
//     else {
//         message='not a Palindrome';
//     }
//     return message;
// }

// var strInput = prompt("Enter a word to check weather the word is palindrome or not");
//  strInput = strInput.toLowerCase();

// document.write( `

//     The Word '${strInput}' is ${palindrom(strInput)} '
    

// `);

///////////Task  11
//////////////////Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 
//EXAMPLE STRING : 'the quick brown fox' 
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function caseTitle(exampleString) {
   
//         var stringSplit = exampleString.split(' ');
//         var araystring=[];

//         for(i = 0 ; i < stringSplit.length ; i++ ){
//             var firstletter = stringSplit[i].slice(0,1).toUpperCase();
//             var otherletters = stringSplit[i].slice(1).toLowerCase();
//             araystring.push(firstletter + otherletters);

//         }

//         document.write(`
//         The Example String : ${exampleString} 
//         The String Output :  ${araystring.join(' ')}

//         `
//     );
// }
// usrInpt = prompt("Enter the string");

//////////////////Task 12
//////////Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 

//     function longestString(exampleString) {
//         var spiltString = exampleString.split(" ");
//         var wordsArray=[];
//         var index ;
//         var lenOfWords = []
//         for(i=0 ; i< spiltString.length ; i++){
//             wordsArray.push(spiltString[i]);
//             lenOfWords.push(spiltString[i].length);
//             index = i-1;
            
//         }

//         document.write( `
            
//             Example String: ${wordsArray.join(' ')} <br>
//             longest word is ${wordsArray[index]} whose length is ${Math.max.apply(null, lenOfWords)}
            


//         `);

//     }

// var usrInput = prompt("Enter any sentence and check the longest word on it");
// longestString(usrInput);

//////////////////////////////////////////Task 13
//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 



        // function countLetter(exampleString,exampleletter) {
            
            
        //     var count = 0;
        //     for(i=0 ; i < exampleString.length; i++ ){
        //     // console.log(exampleString[i])
        //     if(exampleString[i] === exampleletter){
        //         count = count + 1 ;
        //     }
        //     }

        //     document.write( `
            
        //     Example String: ${exampleString} <br>
        //     Occurence of '${exampleletter}' is ${count}
            


        // `);
        // }        

        //  var usrInput = prompt("Enter any sentence ");
        //  var letter = prompt('Enter letter to check its number of times occurence in a sentence');
         
        //  countLetter(usrInput,letter);
        
        
        
        
        ////////Task 14
        //The Geometrizer 
        // function calcCircumference(radius){
        //     var circumference = 2 * 3.142 * radius;
        //     document.write("The circumference is: " + circumference + "<br>");
        // }
        // function calcArea(radius){
        //     var area = 3.142 * radius * radius;
        //     document.write("The area is: " + area + "<br>");
        // }
        // var radius = +prompt("Enter radius of a Circle: ");
        // calcCircumference(radius);
        // calcArea(radius); 