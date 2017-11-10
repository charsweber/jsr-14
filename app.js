function farmAnimal(name, image, sound) {
	this.name = name;
  this.image = image;
  this.sound = sound;
  this.talk = function() {
    alert(this.sound + "!");
  };
};

function subAnimal(name, image, sound, size) {
  farmAnimal.call(this, name, image, sound);
  this.size = size;
  this.talk = function() {
    alert(this.sound + "!");
  }
}

var cow = new farmAnimal("cow", "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg", "moo");
var goat = new farmAnimal("goat", "http://dreamstop.com/wp-content/uploads/2016/06/goat-dreaming.jpg", "bah");
var chicken = new farmAnimal("chicken", "https://cdn.modernfarmer.com/wp-content/uploads/2014/02/chicken_hero.jpg", "cluck");
var pig = new farmAnimal("pig", "http://www.all-creatures.org/anex/pig-01.jpg", "oink");
var horse = new farmAnimal("horse", "https://www.pets4homes.co.uk/images/articles/834/large/should-you-put-your-horse-on-loan-51b1ee7f46767.jpg", "neigh");

var bull = new subAnimal("bull", "http://www.animalhi.com/thumbnails/detail/20121027/animals%20cows%20bull%204224x2934%20wallpaper_www.animalhi.com_38.jpg", "angry moo", "large");
var calf = new subAnimal("calf", "https://d2d8ufv2iahgzl.cloudfront.net/wp-content/uploads/20160715091633/baby-calf_vp.jpg", "soft moo", "small");

var animals = [{"cow": cow},{"goat": goat},{"chicken": chicken},{"pig": pig},{"horse": horse},{"bull": bull},{"calf": calf}];

// var animals = [cow, goat, chicken, pig, horse, bull, calf];

console.log(animals);


$(function() {
  var left = 100;
  
  for (var i = 0; i < animals.length; i++) {
    for (var k in animals[i]){
      if (animals[i].hasOwnProperty(k)) {
        console.log("Key is " + k + ", value is" , animals[i][k]);
        var animalImage = animals[i][k].image;
        var animalPicture = "<img src='" + animalImage + "' class='animal' data-name='" + animals[i][k].name +"'>";
        var $animalPicture = $(animalPicture);
        $animalPicture.css("left", left += 130);
        $('.farm').append($animalPicture);
        $animalPicture.click(function() {
          console.log(animals[i][k]);
        });
      }
    } 
  };
//   $('.farm').click('.animal', function() {
//     var letsTalk = $(event.target).data("name");
//     animals[letsTalk].talk();
//     console.log(animals[letsTalk]);
//   });
});


/*


*/



/*
when we have a JSON object, we use dot notation to get each property and value
let's do that here
we'll need to make a for loop or something to iterate through each animal - do we add them to an array?

on click - alert window with animal.talk();
*/