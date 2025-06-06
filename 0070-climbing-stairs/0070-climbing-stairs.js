/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if (n == 1) return 1;

    let arr = [0, 1, 2]; 

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
};