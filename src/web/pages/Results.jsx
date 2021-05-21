import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Searchbar';

function Results() {
  const [data] = useState([{}, {}, {}, {}, {}]);
  const [tag] = useState([{}, {}, {}, {}, {}]);

  return (
    <div className="w-full h-full sm:h-screen">
      <div className="flex flex-col py-12 place-items-center">
        <h2 className="text-yellow text-3xl">TV Movie Database</h2>
        <Search />
      </div>

      <div className="quicksand overflow-x-auto m-2 sm:mx-24">
        <table className="table-auto border-collapse w-full bg-white">
          <thead>
            <tr className="rounded-lg text-lg text-white bg-purple-light w-full">
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2 text-left">Title</th>
            </tr>
          </thead>
          <tbody className="text-md text-black">
            {data.map((e) => (
              <tr className="hover:bg-gray-100 border-b border-gray-200 text-center">
                <td className="px-4 py-1 w-1/4 text-lg">
                  {e.data}
                  Anime
                </td>
                <td className="px-4 py-1 text-left text-sm">
                  <div>
                    <Link to="\details">
                      Tokyo Revengers
                    </Link>
                  </div>

                  {tag.map((prop) => (
                    <div className="quicksand p-1 mr-2 mt-2 float-left text-xs font-bold relative border border-solid bg-white">
                      {prop.tag}
                      Action
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;
