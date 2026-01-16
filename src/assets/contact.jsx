import React from 'react'

import { Boxcont, Icons, Linkbox, Wrapper } from '../styles/contactstyle'
import Meta from '../assets/meta.svg'
import Twit from '../assets/twitter.svg'
import Insta from '../assets/insta.svg'
import Imgloc from '../assets/map.svg'
const ContactComp = () => {
  return (
    <>
      <Wrapper>
        <Boxcont>
            <h1>ArchiWeb</h1>
            <span>Archiweb is an architectural consultant based 
              <br />in Berlin, Germany. 
              <br />  We provide solutions for your architecture 
              <br />and residential design
            </span>
            <Icons>
            <div>
            <img src={Meta} alt="meta" />
            </div>
            <div>
             <img src={Twit} alt="meta" />
            </div>
            <div>
              <img src={Insta} alt="meta" />
            </div>
            </Icons>
        </Boxcont>

        <div>
            <h2>Articles </h2>
            <span>   7 Tips for Kids Friendly 
        <br /> Interior Design
 
        <br /> Smart Tips for Changing 
           a Room
 
        <br />   Eco-friendly design
            </span>
        </div>
        <Linkbox>
        <h2>Links</h2>
          <span>Link 1</span>    
            <span>Link 2</span>   
            <span>Link 3</span>   
        </Linkbox>
        <div>
            <h2>Location</h2>
            <img src={Imgloc} alt="img" />
        </div>
      </Wrapper>
    </>
  )
}

export default ContactComp
