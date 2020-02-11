// Creates a stack
let Stack = function() {
  this.count = 0;
  this.storage = {};

  // Add a value to end of stack
  this.push = value => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Remove a returns the value at the end of the stack
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => {
    return this.count;
  };

  // Returns the value at the end of the stack
  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('RJShoemaker');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
