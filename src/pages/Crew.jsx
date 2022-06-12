import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
// import PaginatedItems from '../container/Slider'
// import Swiper_One from './Swiper'

function Crew() {
  return (
    <Container>
      <Box>
        <Navbar />


      <TextBox>
         <Text>MEET YOUR CREW</Text>
      </TextBox>

    <Components>
       {/* <Swiper_One /> */}
    </Components> 
    </Box>
    </Container>
  )
}

export default Crew

const Components = styled.div`
`

const Box = styled.div`
  justify-content: flex;
`


const Text = styled.h1`
  color: #b6bebe;
  font-size:02 25px;
  margin-left: 13%;
`
const TextBox = styled.div``



const Container = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;

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


