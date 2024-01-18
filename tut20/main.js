class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class linkedlist{
    constructor(){
        this.head = null;  
        this.size = 0
    }

    addnode(data){
        let node = new Node(data)
        if(this.head==null){
            this.head = node
            this.size++
            return
        }
        let currentnode = this.head;
        while(currentnode.next !==null){
            currentnode = currentnode.next;
        }
        currentnode.next = node 
        this.size++
    }
    addfirstnode(data){
        this.head = new Node(data,this.head)
        this.size++
    }
    insertindex(data,index){
        if(index<0 || index>this.size){
            console.log('index mustbe grater then 0 or it should be less then size')
            return
        }
        if(index==0){
            this.addfirstnode(data)
            return
        }
        let count = 0; 

        let currentnode=this.head  
        let previous = null

        while(count<index){
            count++
            previous=currentnode  
            currentnode = currentnode.next  
        }
        let node = new Node(data);   
        previous.next = node
        node.next = currentnode;   
        this.size++



    }

    printlinkedlist(){
        if(this.size==0){
            console.log("empty list")
        }
        let currentnode = this.head; 

        while(currentnode){
            console.log(currentnode.data);
            currentnode = currentnode.next;
        }


    }
    index_get_element(gindex){
        let count = 0;
        let currentnode = this.head;
        if(gindex<0){
            console.log('index minimum is zero')
            return
        }else if(gindex==0){
            console.log(currentnode)
        }else{
            while(count<gindex){
                currentnode = currentnode.next;
                count++
            }
            console.log(currentnode)

        }
        
    }
    clear_list(){
        if(this.head==null){
            console.log("list are empty")
        }else{
            this.head=null
            this.size = 0;
        }
    }
    remove_at_index(rindex){
        let count = 0;
        currentnode = this.head;
        // if(rindex==0){
        //     currentnode = null;
        //     currentnode.size = 0;
        // }
    }


}


let li = new linkedlist();
console.log(li)
li.addfirstnode(300)
li.addnode(100)
li.addnode(200)
// li.insertindex(400,2)
// li.clear_list()
// li.index_get_element(0)
// li.printlinkedlist()
console.log(li)