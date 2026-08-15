// function sum(a, b = 12) {
//     return a + b;
// }

// const sumValue = sum(2);

// console.log(sumValue);

function sum(a, b = 12) {
    return a + b;
}

const sumArrow = (a,b = 12) => a + b;

const sumValue = sumArrow(2);

console.log(sumValue)