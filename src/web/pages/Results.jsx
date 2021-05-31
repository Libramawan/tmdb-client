/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactHover, { Trigger, Hover } from 'react-hover';
import axios from 'axios';
// import PropTypes from 'prop-types';
import queryString from 'query-string';
import Footer from '../components/Footer';
import Search from '../components/Searchbar';

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: -10,
};

const parseQuery = (q) => {
  const splitted = q.split(/\s*,\s*/);
  const mapped = splitted.map((str) => {
    const [key, value] = str.split(/:/);
    return {
      [key]: value,
    };
  });
  return mapped;
};

const encodeQuery = (q) => {
  let qs = '?';
  q.forEach((query, i) => {
    Object.keys(query).forEach((k) => {
      qs += `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`;
      if (i < q.length - 1) {
        qs += '&';
      }
    });
  });
  return qs;
};

function Results({ match, location }) {
  const { search } = match.params;
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const path = location.search;
  const params = queryString.parse(path);
  const queries = parseQuery(params.query);

  useEffect(() => {
    if (queries.length) {
      setLoading(true);
      const qs = encodeQuery(queries);
      axios
        .get(`http://localhost:8080/search${qs}`)
        .then((response) => {
          console.log(response);
          setLoading(false);
          setFilm(response?.data);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [search]);

  return (
    <div className="w-full min-h-screen">
      <div className="bg-img-2">
        <div className="bg-black bg-opacity-60">
          <div className="flex flex-col py-12 place-items-center">
            <h2 className="text-yellow text-3xl">TV Movie Database</h2>
            <Search />
          </div>
        </div>
      </div>

      <div className="quicksand overflow-x-auto m-2 mt-10 sm:mx-24 lg:mx-80">
        <h1 className="text-md sm:text-xl my-2">
          Search
          &quot;
          {params.query}
          &quot;
          Results
        </h1>
        {film?.length ? (
          <table className="table-auto w-full bg-white rounded-b-xl border">
            <thead className="w-full">
              <tr className="text-white bg-grayDark w-full">
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2 text-left">Title</th>
              </tr>
            </thead>
            <tbody className="text-md text-black text-center">
              {
                film.map((hasil) => (
                  <tr className="border" key={hasil.title}>
                    <td className="px-4 py-1 w-1/4">
                      {hasil.type}
                    </td>
                    <td className="px-4 py-1 text-left text-sm">
                      <div className="w-full">

                        <ReactHover options={optionsCursorTrueWithMargin}>

                          <Trigger type="trigger">
                            <Link to={`/details/${hasil.id.split('/').pop()}`}>
                              {hasil.title}
                            </Link>
                          </Trigger>

                          <Hover type="hover">
                            <img
                              className="w-48 rounded-md"
                              alt="preview"
                              src={hasil.picture}
                            />
                          </Hover>
                        </ReactHover>

                        {hasil.tags.slice(0, 5).map((tag) => (
                          <div className="quicksand p-1 mr-2 mt-2 float-left text-xs font-bold border bg-white rounded-xl" key={tag}>
                            {`${tag}`}
                          </div>
                        ))}

                      </div>

                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        ) : (
          <div className="p-4 w-full">
            <p className="text-center">{loading ? 'Loading...' : 'Data tidak ditemukan'}</p>
          </div>
        )}

      </div>
      <div className="mt-96 bottom-0 mb-0">
        <Footer />
      </div>
    </div>
  );
}

// Results.propTypes = {
//   props: PropTypes.string,
//   location: PropTypes.string.isRequired,
// };

// Results.defaultProps = {
//   props: null,
// };

export default Results;
