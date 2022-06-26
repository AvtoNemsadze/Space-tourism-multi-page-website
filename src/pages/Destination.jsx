import React from 'react'
import styled from 'styled-components'
// import Nav_Two from './Layouts/Nav_Two'
import Navbar from './Navbar'
import Select from './Tabs'


function Destination() {
  return (
    <Container>
      <Box>
        <Navbar />

      <TextBox>
         <Text><span className='nums'>01</span> PICK YOUR DESTINATION</Text>
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
  margin-left: 35%;
  @media screen and (max-width: 1050px) {
    margin-left: 30%;
  }


  @media screen and (max-width: 850px) {
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
    margin: 0 auto;
  }
`


const TextBox = styled.div`
  margin-left: 260px;


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
  font-weight: 500;
`



const Box = styled.div`
  justify-content: flex;
`

const Container = styled.div`
    overflow-x: hidden;

    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/destination/background-destination-desktop.jpg');
    display: grid;
`
