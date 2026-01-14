import React from 'react'
import {Logo, Navcontainer, NavItems } from './styles/generstyle'
import SearchIcon from './assets/search.svg'

const NavbarComp = () => {
  return (
    <>
    <Navcontainer>
    <Logo>ArshiWeb</Logo>
    <NavItems>
    <div>
      Home
    </div>
    <div>
        Projects
    </div>
    <div>
        About
    </div>
    <div>
        Contact
    </div>
    <div>
        <img src={SearchIcon} alt="icon" />
    </div>
  
    </NavItems>
    </Navcontainer>
    </>
  )
}

export default NavbarComp
