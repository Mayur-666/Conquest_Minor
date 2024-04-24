import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import Dashboard from "./pages/Home Page/Dashboard";
import InterviewPage from "./pages/Interview Page/InterviewPage";
import ReportPage from "./pages/Report Page/ReportPage";
import Navbar from "./components/Navigation/Navbar";
import JobCategory from "./pages/Category Page/JobCategory";
import RegisterLogin from "./pages/Login Page/RegisterLogin";
import Login from "./pages/Login Page/Login";
import History from "./pages/History Page/History";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "./store/store.js";
import { loadUser } from "./actions/userActions.js";
import React, {useState} from 'react';
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const isAuth = useSelector((state) => state.isAuth);
  useEffect(() => {
    store.dispatch(loadUser());
  });
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <>
      {
        loading ?
        <HashLoader
            // color={blue}
            loading={loading}
            //color={blue}
            // cssOverride={override}
            size={50}
            color={"#36d7b7"}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={1}
        />
        :
        <Navbar isAuthUser={isAuth} />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/interview" element={<InterviewPage />} />
          <Route exact path="/category" element={<JobCategory />} />
          <Route exact path="/report" element={<ReportPage />} />
          <Route exact path="/register" element={<RegisterLogin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/history" element={<History />} />
        </Routes>
      }
    </>
  );
}

export default App;
