
function validator(mails){
	var validarray = [];
	var shetarray = [];
	for (i = 0; i<mails.length; i++) {

		if (mails[i].indexOf('@') >= 0 && mails[i].indexOf('.') >= 0 ) {
			validarray.push(mails[i]);
		}
		else if (mails[i].indexOf('AT') >= 0 && mails[i].indexOf('DOT') >= 0 ) {
			mails[i]=mails[i].replace("AT","@");
			mails[i]=mails[i].replace("DOT",".");
			validarray.push(mails[i]);

		}

		else {
			shetarray.push(mails[i]);
		}
	};
	return validarray
  
};
describe("verify emails", function(){
    it("returns empty when empty", function(){
        expect(validator([])).toEqual([])
    });
    it("returns email when email given is correct", function(){
    	expect(validator(["henar@pedofilos.com"])).toEqual(["henar@pedofilos.com"]);
    });
    it("when email is caca returns empty array", function(){
    	expect(validator(["hola"])).toEqual([]);
    });
    it("when one email from list is caca returns list without it", function(){
    	expect(validator(["meh","lolapop@poper.com","henar@creepy.com"])).toEqual(["lolapop@poper.com","henar@creepy.com"]);
    });
    it("when email semiwrong change it to be 100% right", function(){
    	expect(validator(["henardoATanacardoDOTcom"])).toEqual(["henardo@anacardo.com"]);
    });

});

