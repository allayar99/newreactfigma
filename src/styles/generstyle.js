import styled from "styled-components";
import bgimg from "../assets/bgimg.svg"


export const Navcontainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: #f8f9fa;

`;

export const Logo = styled.h1`
margin-left: 70px;
color: black;

`;

export const NavItems = styled.div`
display: flex;
gap: 90px;
margin-right: 150px;

:hover {
    cursor: pointer;
}

`;

export const Bgimg = styled.div`
background-image: url(${bgimg});
display: flex;
position: relative;
height: 700px;
background-repeat:no-repeat;
background-position: center;
background-size:cover;

:hover {
    cursor: pointer;
}

div {
    display: flex;
    flex-direction:column;

    width: 691px;
    height: 550px;
    position: absolute;
    justify-content: center;
    align-items: center;

    background-color: white;
    opacity: 0.9;
    
   
    border: 1px solid black;
    text-align: center;
    margin-top: 80px;
}

h1 {
    
}
`
