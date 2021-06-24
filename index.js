const largestSubarraySum = (arr) => {
    let largestSum = 0
    for (let i=0; i<arr.length; i++){
        let subarraySum = arr.slice(0,(i+1)).reduce((acc, n) => {acc + n})
        subarraySum > largestSum ? largestSum = subarraySum : largestSum
    }
    return largestSum 
}