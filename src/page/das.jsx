import { useState } from "react";
import control from '../assets/control.png';
import calender from '../assets/Calendar.png';
import chart from '../assets/Chart.png';
import chart_fill from '../assets/Chart_fill.png';
import chat from '../assets/Chat.png';
import folder from '../assets/Folder.png';
import search from '../assets/Search.png';
import setting from '../assets/Setting.png';
import user from '../assets/User.png';
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: chart_fill },
    { title: "Inbox", src: chat },
    { title: "Accounts", src: user, gap: true },
    { title: "Schedule", src: calender },
    { title: "Search", src: search },
    { title: "Analytics", src: chart },
    { title: "Files", src: folder, gap: true },
    { title: "Setting", src: setting }
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center width-30%">
        <img
  src="https://ik.imagekit.io/growthx100/DIANA-FINAL-LOGO-1-svg%20(2).svg?updatedAt=1712596600568"
  className={`cursor-pointer duration-500 ${open && "rotate-[360deg] "}`}
  style={{ width: "30%" }}
/>

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default App;