//import the file Node
import { Node, LinkedList, TextNode, ElementNode } from './data-structure.js';


//head: 4 -> 7 -> 12 ->null
const node1 = new Node(4);
const node2 = new Node(7);
const node3 = new Node(12);
console.log(node1);
console.log(node2);
console.log(node3);

const myLinkedList = new LinkedList();

//asign head node  = node1;
myLinkedList.head = node1;

//node 1 had data and next is null. Then set the node 2 into node 1(next)
myLinkedList.head.next = node2;

//same for node 3
myLinkedList.head.next.next = node3;

console.log(myLinkedList);

console.log(myLinkedList.getHeadNode());

myLinkedList.traverse();

//walker: 4 -> 7 -> 12 -> null
let walker = myLinkedList.getHeadNode();

//Removing Node with value of 7
// walker.next = walker.next.next;
// console.log(walker); // -> 4 -> 12

//swapping to 4-> 12 ->7 ->null
let temp = walker.next.next; //Node 12

walker.next.next = temp.next; // set 7 -> null => 4->7->null
temp.next = walker.next // 12->7 => 12->7->null

walker.next = temp // 4->12

console.log(walker);

//* Text Node
const textNode = new TextNode("hello world");
console.log(textNode);

// * Element Node
const div = new ElementNode("div");
div.setTextContent("Hello Element Node");
console.log(div);

//Test
const p = document.createElement("p");
p.textContent = "Hello";
console.log(p);