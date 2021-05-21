import React from 'react';
import Search from '../components/Searchbar';
import Cards from '../components/Cards';

function Details() {
  return (
    <div className="flex flex-col w-full h-full sm:h-screen">
      <h1 className="text-cyan text-7xl mx-2 md:mx-36 mt-5 text-center sm:text-left">TMDB</h1>
      <div className="grid grid-row-1 mx-4 md:mx-36 gap-5">
        <Search />
        <Cards />
      </div>
    </div>
  );
}

export default Details;
