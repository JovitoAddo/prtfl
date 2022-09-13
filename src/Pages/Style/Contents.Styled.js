import React from "react";
import styled, {keyframes} from "styled-components";

export default function TextAnimation(){
  const jobs = ["Front End Developer", "Back End Developer", "Fullstack Developer"]

  return(
    <Wrapper style={{fontFamily:'Catamaran'}}>{jobs.map((item, index)=> (
      <span key={index}>{item}</span>
    ))}</Wrapper>
  )
}

const animation = keyframes`
  0% {opacity: 0; transform: translateY(100px) skewY(10deg) skewX(10deg) rotateZ(10deg); filter:blur(25px)}
  25% {opacity:1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter:blur(0)}
  75% {opacity:1; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter:blur(0)}
  100% { opacity:0; transform: translateY(100px) skewY(10deg) skewX(10deg) rotateZ(10deg); filter:blur(25px)}
`

const Wrapper = styled.span`
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`