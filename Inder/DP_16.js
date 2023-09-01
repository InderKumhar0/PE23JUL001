/*
You are part of a team developing an e-commerce platform called "MarketPro." As part of this platform, you have been assigned the task of creating a feature that finds the kth largest element in an unsorted list. This feature will assist users in identifying popular products, analyzing sales trends, and optimizing their purchasing decisions.

To accomplish this, you decide to create a program that takes an unsorted list of elements and finds the kth largest element. The program will provide users with the result, along with additional functionality to enhance their shopping experience.

When a user visits the MarketPro platform and selects the "Popular Products" feature, they will be prompted to enter the value of k, indicating the kth largest element they want to find. The program will display a message like:

Welcome to MarketPro - Popular Products!
Please enter the value of k to find the kth largest element:


The user can then input the value of k, for example: 3.

Upon receiving the input, the program will process the unsorted list, find the kth largest element, and display the result, saying:

Thank you for providing the value of k.
The kth largest element is: 86
*/

function findKthLargest(nums, k){
    nums.sort((a,b) => b - a);
  
    return nums[k - 1];
  }
  
  
  function findKthLargestElement() {
    console.log("Welcom to MarketPro - Popular Product");
    console.log("Please enter the value of k to find the kth largest element:");
  
    const k = parseInt(prompt());
  
    const elements = [12, 45, 67, 86, 23, 56, 34, 99];
  
    const kthLargest = findKthLargest(elements, k);
  
    console.log("Thank you fro providing the value of k.");
    console.log("The kth largest element is:", kthLargest);
  }
  
  findKthLargestElement();