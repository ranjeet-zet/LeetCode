# Increasing Triplet Subsequence

## Description
This function `increasingTriplet` takes an array of integers `nums` as input and returns true if there exists an increasing triplet subsequence in the array; otherwise, it returns false. An increasing triplet subsequence is a sequence of three numbers (a, b, c) such that a < b < c.

## Usage
To use this function, you can call it with an array of integers as follows:
```javascript
const nums = [1, 2, 3, 4, 5];
const result = increasingTriplet(nums);
console.log(result); // Output: true
```

Algorithm
The function iterates through the array nums and maintains two variables l and m, initialized to Number.MAX_VALUE. It compares each element of the array with these variables to find an increasing triplet subsequence.

Approach
If the length of the input array is less than 3, it immediately returns false since it's impossible to form a triplet subsequence with less than three elements.
It iterates through the array and updates the variables l and m as it finds elements that are smaller than m but larger than l.
If it finds an element larger than m, it means an increasing triplet subsequence exists, and it returns true.
Complexity Analysis
Time Complexity: O(n), where n is the number of elements in the input array nums. The function iterates through the array once.
Space Complexity: O(1), since the function uses only a constant amount of extra space regardless of the size of the input array.

This README provides a brief overview of the function, its usage, algorithm, approach, and complexity analysis, formatted in Markdown for easy readability and presentation on platforms like GitHub. Feel free to customize it further based on your project's requirements.
