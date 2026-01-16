import React from 'react'
import {  Box, Box2, Box3, Dots, Img, Navbar, Workcontainer, Wrapper } from './styles/workstyle'
import Foto from './assets/james.svg'
import Foto2 from './assets/abram.svg'
import Point from './assets/Ellipse 13.png'
import Point2 from './assets/Ellipse 12.png'
import Point3 from './assets/Ellipse 11.svg'

const OurworkComp = () => {
  return (
    <Workcontainer>
        <Navbar>Testimonial</Navbar>
      <Wrapper>
        <Box>
        <Img src={Foto} alt="img" />
        <div>
         <h3>James Passaquindici Arcand </h3>
            <p>Lorem ipsum dolor sit amet, 
              <br /> consectetur adipiscing elit ut  aliquam,
              <br /> purus sit amet luctus venenatis
            </p>
        </div>
        </Box>

        <Box2>
          <Img src={Foto2} alt="img" />
          <div>
           <h3>Abram Schleifer</h3>
             <p>Lorem ipsum dolor sit amet, 
               <br /> consectetur adipiscing elit ut aliquam,
               <br /> purus sit amet luctus venenatis
             </p>
             </div>
        </Box2>
      </Wrapper>
      <Box3>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
       </Box3>
    </Workcontainer>
  )
}

export default OurworkComp
