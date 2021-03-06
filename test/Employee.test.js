const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  //Arrange
  const name = "Alice";
  //Act
  const e = new Employee(name);
  //Assert
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  //Arrange
  const testValue = 100;
  //Act, note they're also passing in a `name` to be able to run the constructor
  const e = new Employee("Foo", testValue);
  //Assert
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  //Arrange
  const testValue = "test@test.com";
  //Act
  const e = new Employee("Foo", 1, testValue);
  //Assert
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  //Arrange
  const testValue = "Alice";
  const e = new Employee(testValue);
  //Act
  const result = e.getName()
  //Assert
  expect(result).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
