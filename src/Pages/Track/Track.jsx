import React, { useState } from "react";
import axios from "axios";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const headers = [
  "Shipping Date",
  "Sender's Name",
  "Sender's Phone",
  "Sender's Address",
  "Receiver's Name",
  "Receiver's Phone",
  "Receiver's Email",
  "Receiver's Address",
  "Receiver's City",
  "Receiver's Postal Code",
  "Receiver's Country",
  "Description",
  "Dimensions",
  "Shipment Status",
  "Tracking ID",
  "Parcel Code",
  "Parcel Expected Date",
  "Package ID",
];

const Track = () => {
  const [trackingId, setTrackingId] = useState("");
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!trackingId) {
      toast.error("Please enter a tracking number.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://asianpacificexpress-api.onrender.com/track-package",
        { trackingId }
      );
      const data = response.data.data;
      setPackageDetails(data);
      toast.success("Package detail successfully fetched!");
    } catch (error) {
      setError(
        "The tracking code is invalid. Please check your tracking number."
      );
    } finally {
      setLoading(false);
    }
  };

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
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <button
                className="bg-[#FF7519] text-white px-4 py-2 rounded-md"
                onClick={handleTrack}
                disabled={loading}
              >
                {loading ? "Tracking..." : "Track"}
              </button>
            </div>
            {error && (
              <div className="bg-gray-50 p-4 border border-gray-300 rounded-md flex items-center">
                <FaInfoCircle className="text-2xl text-gray-500 mr-2" />
                <div>
                  <p className="font-bold">{trackingId}</p>
                  <p>{error}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {packageDetails && (
          <>
            <div className="w-[90%] bg-white overflow-auto mt-8 shadow-lg rounded-lg hide-scrollbar">
              <table className="min-w-full table-fixed divide-y divide-gray-300 rounded-lg">
                <thead className="bg-[#017FED]">
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
                  <tr className="hover:bg-blue-50">
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.shippingDate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.sendersName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.sendersPhoneNumber}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.sendersAddress}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.receiversName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.receiversPhoneNumber}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.receiversEmail}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.receiversAddress}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.receiversCity}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.receiversPostalCode}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.receiversCountry}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.description}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.dimensions}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.shipmentStatus}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.trackingId}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.parcelCode}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.parcelExpectedDate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.packageId}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-[90%] bg-white overflow-auto mt-8 shadow-lg rounded-lg hide-scrollbar">
              <table className="min-w-full table-fixed divide-y divide-gray-300 rounded-lg">
                <thead className="bg-[#017FED]">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-white"
                    >
                      Shipping Condition
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-blue-50">
                    <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
                      {packageDetails.shippingCondition}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Track;










// import React, { useState } from "react";
// import axios from "axios";
// import { FaInfoCircle } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const headers = [
//   "Shipping Date",
//   "Sender's Name",
//   "Sender's Phone",
//   "Sender's Address",
//   "Receiver's Name",
//   "Receiver's Phone",
//   "Receiver's Email",
//   "Receiver's Address",
//   "Receiver's City",
//   "Receiver's Postal Code",
//   "Receiver's Country",
//   "Description",
//   "Dimensions",
//   "Shipment Status",
//   "Shipping Condition",
//   "Tracking ID",
//   "Parcel Code",
//   "Parcel Expected Date",
//   "Package ID",
//   "Package Image",
// ];

// const Track = () => {
//   const [trackingId, setTrackingId] = useState("");
//   const [packageDetails, setPackageDetails] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleTrack = async () => {
//     if (!trackingId) {
//       toast.error("Please enter a tracking number.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     try {
//       console.log(trackingId);

//       const response = await axios.post(
//         "https://asianpacificexpress-api.onrender.com/track-package",
//         { trackingId }
//       );
//       const data = response.data.data;
//       setPackageDetails(data);
//       toast.success("Package detail successfully fetched!");
//     } catch (error) {
//       setError(
//         "The tracking code is invalid. Please check your tracking number."
//       );
//       // toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col mt-[75px]">
//         <div className="w-full max-w-2xl p-4">
//           <h1 className="text-3xl font-bold text-center mb-8">TRACK & TRACE</h1>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <div className="flex flex-col sm:flex-row items-center mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter your tracking number(s)"
//                 className="flex-grow p-2 border border-gray-300 rounded-md mb-4 sm:mb-0 sm:mr-4"
//                 value={trackingId}
//                 onChange={(e) => setTrackingId(e.target.value)}
//               />
//               <button
//                 className="bg-[#FF7519] text-white px-4 py-2 rounded-md"
//                 onClick={handleTrack}
//                 disabled={loading}
//               >
//                 {loading ? "Tracking..." : "Track"}
//               </button>
//             </div>
//             {error && (
//               <div className="bg-gray-50 p-4 border border-gray-300 rounded-md flex items-center">
//                 <FaInfoCircle className="text-2xl text-gray-500 mr-2" />
//                 <div>
//                   <p className="font-bold">{trackingId}</p>
//                   <p>{error}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         {packageDetails && (
//           <div className="w-[90%] bg-white overflow-auto mt-8 shadow-lg rounded-lg">
//             <table className="min-w-full table-fixed divide-y divide-gray-300 rounded-lg">
//               <thead className="bg-[#017FED]">
//                 <tr>
//                   {headers.map((title) => (
//                     <th
//                       key={title}
//                       scope="col"
//                       className="px-3 py-3.5 text-center text-sm font-semibold text-white"
//                     >
//                       {title}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 bg-white">
//                 <tr className="hover:bg-blue-50">
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.shippingDate}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.sendersName}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.sendersPhoneNumber}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.sendersAddress}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.receiversName}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.receiversPhoneNumber}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.receiversEmail}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.receiversAddress}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.receiversCity}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.receiversPostalCode}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.receiversCountry}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.description}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.dimensions}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.shipmentStatus}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.shippingCondition}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.trackingId}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.parcelCode}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.parcelExpectedDate}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     {packageDetails.packageId}
//                   </td>
//                   {packageDetails.packageImage === "No image available" ? (
//                     <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                       {packageDetails.packageImage}
//                     </td>
//                   ) : (
//                     <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                       <img
//                         src={packageDetails.packageImage}
//                         alt="Package"
//                         className="w-16 h-16 mx-auto"
//                       />
//                     </td>
//                   )}
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Track;
















// import React from "react";
// import { FaInfoCircle } from "react-icons/fa";

// const headers = ["Session ID", "Date", "Start Time", "End Time", "Geo fencing"];
// const sessions = ["Session ID", "Date", "Start Time", "End Time", "Geo fencing"];
// const Track = () => {
//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col mt-[75px]">
//         <div className="w-full max-w-2xl p-4">
//           <h1 className="text-3xl font-bold text-center mb-8">TRACK & TRACE</h1>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <div className="flex flex-col sm:flex-row items-center mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter your tracking number(s)"
//                 className="flex-grow p-2 border border-gray-300 rounded-md mb-4 sm:mb-0 sm:mr-4"
//               />
//               <button className="bg-red-600 text-white px-4 py-2 rounded-md">
//                 Track
//               </button>
//             </div>
//             <div className="bg-gray-50 p-4 border border-gray-300 rounded-md flex items-center">
//             <FaInfoCircle className="text-2xl text-gray-500 mr-2" />
//             <div>
//               <p className="font-bold">123</p>
//               <p>The tracking code is invalid. Please check your tracking number.</p>
//             </div>
//           </div>
//           </div>
//         </div>
//        <div className="w-[90%] bg-red-700 overflow-auto ">
//        <table className="min-w-full table-fixed divide-y divide-gray-300 rounded-lg">
//             <thead className=" bg-[#017FED]">
//               <tr>
//                 {headers.map((title) => (
//                   <th
//                     key={title}
//                     scope="col"
//                     className="px-3 py-3.5 text-center text-sm font-semibold text-white"
//                   >
//                     {title}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200 bg-white">
//               {sessions.map((session, index) => (
//                 <tr
//                   key={index}

//                   className={`hover:bg-blue-50 cursor-pointer`}
//                 >
//                   <td
//                     // title={session._id}
//                     className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700"
//                   >
//                     dfhgjghjk
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                     Again Time
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                    TimeAgin
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700">
//                    todayTime
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-5 text-center text-sm text-gray-700 flex justify-center">
//                   HelloWorld
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//        </div>
//       </div>
//     </>
//   );
// };

// export default Track;
