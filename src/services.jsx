import React from 'react'
import { Container, Iconimg, Sercontainer, Sertitel } from './styles/servicis'


const ServicesComp = () => {
  return (
    <>
    <Sercontainer>
      <Sertitel>Our Services</Sertitel>
      <Container>
        <img src={Iconimg} alt="icon"/>
      <div>icon
        <h3>Planning </h3>
        <span>Our Services Line one
    Servive line two</span>
      </div>
      <div>icon
        <h3>Interior</h3>
        <span>Our Services Line one
    Servive line two</span>
      </div>
      <div>icon
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
