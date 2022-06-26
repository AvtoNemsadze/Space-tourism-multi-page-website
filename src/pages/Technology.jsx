import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import {Outlet, NavLink} from 'react-router-dom'
import '../styles/circle.css'

function Technology() {
  return (
    <Container>
      <Box>
        <Navbar />

    <TextBox>
      <Title><span>03</span>  space launch 101</Title>
    </TextBox>

      <Components>
        <nav className='all-circle'>
        <NavLink to='/one'><span className="circle">1</span></NavLink>
        <NavLink to='/two'><span className="circle">2</span></NavLink>
        <NavLink to='/three'><span className="circle">3</span></NavLink>
        </nav>
        <Outlet />
    </Components> 
      </Box>
    </Container>
  )
}

export default Technology

const Components = styled.div``



const TextBox = styled.div`
  display: flex;
  margin-left: 13%;
`
const Title = styled.h1`
  color: #ddd5d5;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
`


const Container = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;

    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/technology/background-technology-desktop.jpg');
    display: grid;
`


const Box = styled.div`
  justify-content: flex;
`


// const Text = styled.h1`
//   color: #e65e03;
// `
// const TextBox = styled.div`
// `




