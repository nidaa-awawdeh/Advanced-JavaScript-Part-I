var thing = this;
thing; // window

function outer() {
    return this;
}

outer(); // window