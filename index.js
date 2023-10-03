//function isPalindrome(word) {
  // Write your algorithm here

  function isPalindrome(word) {
    // Convert to lowercase and remove spaces and special characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    let left = 0;
    let right = word.length - 1;
  
    // Compare characters 
    while (left < right) {
      if (word[left] !== word[right]) {
        return false; 
      }
      left++;
      right--;
    }
  
    return true; // No mismatches, it's a palindrome
  }
  
/* 
  Add your pseudocode here
*/

 // Add written explanation of your solution here


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in hereconsole.log(isPalindrome("madam")); // should return true
console.log(isPalindrome("robot")); // should return false
console.log(isPalindrome("A man a plan a canal Panama")); // should return true (ignoring spaces and case)
console.log(isPalindrome("race car")); // should return true (ignoring spaces)
console.log(isPalindrome("hello")); 

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
