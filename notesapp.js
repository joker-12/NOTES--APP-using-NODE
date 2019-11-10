const fs=require('fs');
const chalk=require('chalk');
const getnotes=()=>{
    return 'your notes....'
};
const addnotes=(title,body)=>{
    const notes=loadnotes();
    const duplicatenotes=notes.filter((note)=>{
        return note.title===title;
    })
    if(duplicatenotes.length===0){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes);
        console.log('notes added');
    }
    else{
        console.log('note title already taken');
    }
   
}
const removenotes=(title)=>{
    const notes=loadnotes();
    const notestokeep=notes.filter((note)=>{
        return note.title!==title;
    });
    if(notes.length>notestokeep.length){
        console.log(chalk.green.inverse('note removed'));
        savenotes(notestokeep);
    }
    else{
        console.log(chalk.red.inverse('no note found'));
    }
    

}
const savenotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

}
const loadnotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json');
        const data=databuffer.toString();
        return JSON.parse(data);
    }
    catch(e){
        return [];
    }
}
const listnotes=()=>{
    console.log(chalk.inverse('your notes'))
    const notes=loadnotes();
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const readnotes=(title)=>{
    const notes=loadnotes();
    const notef=notes.filter((note)=>{
        note.title===title;
    });
    if(notef){
        console.log(chalk.inverse(notef.tite));
        console.log(notef.body);
    }
    else{
        console.log(chalk.red.inverse('note title not found'));
    }
}

module.exports={
    getnotes:getnotes,
    addnotes:addnotes,
    removenotes:removenotes,
    listnotes:listnotes,
    readnotes:readnotes
};