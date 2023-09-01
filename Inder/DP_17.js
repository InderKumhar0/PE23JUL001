/*
You are part of a team developing a music streaming platform called "SoundWave." As part of this platform, you have been assigned the task of creating a feature that implements a merge sort algorithm to efficiently sort a playlist of songs based on their popularity. This feature will assist users in discovering popular songs, creating personalized playlists, and enhancing their overall music streaming experience.

To accomplish this, you decide to create a program that takes a list of integers representing song popularity and implements the merge sort algorithm to sort the songs in descending order of popularity. The program will provide users with the sorted playlist, along with additional functionality to enhance their music streaming capabilities.

When a user accesses the SoundWave platform and selects the "Top Songs" feature, they will be presented with a playlist of songs. The program will display a message like:

Welcome to SoundWave - Top Songs!
Here is your unsorted playlist of song popularities:
78, 56, 90, 120, 45, 80, ...

Upon receiving the playlist, the program will apply the merge sort algorithm to efficiently sort the songs based on their popularity. It will then display the sorted playlist, saying:

Thank you for using SoundWave - Top Songs!
Here is your sorted playlist in descending order of popularity:
120, 90, 80, 78, 56, 45, ...
*/

function merge(left, right){
    let merged = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length){
      if(left[i] > right[j]){
        merged.push(left[i]);
        i++;
      }else {
        merged.push(right[i]);
        j++
      }
    }
  
    while(i < left.length){
      merged.push(left[i]);
      i++;
    }
  
    while(j < right.length){
      merged.push(right[j]);
      j++;
    }
  
    return merged;
  }
  
  function mergeSort(arr) {
    if(arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return merge(sortedLeft, sortedRight);
  }
  
  
  function sortPlaylist() {
    console.log("Welcom to SoundWave - Top Songs");
    console.log("Here is your unsorted playlist of song popularities: \n78, 56, 90, 120, 45, 80, ...");
  
    const playlist = [78, 56, 90, 120, 45, 80];
  
    const sortedPlaylist =  mergeSort(playlist)
  
    console.log("Thank you for using SoundWave - Top Songs!");
    console.log("Here is your sorted playlist in descending order of popularity:");
    console.log(sortedPlaylist.join(", ")+", ...");
  }
  
  sortPlaylist();