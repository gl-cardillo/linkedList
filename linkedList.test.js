import { LinkedList, Node } from "./linkedList";

let node = new Node("node");
let linkedList = new LinkedList(node);

describe("methods of the linkedList", () => {
  it("it should append a new node to the end of the linked list", () => {
    linkedList.append("first node added to the tail");
    expect(linkedList.getTailValue()).toBe("first node added to the tail");
  });
  it("it should append another node to the end of the linked list", () => {
    linkedList.append("second node added to the tail");
    expect(linkedList.getTailValue()).toBe("second node added to the tail");
  });

  it("it should append a new node to the head of the linked list", () => {
    linkedList.prepend("first node added to the head");
    expect(linkedList.getHeadValue()).toBe("first node added to the head");
  });
  it("it should append another node to the head of the linked list", () => {
    linkedList.prepend("second node added to the head");
    expect(linkedList.getHeadValue()).toBe("second node added to the head");
  });

  it("it should return the head value", () => {
    linkedList.prepend("new head");
    expect(linkedList.getHeadValue()).toBe("new head");
  });

  it("it should return the tail value", () => {
    linkedList.append("new tail");
    expect(linkedList.getTailValue()).toBe("new tail");
  });

  it("it should return the size of the list", () => {
    expect(linkedList.getSize()).toBe(7);
  });

  it("it should return the node at the index", () => {
    expect(linkedList.at(2)).toBe("first node added to the head");
    expect(linkedList.at(4)).toBe("first node added to the tail");
    expect(linkedList.at(9)).toBe("The index 9 is bigger then the list size 7");
  });

  it("it should remove the tail", () => {
    linkedList.append("add tail to stay");
    linkedList.append("add tail to remove");
    expect(linkedList.getTailValue()).toBe("add tail to remove");
    linkedList.pop();
    expect(linkedList.getTailValue()).toBe("add tail to stay");
  });

  it("it should return true if value is contained in a linked list, false viceversa", () => {
    expect(linkedList.contains("add tail to stay")).toBe(true);
    expect(linkedList.contains("add tail to remove")).toBe(false);
  });

  it("it should return the index of the node with the value requested, if the value is not found returns -1", () => {
    expect(linkedList.find("add tail to stay")).toBe(6);
    expect(linkedList.find("node")).toBe(2);
    expect(linkedList.find("node doesn't exists")).toBe(-1);
  });

  it("it should display all the linked list node values", () => {
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
  });

  it("it should add a new node in the list at the requested index", () => {
    expect(linkedList.removeAt("abc")).toBe(
      "Please insert a correct numeric value"
    );
    linkedList.insertAt("inserted node", 3);
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (inserted node) -> (node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
    linkedList.insertAt("second inserted node", 5);
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (inserted node) -> (node) -> (second inserted node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
    expect(
      linkedList.insertAt("insert index bigger then size returns message", 20)
    ).toBe(`The index 20 is bigger then the list size 10`);
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (inserted node) -> (node) -> (second inserted node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
    expect(linkedList.insertAt("add head", 0)).toBe(
      "Please use append or prepend"
    );
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (inserted node) -> (node) -> (second inserted node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
  });

  it("it should remove a node in the list at the requested index", () => {
    expect(linkedList.removeAt("abc")).toBe(
      "Please insert a correct numeric value"
    );
    linkedList.removeAt(3);
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (node) -> (second inserted node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
    linkedList.removeAt(4);
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
    expect(linkedList.removeAt(20)).toBe(
      `The index 20 is bigger then the list size 8`
    );
    expect(linkedList.toString()).toBe(
      "(new head) -> (second node added to the head) -> (first node added to the head) -> (node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe(
      "(new head) -> (first node added to the head) -> (node) -> (first node added to the tail) -> (second node added to the tail) -> (new tail) -> (add tail to stay)"
    );
  });
});
