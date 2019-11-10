const yargs=require('yargs');
const chalk=require('chalk');
const notes=require('./notesapp.js')
yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'notes body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addnotes(argv.title,argv.body);
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removenotes(argv.title);
    }
})
yargs.command({
    command:'read',
    describe:'to read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readnotes(argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'to list all notes',
    handler(){
        notes.listnotes();
    }
})
yargs.parse();