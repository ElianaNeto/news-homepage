import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi';

import logo from '../../../assets/images/logo.svg'
import { CloseMenu, HamburguerButton, Header, MobileMenu, Overlay } from "./mobileHeader.styles";

function MobileHeader() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Header>
      <Link className="logo" to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
      <HamburguerButton onClick={toggleMenu}>
        <FiAlignJustify />
      </HamburguerButton>
      {isOpen && <Overlay onClick={toggleMenu} />}

      {isOpen && (
        <MobileMenu>
          <CloseMenu>
            <FiX onClick={toggleMenu}/>
          </CloseMenu>

          <div className="navigation">
            <Link className="home" to="/">Home</Link>
            <Link className="new" to="/">New</Link>
            <Link className="popular" to="/">Popular</Link>
            <Link className="trending" to="/">Trending</Link>
            <Link className="categories" to="/">Categories</Link>
          </div>
        </MobileMenu>
      )}


    </Header>
  )

} export default MobileHeader;