import "./Company.css";
import WhoWeAre from "./WhoWeAre";

const Company = () => {
  return (
    <>
      <div className="company">
        <div className="company__container">
          <div className="company__left">
            <div className="company__image-container">
              <img
                src="https://media.istockphoto.com/id/1396631734/photo/female-warehouse-worker-scanning-packages-at-storage-compartment.webp?b=1&s=170667a&w=0&k=20&c=Mrk4q_vuBirJbCG-BB9BShUjpKKFde7wvnypAwW0HIA="
                alt=""
              />
            </div>
          </div>
          <div className="company__right">
            <div className="company__content">
              <div className="company__welcome">
                <h3 className="company__welcome-title">Welcome to</h3>
                <div className="company__dash"></div>
              </div>
              <div className="company__intro">
                <h1 className="company__intro-title">Asian Pacific Express</h1>
                <span className="company__intro-subtitle">ISO, 2010 certified company.</span>
              </div>
              <div className="company__description">
                <p>
                  At Asian Pacific Express, we pride ourselves on being more than just a delivery 
                  company—we're a trusted partner in your logistics journey. Founded on the principles 
                  of reliability, speed, and exceptional customer service, we have been committed to 
                  connecting people and businesses through our comprehensive delivery solutions.

                  Our dedicated team of professionals works tirelessly to ensure that every package, no 
                  matter how big or small, is handled with the utmost care and urgency. With cutting-edge 
                  technology and a customer-centric approach, we provide real-time tracking, secure handling, 
                  and timely deliveries to meet your unique needs.

                  We believe in making a difference, one delivery at a time. Whether it's a last-minute 
                  gift, essential documents, or large freight, we is here to ensure your 
                  parcels reach their destination safely and efficiently. Trust us to deliver your world, one 
                  package at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
    </>
  );
};

export default Company;













// import "./Company.css";
// import WhoWeAre from "./WhoWeAre";
// // import worker from "../../src/assets/worker.jpg"

// const Company = () => {
//   return (
//     <>
//       <div className="wholebody">
//         <div className="body">
//           <div className="bodyleft">
//             <div className="bodyleftimage">
//               <img
//                 src="https://media.istockphoto.com/id/1396631734/photo/female-warehouse-worker-scanning-packages-at-storage-compartment.webp?b=1&s=170667a&w=0&k=20&c=Mrk4q_vuBirJbCG-BB9BShUjpKKFde7wvnypAwW0HIA="
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="bodyright">
//             <div className="bodyrightholder">
//               <div className="welcome">
//                 <h3 className="welcomeH3">welcome to</h3>
//                 <div className="dash"></div>
//               </div>
//               <div className="pinnacle">
//                 <h1>Asian Pacific Express</h1>
//                 <span>ISO, 2010 certified company.</span>
//               </div>
//               <div className="writeupholder">
//                 <div className="writeup">
//                   <span>
//                       At Asian Pacific Express, we pride ourselves on being more than just a delivery 
//                       company—we're a trusted partner in your logistics journey. Founded on the principles 
//                       of reliability, speed, and exceptional customer service, we have been committed to 
//                       connecting people and businesses through our comprehensive delivery solutions.

//                       Our dedicated team of professionals works tirelessly to ensure that every package, no 
//                       matter how big or small, is handled with the utmost care and urgency. With cutting-edge 
//                       technology and a customer-centric approach, we provide real-time tracking, secure handling, 
//                       and timely deliveries to meet your unique needs.

//                       We believe in making a difference, one delivery at a time. Whether it's a last-minute 
//                       gift, essential documents, or large freight, we is here to ensure your 
//                       parcels reach their destination safely and efficiently. Trust us to deliver your world, one 
//                       package at a time.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <WhoWeAre />
//     </>
//   );
// };

// export default Company;
