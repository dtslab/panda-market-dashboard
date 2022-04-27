import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs";
import avatar from "../assets/avatarImage.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h2>Dashboard</h2>
        <span>Detailed information about your store</span>
      </div>
      <div className="container">
        <div className="search">
          <BiSearchAlt />
          <input type="text" placeholder="search ..." />
        </div>
        <div className="profile">
          <FiBell className="bell" />
          <div className="image">
            <img src={avatar} alt="" />
          </div>
          <div className="profile_name">
            <h4>Papa Panda</h4>
            <h6>Admin</h6>
          </div>
          <BsFillCaretDownFill />
        </div>
      </div>
    </div>
  );
}
