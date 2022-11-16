import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import { BiEdit, BiTrash } from "react-icons/bi";
import "react-swipeable-list/dist/styles.css";
import User from "../../src/assets/user.png";

export const Swipeable = () => {
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("acción de deslizar activada")}
      >
        <div className="flex items-center px-4">
          <BiTrash size={30} color="white" />
        </div>
      </SwipeAction>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("acción de deslizar activada")}
      >
        <div className="flex items-center px-4">
          <BiEdit size={30} color="white" />
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div className="my-10 bg-indigo-700 rounded-2xl">
      <SwipeableList threshold={0.9} type={Type.IOS}>
        <SwipeableListItem trailingActions={trailingActions()}>
          <div className="bg-white p-4 rounded-xl border border-gray-200 w-full flex">
            <img
              src={User}
              alt="avatar"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-base ml-10">
              <div className="text-gray-700">Push</div>
              <div className="text-gray-400">122332114444</div>
            </div>
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  );
};
