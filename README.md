# 04-class-test
This is a close book  test  which I'm not allowed to discuss with anyone.

The first question
I have to  write a function that returns true if the given string is a palindrome. Otherwise, return false.
N.B A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and
spacing.
 
The second question
 In the new javascript file I have to  design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency.The checkCashRegister() function should always return an object with a status key and a change key.Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

 The third question
I have to  add new javascript file with a file that returns true if the passed string looks like a valid South African phone number.The user may fill out the form field any way they choose as long as it has the format of a valid SA number. The following are examples of valid formats for SA numbers: 01128281111 (011) 282 1111 (011) 282-1111.