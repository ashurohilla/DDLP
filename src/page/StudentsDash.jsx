import React from 'react';
import Student_Sidebar from '../component/Sidebar_student';
import Course from '../component/section/course';


function StudentsDash() {
  return (
    <div className="flex relative dark:bg-main-dark-bg">
    {/* Container for settings button */}
    <div className="fixed top-4 right-4 z-50">
        {/* Settings button content */}
    </div>

    {/* Sidebar */}
    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white dark:bg-main-bg bg-main-bg min-h-screen">
        <Student_Sidebar />
    </div>
    
   
    <div className="ml-72 flex-1 dark:bg-main-dark-bg bg-main-bg min-h-screen">
    <div className="flex justify-center mt-10 pt-10">
       
        <div className="w-4/5 p-16 bg-white shadow-lg rounded-lg">
        
  
    <div className="mx-auto  text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Choose Tranding Courses

        <span className="sm:block"> From top Educator </span>
      </h1>
<div className= " mt-9">
      <Course />

      </div>
      
    </div>
 



        </div>
        </div>
        </div>
        </div>
  )
}

export default StudentsDash