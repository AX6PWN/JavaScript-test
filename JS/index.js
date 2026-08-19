// //consoles
// console.log("Hello World");
// console.warn("This is a warning");
// console.error("This is an error");

// //variables
// let name = "Ashish";
// console.log(name);

// let a=10;
// let b=20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(a--);
// console.log(++a);
// console.log(--a);
// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);
// console.log(!b);
// console.log(a&b);
// console.log(a|b);
// console.log(a^b);
// console.log(~a);
// console.log(~b);
// console.log(a<<b);
// console.log(a>>b);
// console.log(a>>>b);

// //data types
// let x = 10;
// console.log(typeof x);

// //control statements




// //Decision Making Statements
// let aa = 10;
// if(aa>10){
//     console.log("a is greater than 10  ");
// }
// else if(aa<10){
//     console.log("a is less than 10");
// }
// else if(aa==10){
//     console.log("a is equal to 10");
// }
// else{
//     console.log("a is smaller than 10  ");
// }


//abcde
// let a = 10;
// let b = 5;
// let c = 15;
// let d = 1;
// let e = 32;

// if (a >= b) {
//     if (a >= c) {
//         if (a >= d) {
//             if (a >= e) {

//                 // a is greatest or equal to greatest
//                 if (a == b) {
//                     if (a == c) {
//                         if (a == d) {
//                             if (a == e) {
//                                 console.log("All numbers are equal");
//                             } else {
//                                 console.log("a, b, c and d are equal and greatest");
//                             }
//                         } else {
//                             if (a == e) {
//                                 console.log("a, b and e are equal and greatest");
//                             } else {
//                                 console.log("a, b and c are equal and greatest");
//                             }
//                         }
//                     } else {
//                         if (a == d) {
//                             if (a == e) {
//                                 console.log("a, b, d and e are equal and greatest");
//                             } else {
//                                 console.log("a, b and d are equal and greatest");
//                             }
//                         } else {
//                             if (a == e) {
//                                 console.log("a, b and e are equal and greatest");
//                             } else {
//                                 console.log("a and b are equal and greatest");
//                             }
//                         }
//                     }
//                 } else {
//                     if (a == c) {
//                         if (a == d) {
//                             if (a == e) {
//                                 console.log("a, c, d and e are equal and greatest");
//                             } else {
//                                 console.log("a, c and d are equal and greatest");
//                             }
//                         } else {
//                             if (a == e) {
//                                 console.log("a, c and e are equal and greatest");
//                             } else {
//                                 console.log("a and c are equal and greatest");
//                             }
//                         }
//                     } else {
//                         if (a == d) {
//                             if (a == e) {
//                                 console.log("a, d and e are equal and greatest");
//                             } else {
//                                 console.log("a and d are equal and greatest");
//                             }
//                         } else {
//                             if (a == e) {
//                                 console.log("a and e are equal and greatest");
//                             } else {
//                                 console.log("a is the greatest number");
//                             }
//                         }
//                     }
//                 }

//             } else {

//                 // e is greater than a
//                 if (e >= b) {
//                     if (e >= c) {
//                         if (e >= d) {
//                             console.log("e is the greatest number");
//                         }
//                     }
//                 }

//             }
//         } else {

//             // d is greater than a
//             if (d >= b) {
//                 if (d >= c) {
//                     if (d >= e) {
//                         console.log("d is the greatest number");
//                     }
//                 }
//             }

//         }
//     } else {

//         // c is greater than a
//         if (c >= b) {
//             if (c >= d) {
//                 if (c >= e) {

//                     if (c == b) {
//                         if (c == d) {
//                             if (c == e) {
//                                 console.log("b, c, d and e are equal and greatest");
//                             } else {
//                                 console.log("b, c and d are equal and greatest");
//                             }
//                         } else {
//                             if (c == e) {
//                                 console.log("b, c and e are equal and greatest");
//                             } else {
//                                 console.log("b and c are equal and greatest");
//                             }
//                         }
//                     } else {
//                         if (c == d) {
//                             if (c == e) {
//                                 console.log("c, d and e are equal and greatest");
//                             } else {
//                                 console.log("c and d are equal and greatest");
//                             }
//                         } else {
//                             if (c == e) {
//                                 console.log("c and e are equal and greatest");
//                             } else {
//                                 console.log("c is the greatest number");
//                             }
//                         }
//                     }

//                 } else {

//                     if (e >= d) {
//                         console.log("e is the greatest number");
//                     } else {
//                         console.log("d is the greatest number");
//                     }

//                 }
//             }
//         }
//     }
// }

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}




let star = "";

for (let i = 0; i <= 5; i++) {

    for (let j = 0; j < i; j++) {

        if (j == 0 || j == i - 1) {
            star += "*";
        } else {
            star += " ";
        }
    }

    star += "\n";
}

console.log(star);