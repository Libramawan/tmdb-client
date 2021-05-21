import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-sm quicksand">
      <div className="justify-items-stretch p-0 sm:p-4">
        <img className="border-4 shadow-2xl w-full sm:w-96" src="https://cdn.myanimelist.net/images/anime/1493/113949.jpg" alt="cover" />
      </div>
      <div className="flex flex-col w-full">
        <div className="bg-purple-light mt-2 w-full rounded-sm">
          <h1 className="text-white text-lg sm:text-2xl text-center sm:text-left p-2">Tokyo Revengers</h1>
        </div>
        <div className="grid grid-rows-1 sm:grid-cols-2">
          <table className="table-auto row-span-1 border-2 w-full my-2">
            <tbody className="text-xs">
              <tr>
                <Th>Main Title</Th>
                <Td>Tokyo Revengers</Td>
              </tr>
              <tr>
                <Th>Official Title</Th>
                <Td>東京リベンジャーズ</Td>
              </tr>
              <tr>
                <Th>Type</Th>
                <Td>TV</Td>
              </tr>
              <tr>
                <Th>Status</Th>
                <Td>CURRENTLY</Td>
              </tr>
              <tr>
                <Th>Episodes</Th>
                <Td>2</Td>
              </tr>
              <tr>
                <Th>Season</Th>
                <Td>Spring 2021</Td>
              </tr>
              <tr>
                <Th>Tags</Th>
                <Td>
                  action,
                  drama,
                  manga,
                  romance,
                  shounen,
                  time travel
                </Td>
              </tr>
              <tr>
                <Th>Relations</Th>
                <Td>
                  <Link to="/">
                    Boku dake ga Inai Machi
                  </Link>
                </Td>
              </tr>
            </tbody>
          </table>
          <div className="p-4">
            <h1 className="text-md font-bold mb-5">Sinopsis:</h1>
            <p className="text-xs mb-5">
              Watching the news, Hanagaki Takemichi learns that his girlfriend
              from way back in middle school, Tachibana Hinata, has died.
              The only girlfriend he ever had was just killed by a villainous group
              known as the Tokyo Manji Gang. He lives in a crappy apartment with thin walls,
              and his six-years-younger boss treats him like an idiot.
              Plus, he is a complete and total virgin...At the height of his rock-bottom life,
              he suddenly time-leaps twelve years back to his middle school days!! To save Hinata,
              and change the life he spent running away,
              hopeless part-timer Takemichi must aim for the top of
              Kantos most sinister delinquent gang!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Th = tw.th`
    sm:w-1/4
    bg-grey 
    text-white
    p-2
`;
const Td = tw.td`
    bg-white
    text-black
    p-2
`;

export default Cards;
