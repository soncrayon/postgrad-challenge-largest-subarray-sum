const largestSubarraySum = (arr) => {
    let largestSum = arr.reduce((acc, n) => {return acc + n})
    let negTest = [...arr]
    negTest.map((n) => {return n < 0})
    console.log(arr)
    console.log(negTest)
    if (negTest.length > 0){
        // if (negTest.length === arr.length){
        //     largestSum = Math.max(...arr)
        // }
        for (let i=0; i<(arr.length-1); i++){
    
    
        }
    }
    return largestSum 
}