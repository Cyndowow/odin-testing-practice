function analyzeArray(arr) {
    const sum = arr.reduce((cur, prev) => {
        return cur + prev;
    });

    const length = arr.length;

    const average = sum / length;

    const min = arr.reduce((cur, prev) => {
        return Math.min(cur, prev);
    })

    const max = arr.reduce((cur, prev) => {
        return Math.max(cur, prev);
    })

    const analyzedArray = {
        average: average,
        min: min,
        max: max,
        length: length,
    }

    return analyzedArray;
    
}

module.exports = analyzeArray;