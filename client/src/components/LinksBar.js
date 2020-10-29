import React from 'react'
import styled from 'styled-components'
import { Tooltip } from '@material-ui/core'
import { SiPlatzi } from 'react-icons/si'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaFreeCodeCamp,
} from 'react-icons/fa'

const LinksBarBox = styled.div`
  height: 80vh;
  position: absolute;
  top: 10vh;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;

  svg {
    color: white;

    :hover {
      color: #dbd844;
    }
  }
`

const LinksBar = () => (
  <LinksBarBox>
    <Tooltip title="LinkedIn" placement="left" arrow>
      <a href="https://www.linkedin.com/in/imfanjs/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} />
      </a>
    </Tooltip>
    <Tooltip title="Github" placement="left" arrow>
      <a href="https://github.com/ImFanJs" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} />
      </a>
    </Tooltip>
    <Tooltip title="FreeCodeCamp" placement="left" arrow>
      <a href="https://www.freecodecamp.org/imfanjs" target="_blank" rel="noopener noreferrer">
        <FaFreeCodeCamp size={40} />
      </a>
    </Tooltip>
    <Tooltip title="Platzi" placement="left" arrow>
      <a href="https://platzi.com/@ImFanJs/" target="_blank" rel="noopener noreferrer">
        <SiPlatzi size={40} />
      </a>
    </Tooltip>
    <Tooltip title="Instagram" placement="left" arrow>
      <a href="https://instagram.com/ImFanJs/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} />
      </a>
    </Tooltip>
    <Tooltip title="Twitter" placement="left" arrow>
      <a href="https://twitter.com/ImFanJs" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={40} />
      </a>
    </Tooltip>
    <Tooltip title="Facebook" placement="left" arrow>
      <a href="https://web.facebook.com/ImFanJs/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={40} />
      </a>
    </Tooltip>
  </LinksBarBox>
)

export default LinksBar
