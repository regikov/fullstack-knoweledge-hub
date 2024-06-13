# JS Map Objects in practice
## Guide for confused beginners

### **Overview**

In this md file, you can find out more about Map Objects and a line-by-line solution about [this class's](https://docs.google.com/presentation/d/1k952wYSYgexnxz9zV4EeZI6T4Zh07OBCjiUgiroWxzM/edit#slide=id.p) excercises, on 13th June 2024. 

&nbsp;

### **1. What Are Map Objects?**

The <span style="color:red">Map</span> object is a simple key/value data structure. 

It is used to store data in a structure similar to an array, but where each element is associated with a **key** rather than an index. 
This allows for quick insertion, retrieval, and deletion of data from the map.

### **2. Creating Map Objects**

There are several ways to do it:

&nbsp;

- **Using the new Map() Constructor** 

``` javascript
let myMap = new Map();
```
You can create an empty Map object using the <span style="color:yellow">new Map()</span> constructor.

&nbsp;

- **Initializing a Map with Key-Value Pairs** 

``` javascript
let myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
```
You can initialize a Map object with an array of key-value pairs using the Map constructor.

&nbsp;

- **Using the set Method to Add Key-Value Pairs** 

``` javascript
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');
```
You can create an empty Map object and then use the set method to add key-value pairs.

&nbsp;

- **Using an Array of Arrays** 

``` javascript
let entries = [
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
];

let myMap = new Map(entries);
```
You can also initialize a Map object with an array of arrays, where each sub-array contains a key-value pair.

&nbsp;

- **Converting an Object to a Map** 

``` javascript
let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

let myMap = new Map(Object.entries(obj));
```
You can convert a plain object to a Map object by iterating over the object's entries.

&nbsp;

### **3. Methods of Map Object**

&nbsp;

1. **<span style="color:lightblue">set(key,value)</span>**

```javascript
map.set('key1', 'value1');
get(key)
```

Adds or updates an element with the specified key and value to the Map object.

&nbsp;

2. **<span style="color:lightblue">get(key)</span>**

```javascript
console.log(map.get('key1')); // Output: 'value1'
```
Returns the value associated with the specified key, or undefined if the key does not exist.

&nbsp;

2. **<span style="color:lightblue">has(key)</span>**

```javascript
console.log(map.has('key1')); // Output: true
```
Returns a boolean indicating whether an element with the specified key exists.

&nbsp;

2. **<span style="color:lightblue">delete(key)</span>**

```javascript
map.delete('key1');
```
Removes the element with the specified key from the Map. Returns true if the element was successfully removed, or false if the element did not exist.

&nbsp;

2. **<span style="color:lightblue">clear()</span>**

```javascript
map.clear();
```
Removes all elements from the Map.

&nbsp;

2. **<span style="color:lightblue">size</span>**

```javascript
console.log(map.size); // Output: 0 (after clear)
```
Returns the number of key-value pairs in the Map.

&nbsp;

### **3. Exercise**