class Node {
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
}

// const firstPage = 
//     new Node('google',
//         new Node('reddit.com',
//             new Node('amazon.com',
//                 new Node('youtube.com'))));


class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    traverse(){
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    find(val){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.val === val) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
    append(val){
        const newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

// const history = new LinkedList();
// history.head = firstPage;

const train = new LinkedList();
train.append('Engine')