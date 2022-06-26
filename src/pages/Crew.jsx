import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'
import '../styles/dots.css'

function Crew() {
  return (
    <Container>
      <Box>
        <Navbar />


      <TextBox>
         <Text>02 MEET YOUR CREW</Text>
      </TextBox>

    <Components>
      <nav className='all-dots'>
        <NavLink to='/pilot'><span class="dot"></span></NavLink>
        <NavLink to='/commander'><span class="dot"></span></NavLink>
        <NavLink to='/specialist'><span class="dot"></span></NavLink>
        <NavLink to='/engineer'><span class="dot"></span></NavLink>
      </nav>
    </Components> 
    </Box>
    </Container>
  )
}

export default Crew

const Components = styled.div`
  margin-left: 40%;
`

const Box = styled.div`
  justify-content: flex;
`


const Text = styled.h1`
  color: #dfd9d5;
  font-size: 24px;
  letter-spacing: 2px;
  margin-left: 13.5%;
`
const TextBox = styled.div``



const Container = styled.div`
    overflow-x: hidden;

    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/crew/background-crew-desktop.jpg');
    display: grid;

    @media screen and (max-width: 820px) {
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/crew/background-crew-tablet.jpg');
    display: grid;
  }

  @media screen and (max-width: 650px) {
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/crew/background-crew-mobile.jpg');
    display: grid;
  }
`


