/*
You are part of a team developing a search engine called "Searchify." As part of this search engine, you have been assigned the task of creating 
a feature that implements a binary search algorithm to efficiently find a specific element in a sorted list of data. This feature will assist 
users in searching for specific information, retrieving relevant results quickly, and improving the overall search experience.

To accomplish this, you decide to create a program that takes a sorted list of elements as input and implements the binary search algorithm to 
find a specific element. The program will provide users with the search result, along with additional functionality to enhance their search 
capabilities.

When a user visits the Searchify platform and enters a search query, they will be presented with a sorted list of elements that can be searched. 
The program will display a message like:

Welcome to Searchify!
Please enter the element you want to search for:


The user can then input the element they want to find, for example: 42.

Upon receiving the input, the program will apply the binary search algorithm to the sorted list, find the specified element, and display the
search result, saying:

Thank you for providing the search element.
The element 42 was found at index 5.


By providing the binary search feature, Searchify enables users to search through large datasets efficiently. This feature can be used for tasks
such as searching for specific values in a database, retrieving relevant search results from a document collection, or locating specific data 
points within sorted lists.
*/


function binarySearch(list, target) {
    let left = 0;
    let right = list.length - 1;
  
    while(left <= right){
      const mid = Math.floor((left + right) / 2);
  
      if(list[mid] === target){
        return mid;
      }
      else if(list[mid] < target){
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
    return -1;
  }
  
  
  function searchify() {
  
    console.log('Welcome to Searchify!');
    console.log('Please enter the element you want to search for:');
  
    const sortedList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const searchElement = 42;
  
    const result = binarySearch(sortedList, searchElement);
  
    console.log("Thank you for providing the search element.");
    
      if (result !== -1) {
        console.log("The element " + searchElement + " was found at index " + result + ".");
      } else {
        console.log("The element " + searchElement + " was not found in the list.");
      }
  }
  
  searchify();