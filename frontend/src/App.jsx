import React from 'react'

import {Route,Routes} from 'react-router-dom';
import HomePage from './pages/Landing/HomePage'
import Marketplace from './pages/Marketplace/Marketplace';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import StorePage from './pages/Store/StorePage';
import Communities from './pages/Communities/Communities'
//import AddItem from '../PopupEvents/AddItem';
import Finalpage from './components/communityProfile/Finalpage';
import Finaluserprof from './components/userProfile/Finaluserprof';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/marketplace" element={<Marketplace/>}/>
       <Route path="/store" element={<StorePage/>}/>
       <Route path="/communities" element={<Communities/>}/>
        <Route path="/userProfile" element={<Finaluserprof/>}/>
       <Route path="/communityProfile" element={<Finalpage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App