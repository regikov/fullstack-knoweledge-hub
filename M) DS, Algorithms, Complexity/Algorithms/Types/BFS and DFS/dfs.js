function dfs(graph, startNode) {
    const visited = new Set(); // A set to keep track of nodes that have been visited
    const stack = [startNode]; // A stack to manage the nodes to visit, starting with the startNode
    const result = []; // An array to store the order of nodes visited
  
    while (stack.length > 0) { // While there are still nodes to visit in the stack
      let currentNode = stack.pop(); // Pop the last node from the stack
  
      if (!visited.has(currentNode)) { // If the current node has not been visited yet
        visited.add(currentNode); // Mark the current node as visited
        result.push(currentNode); // Add the current node to the result array
  
        let neighbors = graph[currentNode]; // Get the neighbors of the current node from the graph
  
        // Add neighbors to the stack in reverse order to maintain the correct order
        for (let i = neighbors.length - 1; i >= 0; i--) {
          let neighbor = neighbors[i];
          if (!visited.has(neighbor)) { // If the neighbor has not been visited yet
            stack.push(neighbor); // Push the neighbor to the stack to visit it later
          }
        }
      }
    }
  
    return result; // Return the array of visited nodes in the order they were visited
  }
  
  // TESTING 
  let graph = {
    A: ['B', 'C'], 
    B: ['A', 'D'], 
    C: ['A', 'E'], 
    D: ['B'],    
    E: ['C']       
  };
  
  // Test DFS function
  console.log("Testing DFS:")
  
  let dfsResult = dfs(graph, 'A');
  let expectedDfsResult = ['A', 'B', 'D', 'C', 'E'];
  console.log("Result:", dfsResult);
  console.log("Expected:", expectedDfsResult);
  console.log("DFS Test Passed?", arraysEqual(dfsResult, expectedDfsResult)) // Check if the result matches the expected result
  
  // Utility function to compare two arrays for equality
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;  // If the arrays have different lengths, they are not equal
    for (let i = 0; i < arr1.length; i++) {  // Check each element in the arrays for equality
      if (arr1[i] !== arr2[i]) return false;  // If any element is different, the arrays are not equal
    }
    return true;  // If all elements are the same, the arrays are equal
  }
  