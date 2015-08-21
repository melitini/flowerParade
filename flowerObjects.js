console.log("sanity check");

$(document).ready(function(){
	console.log("ready!");


	//<<<<<<<<<<<<<<<<<<<<< ACTION CREATED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	//Identify data

	//$.get(data, function(fffdata) {
		data.flowers.forEach(function(element){
			var image = element.image;
			var name = element.name;
			var color = element.color;
			var petals = element.petals;
			var leaves = element.leaves;
			var origin = element.origin;

			//pass in the values to HTML


			  //this.render = function() {     
			  	$('span').append(image);
			  	$('.fName').append('Flower Name: ' + name);
			  	$('.fColor').append('Flower Color: ' + color);
			  	$('.pCount').append('Petal Count: ' + petals);
			  	$('.lCount').append('Leaf Count: ' + leaves);
			  	$('.origin').append('Origin: ' + origin);
			  	$('.edible').append('Edible: ' + edible);
			  	$('.sPretty').append('Smells Pretty: ' + smellsPretty);
			  	$('.comments').append('Comments: ' + color);
			  //}








		});
	//});





	//pass in the values to HTML




	//<<<<<<<<<<<<<<<<<<<<<<<<<< ACTION PROVIDED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




	function Flower(name, color, petals, smellsPretty, origin, comments){
	   /* Properties */
	   // Passed-in values
	   this.name = name;
	   this.color = color;
	   this.petals = petals;
	   this.smellsPretty= smellsPretty;
	   this.origin = origin;
	   this.comments = comments;
	   


	   // Default values
	   this.isEdible = false;
	   this.wiltFactor = 100; //0 is dead, 100 is fresh
	   this.leafCount = 10;


	    /* Methods */
	   this.sniff = function(){
	       console.log("Sniff Sniff Sniff!");
	   };


	   // Demonstrates use of arguments with methods
	   this.hasGoodSmell = function(answer) {
	       if (answer) {
	           return 'This flower smells amazing!';
	       } else {
	           return 'What a noxious weed!';
	       }
	   };


	   // Demonstrates use of local object variables
	   this.describe = function(answer) {
	       alert("This flower is " + this.color + ".");
	     }


	   /// Demonstrates object to object interaction
	   this.compare =  function(otherFlower) {
	       return("My " + this.color + " flower is much prettier than your " +
	         otherFlower.color + " flower :P");
	   };


	   // append html string to website 
	   this.render = function() {
	       $('body').append("<p>My pretty flower is " + this.color +
	         " and has " + this.petals + " pristine petals.");
	   };


	   // displays message to console
	   this.giveFlower= function(){
	       console.log("Here's a flower")
	    };
	}






});






