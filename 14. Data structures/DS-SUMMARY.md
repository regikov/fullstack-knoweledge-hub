## JavaScript Data Structures


### **1. Primitive Data Structures**
These are the most basic data structures in JavaScript.
&nbsp;

-  **Number**:
Represents numeric values.

- **String**:
Represents sequences of characters.

- **Boolean**: Represents a true or false value.

- **Undefined**: Represents a variable that has not been assigned a value.

- **Null:** Represents the intentional absence of any object value.

&nbsp;

### **2. Non-Primitive Data Structures (Objects)**

These include more complex data structures that are capable of holding collections of values.

- **Array**: Ordered collections of values.

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]
```

&nbsp;

- **Object**: Collections of key-value pairs.

```javascript
let obj = { name: "Alice", age: 25 };
console.log(obj); // Output: { name: 'Alice', age: 25 }
```

&nbsp;

- **Map**: Collections of key-value pairs where keys can be of any type.

```javascript
let map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // Output: value
```

&nbsp;

- **Set**: Collections of unique values.

```javascript
let set = new Set([1, 2, 3, 3]);
console.log(set); // Output: Set { 1, 2, 3 }
```

&nbsp;

### 3. Advanced Data Structures

- **Linked Lists**: Consist of nodes where each node contains a value and a reference to the next node.

``` javascript
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
let firstNode = new Node(1);
let secondNode = new Node(2);
firstNode.next = secondNode;
console.log(firstNode); // Output: Node { data: 1, next: Node { data: 2, next: null } }
```

&nbsp;

- **Stack**: Follow Last In First Out (LIFO) principle.

```javascript
let stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
console.log(stack); // Output: [1]
```

&nbsp;

- **Queue**: Follow First In First Out (FIFO) principle.

```javascript
let queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift()); // Output: 1
console.log(queue); // Output: [2]
```

&nbsp;

- **Tree**: Hierarchical data structure with nodes.

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
let root = new TreeNode(1);
let child1 = new TreeNode(2);
let child2 = new TreeNode(3);
root.children.push(child1, child2);
console.log(root); // Output: TreeNode { value: 1, children: [ TreeNode { value: 2, children: [] }, TreeNode { value: 3, children: [] } ] }
```
&nbsp;

- **Graph**: Collections of nodes (vertices) connected by edges.

``` javascript
class Graph {
  constructor() {
    this.nodes = new Map();
  }
  addNode(node) {
    this.nodes.set(node, []);
  }
  addEdge(node1, node2) {
    this.nodes.get(node1).push(node2);
    this.nodes.get(node2).push(node1);
  }
}
let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addEdge('A', 'B');
console.log(graph.nodes); // Output: Map { 'A' => [ 'B' ], 'B' => [ 'A' ] }
```

&nbsp;

### 4. JSON (JavaScript Object Notation)
A lightweight data interchange format that is easy to read and write for humans and machines.

``` javascript
let obj = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: {"name":"Alice","age":25}
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // Output: { name: 'Alice', age: 25 }
```