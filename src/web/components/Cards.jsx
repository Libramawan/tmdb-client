import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import tw from 'tailwind-styled-components';

import ReactHover, { Trigger, Hover } from 'react-hover';
import { Link } from 'react-router-dom';

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: -20,
};

function Cards() {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-md quicksand border sm:border-none my-4 lg:w-2/3">
      <div className="justify-items-stretch p-0 ">
        <img className="rounded-t-md sm:rounded-lg shadow-xl w-full sm:w-96" src="https://cdn.myanimelist.net/images/anime/1493/113949.jpg" alt="cover" />
      </div>
      <div className="flex flex-col w-full sm:ml-2">
        <div className="bg-grayDark mt-1 w-full">
          <h1 className="text-white text-lg sm:text-2xl text-center sm:text-left p-2">Tokyo Revenger</h1>
        </div>
        <div className="grid grid-rows-1">
          <table className="table-auto row-span-1 sm:border w-full my-2">
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
                  <ReactHover options={optionsCursorTrueWithMargin}>

                    <Trigger type="trigger">
                      <Link to="/">
                        Boku dake ga Inai Machi
                      </Link>
                    </Trigger>

                    <Hover type="hover">
                      <img
                        className="w-48"
                        alt="preview"
                        src="https://cdn.myanimelist.net/images/anime/1493/113949.jpg"
                      />
                    </Hover>
                  </ReactHover>
                  <ReactHover options={optionsCursorTrueWithMargin}>

                    <Trigger type="trigger">
                      <Link to="/">
                        Boku dake ga Inai Machi
                      </Link>
                    </Trigger>

                    <Hover type="hover">
                      <img
                        className="w-48"
                        alt="preview"
                        src="https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </Hover>
                  </ReactHover>

                </Td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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
`;

export default Cards;
