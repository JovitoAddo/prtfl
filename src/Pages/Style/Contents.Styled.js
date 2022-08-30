import styled, { keyframes } from "styled-components";


const animation = keyframes`
    0%{ opacity: 0 }
    100%{ opacity: 1}
`
export const Fade = styled.h1`
opacity: 0;
animation-name: ${animation};
animation-delay: 0.7s;
animation-duration: 4s;
animation-fill-mode: forwards;
animation-iteration-count: initial;
font-family: Catamaran;
`
export const StyleBar = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: var(--red);
  transform-origin: 0%;


`