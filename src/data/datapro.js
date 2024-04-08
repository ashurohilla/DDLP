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
          name: 'Lead Management',
          icon: <BsKanban />,
          route: 'LeadManagement',
        },
        {
          name: 'Client Profiles',
          icon: <IoMdContacts />,
          route: 'Clientsprofiles',
        },
        {
          name: 'Enrollment & Registration',
          icon: <FiEdit />,
          route: 'EnrollmentandRegistration',
        },
        {
          name: 'Courses & Program Management',
          icon: <FiShoppingBag />,
          route: 'CoursesandProgrammanagement',
          
        },
        
        {
          name: 'Hiring Candidate List',
          icon: <IoMdContacts />,
          route: 'hiring',
          
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
          name: 'Login to LMS',
          icon: <IoMdContacts />,
          route: 'LMSLogin',
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'Calendar & Scheduling',
          icon: <AiOutlineCalendar />,
          route: 'Calendar',
        },
        {
          name: 'Document Management',
          icon: <BsKanban />,
          route: 'Document_Management',
        },
        {
          name: 'Support & Ticketing',
          icon: <FiEdit />,
          route: 'support',
        },
        {
          name: 'Compliance & Security',
          icon: <AiOutlineStock />,
          route: 'Security',
        },
        {
          name: 'Campaign',
          icon: <AiOutlineBarChart />,
          route: 'campaign',
        },
        {
          name: 'Generate Certificate',
          icon: <AiOutlineBarChart />,
          route: 'Generate-Certificate',
        },
        // {
        //   name: 'Email Editor',
        //   icon: <FiPieChart />,
        //   route: 'GrapesMain',
        // },
      ],
    },
    // {
    //   title: 'Charts',
    //   links: [
    //     {
    //       name: 'Mobile Access',
    //       icon: <AiOutlineStock />,
    //       route: 'Mobile',
    //     },
    //     {
    //       name: 'Feedback & Surveys',
    //       icon: <AiOutlineAreaChart />,
    //       route: 'Feedback',
    //     },
  
    //     {
    //       name: 'Integration',
    //       icon: <AiOutlineBarChart />,
    //       route: 'Integration',
    //     },
    //     {
    //       name: 'Customization & Scalability',
    //       icon: <FiPieChart />,
    //       route: 'Customization',
    //     },
    //     {
    //       name: 'User Training & Support',
    //       icon: <RiStockLine />,
    //       route: 'Training-Support',
    //     },
    //     {
    //       name: 'color-mapping',
    //       icon: <BsBarChart />,
    //       route: 'color',
    //     },
    //     {
    //       name: 'pyramid',
    //       icon: <GiLouvrePyramid />,
    //       route: 'pyramid',
    //     },
    //     {
    //       name: 'stacked',
    //       icon: <AiOutlineBarChart />,
    //       route: 'stacked',
    //     },
    //   ],
    // },
  ];