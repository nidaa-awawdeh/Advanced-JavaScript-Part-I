"use strict"

function outer() {
    return this;
}

outer(); // undefined

function info() {
    this.data = "something";
}

info()