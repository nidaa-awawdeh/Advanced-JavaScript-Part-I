
function replaceWith() {
    replaceWith("awesome", "e", "z") 
    replaceWith("Foo", "F", "B")
    return replaceWith;
}


//var arr = [1, 2, 3];
//var num = 3;
describe("arr", function expand( arr,num) {
    describe("copy", function expand() {
        it(" a copy of the array", function expand() {
            
            //expand([1, 2, 3], 3)
            expect(arr).toEqual([1, 2, 3], 3);
        });

        it(" acopy of array", function expand() {
            //expand(["foo", "test"], 1)
            expect(arr,num).toEqual(["foo", "test"], 1)
            
        });
    })
})



