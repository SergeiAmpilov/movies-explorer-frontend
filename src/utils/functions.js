import api from './api';

/* находим объект сохраненного фильма по переданному ид во внешнем сервисе */
const getFavMovie = (favMovieList, id) => {
  let thisMovieInFavlist = favMovieList.filter( favMovie =>
    favMovie.movieId === id);

  if (thisMovieInFavlist.length) {
    return thisMovieInFavlist[0];
  }

  return false;
}

/*
функция трансформирует список фильмов в формате BeatFilms в формат сервиса 
movie-explorer.
*/
const parseMovieList = (sourceArr, favMovieList) => {
  
  return sourceArr
  .filter((item) => {
    if ( typeof item.image === 'undefined'
    || typeof item.image.formats === 'undefined'
    || typeof item.image.formats.thumbnail === 'undefined'
    || typeof item.image.formats.thumbnail.url === 'undefined') {
      return false;
    }
    return true;
  })
  .map((movie) => {
    let thisMovieInFavlist = getFavMovie(favMovieList, movie.id);          

    movie.thumbnail = `${api.getSiteUrl()}${movie.image.formats.thumbnail.url}`;
    movie.image = `${api.getSiteUrl()}${movie.image.formats.thumbnail.url}`;
    movie._id = thisMovieInFavlist ? thisMovieInFavlist._id : false;

    return movie;
  });

}


export {
  getFavMovie,
  parseMovieList,
};