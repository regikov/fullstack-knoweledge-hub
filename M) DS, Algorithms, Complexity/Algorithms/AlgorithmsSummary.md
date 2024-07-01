### Algorithm in JS


### **What is an Algorithm?**

An algorithm is a step-by-step set of instructions designed to perform a specific task or solve a particular problem. 
Think of it as a recipe in cooking: it tells you exactly what steps to follow to achieve a desired result.

Algorithms are basically functions.

Functions that are algorithms:
- take in arguments
- explicitly return values



Example of an algorithm: 

*Algorithm that counts the number of vowels in a word and returns the count:*
 ```javascript
 function countVowels(word) {
    var vowels = ['a', 'i', 'e', 'o', 'u'];
    var count = 0;
		for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (word[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

 ```

### **Why are Algorithms Important?**
Algorithms are crucial because they allow us to write efficient and effective code. 

Efficient algorithms can handle larger amounts of data and perform tasks faster, which is important for building responsive and scalable applications.



### **Key concepts and terminology:**

- **Inputs** : Data or information that the algorithm processes.

- **Outputs:** Results or solutions produced by the algorithm.

- **Steps:** Clear and precise instructions that define the algorithm's actions.

- **Efficiency:** How quickly and resourcefully the algorithm solves a problem (time and space complexity).

- **Correctness:** Whether the algorithm produces the expected results for all possible inputs.


### **Common algorithm types:**

- **Sorting algorithms:**
 Arrange elements in a specific order (e.g., bubble sort, quicksort).

- **Searching algorithms:** Find specific elements within a collection (e.g., linear search, binary search).

- **Graph algorithms:** Operate on graphs (networks of interconnected nodes), such as finding shortest paths or detecting cycles.

- **String algorithms:** Manipulate text strings (e.g., searching for substrings, pattern matching).


### **When are functions not algorithms?**
When you write a function it may or may not
- have arguments
- return a value

Functions that don't take arguments or return a value are usually used to dry up repetitive code, print something to the screen, or serve as an argument to be executed later.

 These types of functions typically aren't referred to as algorithms.

Example of a function that is not an algorithm:

- **An anonymous function that gets passed to jQuery's on function.**

```javascript
$('button').on('click', function(){ 
	alert('hi') 
});
```

- **A function which has no arguments, no return**

```javascript
function clearDiv(){
	$('#div').html("");
}
```

- **A function which has an argument, but no return**

```javascript
function clearDiv(text){
	$('#div').text(text);
}
```