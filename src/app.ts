console.log("hello my app");
import express from "express";
import { movies } from "./data/movies";

const app = express();

app.get("/movies", (req, res) => {
  let allMovies = [...movies];
  console.log(req.query);
  const category = req.query.category as string;
  const language = req.query.language as string;
  const actorId = req.query.actor as string;
  if (actorId) {
    allMovies = allMovies.filter((movie) =>
      movie.cast.actors.some((actor) => actor.id === actorId)
    );
  }
  if (category) {
    allMovies = allMovies.filter((movie) =>
      movie.categories.includes(category.toLowerCase())
    );
  }
  if (language) {
    allMovies = allMovies.filter((movie) =>
      movie.languages.includes(language.toLowerCase())
    );
  }
  res.json(allMovies);
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "movie not found" });
  }
});

app.get("/movies/:id/reviews", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    res.json(movie.reviews);
  } else {
    res.status(404).json({ message: "movie not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running!");
});
