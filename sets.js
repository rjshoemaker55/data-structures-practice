// SETS - like an array, but no duplicate items

function mySet() {
  // Collection holds the set
  let collection = [];

  // Has method checks whether or not element is already in set
  this.has = element => {
    return collection.indexOf(element) !== -1;
  };
  // Values method returns all items in the collection
  this.values = () => {
    return collection;
  };
  // Add method pushes a new item to the collection
  this.add = element => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    } else {
      return false;
    }
  };
  // Remove method removes an item from the collection
  this.return = element => {
    if (collection.has(element)) {
      collection.splice(collection.indexOf(element), 1); // Splices the collection at index of item, removes one item
      return true;
    } else {
      return false;
    }
  };
  // Size method returns the size of the collection
  this.size = () => {
    return collection.length;
  };
  // Union will return the union of two sets (combines two sets leaving out duplicates)
  this.union = otherSet => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(e => unionSet.add(e));
    otherSet.forEach(e => unionSet.add(e));

    return unionSet;
  };
  // Intersection method returns a new set with all items that are in both sets
  this.intersection = otherSet => {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // Difference method returns a new set of all items that are the first one set but not the other
  this.difference = otherSet => {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(e => {
      !otherSet.has(e) && differenceSet.add(e);
    });

    return differenceSet;
  };
  // Subset method tests whether all the elements from the first set are also elements of the other set
  this.subset = otherSet => {
    let firstSet = this.values();
    return firstSet.every(e => otherSet.has(e));
  };
}

let setA = new mySet();
let setB = new mySet();
setA.add('a');
setA.add('b');
setA.add('c');
setA.add('d');
setA.add('e');
setB.add('d');
console.log(setB.subset(setA));
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
