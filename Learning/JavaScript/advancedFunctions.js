console.log("Countdown using Recursion:");
function countdown(n){
    if (n == 1) {
    console.log("Boom!");
    return
}
    console.log(n);
    return countdown(n - 1);
}

countdown(5)

console.log("Factorial ");

function fact(n){
    if (n == 1) return n;
    return n * fact(n-1);
}
console.log(fact(5));
