import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Select from './Tabs'


function Destination() {
  return (
    <Container>
      <Box>
        <Navbar />

      <TextBox>
         <Text>01 PICK YOUR DESTINATION</Text>
      </TextBox>

      <TabBox>
          <Select />
      </TabBox>
      </Box>
    </Container>
  )
}

export default Destination

const TabBox = styled.div`
  margin-left: 33%;

  @media screen and (max-width: 850px) {
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
    margin: 0 auto;
  }
`


const TextBox = styled.div`
  margin-left: 180px;

  @media screen and (max-width: 912px) {
    margin: 0;
    justify-content: center;
    text-align: center;
}
`


const Text = styled.h1`
  color: #dfd9d5;
  font-size: 24px;
  letter-spacing: 2px;
`



const Box = styled.div`
  justify-content: flex;
`

const Container = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;

    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/destination/background-destination-desktop.jpg');
    display: grid;
`
