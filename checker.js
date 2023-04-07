function checkNumsInput(nums) {
    let arr = nums.split(",").map(Number);
    for(let i = 0; i < arr.length; i++) {
        if(Number.isNaN(arr[i])) {
            let items = nums.split(",");
            return items[i];
        }
    }
    return "";
}

function checkEmptyInput(nums) {
    let arr = nums.split(",").map(Number);
    console.log(arr);
    return arr.length === 0;
}


module.exports = {
    checkNumsInput: checkNumsInput,
}