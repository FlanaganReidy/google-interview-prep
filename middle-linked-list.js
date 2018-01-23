
//our nodes contain a data and a pointer to the node immediately to the
//right of themselves
function Node(data, next){
  this.data = data;
  this.next = next;
}
//the data should be unimportant
let n5 = new Node("e", null);
let n4 = new Node("d", n5);
let n3 = new Node("c", n4);
let n2 = new Node("b", n3);
let n1 = new Node("a", n2);

//find the middle node of the linked list

//this is the entrypoint into our linked list
let head = n1;
//we will now create two pointers that will traverse the list, one will go one  node at a time
//we wall call this one:\
let slowPointer = head;
//Now a pointer that moves twice as fast.
//We will call this one:
let fastPointer = head;

//now we loop throught the list

while(fastPointer.next!==null&&slowPointer!==null){
  slowPointer = slowPointer.next;
  fastPointer = fastPointer.next.next;
}
console.log(slowPointer.data);

//big(0) is 0n since we only go through the loop once
