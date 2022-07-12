import React from 'react'

import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import ContactMail from '../../components/ContactMail/ContactMail'

const Home = () => {
  return (
      <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Explorer le Maroc</h1>
        <p className='paraTitle'>Ces destinations prisées ont beaucoup à offrir</p>
        <Featured />
        <h1 className="homeTitle">Recherchre par type d'hebergement</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />

        <ContactMail />
      </div>
    </div>
  )
}

export default Home