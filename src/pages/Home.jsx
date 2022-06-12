import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


function Home() {
  return (
    <Container>
      <Box>
        <Navbar />
      </Box>

    <Content>
       <TextBox>
            <h3>S0, YOU WANT TO TRAVEL TO</h3>
            <h2>SPACE</h2>
            <h4> Let's face it if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we'll give you a truly out of this world experience!
            </h4>  
        </TextBox>

        <LogoBox>
            <Logo>EXPLORE</Logo>
        </LogoBox>
    </Content>

      
    </Container>
  )
}

export default Home

const Content = styled.div`
  display: flex;
  @media screen and (max-width: 850px) {
    display: grid;
    margin-bottom: 25%;
  }
`


const TextBox = styled.div`
  justify-content: center;
  color: #ccc6c6;
  margin-left: 180px;
  margin-top: 30px;

  
  h2{
    font-size: 180px;
    font-family: monospace;
    letter-spacing: 4px;
  }

  h4{
    max-width: 540px;
    font-size: 20px;
    line-height: 30px;
  }

  h3{
    font-size: 32px;
  }

@media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 100px;

    h2{
    font-family:Calibri;
  }

    h4{
      max-width: 620px;
      font-size: 20px;
      margin: 0 auto;
    }

    h3{
    font-size: 22px;
  }
     
  }


  @media screen and (max-width: 650px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 100px;

    h2{
    font-size: 100px;
    font-family:Calibri;
  }

    h4{
      max-width: 330px;
      font-size: 20px;
      margin: 0 auto;
    }
     
  }
`


const LogoBox = styled.div`
  text-align: center;
  margin-top: 10%;
  margin-left: 10%;

  @media screen and (max-width: 850px) {
    margin-top: -10%;
  }

`

const Logo = styled.div`
  color: black;
  font-size: 18px;
  letter-spacing: 2px;
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto;
  left: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
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
    background-image: url('./assets/home/background-home-desktop.jpg');

  @media screen and (max-width: 820px) {
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/home/background-home-tablet.jpg');
    display: grid;
  }

  @media screen and (max-width: 650px) {
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/home/background-home-mobile.jpg');
    display: grid;
  }

`
