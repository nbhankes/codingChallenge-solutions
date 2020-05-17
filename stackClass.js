class myStack {
    constructor (
        word,
    ) {
        this.word = this.add(word);
    }
    
    add(word) {  
        var stackArray = []; 
        return stackArray.unshift(word);
    }

    remove(word) {
        var stackArray = []; 
        return stackArray.shift(word);
    }
}

firstStack = new myStack("Hello");
secondStack = new myStack("World");
console.log(stackArray);
console.log(remove(myStack));
