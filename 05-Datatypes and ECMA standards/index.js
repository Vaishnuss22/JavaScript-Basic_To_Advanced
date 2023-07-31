"use strict"  ; //treat all JS code as newer version

// alert("hello")
// alert(3+3);    //alert is not defined in node as runtime environment not browser
               //If we embed html code then it works as html runs on browser

// console.log(3+3)   console.log("Hello")       //error
console.log(3+3);   console.log("Hello")        //works as semicolon represents that it is the end and the code
                                            // treats it as next line

//mdn documentation   =>recommended
//Original documentation =>tc39.es
//ecma script=> standards to be followed when writing JavaScript

/*Data Types*/
let name="Vaishnu";
let age=22;
let isLoggedIn=false;

/*Primitive DataTypes*/


//number  => 2 to power 53, 2^53
//bigint  =>includes very large numbers
//string =>  ' '  ,  "  "
//boolean => true or false
//null  => It is a standalone value  , It is not undeclared , It represents empty , we can assign value as null
//undefined  => variable is declared but value is not declared 
//symbol  => It is used to define uniqueness ,

/* Object or non primitive type   */
console.log(typeof null);  // null is a type of object
console.log(typeof undefined);   //undefined is a type of javascript datatype


/*Notes 

Primitive Data Types:

Number: Represents numeric values, including integers and floating-point numbers.
String: Represents a sequence of characters, enclosed in single or double quotes.
Boolean: Represents logical values, true or false.
Null: Represents the intentional absence of any value.
Undefined: Represents an uninitialized variable or a variable without a value assigned.
Symbol: Represents a unique and immutable value (introduced in ECMAScript 6).
Non-Primitive Data Types (Reference Types):

Object: Represents a collection of key-value pairs, used for complex data structures.
Array: A special type of object used to store a list of values indexed by numeric values.
Function: A callable object that can be executed when invoked.
Date: Represents a specific date and time in JavaScript.
RegExp (Regular Expression): Represents a pattern used for string matching and manipulation.
The main difference between primitive and non-primitive data types is that primitive data types are immutable (cannot be modified) and are stored by value, whereas non-primitive data types are mutable (can be modified) and are stored by reference.

*/




