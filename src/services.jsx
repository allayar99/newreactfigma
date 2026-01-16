import React from 'react'
import { Container, Sercontainer, Sertitel } from './styles/servicis'
import Iconimg from "./assets/Group 4.svg"
import Iconimg2 from "./assets/Group 5.svg"
import Iconimg3 from "./assets/Group 6.svg"

const ServicesComp = () => {
  return (
    <>
    <Sercontainer>
      <Sertitel>Our Services</Sertitel>
      <Container>
      <div>
        <img src={Iconimg} alt="icon"/>
        <h3>Planning </h3>
        <span>Our Services Line one
         Servive line two</span>
      </div>

      <div>
        <img src={Iconimg2} alt="icon"/>
        <h3>Interior</h3>
        <span>Our Services Line one
         Servive line two</span>
      </div>

      <div>
        <img src={Iconimg3} alt="icon"/>
        <h3>Exterior</h3>
            <span>Our Services Line one
         Servive line two</span>
        </div>
      </Container>
    </Sercontainer>
    </>
  )
}

export default ServicesComp
