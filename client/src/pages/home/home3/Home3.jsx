import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Header from '../../../components/header/Header';
import Featured from '../../../components/featured/Featured';
import PropertyList from '../../../components/propertyList/PropertyList';
import FeaturedProperties from '../../../components/featuredProperties/FeaturedProperties';
import MailList from '../../../components/mailList/MailList';

import "./home.css";
import Footer from '../../../components/footer/Footer';
import Header3 from '../../../components/header/header3/Header3';


const Home3 = () => {
  return (
    <div>
      {/* ================COMPONENTS=============== */}
      <Header3 />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">
          Browse by property type
        </h1>
        <PropertyList/>
        <h1 className="homeTitle">
          Home guests love
        </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home3