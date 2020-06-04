## Part 1

- What is the value of the keyword this in the following example: <br>

` var data = this;console.log(data);`
<br>
<hr>

- What does this function output? Why? <br>
 ```
 function logThis(){
    return this;
}
logThis(); // ?
```

<br>
<hr>

- What does this function output? Why? <br>
```
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi() // ?
```
<br>
<hr>

- What does this function output? Why? <br>

```
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo() // ?
```
<br>
<hr>

- What does this function output? Why? <br>
```
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() // ?
```
<br>
<hr>

- What does this function output? Why? <br>
```
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation() // Why might we be getting an error here?
```
<br>
