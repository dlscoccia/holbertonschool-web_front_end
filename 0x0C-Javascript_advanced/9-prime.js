function countPrimeNumbers() {
    let totalPrimes = 0
    let counter = 0
    for (let i = 2; i <= 100; i++){
        for(let j = 2; j <= i; j++){
            if (i % j === 0) {
                counter += 1
            }
        }
        if (counter == 1) {
            totalPrimes += 1
        }
        counter = 0
    }
    return totalPrimes
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
