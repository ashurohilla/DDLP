
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPageTwo from "./page/blog-2";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import CourseView from "./page/course-view";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./page/dashboard";
import { AuthProvider } from './AuthContext';
import Das from "./page/das";
import CourseAdd from "./page/Courseadd";
import AuthDash from "./page/authDash";
import QuizForm from "./page/QuizForm";
import Layout from '../src/component/Layout';
import StudentsDash from "./page/StudentsDash";
import Sidebar from "./component/Sidebar";
import Logout from "./page/Logout";




function App() {
	return (
		<div>
		<BrowserRouter>
		
       

      <AuthProvider>
			<ScrollToTop />
			<Routes>
				<Route path="dashboard/quiz" element={<QuizForm />} />
				<Route path="/" element={<Home />} />
				<Route path="course" element={<CoursePage />} />
				<Route path="logout" element={<Logout />} />
				<Route path="course-single" element={<CourseSingle />} />
				<Route path="course-view" element={<CourseView />} />
				<Route path="blog" element={<BlogPageTwo />} />
				<Route path="blog-single" element={<BlogSingle />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="team" element={<TeamPage />} />
				<Route path="my-learning" element={<StudentsDash />} />
				<Route path="team-single" element={<TeamSingle />} />
				<Route path="instructor" element={<InstructorPage />} />
				<Route path="shop" element={<ShopPage />} />
				
				<Route path="shop-single" element={<ShopDetails />} />
				<Route path="cart-page" element={<CartPage />} />
				<Route path="search-page" element={<SearchPage />} />
				<Route path="search-none" element={<SearchNone />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="authDash" element={<AuthDash />} />
				<Route path="signup" element={<SignupPage />} />
				<Route path="addcourse" element={<CourseAdd />} />
				<Route path="forgetpass" element={<ForgetPass />} />
				
				
				<Route path="*" element={<ErrorPage />} />
				<Route path="/dash" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
				<Route path="/dashboard" element={
            <PrivateRoute>
              <Das/>
            </PrivateRoute>
          } />
       
				
				

			</Routes>
			</AuthProvider>
			
		</BrowserRouter>
		</div>
	);
}

export default App;
