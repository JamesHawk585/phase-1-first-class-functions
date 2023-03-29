function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    function namedFunction() {
        return namedFunction()
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {};

}

console.log(receivesAFunction(returnsANamedFunction));
