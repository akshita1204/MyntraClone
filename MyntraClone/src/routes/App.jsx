import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from '../components/header';
import Footer from '../components/Footer';
import Homes from './Homes';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
   <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );

}

export default App
