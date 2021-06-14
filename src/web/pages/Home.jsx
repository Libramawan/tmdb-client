import React from 'react';
import Search from '../components/Searchbar';

function Home() {
  return (
    <div className="bg-img">
      <div className="bg-black bg-opacity-60">
        <div className="grid w-full h-screen place-items-center">
          <div className="grid place-items-center mb-20">
            <h1 className="text-cyan text-9xl">TMDB</h1>
            <h2 className="text-white text-3xl">TV MOVIE Database</h2>
            <Search />
            <div className="text-white text-xs pt-2 text-center quicksand">
              <p>
                Sintaks pencarian [prefix:input].
              </p>
              <p>
                Prefix yang tersedia:
                title, season, status, type, year, tag, synonym
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
