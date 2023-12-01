const DoublyLinkedList = require('./doublyLinkedList')

function printLinkedList(LinkedList){
    let curr = LinkedList.head;

    for(let i=0 ; i< LinkedList.length ;i++){
        console.log(curr.value);
        curr = curr.next;
    } 
    console.log("**************");
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(1);
doublyLinkedList.push(3);
doublyLinkedList.push(5);
doublyLinkedList.push(7);
doublyLinkedList.push(9);

printLinkedList(doublyLinkedList);

doublyLinkedList.pop(); 
printLinkedList(doublyLinkedList);

doublyLinkedList.shift();
printLinkedList(doublyLinkedList);

doublyLinkedList.unshift(1);
printLinkedList(doublyLinkedList);

console.log(doublyLinkedList.get(2));
console.log("**************");

doublyLinkedList.set(1,2);
printLinkedList(doublyLinkedList);

console.log( doublyLinkedList.insert(1,6));
printLinkedList(doublyLinkedList);

doublyLinkedList.remove(3);
printLinkedList(doublyLinkedList);




