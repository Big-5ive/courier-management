import { useNavigate } from "react-router-dom";


const DDOurServices = ({ setServicesHover }) => {
  const nav = useNavigate();
  const handleServices = (val) => {
    if (val === "/storage") {
      nav("/storage");
    } else if (val === "/offshore") {
      nav("/offshore");
    } else if (val === "/ppm") {
      nav("/ppm");
    } else if (val === "/lhs") {
      nav("/lhs");
    }
  };
  return (
    <div className="ddAboutUs" onMouseLeave={() => setServicesHover(false)}>
      <p className="ddAboutUsText" onClick={() => handleServices("/offshore")}>
        Offshore Intake/Offtake Facilities1
      </p>
      <p className="ddAboutUsText" onClick={() => handleServices("/storage")}>
        Storage Facilities{" "}
      </p>
      <p className="ddAboutUsText" onClick={() => handleServices("/ppm")}>Petroleum Products Marketing</p>
      <p className="ddAboutUsText" onClick={() => handleServices("/lhs")}>Logistics & Haulage Services</p>
    </div>
  );
};

export default DDOurServices;
