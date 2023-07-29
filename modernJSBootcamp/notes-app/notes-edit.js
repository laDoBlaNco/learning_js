'use strict'

const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const removeNoteButton = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => note.id === noteId); // => function (short syntax)

if (!note) {
    location.assign('/index.html')
}

noteTitle.value = note.title;
noteBody.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', (e) => { // => function
    note.title = e.target.value;
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes);
})
noteBody.addEventListener('input', (e) => { // => function
    note.body = e.target.value;
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes);
})
removeNoteButton.addEventListener('click', (e) => { // => function
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html');
})

window.addEventListener('storage', (e) => { // => function
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(note => note.id === noteId);

        if (!note) {
            location.assign('/index.html')
        }

        noteTitle.value = note.title;
        noteBody.value = note.body;
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})

