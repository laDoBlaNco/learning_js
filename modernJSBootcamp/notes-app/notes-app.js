'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => { // => funcion
    const newNoteId = uuidv4();
    const timestamp = moment().valueOf()
    notes.push({
        id: newNoteId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes);
    location.assign(`/edit.html#${newNoteId}`);
})
document.querySelector('#search-text').addEventListener('input', (e) => { // => function
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
document.querySelector('#filter-by').addEventListener('change', (e) => { // => funcion
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => { // => function
    if (e.key === 'notes') {
        // 1. Parse the new data and update notes
        notes = JSON.parse(e.newValue)
        // 2. Rerender the notes.
        renderNotes(notes, filters)

    }
})

// Unix Epoch = January 1st 1970 00:00:00
// 0 = Unix Epoch and each number is a milliseconds
// so 60000 would be January 1st  1970 00:01:00
// const now = new Date()
// console.log(now.getTime()) // millseconds since the unix epoch
// const timeStamp = now.getTime()

// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())
// this makes it super easy for us to manipulate time. first getting the data (milliseconds)
// that we are going to work with and then parse and display with the methods below.

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Year: ${now.getMonth()}`)
// console.log(`Year: ${now.getDate()}`)
// console.log(`Year: ${now.getHours()}`)
// console.log(`Year: ${now.getMinutes()}`)
// console.log(`Year: ${now.getSeconds()}`)

// CHALLENGE - Lecture 74 -
// 1. Create two dates in the past (use string for Date)
// const date1 = new Date('December 25 1976 07:00:00')
// const date2 = new Date('November 11 2012 15:00:00')
// 2. Get timestamps for both
// const ts1 = date1.getTime()
// const ts2 = date2.getTime()
// 3. Figure out which is first and print its time (use toString())
// if (ts1 < ts2) {
//     console.log(date1.toString())
// } else {
//     console.log(date2.toString())
// }

// Now this is all good and fine but typically in real life we'll use a library
// for working with dates since the js Date() object isn't very robust
// here we will use 'moment.js'

// const now = moment()
// console.log(now.toString())

// console.log(now.minutes())
// now.minutes(30) // if we want to manipulate just use the method as a setter
// console.log(now.toString())
// console.log(now.minutes())

// // manipulating time relative to current time
// now.add(1, 'year').subtract(20, 'days')
// console.log(now.toString())

// // formatting
// console.log(now.format('MMMM Do, YYYY'))

// // from-now
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(nowTimestamp)

// console.log(moment(nowTimestamp).toString())

// // CHALLENGE - Lecture 75:
// // 1. Create a new moment
// const bd = moment()
// // 2. Set the month, day and year to my birthday
// bd.month('december').date(25).year(1976)
// // 3. use format to print it in the following way: Dec 25, 1976
// console.log(bd.toString())
// console.log(bd.format('MMM D, YYYY'))



