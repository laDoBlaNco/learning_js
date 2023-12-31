const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// you can customize  some yargs info:
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){notes.addNote(argv.title,argv.body)}
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){notes.removeNote(argv.title)}
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'list the notes',
  handler(){notes.listNotes()}
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){notes.readNote(argv.title)}
})

// console.log(yargs.argv);
yargs.parse();

