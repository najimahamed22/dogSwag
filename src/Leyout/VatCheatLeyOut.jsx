import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import sms from "../assets/icon/sms.png";
import dog from "../assets/icon/dog.png";
import setting from "../assets/icon/setting.png";
import video from "../assets/icon/video.png";
import logout from "../assets/icon/logout.png";
import calender from "../assets/icon/calender.png";
const VatCheatLeyOut = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 flex flex-col font-semibold items-start justify-between  w-64 h-full border-e-2 border-slate-200 text-xl">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="Logo" />
              <h2 className="text-[#5F2600] font-bold text-2xl">DogSwag</h2>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <NavLink exact="true" className="p-3 flex items-center">
                  <img src={calender} className="mr-4 mt-1 h-7" alt="" />
                  Organizer
                </NavLink>

                <NavLink
                  to="/cheat"
                  exact="true"
                  className="p-3 flex bg-gradient-to-r from-[#8840E526] via-transparent to-[#FFCB0700] items-center">
                  <img src={sms} className="mr-4 mt-1 h-7" alt="" />
                  Vet Chat
                </NavLink>
                <NavLink exact="true" className="p-3 flex items-center">
                  <img src={video} className="mr-4 mt-1 h-7" alt="" />
                  Vet Talk
                </NavLink>
                <NavLink exact="true" className="p-3 flex items-center">
                  <img src={dog} className="mr-4 mt-1 h-7" alt="" /> Dog Profile
                </NavLink>
                <NavLink exact="true" className="p-3 flex items-center">
                  <img src={setting} className="mr-4 mt-1 h-7" alt="" />{" "}
                  Settings
                </NavLink>
              </div>
            </div>
            <NavLink to="/" className="p-3 flex">
              <img src={logout} className="mr-4 mt-1 " alt="" /> Log Out
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VatCheatLeyOut;
