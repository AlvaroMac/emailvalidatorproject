function replacename (mail){
		mail=mail.replace("AT","@");
			mail=mail.replace("DOT",".");
			return mail;
}

function containsAtAndDot (mail){ 
	 return mail.indexOf('@') >= 0 && mail.indexOf('.') >= 0;
}

function validator(mails){
	var validarray = [];
	var i;
	for (i = 0; i<mails.length; i++) {
		var email = mails[i]
		email = replacename(email)
		if (containsAtAndDot(email)) { 
			validarray.push(email);
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

