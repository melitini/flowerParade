
$(function(){

	var flowerArray = [];

	// Flower constructor
	    function Flower(name, color, petals, leafCount, origin, isEdible, smellsPretty, comments, image){
	      
	       this.name = name;
	       this.color = color;
	       this.petals = petals;
	       this.leafCount = leafCount;
	       this.origin = origin;
	       this.isEdible = isEdible;
	       this.smellsPretty = smellsPretty;
	       this.comments = comments;
	       this.image = image;
	       console.log(smellsPretty, "smells pretty first");


	        /* Methods */

	       // Demonstrates use of arguments with methods
	       this.hasGoodSmell = function(answer) {
	       	console.log(answer, "secomd");
	           if (answer) {
	               return 'Yes, this flower smells amazing!';
	           } else {
	               return 'No, what a noxious weed!';
	           }
	       };

	       this.tastesYummy = function(isEdible) {
		       	if (isEdible) {
		       		return 'Delicious indeed!';
		       	} else {
		       		return 'No, yuck!';
		       	}
	       };

	       // Demonstrates use of local object variables
	       this.describe = function(answer) {
	           return "This flower is " + this.color + ".";
	         }

	    };

	    var comment = "The first scientific description of a Gerbera was made by J.D. Hooker in Curtis's Botanical Magazine in 1889 when he described Gerbera jamesonii, a South African species also known as Transvaal daisy or Barberton Daisy";
	    var comment2 = "Dahlia's are most commonly used for decorative purposes on cakes, tarts and pastries. Serve alongside cheese or desserts as a garnish. Remove the petals of the Dahlia and add them to grain or green salads to add a pop of color.";
	    var comment3 = "Used most often as an ornamental plant, these large, and beautiful flowers are toxic. However, that doesn't stop some from brewing these cyanide laced blossoms into tea.";
	    var comment4 = "Sunflowers are especially well known for their symmetry based on Fibonacci numbers and the Golden angle.";
	    var comment5= "Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height. Different species hybridize easily, and this has been used in the development of the wide range of garden roses."
	    

	    var flower1 = new Flower("Daisy", "pink", 89, 5, "Africa", false, true, comment, "http://i.imgur.com/HnT0QEo.jpg?1");
	    var flower2 = new Flower("Dahlia", "Maroon", 109, 4, "Mexico", true, true, comment2, "http://i.imgur.com/AQCycsq.jpg");
	    var flower3 = new Flower("Hydrangea", "Blue-green", 60, 2, "SE Asia", true, false, comment3, "http://i.imgur.com/p0TMNjT.jpg");
	    var flower4 = new Flower("Sunflower", "yellow", 50,  3, "California", false, true, comment4, "http://i.imgur.com/wgfLAAA.jpg");
	    var flower5 = new Flower("Rose", "Red", 32, 5, "Asia", true, true, comment5, "http://i.imgur.com/e5dUqq4.jpg");

	    flowerArray.push(flower1);
	    flowerArray.push(flower2);
	    flowerArray.push(flower3);
	    flowerArray.push(flower4);
	    flowerArray.push(flower5);


	//this line takes the script template(#flower-template) from the inline HTML script and creates a function using underscore.js
	var flowerTemplate = _.template($('#flower-template').html());

	var flowers = flowerArray;

	//this line uses the generated function to produce HTML dynamically.
	flowers.forEach(function(flower){
	    var flowerHtml = flowerTemplate(flower);
	    
	    //this line appends the dynamically generated HTML to a <div> with the id "container"
	    $("#flower-placeholder").append(flowerHtml);
	});

	

});






