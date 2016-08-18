var noteapp2 = require('../noteapp2.js');
var expect = require('chai').expect;
var toGet= new noteapp2('Sam');
describe('the functionality of the toGet function',function()){
	it('should not accept strings'){
    expect(toGet(['note_id']).to.equal('Strings are not valid input');
    }

    it('should not accept an empty array from noteList'){
     	expect(toGet([]).to.equal('Empty Lists are not valid input');
    }
    it('should return the value of the given noteList index'){
    	expect(toGet(note_id).to.equal(this.noteList[note_id]);
    }
}    
}
