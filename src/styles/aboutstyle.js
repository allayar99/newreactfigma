import styled from "styled-components";
import abtimg from "../assets/planner.jpg"


export const Aboutcontainer = styled.div`
display: flex;
padding: 20px;
flex-direction: row;
justify-content: space-evenly;
padding: 30px;

`

export const Aboutimg = styled.div`
background-image: url(${abtimg});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 1280px;
height: 571px;

`
export const Textcontainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
text-align: start;
margin-left: 80px;
`