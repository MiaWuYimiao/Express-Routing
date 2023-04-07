function getMean(nums) {
    console.log(nums);
    let arr = nums.split(",").map(Number);
    var total = 0;
    var count = 0;

    arr.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

function getMedian(nums) {
    let arr = nums.split(",").map(Number);
    const mid = Math.floor(arr.length / 2),
    new_nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? new_nums[mid] : (new_nums[mid - 1] + new_nums[mid]) / 2;
}

function getMode(nums) {
    let arr = nums.split(",").map(Number);
    let mf = 1;
    let m = 0;
    let item;
    for (let i=0; i<arr.length; i++){
        for (let j=i; j<arr.length; j++){
            if (arr[i] == arr[j]) m++;
            if (mf<m) {
                mf=m; 
                item = arr[i];
            }
        }
        m=0;
    }
    return item;
}

module.exports = {
    getMean: getMean,
    getMedian: getMedian,
    getMode: getMode
}