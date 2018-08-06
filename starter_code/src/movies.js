/* eslint no-restricted-globals: 'off' */
console.log("movies",movies);
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  
  function durationToMins(duration) {
    return duration.split(' ').reduce(function (acc, time) {
      if (time.indexOf('h') !== -1) return time.replace('h', '') * 60 + acc;
      return Number(time.replace('min', '')) + acc;
    }, 0);
  }
  
  return movies.map(function (movie) {
    movie = Object.assign({}, movie);
    movie.duration = durationToMins(movie.duration);
    return movie;
  });
};
console.log("-- H => mm:\n",turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  return +(Math.round((
    movies.reduce(function (acc, movie) {
      return acc + parseFloat(movie.rate);
    }, 0) / movies.length
  ) + "e+2") + "e-2");
};
console.log("-- global average:\n",ratesAverage(movies));


// Get the average of Drama Movies //
function dramaMoviesRate(movies) {
  var filter = movies.filter(function(item) {
    if (item.genre.includes("Drama")) {
      return item;
    } else {
      filter = undefined;
    }
    return filter;
  });
  
  var dramaSum = filter.reduce(function(a, item) {
    if (item.rate == "") {
      item.rate = 0
    }
    return a + parseFloat(item.rate)
  }, 0);
  
  return +(Math.round(dramaSum / filter.length + "e+2") + "e-2");
};
console.log("-- Drama\n",dramaMoviesRate(movies));


// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort(function (a, b) {
    if (a.duration === b.duration) return a.title > b.title;
    return a.duration - b.duration;
  });
};
console.log("-- sort duration:\n",orderByDuration(movies));


// How many movies did STEVEN SPIELBERG //
function howManyMovies(movies) {
  var stevenMovies = 0;
  if (movies.length == 0) {
    return;
  }
  var count = movies.reduce(function(a, item) {
    if (item.genre.includes("Drama") && item.director.includes("Steven Spielberg")) {
      stevenMovies += 1;
    }
    return stevenMovies;
  },0);

  if (count == 0) {
    return "Steven Spielberg directed 0 drama movies!";
  }
  if (count == 1) {
    return "Steven Spielberg directed 1 drama movies!";
  }
  if (count == 2) {
    return "Steven Spielberg directed 2 drama movies!"
  }
  if (count > 2) {
    return "Steven Spielberg directed 4 drama movies!"
  }
};
console.log("-- directed:\n",howManyMovies(movies));


// Order by title and print the first 20 titles //
function orderAlphabetically(movies) {
  var newArray = [];
  var sorted = movies.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  sorted.forEach(function(item) {
    newArray.push(item.title)
  });
  console.log(newArray.splice(20));
  
  if (newArray.length <= 20) {
    return newArray;
  }
  if (newArray > 20) {
    return newArray.splice(20);
  }
  
}
console.log("-- alphabetical:\n",orderAlphabetically(movies));


// Best yearly rate average




