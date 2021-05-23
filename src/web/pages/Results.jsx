import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactHover, { Trigger, Hover } from 'react-hover';
// import axios from 'axios';
import Footer from '../components/Footer';
import Search from '../components/Searchbar';

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: -10,
};

function Results() {
  const [data] = useState([{}, {}, {}, {}, {}]);
  const [tag] = useState([{}, {}, {}, {}, {}]);
  // const [film, setFilm] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/anime/')
  //     .then((response) => {
  //       console.log(response);
  //       setFilm(response.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

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
        <h1 className="text-xl my-2">Search Results</h1>
        <table className="table-auto border-collapse w-full bg-white rounded-b-xl border">
          <thead className="w-full">
            <tr className="text-white bg-grayDark w-full">
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2 text-left">Title</th>
            </tr>
          </thead>
          <tbody className="text-md text-black text-center">
            {data.map((e) => (
              <tr>
                <td className="px-4 py-1 w-1/4">
                  Anime
                </td>
                <td className="px-4 py-1 text-left text-sm">
                  <div className="w-1/2">

                    <ReactHover options={optionsCursorTrueWithMargin}>

                      <Trigger type="trigger">
                        <Link to="/details/">
                          {e.data}
                          Tokyo Revengers
                        </Link>
                      </Trigger>

                      <Hover type="hover">
                        <img
                          className="w-48 rounded-md"
                          alt="preview"
                          src="https://cdn.myanimelist.net/images/anime/1493/113949.jpg"
                        />
                      </Hover>
                    </ReactHover>

                  </div>

                  {tag.map((prop) => (
                    <div className="quicksand p-1 mr-2 mt-2 float-left text-xs font-bold border bg-white rounded-xl">
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
      <div className="flex flex-col bg-white sm:rounded-lg my-16 m-2 sm:mx-24 lg:mx-80 quicksand border">
        <div className="bg-grayDark w-full sm:rounded-t-md">
          <h1 className="text-white text-md sm:text-left p-2 mx-5">Tentang TMDB</h1>
        </div>
        <p className="p-4 text-xs mx-4">
          TMDB (TV Movie Database) merupakan aplikasi berbasis web penyimpanan
          database mengenai film dan tv show.
          User dapat mencari film berdasarkan judul, jumlah episode,
          status film (finished, currently, upcoming), jumlah season, kategori tags.
          Aplikasi TMDB pun dapat menampilkan relasi antar satu film dengan film yang
          lainnya dengan begitu user dapat tertarik untuk menonton film yang selain dicari.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
