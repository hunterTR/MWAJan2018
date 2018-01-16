const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 


var find = (filename) => (tree) =>{
    var result = false;
    for(file of tree.files)
    {
        if(filename === file)
        {
            result = true;
        }
    }
        for(subFolder of tree.subFolders)
        {
            var subRes = find(filename)(subFolder);
            if(subRes === true)
            result = subRes;
            
        }

    return result;
}

console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false




