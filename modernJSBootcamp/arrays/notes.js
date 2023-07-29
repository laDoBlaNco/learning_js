const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
},{
    title: 'Office modifications',
    body: 'Get a new seat'
}];



const sortNotes = (notes)=>{
    notes.sort((a,b)=>{
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        }else if(b.title.toLowerCase()<a.title.toLowerCase()){
            return 1;
        }else{
            return 0;
        }
    });
}

const findNote = (notes,noteTitle)=>{
    return notes.find((note)=>{
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}
const findNotes = (notes,query)=>{
    return notes.filter(note=>{
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch||isBodyMatch;
    })
}


// console.log(findNotes(notes,'eating'));


// const findNote = (notes,noteTitle)=>{
//     const index = notes.findIndex((note)=>{
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes[index]; 
// }

// const note = findNote(notes,'office modifications')
// console.log(note);


// console.log(notes.length);
// console.log(notes);

// when working with objects, .indexOf isn't going to give us what we need because
// it uses === to match what we are searching for and what it sees in the array
// findIndex on the other hand can be used as it uses a callback to cycle through
// the object in memory - its also a short circ method so its very efficient
// const index = notes.findIndex((item,index)=>{
//     return item.title === 'Habits to work on';
// })
// console.log(index);

sortNotes(notes);
console.log(notes);

