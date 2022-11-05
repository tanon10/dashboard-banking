import { IoIosNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import User from "../../assets/user.png";
import Visa from "../../assets/Visa.png";
import TransactionList from "./TransactionList";

export default function ContentRight() {
  return (
    <section className="w-3/12 bg-cyan-50 rounded-tl-70px overflow-hidden px-14 items-center">
      <div className="pt-12 flex items-center space-x-9 justify-end">
        <IoIosNotificationsOutline size={20} />
        <BiUser size={20} />
        <img
          src={User}
          alt="avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
      <div className="card mt-9">
        <div className="relative p-5 text-white">
          <div className="text-2xl">John Smith</div>
          <div className="mt-10 space-y-2">
            <div className="text-sm">Amazon Platinium</div>
            <div className="text-lg">4756 .... .... 9018</div>
            <div className="flex justify-between relative">
              <span className="text-xl">$3.469.52</span>
              <img src={Visa} alt="VisaLogo" className="h-5" />
            </div>
          </div>
        </div>
      </div>
      <button className="my-10 py-3 rounded border border-addnewcard border-dashed w-full text-addnewcard">
        Add new card
      </button>
      <TransactionList />
    </section>
  );
}
