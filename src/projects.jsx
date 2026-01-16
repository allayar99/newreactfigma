import React from 'react'
import { Boxpro, Procontainer, Projects, } from './styles/projectstyle'
import Proj1 from './assets/project1.png'
import Proj2 from './assets/project2.png'
import Proj3 from './assets/project3.png'
import Proj4 from './assets/project4.png'
import Proj5 from './assets/project5.png'
import Proj6 from './assets/project6.png'

const ProjectsComp = () => {
  return (
    <>
    <Procontainer>
      <Boxpro>
      <h1>Our Projects</h1>
      <div>All</div>
      <div>Furniture</div>
      <div>Design</div>
      <div>House</div>
      </Boxpro>
      <Projects>
      <div>
        <img src={Proj1} alt="img" />
        <p>Our Services Line one
          <br /> Servive line two </p>
      </div>
      <div>
        <img src={Proj2} alt="img" />
        <p>Our Services Line one
         <br />  Servive line two</p>
      </div>
        <div>
        <img src={Proj3} alt="img" />
        <p>Our Services Line one
        <br />   Servive line two</p>
      </div>
         <div>
        <img src={Proj4} alt="img" />
        <p>Our Services Line one
       <br />    Servive line two</p>
      </div>
         <div>
        <img src={Proj5} alt="img" />
        <p>Our Services Line one
       <br />    Servive line two</p>
      </div>
         <div>
        <img src={Proj6} alt="img" />
        <p>Our Services Line one
        <br />   Servive line two</p>
      </div>
      </Projects>
    </Procontainer>
    </>
  )
}

export default ProjectsComp
