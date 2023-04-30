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
    c. 
