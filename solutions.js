"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(entry){
    return entry === true;
}

function isFalse(entry1) {
    entry1 === false;
    }


function not(entry3){
    return !entry3;
}

function addOne(entry4){
    let x = parseFloat(entry4);
    return x + 1;
}

function isEven(entry5){
    return entry5 % 2 === 0;}

function isIdentical(value1, value2){
    return value1 === value2;
}

function isEqual(v1, v2){
    return v1 == v2;}

function or(v1, v2){
    return v1 || v2;
}

function and(v1, v2){
    return v1 || v2;
}

function concat(v1, v2){
    return toString(v1) + toString(v2);
}



