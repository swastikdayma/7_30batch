
const prompt =require("prompt-sync")()

//code


// function swastik(){
//     let x = 10; 
//     console.log(x)
// }

// swastik()


// let age = 17;


// if(age>=18 && age < 70){
// console.log("yes you can vote")
// }

// else if(age>=70){
//   console.log("aap vote dene nahi jaa sakte ho beta ya beti ko lekr aao")
// }


// else{
// console.log("no you cannot vote")
// }



// prompt()


// if(condition){
//     statement
// }
// else{
//     statement
// }


// const  operator = prompt('enter operator(either +, -, * or /): '); 
// const number1 = parseFloat(prompt('enter first number: '));
// const number2= parseFloat(prompt('enter second number: '));
  
// let result;

// if (operator =='+'){
// result = number1 + number2;
// }
// else if (operator =='-'){
// result = number1 - number2;
// }
// else if (operator =='*'){
// result = number1 * number2;
// }
// else{
// result = number1 / number2;
// }

//  console.log(`${number1} ${operator} ${number2} = ${result}`);


// let hello= ()=>{
//     console.log('hey everyone')
// }

//hello()



// let grades= prompt("enter number: ")

// if(grades<=100 && grades>=90 ){
//     console.log('congrats your grades are 10 cgpa')
// }
// else if(grades<90 && grades>=80 ){
//     console.log('your grades are 9 cgpa')
// }
// else if(grades<80 && grades>=70 ){
//     console.log('your grades are 8 cgpa')
// }
// else if(grades<70 && grades>=60 ){
//     console.log('your grades are 7 cgpa')
// }
// else if(grades<60 && grades>=50 ){
//     console.log('your grades are 6 cgpa')
// }
// else if(grades<50 && grades>=35 ){
//     console.log('your grades are 5 cgpa')
// }

// else{
//     console.log("koi baat nahi aage se dhyan rakhna")
// }



// const operator = prompt("enter operator either +, -, *, / : ");
// const number1 = parseFloat(prompt("enter number 1: ")) ;
// const number2 = parseFloat(prompt("enter 2nd number: "));

// let result;

// if(operator == "+"){
//  result =   number1 + number2
// }
// else if(operator == "-"){
//     result = number1 - number2
// }
// else if( operator == "*"){
//    result =  number1 * number2
// }
// else{
//     result = number1 / number2
// }


// console.log(`${number1} ${operator} ${number2} = ${result}`)




//  const grades = parseFloat(prompt("enter your marks: "))


//  if(grades> 90 && grades < 100){
//     console.log("hurray you are topper and cgpa is 10")
//  }
//  else if(grades > 80 && grades <=90){
//     console.log("9 cgpa")
//  }
//  else if(grades > 70 && grades <= 80 ){
//     console.log("8 cgpa")
//  }
//  else if(grades > 60 && grades <= 70){
//     console.log("7 cgpa")
//  }
//  else if( grades > 50 && grades <= 60){
//     console.log("6 cgpa")
//  } 
//  else if( grades > 40 && grades <= 50){
//     console.log("5 cgpa")
//  }
//  else if(grades > 33 && grades <= 40){
//     console.log("bass pass hogye bhai")
//  }
//  else{
//        console.log("bhai iss baar pass nahi hua koi baat nahi next year se roj padhunga")
//  }


//  function name(){

//  }
//  name()

//  let names = ()=>{
//   console.log("swastik")
//  }

//  names()






//    o	JS Strings methods
// o	.length
// o	.slice
// o	.trim
// o	.trimStart
// o	.trimEnd
// o	.replace
// o	.replaceAll
// o	.split
// o	.charAt
// o	.concat
// o	ToUpperCase()
// o	ToLowerCase
// o	.includes


// o	.lastIndexOf


// let str = "The Quick jumps Brown Fox JumPs Jumps Over The Lazy Dog ";
// let str2 = " The Quick jumps Brown Fox JumPs Jumps Over The Lazy Dog";

// let strlength= str.length;
// console.log(strlength)


// let sliced = str.slice(10, 15);
// console.log(sliced)


// let strlength = str.length;
// let trimmed  = str.trim();

// console.log(trimmed.length)
// console.log(strlength)

// let strlength = str.length;
// let trimmed  = str.trimStart();

// console.log(trimmed.length)
// console.log(strlength)

// let strlength = str.length;
// let trimmed  = str.trimEnd();

// console.log(trimmed.length)
// console.log(strlength)


// let replaced = str .replaceAll(/Jumps/gi, "Jump")
// console.log(replaced)


// let splitted = str.split(" ")
// console.log(splitted)


// let chara= str.charAt(4)

// console.log(chara)


// let concat = str.concat(str2)
// console.log(concat)


// let upper = str.toLocaleUpperCase();
// console.log(upper)


// let atr3= "SWASTIK";
// let lower = atr3.toLocaleLowerCase()
// console.log(lower)

// let included = str.includes("the");
// console.log(included)

// let index = str.lastIndexOf('The')
//  aconsole.log(index)




//let , const

// let a = 12;
//  a = 13
// console.log(a)

// let a = 2
// a-=2
// console.log(a)



// o	.length
// o	.toString
// o	.pop
// o	.push
// o	.shift
// o	.unshift
// o	.join
// o	.delete
// o	.concat
// o	.splice
// o	.slice
// o	.sort

// let vari = ["swastik", "friend1", "friend2", 12];
// let vari2 = ["swastik", "friend1", "friend2", 12];
// let vari3 = ["swastik", "friend1", "friend2", 12];

// console.log(vari)


// let len = vari.length;
// console.log(len)

// console.log(vari)
// let string = vari.toString()
// console.log(string)


// let popped = vari.pop()
// console.log(popped)
// console.log(vari)


// let popped = vari.pop()
// console.log(popped)
// console.log(vari)

// let pushed =vari.push("swastik2", "swastik3")
// console.log(pushed)
// console.log(vari)


// let unshifted = vari.unshift("swastik17")
// console.log(unshifted)
// console.log(vari)


// let concat = vari.concat(vari2, vari3)
// console.log(concat)


// let sliced = vari.slice(2, 3)
// console.log(sliced)

// let vari = ["swastik", "friend1", "friend2", 12];

// let spliced = vari.splice(1, 2, "swastikdayma", "heyy", 12)
// console.log(spliced)
// console.log(vari)

// let sorted = vari.sort()
// console.log(sorted)

// let join = vari.join("*")
// console.log(join)


// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")



// for(let i = 1; i <=10; i+=2 ){
//      console.log(i)
// }



// let str = prompt("enter name: ");
// for(let i =0; i<str.length; i++){
//     console.log(str[i])
// }







//for loop string
// let str1= "swastik dayma"
// for(let i=0; i<str1.length; i++){
// 	console.log("my character is "+ str1[i])
// }

//while loop
// let x  = 1;
// while(x<=8){
// 	console.log(x)
// 	x++
// }

//do..while loop
// let i = 1;
// do{
// 	console.log(i)
// 	i++
// }
//  while(i>8)


// for(let x = 0; x<=20; x++){
// 	if(x%2!=0)
// 	console.log(x)
// }



// let number= 10;
// console.log((number==10? "yes": "no"))



// for(let i = 1; i <= 12; i++ ){
//  console.log("hello")
// }


// let job=prompt("enter your job: ")
// switch(job){
// 	case "teacher":
// 		console.log("padha lo sir")
// 		break
// 	case "driver":
// 		console.log("dheere chalao")
// 	    break
// 	default:
// 		console.log("hello")	

// }

// let user = prompt("enter job: ")
// switch(user){
//     case "farmer":
//     console.log("kheti")
//     break;

//     case "software engineer":
//      console.log("pagal banata hai")
//      break;

    

//     case "banker":
//         console.log("lunch ke baad aana")
//         break;

//         default:
//             console.log("nice job") 
           

   
// }


//for loop of array
// arry = ["swstik", "dev", "devansh", "devanshu", "devanshu"]
//  for(let i = 0; i<arry.length; i++){
// 	console.log(i, arry[i])
//  }


//forEach
// const arry=[1 ,2 ,4 ,5 ,6, 7] 
// let eacharr=arry.forEach((value , index) => {
// 	console.log(value , index)
// });

// console.log(eacharr)




// for(let i = 0; i<10; i++){
// console.log(i)
// }

// let str = "swastik"

// for(let i = 0; i< str.length; i++)
// {
// console.log(str[i])
// }


// const arry = [1,2, 3, 4, 4 ,5 , 6 ];



// for(let i = 0; i< arry.length;i++){
//     console.log(arry[i])
// }


// for(let i = 1; i<=10; i++){
//  console.log(i)
// }



// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++
// }

// let i = 1;
// while(i <= )
// console.log(i)
// i++

// let i = 1;
// while(i<=10){
//     console.log("swastika")
//    i++
// }

// let j = 1;
// do{
//     console.log("swastik")
//    j++
// }
// while(j<=10)


// let arry = [1 ,3 , 4, 5,6 ,6,7];


// arry.forEach((swastik)=>{
//     console.log(swastik*2)
// })



// let j = 1;
// do{}
// while()


// for(let i = 1; i<=10; i++){
//     console.log("swastika")
// }





// let a = "swastik";
// let len = a.length;

// for(let i = 0; i<len; i++){
//     console.log(a[i])
// }


// const arry = ["Swastik", 1, 2, 3 , 5, 6]

// for(let i = 0; i<arry.length; i++){
//     console.log(arry[i])
// }


// function name(){
//  console.log("swastik")
// }

// name()

// let func= ()=>{
//     console.log("swastik")
// }

// func()



  











