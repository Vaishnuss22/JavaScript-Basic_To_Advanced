let score = 33;
let score1 = "33";
console.log(typeof score);      //number      -> Syntax1 
console.log(typeof(score1));     //string      -> Syntax2

// const {score} =req.body     //U have no guarentee what type of record is coming from
                             // backend,so u log typeof and find the datatype


let score2="23" ;          //String datatype                       
let valueInNumber=Number(score2);        //String to number conversion using Number class
console.log(typeof valueInNumber);

console.log('----------------------------------------------------------------------------')

let score3="23va1";
let valueInNumber1=Number(score3);
console.log(typeof(valueInNumber1))  ;    //number
console.log(valueInNumber1)    //NaN    

console.log('----------------------------------------------------------------------------')


let score4=null;
let valueInNull=Number(score4);
console.log(typeof(valueInNull));   //number
console.log(valueInNull)              //0 

console.log('----------------------------------------------------------------------------')


let score5 = undefined;
let valueInUndefined=Number(score5);
console.log(typeof(valueInUndefined))   //number
console.log(valueInUndefined);           //NaN

console.log('----------------------------------------------------------------------------')

let score6=true;
let valueInBoolean=Number(score6);
    console.log(typeof(valueInBoolean))   //number
    console.log(valueInBoolean)           //1

console.log('----------------------------------------------------------------------------')


let score7="Vaishnu";
let valueInString=Number(score7);
console.log(typeof(valueInString));   //number
console.log(valueInString);          ///nan

console.log('----------------------------------------------------------------------------')

/*Notes*/

//"33"  => 33
//"33abc"  => NaN
//true =>1  ,false =>0

console.log('----------------------------------------------------------------------------')

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)        //true

//1 => true, 0=>false 
//  "" => false    //emptyString => false
// "Vaishnu"  => true

console.log('----------------------------------------------------------------------------')

let someNumber=33;
let stringNumber=String(someNumber);
console.log(typeof(stringNumber))     //string
console.log(stringNumber);              ///33   means => "33" but in console it will not show like this


