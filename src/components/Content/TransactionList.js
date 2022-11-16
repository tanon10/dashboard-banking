import {
  MdWaterDrop,
  MdOutlineElectricalServices,
  MdMonetizationOn,
  MdOutlineFactCheck,
} from "react-icons/md";

export default function TransactionList() {
  const today = [
    { name: "Water Bill", status: "Unsuccessfully", price: "-$280" },
  ];
  const yesterday = [
    {
      name: "Income: Salary Oct",
      status: "",
      price: "+$1200",
      icon: <MdMonetizationOn color="white" />,
    },
    {
      name: "Electric Bill",
      status: "Successfully",
      price: "-$480",
      icon: <MdOutlineElectricalServices color="white" />,
    },
    {
      name: "Income : Jane transfers",
      status: "",
      price: "+$500",
      icon: <MdOutlineFactCheck color="white" />,
    },
    {
      name: "Internet Bill",
      status: "Successfully",
      price: "-$100",
      icon: <MdOutlineFactCheck color="white" />,
    },
  ];

  const colors = (status) => {
    switch (status) {
      case "Successfully":
        return `blue-600`;

      case "":
        return `red-600`;

      default:
        return `orange-600`;
    }
  };

  return (
    <section>
      <div>
        <h4 className="text-gray-400">Today</h4>
        <div>
          {today.map((val) => {
            return (
              <div className="flex flex-row items-center border-b border-b-gray-200 py-3">
                <div className="h-10 w-10 bg-primaryBank rounded-lg flex items-center justify-center mr-3">
                  <MdWaterDrop color="white" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium">{val.name}</div>
                  <div className="text-xs">{val.status}</div>
                </div>
                <div className="text-red-600">{val.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-gray-400">Yesterday</h4>
        <div>
          {yesterday.map((val) => {
            return (
              <div className="flex flex-row items-center border-b border-b-gray-200 py-3">
                <div
                  className={`h-10 w-10  rounded-lg flex items-center justify-center mr-3 bg-${colors(
                    val.status
                  )}`}
                >
                  {val.icon}
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium">{val.name}</div>
                  <div className="text-xs">{val.status}</div>
                </div>
                <div className={`text-${colors(val.status)}`}>{val.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
