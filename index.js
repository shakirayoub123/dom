// console.log("hello world")
// alert("hyy")  used for alert 

//1. Javascript Variables
// containers to store data
//number
var num1 = 20;
var num2 = 44;
// console.log(num1 + num2)

//string
var str1 = "shakir";
var str2 = 'ayoub';
// console.log(str1 + str2);

//object
var marks = {
    a: 9,
    b: 7,
    c: 5
}
// console.log(marks)

//Booleans
var a=true;
var b=false;
// console.log(a,b)
//null and undefined

// null means we have assigned 0 value so its null; hum khud boll rahe hai ismai kuch nai hai
// undefines we havnt assigned anyything in it so its undefined;

//Data Types
// we have two data types in js primitive and non primitive/refrence
// 1.primitive;(undefined, null, number, string, boolean, symbol)
// 2. Non Primitive:(arrays and Objects)

// 4. Arrays: value which can store more than one value
var arr=[1,2,3,4,"a","hello"]
// console.log(arr)

// 5. Operators
// Arithmetic Operators
// Comparison Operators
// Logical (or Relational) Operators
// Assignment Operators
// Conditional (or ternary) Operators

// 1.// Arithmetic Operators:Arithmetic operators are used to perform arithmetic operations on the operands.
var a=2;
var b=14;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

//2.// Assignment Operators
var c=b;
//  c-=20;
//  c+=20; c=c+20;
//  c*=20;
//  c/=20;
//  c%=20;
//  console.log(c)
 
//  3 Comparison Operators
//  The JavaScript comparison operator compares the two operands.
var x=10;
var  y=18;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x>y)
// console.log(x<y)

//4. LOgical OPerators

//logical AND
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)

//logical OR
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(false || true)

//logical NOT
// console.log(!true)
// console.log(!false)


//Functions in Js
//JavaScript functions are used to perform operations. We can call JavaScript function many times to reuse the code.
//Code reusability: We can call a function several times so it save coding.
// Less coding: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.

function average(a,b){
    return(a+b)/2

 }
 c1=average(4,6);
 c2=average(14,16);
//  console.log(c1,c2  )

 //6. Conditionals in Javascript(if else)
//  if Statement 
//It evaluates the content only if expression is true. The signature of JavaScript if statement is given below.
// var age=17;
// if (age>18){
//     console.log("you are eligible for voter id")
// }
//if else
// It evaluates the content whether condition is true of false. The syntax of JavaScript if-else statement is given below.
// if (age>18){
//     console.log("you are eligible for voter id")
// }
// else {
//     console.log("you are not eligible for voter id") 
// }
//if else if:
//It evaluates the content only if expression is true from several expressio

// if (age>18){
//     console.log("you are eligible for voter id")
// }
// else if (age>86) {
//     console.log("you are eligible for voter id") 
// }
// else if (age>36) {
//     console.log("you are eligible for voter id") 
// }
// else if (age>26) {
//     console.log("you are eligible for voter id") 
// }
// else{

//   console.log("you are not eligible for voter id") 
// }

// function vote(a,b){
//     var b=18;
//     if (a>b){
//         console.log("you can")
//     }
//     else{
//         console.log("you cant")
//     }
//     console.log(vote)
// }
// var a=8

//
var arr=[1,2,3,4,5,6,7]
// console.log(arr);
for(var i=0; i<arr.length; i++){
    // console.log(arr[i])
}
//we will get length of the array and will get visit all the values by use of for loop

arr.forEach(function (element){
    // console.log(element)
})
//by use of foreach we will get the same output in less code

//DOM Document Object Model
// 1.write("string")	writes the given string on the doucment.
// 2.writeln("string")	writes the given string on the doucment with newline character at the end.
// 3.getElementById()	returns the element having the given id value.
// 4.getElementsByName()	returns all the elements having the given name value.
// 5.getElementsByTagName()	returns all the elements having the given tag name.
// 6.getElementsByClassName()	returns all the elements having the given class name.


//Loops
// 1.while loop: and break;

var guest=1;
while(guest<=10)

{
    // console.log("Guest NO",guest)
    if(guest==3)
    {
        break; //it will end the loop
    }
    
    guest++; //increament
}
// o/p: guest 1, guest 2, guest 3
var guest=1;
while(guest<=10)

{
    
    if(guest==3)
    {
        break; //it will end the loop
    }
    // console.log("Guest NO",guest)
    guest++; //increament
}
// o/p: guest 1, guest 2 coz console is below break so thats it


//Continue: when we want to skip the value we are using continue diffrence b/w break and continue
// break is terminating the loop continue will skip that value
var guest=1;
while(guest<=10)

{
    guest++
    if(guest==3)
    {
        continue; //it will end the loop
    }
    // console.log("Guest NO",guest)

if(guest==3)
    {
        continue; //it will end the loop
    }
}
// o/p 3rd guest will be skipped

//NESTED LOOP: A nested loop is a loop within a loop.

for(var i=0;i<2;i++) //looop 1
{
  for(var j=0; j<3; j++){ //loop 2
    // console.log("Hello");
  }
}
//dry run
// ist loop will on i=0 then it will go to 2nd loop and run till 2nd loop will end and came back to loop one
// and check i=1 will go same like for 2nd loop will run same and this is the process of nested loop;
for (var j=0; j<=2; j++)
{
var bag="";
for(var i=0; i<=5; i++){
    bag+="hello "
}
// console.log(bag)
}
//Pattern Print


for(var i=1; i<=5; i++) //this loop will go to 1 to 5
{
    var bag="";
    
    for(var j=1; j<=i; j++)
        {
            bag+="*";
        }
        // console.log(bag)
    
}
//j loop is following i loop what i will tell j has to follow


// 9--OBJECTS
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
// we have keys in objects not indexes
const student = {
    firstName: 'shakir',
    lastName:'ayoub',
    from: 'kashmir',
    gender: 'male',
    class: 10
};
// console.log(student);

//bracket Notation-- we can print any key by using this notation
// console.log(student["class"])
//in object we cant use function .length  it will give undefind

//Dot.Notation-- we can get data by using dot notation
// console.log(student.firstName)
//if we want to update value we can use both bracket and dot notation
student["from"]="kulgam";
student.from="Paniwah";
// console.log(student);

//we can delete keys in objects by using both notations
const data = {
    name: 'shakir',
    city: 'kashmir',
    gender: 'male',
    number: 123
};
/// by bracket notation
delete data["number"];
//by dot notation
delete data.name;
// console.log(data)

var data1={
    name:'shakir',
    city:'kashmir',
    num:123,
    hobbies:["cricket", "movies"]

};

//keys are name city num hobbies etc;
// we are using for in loop in objects

for (var key in data1) ///for in loop
{
    // console.log(key);
    // console.log(data1[key]);
    // console.log(key, "-----" , data1[key]);
    //dot we will give undefined so bracket will be used
}
// Difference between null and undefined
// null means no value.

// var y = null;
// console.log(y);

// undefined means variable is declared but not assigned

// var x ;
// console.log(x);    // undefined

// remove duplicates

var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];


var party = [];
var present = false;

for(var i = 0; i<arr.length; i++)
{
    for(var j=0; j<party.length; j++)
    {
        if(arr[i] == party[j])
        {
          present= true;
          break;
        }
    }

    if(present == false)
    {
      party.push(arr[i]);
    }
    else
    {
      present = false;
    }

}

// console.log(party);

//Object Methods:-
//Using for in objects;
var student4 = {
    name : "lalu",
    grade : "X",
    section : "A",
    maths : 30,
    science : 40,
    english : 35,
    geography : 50,
    history : 80,
    biology : 20
  }
  
  for(var key in student4)
  {
    // console.log(key," : ",student4[key]);
  }

  var student4 = {
    name : "lalu",
    grade : "X",
    section : "A",
    subjects :{
    maths : 30,
    science : 40,
    english : 35,
    geography : 50,
    history : 80,
    biology : 20
    }
  }
  
  for(var key in student4)
  {
    // console.log(student4.subjects.maths);
  }
  
  //Multidimentional Array

  //1D array: Storing the elements in a consecutive section
  // Numbers
var arr = [2,5,8,9,10,12,15];
// console.log(arr[2]);

// Numbers + Strings
var arr = [123, "A", "B", 89];
// console.log(arr[2]);

// Numbers + Strings + Arrays
var arr = [23, "A", [25,36,42]];
// console.log(arr[0]);

// What is 2D Array ?
// The two-dimensional array is a collection of items which share a common name
//  and they are organized as a matrix in the form of rows and columns.

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//pushing data to make 3d array by using push fnction

var items=[];
var data1=["#", "#", "#"];
var data3=["%", "%"]
var data2=["@", "@", "@"];

items.push(data1);
items.push(data2);
items.push(data3);
// console.log(items)
// Code 6: Access the elements in the 2d array

// Problem 1 :

var items = [
			    ["vatsal", 28, "male"],
				["Hitesh", 30, "male"]
			];

// Print Names
// console.log(items[0][0]);
// console.log(items[1][0]);

// Print Roll No of Both
// console.log(items[0][1]);
// console.log(items[1][1]);

// Print gender of both
// console.log(items[0][2]);
// console.log(items[1][2]);
var items = []

var item1 = [1,2,3,4];
var item2 = [4,5,6,7];
var item3 = [8,9,10,11];

items.push(item1);
items.push(item2);
items.push(item3);

// Finding Number of rows
var rows = items.length;
// console.log("Number of rows : ",rows);

// Finding Number of columns
var columns = items[0].length;
// console.log("Number of columns : ",columns);

//solve problems on matrices--
// step:1 write indexes
//father will move less instead  of son

//problem 1;
var items1=[
    ['A', 'B', 'C', 'D'],
    ['D', 'E', 'F', 'G'],
    ['G', 'H', 'I', 'J']
];

for (var father=0; father<=2; father++)
{
    var bag="";
    for(var son=0; son<=3; son++)
    {
        bag=bag+items1[father][son]+" "
        
    }
    // console.log(bag)
}
//problem 2
var items1=[
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L']
];

var rows=items1.length;
var cols=items1[0].length;
for (var father=0; father<=cols-1; father++)
{
    var bag1="";
    for(var son=0; son<=rows-1; son++)
    {
        bag1=bag1+items1[son][father]+" "
        
    }
    // console.log(bag1)
}

//problem  5;
var items2=[
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L']
];
var rows=items2.length;
var cols=items2[0].length;
for (var father=0; father<=rows-1; father++)
{
    var bag2="";
    for(var  son=cols-1; son>=0; son--)
    {
        bag2=bag2+items2[father][son]+" "
        
    }
    // console.log(bag2)
}


// Snake Pattern
var items=[
    ['A', 'B', 'C'],
    ['E', 'F', 'G'],
    ['I', 'J', 'K']
];
var rows=items.length; //size of rows
var cols=items[0].length; // size of columns


for(var r = 0 ; r<=rows-1; r++)
{
    var bag = "";
	if(r%2 == 0)
	{
			for(var c = 0; c<=cols-1; c++)
		  {
			   bag = bag + items[r][c] + " ";
		  }
	}

  else
	{
		for(var c= cols-1; c>=0; c--)
		  {
			   bag = bag + items[r][c] + " ";
		  }
   }
   console.log(bag);
}

