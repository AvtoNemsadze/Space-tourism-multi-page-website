import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import VerticalTabs from './VerticalTabs'

function Technology() {
  return (
    <Container>
      <Box>
        <Navbar />

      <VerticalTabs />

      
      </Box>
    </Container>
  )
}

export default Technology


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


const Text = styled.h1`
  color: #e65e03;
`
const TextBox = styled.div`
  
`




