//declare Node basic Class
// ! export keyword make the class available outside the module or file at any folder
export class Node{
    //can have method, constructor
    constructor(data){
        this.data = data;
    }
    next = null;
}

//LinkedList Class
export class LinkedList{
    constructor(){
        //initialize with a head property
        this.head =null;
    }

    getHeadNode(){
        return this.head;
    }

    clear(){
        this.head = null;
    }

    traverse(){
        let walker = this.head; //first Node in the list
        //run until walker.next is true
        while (walker){
            console.log(walker.data);
            walker = walker.next; //moving to the next Node => 4 - 7

        }
        
    }

    get last(){

    }

    appendNodeEnd(){

    }

}


export class TextNode{
    constructor(data){
        this.data = data;
        this.length = data.length;
    }
}


export class ElementNode{
    constructor(name){
        this.elementName = name;
        this.textContent = null;
        this.outerHTML = null;
    }

    setTextContent(text){
        this.textContent = text;
        this.outerHTML = this.#setOuterHTML();
    }
    
    #setOuterHTML(){
        //create own HTML tag
        return `<${this.elementName}>${this.textContent}</${this.elementName}>`
    }

}