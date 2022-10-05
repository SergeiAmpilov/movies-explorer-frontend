/* находим объект сохраненного фильма по переданному ид во внешнем сервисе */
const getFavMovie = (favMovieList, id) => {
  let thisMovieInFavlist = favMovieList.filter( favMovie =>
    favMovie.movieId === id);

  if (thisMovieInFavlist.length) {
    return thisMovieInFavlist[0];
  }

  return false;
}


export { getFavMovie };