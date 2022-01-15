class Movie{
  constructor(title, studio, rating = "PG"){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(movie){
  if (movie.rating ==="PG"){
    return true
    }
  else{
    return false
    }
  }

}

function createMovie(title, studio, rating){
  let movie = new Movie(title, studio, rating);
  return movie;
}

let movies = [];

let film1 = createMovie("Casino Royale","Eon Productions","PG13");
let film2 = createMovie("KGF", "Ramoji");
let film3 = createMovie("The Shawshank Redemption","Walt Disney","UG15");
let film4= createMovie("The Dark Knight","Red Entertainment");
let film5 = createMovie("Harry Potter and the Deathly Hallows: Part II","Warner Bros","UA");
let film6 = createMovie("Joker","Warner Bros","CU");
let film7 = createMovie("Aquaman","Warner Bros");

movies.push(film1, film2, film3, film4, film5, film6, film7);

let PGMovies = []; 
function getPG(){
   
  for (i = 0; i < movies.length; i++){
    if (movies[i].rating ==="PG"){
      PGMovies.push( movies[i])
    }
        }
   console.log (PGMovies);
}

console.log('The movies are: ')
movies.map(movie => console.log(movie))
console.log('The movies with PG rating are :')

getPG();