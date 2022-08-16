//Question 1
var num1 = 1 + 5;
var num2 = num1 / 4; // output will be 1.5
var num3 = 1 + 5;
var num4 = num3 / 4; // output will be 1.5
console.log(num2 + " " + num4);

//Question 2
var a = 1;
var b = 2;
var c;
var d;
c = ++b; // c = 3 and b value is increased to 3
d = a++; // d = 1 and a is trying to add 1 a= 2
console.log(d);
c++; //c = c + 1 then c=4
b++; //b = b+1 then b=4
++a; // a=a+1 then a= 3
console.log(a + " " + b + " " + c);

//Question 3
var input = 7;
var output1 = ++input + ++input + ++input; // How input value is changing 8 9 10
var output2 = input++ + input++ + input++; //10 11 12
var output3 = input++ + ++input + input++; //13 15 15
console.log(output1 + " " + output2 + " " + output3);
