export function getAllNotes(req,res){
    
    res.status(200).send("Heisenberg");
}

export function createNote(req,res){
    
   res.status(201).send("I am the one who knocks!!");
}

export function updateNote(req,res){
    
    res.status(200).send("I am the danger!");
}

export function deleteNote(req,res){
    
    res.status(200).send("I am deleted!");
}
