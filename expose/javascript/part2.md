1. 3 gets printed. Since i is a var defined in the same function as line 12, there is no error. 3 is printed since i is a loop variable that increments until the length of the array.
2. 150 gets printed. Since i is a var defined in the same function as line 13, there is no error. 150 is printed because at the last iteration of the loop, prices[i] is 300 and is multiplied by .5.
3. 150 printed. No error for same reasons as 1 and 2. 150 is printed because finalPrice is assigned rounded(discounted price x 100). Nothing happens since the discounted price x 100 is not a decimal. 
4. [50,100,150] is returned. There is no error since nothing is out of scope. The values in the array are the way they are because the discount is .5 and that discount is applied to everything in the array.
5. An error is returned because i is a let variable defined in a for loop and line 12 is outside of the loop.
6. An error is returned for the same reasons as 5.
7. 150 is returned since finalPrice is defined at the top of the function and line 14 is still in the function. It is 150 for same reason as 3.
8.  [50,100,150] is returned. No error for same reason as 7. Values are the way they are for same reason as 4.
9.  An error for same reason as 5.
10. 3 is returned because prices.length is 3.
11. same as 4 and 8. No error since const is not out of scope.
12. a. student['name']
    b. student['Grad Year']
    c. student.greeting()
    d. student['Favorite Teacher'].name
    e. student['courseLoad'][0]
13. a. 32, the 3 is a string and 2 maps to the string representation of 2
    b. 1, the 3 is converted to an integer 3
    c. 3, null becomes 0
    d. 3null, the null becomes a string null
    e. 4, the true becomes a 1
    f. 3, the false becomes a 0
    g. 3undefined, the undefined becomes a string
    h. NaN, the undefined becomes an NaN so 3 - NaN is Nan.
14. a. true, the 2 becomes a 1.
    b. false, the 2 operands are strings. 1 comes before 2.
    c. true, the string 2 becomes the number 2.
    d. false, the 2 operands are different types so false is returned. 
    e. false, true becomes 1
    f. true, the parameter for the boolean function is a value so the function returns true
15. == does type conversion and === does not do type conversion.
17. [2,4,6] The function loops through the input array, calls doSomething on the current index which multiplies it by 2, and pushes the value in a new array. Since 1,2,3 is the input, doubling everything gives 2,4,6.
19. 1 4 3 2.  
