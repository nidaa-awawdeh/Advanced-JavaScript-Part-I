var expect = chai.expect;

// WRITE YOUR TESTS HERE!

var Obj = {
  awesome: "awesome",
  foo: "foo",
};
describe("obj", function replaceWith() {
  it("replaceWith", function replaceWith() {
    var str = "awesome";
    str = str.replaceWith("awesome", "e", "z");
    expect(str).toEqual("awzsomz");
  });

  it("replaceWith", function replaceWith() {
    var str = "foo";
    str = str.replaceWith("Foo", "F", "B");
    expect(str).toEqual("Boo");
  });
});
//---------question two

//var arr = [1, 2, 3];
//var num = 3;
describe("arr", function expand(arr, num) {
  describe("copy", function expand() {
    it(" a copy of the array", function expand() {
      //expand([1, 2, 3], 3)
      expect(arr).toEqual([1, 2, 3], 3);
    });

    it(" acopy of array", function expand() {
      //expand(["foo", "test"], 1)
      expect(arr, num).toEqual(["foo", "test"], 1);
    });
  });
});

//------------------question three
