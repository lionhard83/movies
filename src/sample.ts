import { movies } from "./data/movies";

movies.filter((movie) => movie.cast.actors.some((actor) => actor.id === "1"));
console.log();
