import Home from '@/components/Home/Home';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <ResponsiveNav />
      <Home />
    </div>
  )
}

export default HomePage;

