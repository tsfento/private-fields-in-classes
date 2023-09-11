class Person {
  // Write code here
  #id = Math.random();

  getID() {
    return this.#id;
  }
}

module.exports = Person;
