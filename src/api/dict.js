const fetchword = async (word) =>{
    
    const res= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    
    if(!res.ok) throw new Error("word not found!");

    return res.json();
    
};

export default fetchword;