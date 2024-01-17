// ---------------------------------------- linke list and insertion  --------------------------------------------------------------

// insertion - use linke list
// search - using array



class Node{

    constructor(data,next=null){
        this.data = data;
        this.next = next

    }

}

class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0
    }

    addnode(data){
        let node = new Node(data)
        console.log('node',node)
        if(this.head==null){
            this.head = node
            this.size++
            return
        }
        let currentnode = this.head;

        while(currentnode.next !== null){
            currentnode = currentnode.next
        }
        currentnode.next = node
        this.size++
    }
}

let li = new linkedlist();
console.log(li)

li.addnode(100)
console.log(li)
li.addnode(200)
console.log(li)



