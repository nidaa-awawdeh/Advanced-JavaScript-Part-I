var animal = {
    introduce: function () {
        return this.name + " is a " + this.type + " and says " + this.sound + "!";
    }
};

var whiskey = {
    name: "Whiskey",
    type: "dog",
    sound: "woof"
};

var moxie = {
    name: "Moxie",
    type: "cat",
    sound: "meow"
};

// set the thisArg to be the object whiskey:
animal.introduce.call(whiskey); // "Whiskey is a dog and says woof!"

// set the thisArg to be the object moxie:
animal.introduce.call(moxie); // "Moxie is a cat and says meow!"