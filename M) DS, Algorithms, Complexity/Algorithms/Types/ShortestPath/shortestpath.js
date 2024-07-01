// Define a weighted graph using an adjacency list representation
const graphweighted = {
    A: { B: 2, D: 8 },        // Node A is connected to B with weight 2, and to D with weight 8
    B: { A: 2, D: 5, E: 6 },  // Node B is connected to A with weight 2, D with weight 5, and E with weight 6
    D: { B: 5, A: 8 },        // Node D is connected to B with weight 5, and to A with weight 8
    E: { B: 6, D: 3, F: 1, C: 9 },  // Node E is connected to B with weight 6, D with weight 3, F with weight 1, and C with weight 9
    F: { D: 2, E: 1, C: 3 },  // Node F is connected to D with weight 2, E with weight 1, and C with weight 3
    C: { E: 9, F: 3 }         // Node C is connected to E with weight 9, and F with weight 3
};

// Dijkstra's algorithm to find the shortest paths from a start node
const dijkstra = (graph, startNode, outputElement) => {
    const visited = {}; // Keep track of visited nodes
    const distances = {}; // Keep track of the shortest distances from the start node to each node
    const queue = []; // Priority queue to determine the next node to visit

    // Initialize distances to Infinity for all nodes
    for (const node in graph) {
        distances[node] = Infinity; // Set initial distances to Infinity
    }
    distances[startNode] = 0; // Distance to the start node is 0

    // Add the start node to the queue with distance 0
    queue.push({ node: startNode, distance: 0 });

    // Continue until there are no more nodes to process in the queue
    while (queue.length > 0) {
        // Sort the queue based on distances
        queue.sort((a, b) => a.distance - b.distance);
        // Remove the node with the smallest distance from the queue
        const currentNodeData = queue.shift();
        const currentNode = currentNodeData.node;

        // If the current node has already been visited, skip it
        if (visited[currentNode]) continue;

        // Mark the current node as visited
        visited[currentNode] = true;
        // Append the current node to the output element
        outputElement.textContent += currentNode + " ";
        console.log(currentNode); // Print the current node to the console

        // Process each neighbor of the current node
        for (const neighbor in graph[currentNode]) {
            // If the neighbor has not been visited yet
            if (!visited[neighbor]) {
                // Calculate the new distance to the neighbor
                const newDist = distances[currentNode] + graph[currentNode][neighbor];
                // If the new distance is shorter, update the distance and add the neighbor to the queue
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    queue.push({ node: neighbor, distance: newDist });
                }
            }
        }
    }

    // Output the shortest distances from the start node to each node
    console.log("Shortest distances:", distances);
    outputElement.textContent += JSON.stringify(distances);
};

// Function to start the shortest path search when called
const startShortestPathSearch = () => {
    // Get the output element where results will be displayed
    const outputElementDijkstra = document.getElementById("outputDijkstra");
    // Call the dijkstra function with the graph, start node "A", and output element
    dijkstra(graphweighted, "A", outputElementDijkstra);
};

// Example usage: Call startShortestPathSearch() to execute Dijkstra's algorithm and display results
