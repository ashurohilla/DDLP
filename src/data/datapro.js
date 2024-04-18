import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';


export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Create Quiz',
          icon: <BsKanban />,
          route: 'dashboard/quiz',
        },
        {
          name: 'Create Course',
          icon: <IoMdContacts />,
          route: 'Clientsprofiles',
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'Instructor & Trainer',
          icon: <AiOutlineShoppingCart />,
          route: 'instructorandtrainer',
        },
        {
          name: 'Logout',
          icon: <IoMdContacts />,
          route: 'logout',
        },
      ],
    },
  ];
