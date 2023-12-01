const Node = require('./node')


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){  // The pop method removes the tail of the list
        if(!this.tail){
            return;
        }
        if(this.head == this.tail){
            this.head =null;
            this.tail =null;
        }else{
           this.tail = this.tail.prev;
            this.tail.next =null; 
        }
        this.length--;
    }

    shift() { // The shift method removes the head of the list
        if(!this.head){
            return;
        }
        this.length--;

        if(this.head == this.tail){
            this.head =null
            this.tail = null;
            return;
        }
        this.head.next.prev =null;
        this.head = this.head.next; 
    }  

    unshift(val){ // The unshift method takes a value as a parameter and assigns it as the head of the list 
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head =newNode
        } 
        this.length++;
    }

    get(index){ // The get method takes an index number as a parameter and returns the value of the node at that index
        if( index <= 0 || index > this.length){
            try{
               throw new Error("Index out of bounds"); 
            }catch (error) {
                return error.message;
            }   
        }else{
            let current = this.head;
            for(let i=0 ; i <= index ;i++){
                if(i != index){
                    current = current.next;
                }else{
                    return current.value;
                }
            }
        }
    }
    
    set(index, val){ // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
        if(this.head==null || index < 0 || index >= this.length){
            try{
               throw new Error("Index out of bounds"); 
            }catch (error) {
                return error.message;
            }   
        }else{
            let current = this.head;
            for(let i=0 ; i <= index ;i++){
                if(i != index){
                    current = current.next;
                }else{
                    current.value =val;
                }
            }
        }
    }
    
    insert(index, val) {// The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list. It returns true on successful insert or false
        if(index==0){ //insert into head
            this.unshift(val);
            return true;
        }else if(index < 0 || index > this.length){
            try{
                throw new Error("Index out of bounds"); 
             }catch (error) {
                 console.log( error.message);
             }
            return false;
        }else{
            let current = this.head;
            const newNode = new Node(val);
            for(let i=0 ;i<this.length ;i++){
                if(index == i+1){
                    newNode.next = current.next;
                    newNode.prev = current;
                    if(index == this.length){ // insert after last node
                        current.next = newNode;
                        this.tail = newNode;
                    }else{
                        current.next.prev =newNode;
                        current.next = newNode;
                    }
                }else{
                    current =current.next;
                }
            }
            this.length++;
            return true;
        }
    }   

    remove(index){ // The remove method takes an index number as a parameter and removes the node at the given index in the list
        if(this.head==null || index < 0 || index > this.length){
            try{
               throw new Error("Index out of bounds"); 
            }catch (error) {
                console.log(error.message)
                return error.message;
            }   
        }else if(index == 0){ //remove head
            this.shift();
        }else if(index == this.length-1){ // remove tail
            this.pop()
        }else{
            let current = this.head;
            for(let i=0 ; i <= index ;i++){
                if(i+1 == index){
                    current.next = current.next.next;
                    current.next.prev = current;
                }else{
                    current = current.next;
                }
            }
        }
        this.length--;
    }   

}

module.exports = DoublyLinkedList

