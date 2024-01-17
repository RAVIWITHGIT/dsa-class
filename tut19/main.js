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



// -------------------------------------------------------------


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
    addfirstnode(data){
        this.head = new Node(data,this.head)
        this.size++
    }
    printlinkdlist(){
        if(this.size==0){
            console.log('list is empty')
            return
        }
        let currentnode = this.head;
        while(currentnode){
            console.log(currentnode.data)
            currentnode = currentnode.next
        }
    }
        insertindex(data,index){
            if(index>0 || index<this.size){
                console.log('index mustbe  grater then 0 or it should be less then size ')
                return
            }
            if(index==0){
                // this.head = new 
                this.addfirstnode(data)

            }
            let count = 0;
            let currentnode = this.head

            let previous = null
            while(count<index){
                count++
                previous= currentnode;
                currentnode = currentnode.next
            }
            let node = new Node(data);
            previous.next = node;
            node.next = currentnode
            this.size++
        }
    
}

let li = new linkedlist();
console.log(li)

li.addnode(100)
// console.log(li)
li.addnode(200)
// console.log(li)
li.addfirstnode(300)
// console.log(li)
li.insertindex(400,2)
li.printlinkdlist()
console.log(li)
