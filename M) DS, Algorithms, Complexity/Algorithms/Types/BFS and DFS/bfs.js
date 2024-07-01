// This function performs a Breadth-First Search (BFS) on a graph
function bfs(graph, startNode) {
  // Initialize a Set to keep track of visited nodes
  const visited = new Set();
  
  // Initialize a queue with the startNode
  const queue = [startNode];
  
  // Initialize an array to store the result of the BFS traversal
  const result = [];
  
  // While there are nodes in the queue to be processed
  while (queue.length > 0) {
      // Remove the first node from the queue and store it in currentNode
      let currentNode = queue.shift();
      
      // If the currentNode has not been visited yet
      if (!visited.has(currentNode)) {
          // Mark the currentNode as visited
          visited.add(currentNode);
          
          // Add the currentNode to the result array
          result.push(currentNode);
          
          // Get the neighbors of the currentNode from the graph
          let neighbors = graph[currentNode];
          
          // For each neighbor of the currentNode
          for (let neighbor of neighbors) {
              // If the neighbor has not been visited yet
              if (!visited.has(neighbor)) {
                  // Add the neighbor to the queue to be processed later
                  queue.push(neighbor);
              }
          }
      }
  }
  
  // Return the result array containing the BFS traversal order
  return result;
}

// Define a sample graph as an adjacency list
let graph = {
  A: ['B', 'C'], // Node A is connected to nodes B and C
  B: ['A', 'D'], // Node B is connected to nodes A and D
  C: ['A', 'E'], // Node C is connected to nodes A and E
  D: ['B'],      // Node D is connected to node B
  E: ['C']       // Node E is connected to node C
};

// Test BFS function
console.log("Testing BFS:");

// Call the bfs function with the graph and starting node 'A'
let bfsResult = bfs(graph, 'A');
let expectedBfsResult = ['A', 'B', 'C', 'D', 'E']; // Expected result of the BFS traversal
console.log("Result:", bfsResult); // Print the actual result
console.log("Expected:", expectedBfsResult); // Print the expected result
console.log("BFS Test Passed?", arraysEqual(bfsResult, expectedBfsResult)); // Check if the result matches the expected result

// Utility function to compare two arrays for equality
function arraysEqual(arr1, arr2) {
  // If the arrays have different lengths, they are not equal
  if (arr1.length !== arr2.length) return false;

  // Check each element in the arrays for equality
  for (let i = 0; i < arr1.length; i++) {
      // If any element is different, the arrays are not equal
      if (arr1[i] !== arr2[i]) return false;
  }

  // If all elements are the same, the arrays are equal
  return true;
}
