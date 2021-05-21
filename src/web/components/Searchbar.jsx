import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function searchbar() {
  const [search, setSearch] = useState(null);
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="pt-2 relative mx-auto text-gray-600 mt-5">
          <Link to={`/result/${search}`}>
            <button
              type="submit"
              value={search}
              onChange={inputHandler}
              className="absolute left-0 top-0 mx-4 mt-4"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </Link>
          <input type="search" name="search" placeholder="Search Film" className="border-2 border-gray-300 bg-white h-10 pl-12 pr-3 text-sm w-64 sm:w-96 focus:outline-none" />
        </div>
      </form>
    </div>
  );
}

export default searchbar;
