function countBy(x, n) {
    let z = [];
    for (i = 1; i <= n; i++) {
        z.push(i * x)
    }
    return z;
}


console.log(countBy(1, 10))
console.log(countBy(2, 5))

// make a rock paper scissors game 
const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!"
    }
    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    if (rules[p1] === p2) {
        return `Player 1 won!`;
    } else {
        return `Player 2 won!`;
    }
};

console.log(rps('scissors', 'paper'))
console.log(rps('scissors', 'rock'))
console.log(rps('paper', 'paper'))

// double the input array
function maps(x) {
    return x.map(n => n * 2)
}
console.log(maps([1, 2, 3, 4]))


function strCount(str, letter) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter)
            count++;
    }

    return count;

}

function test() {
    count =4 + 3+ 2+ "1"
    return count
}

console.log(test())