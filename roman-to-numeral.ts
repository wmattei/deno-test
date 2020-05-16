interface IRomap {
     [index: string]: number;
}

const ROMAP: IRomap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function main() {
    const start = new Date();
    const value = handler(Deno.args[0]);
    const end = new Date();
    console.log(`${Deno.args[0]} ---> ${value}`)
    console.log(`Finished in: ${end.getTime() - start.getTime()}`);
}

function handler(number: string) {
    if (number == null) return -1;
    let num = ROMAP[number[0]];
    let pre, curr;

    for (let i = 1; i < number.length; i++) {
        curr = ROMAP[number[i]]
        pre = ROMAP[number[i - 1]]
        if (curr <= pre) {
            num += +curr;
        } else {
            num = num - pre * 2 + curr;
        }
    }
    
    return num;
}

main();
