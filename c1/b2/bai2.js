class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getAddress() {
    return "i live in " + this.address;
  }

}

const test = new Person("Alice", "123 Main St");
console.log(test);
console.log(test.getAddress());