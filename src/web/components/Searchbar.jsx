import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

function Searchbar() {
  const [search, setSearch] = useState('');
  const handlerInput = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const handlerSearch = (e) => {
    e.preventDefault();
    window.location.href = `/results?query=${search}`;
  };
  return (
    <div>
      <form>
        <div className="pt-2 relative mx-auto text-gray-600 mt-5">
          <button
            type="submit"
            onClick={handlerSearch}
            className="absolute left-0 top-0 mx-4 mt-4"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <input type="search" name="search" onChange={handlerInput} value={search} placeholder="title:tokyo,tag:drama,..." className="border border-gray-300 bg-white h-10 pl-12 pr-3 text-sm w-64 sm:w-96 focus:outline-none rounded-2xl" />
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
