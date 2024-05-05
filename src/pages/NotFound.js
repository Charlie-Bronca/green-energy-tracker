import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const NotFound = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/')
    }
  return (
    <div>
        <Navbar />
        <div className="NotFound-main">
            <h1 className="NotFound-h1">404: Could not find that Postcode</h1>
        </div>
        <Footer />
    </div>
  );
}

export default NotFound;
