import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Shop from './Shop';
import About from './About';

export default function App() {
  const [activeComponent, setActiveComponent] = React.useState('about');

  const handleComponentChange = (componentNumber) => {
    setActiveComponent(componentNumber);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Nav handleClick={handleComponentChange}/>
        {activeComponent === 'home' && <Home />}
        {activeComponent === 'shop' && <Shop handleClick={handleComponentChange}/>}
        {activeComponent === 'contact' && <Contact />}
        {activeComponent === 'about' && <About />}
  </div>
  )
}
