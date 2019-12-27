//Date: Dec 24, 2019
//Description: Determine if you are of age to see a PG-13 move.
//Determine if movie patrons are 13 and above, or 12 and accompanied by an adult to see a movie.
//Change currentAge and accomp to false to test.
function movieTheaterAge(string) {
    var age = 12;
    var accomp = true;
    var currentAge = 13;
    if (currentAge >= age) {
        console.log('You can see the movie');
    } else if (currentAge <= age && accomp == true) {
        console.log('You can see the movie');
    } else {
        console.log('You cant see the movie');
    }
    return console.log;
}