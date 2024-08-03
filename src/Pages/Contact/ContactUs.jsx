import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css';
import ScrollToTop from '../../Components/ScrollToTop';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Display success message
    toast.success('Your message has been sent successfully');

    // Clear form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <div className="ContactheroContainer">
        <img
          className="AboutheroImage"
          src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/8-Banner-1.jpg"
          alt=""
        />
        <div className="AboutheroText">
          <h3 className="AboutheroIntro max-[700px]:text-2xl">Contact Us Now</h3>
        </div>
      </div>

      <div className="GetInTouchContainer">
        <div className="GetInTouchWrapper">
          <div className="GetInTouchLeft">
            <div className="GetInTouchLeftWrapper">
              <h1 className="GetInTouchTitle">Get In Touch</h1>
              <p className="GetInTouchParagraphs"></p>
              <p className="GetInTouchParagraphs"></p>
              <p className="GetInTouchParagraphs"></p>
            </div>
          </div>
          <div className="GetInTouchRight">
            <p className="mb-5 GetInTouchTitle1">Get in Touch</p>
            <form onSubmit={handleSubmit} className="GetInTouchRightWrapper">
              <div className="GetInTouchInputContainer">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="GetInTouchInput"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="GetInTouchInput"
                />
              </div>
              <div className="GetInTouchInputContainer">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="GetInTouchInput"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="GetInTouchInput"
                />
              </div>
              <textarea
                className="GetInTouchTextArea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message Here..."
              ></textarea>
              <button type="submit" className="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
