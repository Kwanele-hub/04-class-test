function palindrome(str) {
    var re = /[\W_]/gi;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr; 
  }
   
  console.log(palindrome("A dog, a plan, a canal. Panama"));