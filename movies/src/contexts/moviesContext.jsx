import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState([])


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

    const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

    const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      const newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
      console.log("Must Watch List:", newMustWatch); // confirmation
    }
  };


 return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch, // expose mustWatch array
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToMustWatch, // expose updater
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
