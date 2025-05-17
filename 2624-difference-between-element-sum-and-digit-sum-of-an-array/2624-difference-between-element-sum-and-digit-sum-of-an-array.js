/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const element= nums.reduce((acc,num)=>acc+ num,0);


    const digit = nums.map(num=>num.toString())
    .join('')
    .split('')
    .map(d => parseInt(d))
    .reduce((acc, d) => acc + d, 0); 
    return Math.abs(element - digit);
};