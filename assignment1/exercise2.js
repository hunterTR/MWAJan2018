String.prototype.filterWords =  function(words){
    var test = this.toString();
    for(let word of words)
    {
        test = test.replace(word, "****");
    }

    return test;
}

console.log("test bir iki".filterWords(["test"]));