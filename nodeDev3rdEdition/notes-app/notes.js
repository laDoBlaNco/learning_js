const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,body)=>{
  const notes = loadNotes();
  const duplicateNote = notes.find(note=>note.title===title);

    debugger

  if (!duplicateNote){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes) 
    console.log(chalk.bgGreen(`New note added!`));    
  }else{
    console.log(chalk.bgRed(`Note title taken!`)); 
  }
}

const removeNote = title=>{
  const notes = loadNotes();
  const notesRemaining = notes.filter(note=>note.title!==title)
  if (notesRemaining.length===notes.length){
    console.log(chalk.bgRed(`No note found!`));
  }else{
    saveNotes(notesRemaining);
    console.log(chalk.bgGreen('Note removed!')); 
  }
}

const listNotes = ()=>{
  const notes = loadNotes();
  console.log(chalk.bgYellow.bold(`Your notes: `));
  notes.forEach((note)=>console.log(note.title));
}

const readNote = title=>{
  const notes = loadNotes();
  const noteFound = notes.find(note=>note.title===title);
  if (noteFound){
    console.log(chalk.bold.bgYellow(`${noteFound.title}: `));
    console.log(noteFound.body);        
  }else{
    console.log(chalk.bgRed.bold(`${title} -- NOT FOUND!`)); 
  }
}

const saveNotes = notes=>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = ()=>{
  try{
    return JSON.parse(fs.readFileSync('notes.json').toString());
  }catch(e){
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
