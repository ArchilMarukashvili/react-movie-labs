import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb-api";
import MovieListPageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";

const PopularMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;

  return (
    <MovieListPageTemplate
      title="Popular Movies"
      movies={movies}
      action={() => {}}
    />
  );
};

export default PopularMoviesPage;
