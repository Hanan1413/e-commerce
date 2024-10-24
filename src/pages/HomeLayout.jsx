import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from '../components'
import {Navbar} from '../components';

const HomeLayout = () => {
  return (
    <>
   <Header />
   <Navbar />
     <section className='align-element'>
     <Outlet />
     </section>
     </>
  )
}

export default HomeLayout
