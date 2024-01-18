// ---------------------------------------- linke list and insertion  --------------------------------------------------------------

// insertion - use linke list
// search - using array



// class Node{

//     constructor(data,next=null){
//         this.data = data;
//         this.next = next

//     }

// }

// class linkedlist{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }

//     addnode(data){
//         let node = new Node(data)
//         console.log('node',node)
//         if(this.head==null){
//             this.head = node
//             this.size++
//             return
//         }
//         let currentnode = this.head;

//         while(currentnode.next !== null){
//             currentnode = currentnode.next
//         }
//         currentnode.next = node
//         this.size++
//     }
//     addfirstnode(data){
//         this.head = new Node(data,this.head)
//         this.size++
//     }
//     printlinkdlist(){
//         if(this.size==0){
//             console.log('list is empty')
//             return
//         }
//         let currentnode = this.head;
//         while(currentnode){
//             console.log(currentnode.data)
//             currentnode = currentnode.next
//         }
//     }
// }

// let li = new linkedlist();
// console.log(li)

// li.addnode(100)
// // console.log(li)
// li.addnode(200)
// // console.log(li)
// li.addfirstnode(300)
// // console.log(li)
// li.printlinkdlist()
// console.log(li)





// -***************************************************************************************
class Node{

  

    constructor(data,next=null){
        console.lo
        this.data=data;
        this.next=next
    }
}

class Linkedlist{

    constructor(){
        this.head=null;
        this.size=0
    }

    addlastnode(data){

        let node=new Node(data)

        console.log(node,"nnnnodewe")

        if(this.head == null){
            this.head=node
            this.size++
            return
        }

        let currentnode=this.head;
        console.log(currentnode,"ccuurer")

        while(currentnode.next !== null){
            currentnode=currentnode.next
        }

        currentnode.next=node
        this.size++

    }

    addfirstnode(data){

        this.head=new Node(data,this.head)

        this.size++

    }

    printlinkedlist(){

        if(this.size==0){

            console.log('list is empty')
            return
        }

        let currentnode=this.head;

        while(currentnode){
            console.log(currentnode.data);

            currentnode=currentnode.next
        }
    }

    insertatindex(data,index){

        if(index<0 || index>this.size){
            console.log( "index mustev grater then 0 or it should be less then the size")
            return

        }

        if(index==0){

        this.addfirstnode(data)
        return

            
        }

        let count=0;

        let currentnode=this.head

        let previous=null

        while(count<index){
            count++

            previous=currentnode;
            currentnode=currentnode.next

        }

        let node=new Node(data);

        previous.next=node;

        node.next=currentnode;


        this.size++



    }
}

let ll=new Linkedlist();
console.log(ll)

ll.addlastnode(100)
ll.addlastnode(200)
ll.addfirstnode(300)
ll.insertatindex(400,2)
ll.printlinkedlist()

console.log(ll)
