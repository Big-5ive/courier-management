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
              We offer one of the largest offshore liquid bulk terminals
              (SPM/CBM) in Africa to provide efficient discharge of products for
              operators, complemented by world class storage facilities and
              retail outlets/channels in all six geopolitical zones in Nigeria.
              We continually develop strategic infrastructure to facilitate the
              operational efficiency of our integrated bouquet of services
            </p>
          </div>
        </div>
        <div className="secondSectionPictureContainer">
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/Offshore-Intake-Offtake-Facilities1.jpg"
                alt=""
              />
            </div>
            <a href="/offshore" className="secondSectionPicture1Btn">Offshore intake/offtake Facilities</a>
          </div>
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/Storage-Facilities1.jpg"
                alt=""
              />
            </div>
            <a href="/storage" className="secondSectionPicture1Btn">Storage Facilities</a>
          </div>
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/Petroleum-Product-Service-Stations1.jpg"
                alt=""
              />
            </div>
            <a href="ppm" className="secondSectionPicture1Btn">Petroleum Service Station</a>
          </div>
          <div className="secondSectionPicture1">
            <div className="secondSectionPicture1Img">
              <img
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/Haulage-Services1.jpg"
                alt=""
              />
            </div>
            <a href="lhs" className="secondSectionPicture1Btn">Logistics & Haulage Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
