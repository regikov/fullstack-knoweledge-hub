let globalVar = ("Global Variable")

function localScope () {
    let localVar = ("Local Variable")
    console.log(globalVar);
    console.log(localVar);
}
localScope()


console.log(globalVar);
console.log(localVar);  // Error because it is a local scope, aka I can only access it where it belongs (so in the function)