var noteapp2 = require('../noteapp2.js');
var expect = require('chai').expect;


//describe("A class NotesApplication",  function())
describe("the functionality of the toGet function", function(){
		//console.log("TESSSST");
	it('should not accept strings', function(){
		var toGet= new noteapp2('Sam');
    expect(toGet(['note_id']).toBe('Strings are not valid input');
    }

    //it('should not accept an empty array from noteList',function()){
     	//expect(toGet([]).to.equal('Empty Lists are not valid input');
    //}
    //it('should return the value of the given noteList index',function()){
    	//expect(toGet(note_id).to.equal(this.noteList[note_id]);
    //}
});    
  
});

