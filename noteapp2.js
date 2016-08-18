modules.exports = function NotesApplication(author){
	this.author = author;
	this.noteList = [];
	this.create = createIt;
}

/** Fuction to takes note content and 
* adds to the note list object
*/
function createIt(note_content) {
		if(typeof note_content === 'string'){
			return true;
		}
	  	this.noteList.push(note_content);
		return this.noteList;
};

