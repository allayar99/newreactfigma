import React from 'react'
import { Aboutcontainer, Aboutimg, Textcontainer } from './styles/aboutstyle'

const AboutComp = () => {
  return (
    <>
    <Aboutcontainer>
      <Aboutimg></Aboutimg>
      <Textcontainer>
      <h1>About Us</h1>
      <h3>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut 
aliquam, purus sit amet luctus 
venenatis, lectus magna fringilla 
urna, porttitor
      </h3>
      <p>Read more</p>
     
      </Textcontainer>
    </Aboutcontainer>
    </>
  )
}

export default AboutComp
