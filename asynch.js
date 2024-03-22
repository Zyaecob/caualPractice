function printMe() {
  console.log("printed")
}

function test() {
  console.log("test")
}
setTimeout(printMe, 2000);
test();