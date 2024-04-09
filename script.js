//your JS code here. If required.
function secondHighest(arr) {
    // Check if arr is empty or has only 1 element
    if (arr.length < 2) {
        return -Infinity;
    }
    
    // Remove duplicates from arr
    let uniqueArr = [...new Set(arr)];
    
    // Check if all elements are the same
    if (uniqueArr.length === 1) {
        return -Infinity;
    }
    
    // Sort uniqueArr in descending order
    uniqueArr.sort((a, b) => b - a);
    
    // Return the second element
    return uniqueArr[1];
}
