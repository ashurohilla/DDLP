
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




function App() {
	return (
		<BrowserRouter>
		<AuthProvider>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="course" element={<CoursePage />} />
				<Route path="course-single" element={<CourseSingle />} />
				<Route path="course-view" element={<CourseView />} />
				<Route path="blog" element={<BlogPageTwo />} />
				<Route path="blog-single" element={<BlogSingle />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="team" element={<TeamPage />} />
				<Route path="team-single" element={<TeamSingle />} />
				<Route path="instructor" element={<InstructorPage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="quiz" element={<QuizForm />} />
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
				<Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
				<Route path="/lab" element={
            <PrivateRoute>
              <Das/>
            </PrivateRoute>
          } />
       
				
				

			</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
