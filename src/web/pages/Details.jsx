import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Searchbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Details() {
  return (
    <div>
      <div className="flex flex-col w-full min-h-screen">
        <div className="grid grid-row-1 gap-3">
          <div className="bg-grayDark">
            <div className="sm:w-1/6">
              <Link to="/">
                <h1 className="text-cyan text-5xl mx-2 md:mx-36 my-2 text-center sm:text-left">TMDB</h1>
              </Link>
            </div>
          </div>
          <div className="mx-4 md:mx-36">
            <Search />
            <Cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
