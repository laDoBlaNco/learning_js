'use strict'

// Read existing notes from localStorage
const getSavedNotes = () => { // arrow function
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = (notes) => { // arrow functions
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from a list
const removeNote = (id) => { // => function
    const noteIndex = notes.findIndex((note) => note.id === id); // => short syntax
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => { // => function
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a'); // simply changing 'span' to 'a' as it also has a 'textContent' prop
    const button = document.createElement('button');
    // const editLink = document.createElement('a'); // my first attempt, but Mead had an easier way
    // editLink.setAttribute('href','/edit.html');

    // Setup the remove note button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', (e) => { // => functions
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl);
    return noteEl;
}

// Sort our notes by 1 of 3 ways
const sortNotes = (notes, sortBy) => { // => functions
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => { // => functions
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedat < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => { // => functions
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdat) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => { // => functions
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Render application notes:
const renderNotes = (notes, filters) => { // => functions
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    // above => function (short syntax) 
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach((note) => { // => function
        const noteEl = generateNoteDom(note);
        document.querySelector('#notes').appendChild(noteEl);
    })
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(note.updatedAt).fromNow()}`
// above => funtion (short syntax)
