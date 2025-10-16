import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gao-5">
      <img className="w-[400px]" src={logo} alt="logo" />
      <div className="mt-3">
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="font-semibold text-accent mt-2">
          {format(new Date(), "EEEE , MMMM MM , yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Header;
