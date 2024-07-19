import './App.css';
import Footer from './Components/Footerr/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/auth/Register';
import Intern from "./Components/Internships/Intern"
import JobAvl from "./Components/Job/JobAvl"
import JobDetail from "./Components/Job/JobDetail"
import InternDetail from './Components/Internships/InternDetail';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./Feature/Userslice"
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import Profile from './profile/Profile';
import AdminLogin from './Admin/AdminLogin';
import Adminpanel from './Admin/Adminpanel';
import ViewAllApplication from "./Admin/ViewAllApplication"
import Postinternships from './Admin/Postinternships';
import DetailApplication from './Applications/DetailApplication';
import UserApplication from './profile/UserApplication';
import UserApplicationDetail from './Applications/DetailApplicationUser';
import LanguageSwitcher from './Language/LanguageSwitcher';
import i18n from './i18n';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({

          uid: authUser.uid,
          photo: authUser.photoURL,
          name: authUser.displayName,
          email: authUser.email,
          phoneNumber: authUser.phoneNumber
        }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/internship' element={<Intern />} />
        <Route path='/Lang' element={<LanguageSwitcher />} />
        <Route path='/Jobs' element={<JobAvl />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detailjob' element={<JobDetail />} />
        <Route path='/detailInternship' element={<InternDetail />} />
        <Route path='/detailApplication' element={<DetailApplication />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/adminpanel' element={<Adminpanel />} />
        <Route path='/postInternship' element={<Postinternships />} />
        <Route path='/applications' element={<ViewAllApplication />} />
        <Route path='/UserapplicationDetail' element={<UserApplicationDetail />} />
        <Route path='/Userapplication' element={<UserApplication />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
