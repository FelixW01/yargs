// const chalk = require('chalk') deprecated, only works with ES modules
import yargs from 'yargs';
// this is required for es6 syntax
import { hideBin } from 'yargs/helpers';
import notes from './notes.js';

// console.log(chalk.blue('Success!'));
// yargs.version('1.1.0')


// edit looks for a certain title and edits the body based on the user input
// note with a title provided
// update body
// cyan background
yargs(hideBin(process.argv))
    .command( {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
                    },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body)
    }
})
    .command({
        command: 'edit',
        describe: 'Edit a note',
        builder: {
            title: {
                describe: "Note title that you'd like to change",
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'New body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.editNote(argv.title, argv.body)
        }
    })
    .command({ 
        command: 'list',
        describe: 'List your notes',
        handler() {
            notes.listNotes()
        }

    })
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title)
        }
    })
    .command( {
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            notes.removeNote(argv.title)
    }
})
.argv;