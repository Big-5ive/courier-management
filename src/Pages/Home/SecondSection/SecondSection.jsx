import "./SecondSection.css";

const SecondSection = () => {
  return (
    <div className="secondSectionContainer">
      <div className="secondSectionWrapper">
        <div className="secondSectionWriteUpContainer">
          <div className="secondSectionTitleContainer">
            <p className="secondSectionTitle">Our Services</p>
            <p className="secondSectionHeading">What We Do</p>
          </div>
          <div className="secondSectionWriteup">
            <p className="secondSectionWriteupContent">
              we offer a comprehensive range of delivery solutions tailored to meet 
              your unique needs. Whether you're sending a single document or managing 
              complex logistics, we've got you covered.
            </p>
          </div>
        </div>
        <div className="secondSectionPictureContainer">
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="./plane.jpg"
                alt=""
              />
            </div>
            <a href="/offshore" className="secondSectionPicture1Btn">International Shipping</a>
          </div>
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="https://media.istockphoto.com/id/1177117400/photo/coworkers-rushing-to-load-packages-in-a-delivery-van.webp?b=1&s=170667a&w=0&k=20&c=XCUyc34UIARk0eRjBWkIIseX9Q2UNxOB3TS6wSQ5bag="
                alt=""
              />
            </div>
            <a href="/storage" className="secondSectionPicture1Btn"> Freight Services</a>
          </div>
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="https://media.istockphoto.com/id/1287828123/photo/modern-courier-delivery-at-home-shopogolic-and-online-shopping.webp?b=1&s=170667a&w=0&k=20&c=fm-LrOeEmJ4U2HINSSLG9F4mHoPLtsU-x-TKL1ePuy8="
                alt=""
              />
            </div>
            <a href="ppm" className="secondSectionPicture1Btn">Real-Time Tracking</a>
          </div>
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="https://images.unsplash.com/photo-1492168732976-2676c584c675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <a href="lhs" className="secondSectionPicture1Btn">Custom Logistics Solutions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
