import { useNavigate } from "react-router-dom";

type Props = {
  setServicesHover: React.Dispatch<React.SetStateAction<boolean>>;
};
const DDOurServices: React.FC<Props> = ({ setServicesHover }) => {
  const nav = useNavigate();
  const handleServices = (val: string) => {
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
        Offshore Intake/Offtake Facilities
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
