/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import tw from 'tailwind-styled-components';
// import PropTypes from 'prop-types';
import Search from '../components/Searchbar';
import Footer from '../components/Footer';

function Details({ match }) {
  const { id } = match.params;
  console.log(id);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8080/search?id=http://tmdb.bakalo.li/${id}`)
      .then((response) => {
        console.log(response);
        setDetail(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  console.log(detail);
  return (
    <div>
      <div className="flex flex-col w-full min-h-screen bg-gray-200">
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

            {detail[0] ? (
              <div className="flex flex-col sm:flex-row bg-white rounded-md quicksand border sm:border-none my-4 w-full lg:w-full">
                <div className="justify-items-stretch p-0 ">
                  <img className="rounded-t-md sm:rounded-lg shadow-xl w-full sm:w-96 h-full sm:h-auto" src={detail[0].picture} alt="cover" />
                </div>
                <div className="flex flex-col w-full sm:ml-2">
                  <div className="bg-grayDark mt-1 w-full">
                    <h1 className="text-white text-lg sm:text-2xl text-center sm:text-left p-2">{detail[0].title}</h1>
                  </div>
                  <div className="grid grid-rows-1 lg:grid-cols-2">
                    <table className="table-auto row-span-1 md:col-span-1 sm:border w-full my-2">
                      <tbody className="text-xs border">
                        <tr>
                          <Th>ID/IRI</Th>
                          <Td>{detail[0].id}</Td>
                        </tr>
                        <tr>
                          <Th>Main Title</Th>
                          <Td>{detail[0].title}</Td>
                        </tr>
                        <tr>
                          <Th>Official Title</Th>
                          <Td>{detail[0].synonyms}</Td>
                        </tr>
                        <tr>
                          <Th>Type</Th>
                          <Td>{detail[0].type}</Td>
                        </tr>
                        <tr>
                          <Th>Status</Th>
                          <Td>{detail[0].status}</Td>
                        </tr>
                        <tr>
                          <Th>Episodes</Th>
                          <Td>{detail[0].episodes}</Td>
                        </tr>
                        <tr>
                          <Th>Season</Th>
                          <Td>
                            {detail[0].season}
                            {' '}
                            {detail[0].year}
                          </Td>
                        </tr>
                        <tr>
                          <Th>Tags</Th>
                          <Td>
                            {detail[0].tags.map((tag) => (
                              <div className="quicksand p-1 mr-2 mt-2 float-left text-xs font-bold border bg-white rounded-xl" key={tag}>
                                {`${tag}`}
                              </div>
                            ))}
                          </Td>
                        </tr>
                        <tr>
                          <Th>Relations</Th>
                          <Td>
                            <ul>
                              {detail[0].relations.map((relasi) => (
                                <li>
                                  <Link to={`/details/${relasi.split('/').pop()}`}>
                                    {relasi}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </Td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex flex-col my-2">
                      <div className="space-y-3 w-full items-center justify-center">
                        <table className="table-auto row-span-1 md:col-span-1 sm:border w-full">
                          <thead>
                            <Th>See More Info</Th>
                          </thead>
                          <tbody className="text-xs border">
                            <tr>
                              <ul>
                                {detail[0].sources.map((src) => (
                                  <li>
                                    <a href={src}>
                                      {src}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Details.propTypes = {
//   props: PropTypes.string,
//   // title: PropTypes.string.isRequired,
// };

// Details.defaultProps = {
//   props: null,
// };

const Th = tw.th`
    sm:w-1/4
    bg-grayDark 
    text-white
    p-2
`;
const Td = tw.td`
    bg-white
    text-black
    p-2
    border
`;

export default Details;
