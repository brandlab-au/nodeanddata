var nano = require('nano')('https://f8e2dc29-9696-4fa0-9a76-23d425c78cde-bluemix:09f3e38490ff477cd3b43671991f98c91185e510652689b43c2fc7f8ad5bbd0f@f8e2dc29-9696-4fa0-9a76-23d425c78cde-bluemix.cloudant.com');

// clean up the database we created previousl
nano.db.destroy('prints', function() {
  // create a new database
  nano.db.create('prints', function() {
    // specify the database we are going to use
    var prints = nano.use('prints');
    // and insert a document in it
    prints.insert({ 'landscapes': [
    	{ 
    	  'id' : 1, 
    	  'title':  'Antarctica' ,
          'description': "Lauren's husband took this spectacular photo when they visited Antarctica in December of 2012. This is one of our hot sellers, so it rarely goes on sale."  ,
          'imgsrc': 'penguin.jpg' ,
           'price': 100 ,
            'quan':  6 },
     	{
     	  'id' : 2,
     	  'title':  'Alaska' ,
          'description': "Lauren loves this photo even though she wasn't present when the photo was taken. Her husband took this photo on a guy's weekend in Alaska."  ,
          'imgsrc': 'alaska.jpg' ,
           'price': 75 ,
            'quan':  1 },
    	{
    	  'id' : 3,
    	  'title':  'Australia' ,
          'description': "This photo is another one of Lauren's favorites! Her husband took these photos of the Sydney Opera House in 2011."  ,
          'imgsrc': 'sydney.jpg' ,
           'price': 100 ,
            'quan':  0 },
    	]}, 'inventory', function(err, body, header) {
      if (err) {
        console.log('Error creating document - ', err.message);
        return;
      }
      console.log('all records inserted.')
      console.log(body);
    });
  });
});