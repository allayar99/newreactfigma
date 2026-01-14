import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavbarComp from './navbar.jsx'
import { Bgimg, } from './styles/generstyle.js'
import ServicesComp from './services.jsx'
import AboutComp from './about.jsx'
import ProjectsComp from './projects.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComp/>
     <Bgimg>
      <div>
     <h1>
       Best Solution For 
       Your Home
      </h1>
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut 
aliquam, purus sit amet 
</div>
    </Bgimg>
    <ServicesComp/>
    <AboutComp/>
    <ProjectsComp/>
  </StrictMode>,

)
