import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BottomMenuBox = styled.div`
  width: 50vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
  left: 25vw;
  display: flex;
  justify-content: center;
  padding: 5px 10px;

  a {
    color: white;
    margin: 0 16px;
    padding: 8px;
    text-decoration: none;
    font-family: Roboto;
    font-size: 22px;
    font-weight: bold;
    opacity: 0.8;

    :hover {
      opacity: 1;
      color: #dbd844;
    }
  }
`

const BottomMenu = () => (
  <BottomMenuBox>
    <Link to="/skills">Skills</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/education">Education</Link>
    <Link to="/projects">My Work</Link>
  </BottomMenuBox>
)

export default BottomMenu
