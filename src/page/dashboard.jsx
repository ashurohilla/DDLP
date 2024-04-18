
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Sidebar from "../component/Sidebar";


const title = "Thank u for Login";
const desc = "We are working hard to make a your dream dasboard";
const btnText = "Logout now";




const Dashboard = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const handleLogout = async () => {
        try {
          await logout();
          // Additional logic after successful logout, e.g., navigate to the login page
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };
    
    return ( 
        
       
        <div className="four-zero-section padding-tb section-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="four-zero-content">
                        <Link to="/">
                                <img src="assets/images/logo/01.png" alt="CodexCoder"style={{    width: '60%' }} />
                            </Link>
                                                       <h2 className="title">{title}</h2>
                            <p>Login as {currentUser.email}</p>
                            <div className="form-group">
                    <button onClick={handleLogout} type="submit" className="lab-btn"><span>Logout</span></button>
                </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 col-12">
                    </div>
                </div>
            </div>
        </div>  
       
    );
}

export default Dashboard;