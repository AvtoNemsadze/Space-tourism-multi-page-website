import React from 'react'
import styled from 'styled-components'
import Navbar from '../../pages/Navbar'
import { Link } from 'react-router-dom'
import ImageVehicle from '/assets/technology/image-launch-vehicle-portrait.jpg'
import ImageVehicletwo from '/assets/technology/image-launch-vehicle-landscape.jpg'


function Vehicle() {
  return (
    <Container>
      <Box>
        <Navbar />

        <TextBox>
            <Title><span>03</span> space launch 101</Title>
        </TextBox>

    <MainContainer>
          <NavComponents>
              <Link to='/vehicle'><span className="circle-bg">1</span></Link>
              <Link to='/capsule'><span className="circle">2</span></Link>
              <Link to='/port'><span className="circle">3</span></Link>
          </NavComponents>

        <Content>
            <AllText>
                <SubText>The Terminology ...</SubText>
                <MainTitle>Launch vehicle</MainTitle>
                <Description>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                </Description>
            </AllText>

            <ImageBox>
                <Image src={ImageVehicle} alt='vehicle' width={400} height={400}/>
            </ImageBox>

            <ImageBoxTwo>
                <Imagetwo src={ImageVehicletwo} alt='vehicle' />
            </ImageBoxTwo>
        </Content>
    </MainContainer>

      </Box>
    </Container>
  )
}

export default Vehicle

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: wrap;
  @media screen and (max-width: 1050px) {
    display: grid;
  }
`


// main div
const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1050px) {
    display: table;
    margin: 0 auto;
  }
`


const AllText = styled.div`
  color: #aaa6a6;
  margin-top: 22%;


  @media screen and (max-width: 1050px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: grid;
    margin: auto;
    margin-top: -2%;
    grid-gap: 15px;
  }
`
const SubText = styled.h5`
 text-transform: uppercase;
 font-weight: 500;
 letter-spacing: 1.5px;
`

const MainTitle = styled.h1`
  color: #eee6e6;
  font-size:45px;
  text-transform: uppercase;
  font-weight: 400;
  padding: 0 0 5px;
  letter-spacing: 2px;

  @media screen and (max-width: 850px) {
    font-size:35px;
  }
`

const Description = styled.p`
  max-width: 400px;
  line-height: 23px;
  @media screen and (max-width: 1050px) {
    text-align: start;
  }
`


// image
const ImageBox = styled.div`
  justify-content: flex-end;
  right: 0;
  position: absolute;

  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 30px auto;
    position: relative;
  }
`

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1050px) {
    display: none;
  }
  @media screen and (max-width: 750px) {
    display: flex;
  }
`



// * second image
const ImageBoxTwo = styled.div`
   display: none;
   
   @media screen and (max-width: 1050px) {
    display: flex;
    margin-top: 40px;
   }
`

const Imagetwo = styled.img`
   display: none;

  @media screen and (max-width: 1050px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`

// dots
// const Components = styled.div`
//     @media screen and (max-width: 1050px) {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       text-align: center;
//     }
// `

const NavComponents = styled.div`
    margin-left: 17%;
    margin-top: 7%;
    grid-gap: 25px;
    display: grid;

  @media screen and (max-width: 1050px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
  }  
    
  @media screen and (max-width: 850px) {
    display: flex;
    margin:auto;
    margin-top: 30px;
  }
`






const TextBox = styled.div`
  display: flex;
  margin-left: 17%;
  margin-bottom: 2%;

 

  @media screen and (max-width: 1050px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 auto;
  }
`

const Title = styled.h2`
  color: #ddd5d5;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
`


const Container = styled.div`
    overflow-x: hidden;

    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/technology/background-technology-desktop.jpg');
    display: grid;


  @media screen and (max-width: 650px) {
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/technology/background-technology-mobile.jpg');
    display: grid;
  }
`


const Box = styled.div`
  justify-content: flex;
`













