1. it will print the last index used, 3. in the for loop because the variable was declared as a var and var has function scope

2. it will print out the last discountedPrice last that was calculated. so 300*(0.5) = 150. This happens because discountedPrice is declared as a var and has function scope
   
3. the same thing as discounted price, it will print out 150 since the finalprice is var. 

4. it returns the list of discounted prices, (discounted), but it is not saved anywhere when the function is called 

5. it will give an error since i is declared as a let, and is only accessible to the the for loop. 

6. it will also give an error, for the same reason as question 5

7. line 14 will print out 150 since it is still within the same scope it was initially declared in 

8. it will return the list discount same as question 4 

9. it will return an error same question 5. 

10. this will just print out the length of the prices list. 3 however the code will cause an error since it is trying to change a const variable

11. the code will cause an error since it is trying to modify an const variable, so it does not return anything. 

12. 
 - A. student.name
 - B. student.["Grad Year"];
 - C. student.greeting(); 
 - D. student.["Favorite Teacher"].name
 - E. student.courseLoad[0];

13. Arithmetic 
 - A. ‘3’ + 2 , output '32' it concats the 2 as a string cause the integers maps to its string and we are adding to the string

 - B. '3' - 2, output 1, since we remove something that is present in a string it will convert string 3 back to int 3. 

 - C. 3 + null; out is 3 because null is converted into a 0 so 3 + 0 is 3;

 - D.'3' + null, '3null', null is auto converted to string since 3 is a string 
 
 - E. true  + 3 , 4, true maps to 1 so its converted 1 + 3 = 4, 

 - F. false + null, false maps to 0 so then in this case null is then converted into 0 so 0 + 0 = 0 

 - G. '3' + undefined, same case as '3' + null so '3undefined

 - H. '3' -  undefined, NaN,as its very similar to '3'-2 but in this case undefined is not a valid conversion which causes the error. 

14. comparison 
 - A. true, string 2 is auto converted to number to 2 is greater than 1 
 - B. false, due to lexicographical order 1 comes before 2 so its not true 
 - C. true, due numbers mapping to their exact string representation it just comparing the same thing
 - D. false, since it does not do the type conversion 
 - E. false, true is mapped to 1 so at conversion is comparing 1 and 2 which are not equal 
 - F. true, since the value of 2 is not empty like 0, null, or undefined it is converted into true, therefore true == true 

15.  ==, is the normal equality operator that we are used to. it will autoconvert types if they do not match up and produce true or false,
    ===, is the strictly equality comparison, this will compare values like == but it will not convert types and just simply compare. so any mismatch will produce a false. 

16. see [part2-question16.js](part2-question16.js) file 

17. we multiply the array by 2 so the result is [2,4,6], we to this result because we store doSomething(num) into the variable callback. so it has the function datatypeand we are able to call this function and pass in the value of the array. this is call also returns the value of what the function does so we are able to save the return value. 

18. see [part2-question18.js](part2-question18.js) file 

19. ```1
       4 
       3
       2  
       ``` 
       they are printed in this order as 2 and 3 have delay however the delay for 2 is just long enough for 4 and 3 to be printed first. as 3 has no delay. 


