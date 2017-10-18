//Nested Objects
// example 1
var book = {
	author: {
		firstAuthor: "Ryeker",
		secondAuthor: "David"
	},
	editor: {
		companyName: "penguin",
		location: "Westminster, London",
		ceo: "Peter Field"
	}
}




// example 2
var stats = {
     bookServed: {
         redis: 90,
         s3: 90,
         signedUrl: 70
     },
     errors: {
         redis: {
             bookService: 70,
             mapi: 50,
             capi: 30
         },
         AWS: {
             signedUrl: 70,
             downloadBook: 50,
             searchBook: 10
         },
         decryption: 60
     }
 };





// for of Loop///////////////////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for...of









// for in ////////////////////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for...in

var jeep = {
    image: 'http://bit.ly/2ys64bD',
    make: 'jeep',
    model: 'wrangler',
    year: 2014,
    color: 'black',
    doors: 4
};





// for in VS for of ///////////////////////////////////////////////////









// for of Loop on objects ////////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for...of

// using for of loop you'll need to now Object.keys()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys










// for in Loop with nested Object //////////////////////////////////////
var book = { 
    author: {
        firstAuthor: "Ryeker",
        secondAuthor: "David"
    },
    editor: {
        companyName: "penguin",
        location: "Westminster, London",
        ceo: "Peter Field"
    }
}





