// global 
    // local 
        // local
    // local

// let name = 'ladoblanco'; //global scope new name

if(true){
    // let name = 'Mike'; //block scoped new name
    if(true){
        name = 'Jen'; //leaked global as it doesn't find name declared anywhere so it js creates it
        console.log(name);   
    }    
}
if(true){
    console.log(name);
    
}