/*
You are part of a team developing a social networking platform called "SocialGraph." As part of this platform, you have been assigned the task of creating a feature that implements a depth-first search (DFS) algorithm to traverse the user graph. This feature will assist users in discovering connections, exploring networks of friends, and identifying mutual friends within the platform.

To accomplish this, you decide to create a program that takes a user graph as input and implements the DFS algorithm to traverse the graph. The program will provide users with the traversal result, along with additional functionality to enhance their social networking experience.

When a user interacts with the SocialGraph platform and selects the "Explore Connections" feature, they will be prompted to enter a user ID from which the DFS traversal will start. The program will display a message like:

Welcome to SocialGraph - Explore Connections!
Please enter the starting user ID for DFS traversal:


The user can then input the user ID, for example: 12345.

Upon receiving the input, the program will apply the DFS algorithm to the user graph, starting from the specified user ID, and traverse the graph to discover connections. The program will display the traversal result, showing the sequence of users visited, saying:

Thank you for providing the starting user ID.
DFS traversal result:
12345 -> 56789 -> 98765 -> 43210 -> ...
*/

class User {
    constructor(id) {
      this.id = id;
      this.friends = [];
    }
  
    addFriend(user) {
      this.friends.push(user);
      user.friends.push(this);
    }
  }
  
  function dfsTraversal(startUser) {
    const visited = new Set();
    const traversalResult = [];
  
    function dfs(user) {
      visited.add(user);
      traversalResult.push(user.id);
  
      for (const friend of user.friends) {
        if (!visited.has(friend)) {
          dfs(friend);
        }
      }
    }
    dfs(startUser);
  
    return traversalResult;
  }
  
  function exploreConnections() {
    console.log("Welcome to socialGraph - Explore Connections!");
    console.log("Please enter the starting user ID for DFS traversal : ");
  
    const user1 = new User(12345);
    const user2 = new User(56789);
    const user3 = new User(98765);
    const user4 = new User(43210);
  
    user1.addFriend(user2);
    user1.addFriend(user3);
    user2.addFriend(user4);
  
    const startUserId = 12345;
  
    let startUser = null;
    if(startUserId === user1.id) {
      startUser = user1;
    } else if(startUserId === user2.id) {
      startUser = user2;
    } else if(startUserId === user3.id) {
      startUser = user3;
    } else if(startUserId === user4.id) {
      startUser = user4;
    }
  
    const traversalResult = dfsTraversal(startUser);
  
    console.log("Thank you for providing the starting user ID");
    console.log("DFS traversal result:");
    console.log(traversalResult.join(" -> "));
  }
  
  exploreConnections();
  