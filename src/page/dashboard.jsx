import { Link } from "react-router-dom";
import React  from 'react';
import { useAuth } from '../hooks/useauth';
const title = "Thank u for Login";

const Dashboard = () => {
    const { currentUser } = useAuth();
    const {logout} = useAuth();
        console.log(currentUser);

    const handleLogout = async () => {
        try {
            logout()
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
                                <img src="assets/images/logo/01.png" alt="CodexCoder"style={{ width: '60%' }} />
                            </Link>
                             <h2 className="title">{title}</h2>
                            <p>Login as {currentUser?.email}</p>
                            <p>id {currentUser?.uid}</p>

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