import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const headers = ["Session ID", "Date", "Start Time", "End Time", "Geo fencing"];
const sessions = ["Session ID", "Date", "Start Time", "End Time", "Geo fencing"];
const Track = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col mt-[75px]">
        <div className="w-full max-w-2xl p-4">
          <h1 className="text-3xl font-bold text-center mb-8">TRACK & TRACE</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <input
                type="text"
                placeholder="Enter your tracking number(s)"
                className="flex-grow p-2 border border-gray-300 rounded-md mb-4 sm:mb-0 sm:mr-4"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                Track
              </button>
            </div>
            <div className="bg-gray-50 p-4 border border-gray-300 rounded-md flex items-center">
            <FaInfoCircle className="text-2xl text-gray-500 mr-2" />
            <div>
              <p className="font-bold">123</p>
              <p>The tracking code is invalid. Please check your tracking number.</p>
            </div>
          </div>
          </div>
        </div>
       <div className="w-[90%] bg-red-700 overflow-auto ">
       <table className="min-w-full table-fixed divide-y divide-gray-300 rounded-lg">
            <thead className=" bg-[#017FED]">
              <tr>
                {headers.map((title) => (
                  <th
                    key={title}
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-white"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {sessions.map((session, index) => (
                <tr
                  key={index}
                 
                  className={`hover:bg-blue-50 cursor-pointer`}
                >
                  <td
                    // title={session._id}
                    className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700"
                  >
                    dfhgjghjk
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                    Again Time
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                   TimeAgin
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                   todayTime
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700 flex justify-center">
                  HelloWorld
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       </div>
      </div>
    </>
  );
};

export default Track;
