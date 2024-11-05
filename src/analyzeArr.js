function analyzeArr(arr) {
    if (!Array.isArray(arr) || arr.length == 0) {
        return {};
    }
    const sum = arr.reduce((total, item) => total + item, 0);
    const average = sum/arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr)
    const length = arr.length;
    
    return {
        sum,
        average,
        min,
        max,
        length
    }
}
module.exports = analyzeArr;