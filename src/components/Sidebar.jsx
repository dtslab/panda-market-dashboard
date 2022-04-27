import { FiShoppingBag, FiSettings } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import panda from "../assets/panda.png";
import Links from "./Links";

export default function Sidebar() {
  const links1 = [
    {
      text: "Overview",
      icon: FiShoppingBag,
      active: true,
    },
    {
      text: "Orders",
      icon: HiOutlineShoppingCart,
    },
    {
      text: "Customers",
      icon: GiSchoolBag,
    },
    {
      text: "Transactions",
      icon: IoWalletOutline,
    },
    {
      text: "Shipment",
      icon: RiTruckLine,
    },
  ];

  const links2 = [
    {
      text: "Help Centre",
      icon: BiHelpCircle,
    },
    {
      text: "Overview",
      icon: FiSettings,
    },
    {
      text: "Overview",
      icon: MdLogout,
    },
  ];

  return (
    <div className="sidebar">
      <div className="brand">Panda Market</div>
      <div className="links">
        <Links links={links1} />
        <Links links={links2} />
      </div>
      <div className="pro">
        <div className="image">
          <img src={panda} alt="" />
        </div>
        <h3>Panda Market Pro</h3>
        <h5>Get Access to All Features on Panda Market Pro</h5>
        <button>Get Pro</button>
      </div>
    </div>
  );
}
