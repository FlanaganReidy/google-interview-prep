
//our nodes contain a data and a pointer to the node immediately to the
//right of themselves
function Node(data, next){
  this.data = data;
  this.next = next;
}
//the data should be unimportant
let n1 = new Node("a", n2);
let n2 = new Node("b", n3);
let n3 = new Node("c", n4);
let n4 = new Node("d", n5);
let n5 = new Node("e", null);

//find the middle node of the linked list

//this is the entrypoint into our linked list
let head = n1;
//we will now create two pointers that will traverse the list, one will go one  node at a time
//we wall call this one:\
let slowPointer = n1;
//Now a pointer that moves twice as fast.
//We will call this one:
let fastPointer = n2;

//now we loop throught the list

while(fastPointer.next.next!==null&&slowPointer.next!==null){
  slowPointer = slowPointer.next;
  fastPonter = fastPointer.next.next;

}
