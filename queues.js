// Queue: FIFO data structure. First in First out. Examples: Line at a checkout counter, Apple Music Playlist.

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(data){
        const newNode = new Node(data)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            // Add the newNode as the next Node AFTER the current last Node
            this.last.next = newNode
            // Reassign this.last to be the newNode that we created
            this.last = newNode
        }
        this.size += 1
    }

    dequeue(){
        // Special case incase there is only one song in the queue
        if(this.size === 1){
            this.first = null
            this.last = null
            this.size -= 1
        } else if(!this.first){
            throw new Error('Playlist is empty!')
        } else {
            this.first = this.first.next
            this.size -= 1
        }
    }

}

const myPlaylist = new Queue()
myPlaylist.enqueue('Doeechii Nissan Altima')
myPlaylist.enqueue('I Want To Be Starting Something')

console.log(myPlaylist)