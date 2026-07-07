function addTogether(num1, num2) {
    if (typeof num1 !== "number") {
        return undefined;
    }
    if (arguments.length === 2) {
        if (typeof num2 !== "number") {
        return undefined;
    }
    return num1 + num2;
    }
    return function (num2) {
        if (typeof num2 !== "number") {
        return undefined;
        }
        return num1 + num2;
    };
    }
console.log(addTogether(2, 3));
