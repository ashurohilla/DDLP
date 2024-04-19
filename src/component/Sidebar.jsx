import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from '../data/datapro';
import { useStateContext } from '../Context/ContextProvider';

const Sidebar = () => {
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="flex">
      <div className=" p-8 flex-shrink-0">
        <div className="flex items-center gap-3 mb-10">
          <SiShopware className="text-3xl text-blue-500" />
          <span className="text-xl font-bold">Diana DDLP</span>
        </div>
        <div>
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 mb-4 text-lg uppercase">{item.title}</p>
              {item.links.map((Link) => (
                <NavLink
                  to={`/${Link.route}`}
                  key={Link.name}
                  onClick={() => {}}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#6763db" : '',
                    color: isActive ? "#fff" : '',
                    borderRadius: 10
                  })}
                  className={({ isActive }) => isActive ? activeLink : normalLink}
                >
                  {Link.icon}
                  <span className="capitalize">{Link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow">
        {/* Content goes here */}
      </div>
    </div>
  );
}

export default Sidebar;
