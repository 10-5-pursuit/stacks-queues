// Stacks: LIFO data structure. What comes in last, gets "popped" off first. Examples: JS call stack, browser navigation history, stack of pancakes(you eat the top one first)

function one(){
    two()
    console.log('first function')
}
function two(){
    three()
    console.log('second function')

}
function three(){
    console.log('third function')
}
// one()


// Stack Nodes
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


class Stack {
    constructor(top=null){
        this.top = top
    }

    push(data){
        // Create a new instance of the Node class, using the data from the param
        const newNode = new Node(data)
        // newNode.next will point to the current top of the stack (bc current top will come after the newNode)
        newNode.next = this.top
        // New top will be the newNode that we created
        this.top = newNode
    }

    pop(){
        if(!this.top){
            throw new Error('Stack is empty!')
        } else {
            // Initialize a variable to save the current top that we are popping off
            const currentTop = this.top
            // Reassign this.top to be the next Node in line (this.top.next)
            this.top = this.top.next
            // Return the currentTop var that holds the Node we are popping off
            return currentTop
        }
    }
}

const myHistory = new Stack()
myHistory.push('Github')
myHistory.push('Amazon')
myHistory.push('TradingView')

console.log(myHistory.pop())