import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Display success message
    toast.success("Your message has been sent successfully");

    // Clear form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="w-screen lg:h-[60vh] h-[4ovh] relative ">
        <img
          className="w-full h-full"
          src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/8-Banner-1.jpg"
          alt=""
        />
        <div className="absolute z-10 top-0 w-full h-full text-center flex items-center justify-center">
          <h3 className="text-white md:text-4xl text-2xl font-semibold">
            Contact Us Now
          </h3>
        </div>
      </section>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <ToastContainer />
        <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Let's talk with us</h2>
            <p className="text-gray-600 mb-2">
              Questions, comments, or suggestions? Simply fill in the form and
              we'll be in touch shortly.
            </p>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-purple-600 mr-3" />
              <p>1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-purple-600 mr-3" />
              <p>+1 234 678 9108 99</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-purple-600 mr-3" />
              <p>Contact@moralizer.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './ContactUs.css';
// import ScrollToTop from '../../Components/ScrollToTop';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic form validation
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
//       toast.error('Please fill in all fields');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     // Display success message
//     toast.success('Your message has been sent successfully');

//     // Clear form data
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };

//   return (
//     <>
//       <ToastContainer />
//       <ScrollToTop />
//       <div className="ContactheroContainer">
//         <img
//           className="AboutheroImage"
//           src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/8-Banner-1.jpg"
//           alt=""
//         />
//         <div className="AboutheroText">
//           <h3 className="AboutheroIntro max-[700px]:text-2xl">Contact Us Now</h3>
//         </div>
//       </div>

//       <div className="GetInTouchContainer">
//         <div className="GetInTouchWrapper">
//           <div className="GetInTouchLeft">
//             <div className="GetInTouchLeftWrapper">
//               <h1 className="GetInTouchTitle">Get In Touch</h1>
//               <p className="GetInTouchParagraphs"></p>
//               <p className="GetInTouchParagraphs"></p>
//               <p className="GetInTouchParagraphs"></p>
//             </div>
//           </div>
//           <div className="GetInTouchRight">
//             <p className="mb-5 GetInTouchTitle1">Get in Touch</p>
//             <form onSubmit={handleSubmit} className="GetInTouchRightWrapper">
//               <div className="GetInTouchInputContainer">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="GetInTouchInput"
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="GetInTouchInput"
//                 />
//               </div>
//               <div className="GetInTouchInputContainer">
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="GetInTouchInput"
//                 />
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject"
//                   className="GetInTouchInput"
//                 />
//               </div>
//               <textarea
//                 className="GetInTouchTextArea"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Type Your Message Here..."
//               ></textarea>
//               <button type="submit" className="submit">SUBMIT</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
