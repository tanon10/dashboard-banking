import Logo from "../assets/logo.png";
import {
  BiHomeAlt,
  BiCategoryAlt,
  BiCreditCard,
  BiGroup,
  BiCalculator,
} from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

export default function Sidebar() {
  const menu = [
    { id: 1, name: "Home", icon: <BiHomeAlt /> },
    { id: 2, name: "Account", icon: <BiCategoryAlt /> },
    { id: 3, name: "Cards", icon: <BiCreditCard /> },
    { id: 4, name: "Contacts", icon: <BiGroup /> },
    { id: 5, name: "Load Calculator", icon: <BiCalculator /> },
    { id: 6, name: "Settings", icon: <CiSettings /> },
  ];

  const schedulePayments = ["Montly Rent", "Food Payment", "Utility Bills"];

  return (
    <div className="h-screen border-r border-gray-200 w-64 p-8">
      <div className="flex flex-row items-center">
        <img src={Logo} alt="tanon10" className="w-9 h-9" />
        <div>Olith Banking</div>
      </div>
      <div className="mt-16">
        <div>
          <div className="mb-6 text-indigo-700">Menu</div>
          <ul className="space-y-7">
            {menu.map((val) => {
              return (
                <li
                  key={val.id}
                  className="flex flex-rom items-center text-gray-500"
                >
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="mt-20 text-indigo-700">Schedule Payments</div>
          <div className="mt-6 space-y-7">
            {schedulePayments.map((val) => {
              return (
                <div className="flex items-center text-gray-500">
                  <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full" />
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
