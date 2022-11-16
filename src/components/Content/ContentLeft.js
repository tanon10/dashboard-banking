import {
  BiCreditCard,
  BiDoughnutChart,
  BiSearch,
  BiUser,
  BiHome,
} from "react-icons/bi";
import Card from "../Card";
import { Swipeable } from "../Swipeable";

export default function ContentLeft() {
  return (
    <section className="content-left p-10 w-9/12 flex-1 h-screen overflow-y-scroll">
      <div className="w-full border border-gray-300 rounded-lg flex items-center py-3">
        <BiSearch className="mx-2" />
        <input type="text" className="flex-1 mx-2" placeholder="Search" />
      </div>

      <h3 className="text-xl text-indigo-700 my-8">Welcome back Tanon10</h3>

      <div className="flex flex-row space-x-16">
        <Card
          bgColor={"bg-green-600"}
          txtColor={"text-green-600"}
          icon={<BiCreditCard size={30} />}
          label={"Transfer via card number"}
        />
        <Card
          bgColor={"bg-indigo-600"}
          txtColor={"text-indigo-600"}
          icon={<BiDoughnutChart size={30} />}
          label={"Transfer to another bank"}
        />
        <Card
          bgColor={"bg-orange-600"}
          txtColor={"text-orange-600"}
          icon={<BiUser size={30} />}
          label={"Transfer to the same bank"}
        />
        <Card
          bgColor={"bg-teal-600"}
          txtColor={"text-teal-600"}
          icon={<BiHome size={30} />}
          label={"Transfer to another bank"}
        />
      </div>
      <div>
        <Swipeable />
        <Swipeable />
        <Swipeable />
        <Swipeable />
        <Swipeable />
        <Swipeable />
      </div>
    </section>
  );
}
