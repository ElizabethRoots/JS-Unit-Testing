//Date: Dec 24, 2019
//Description: randomly generate insults based on multiple arrays.
var randomBodyParts = ["nose", "foot", "knee", "shoulder", "knuckle","lobe","face","mouth"];
var randomAdjectives = ["noisey","hard","boring","cracked","smelly","dark","furry","sticky"];
var randomWords = ["shark","house","wall","sky","cavern","tree","dog"];
 
var randomBody = randomBodyParts[Math.floor(Math.random() * 8 )];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 8)];
var randomWord = randomWords[Math.floor(Math.random() * 7)];

var randomInsult = "Your " + randomBody + " is like a " + randomAdjective + " " + randomWord + "!";
randomInsult;