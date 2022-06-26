import React from 'react'
import styled from 'styled-components'
import Navbar from '../../pages/Navbar'
import { Link } from 'react-router-dom'
import ImageVehicle from '/assets/technology/image-space-capsule-portrait.jpg'
import ImageVehicletwo from '/assets/technology/image-space-capsule-landscape.jpg'


function Capsule() {
  return (
    <Container>
      <Box>
        <Navbar />

        <TextBox>
            <Title><span>03</span> space launch 101</Title>
        </TextBox>

    <MainContainer>
          <NavComponents>
              <Link to='/vehicle'><span className="circle">1</span></Link>
              <Link to='/capsule'><span className="circle-bg">2</span></Link>
              <Link to='/port'><span className="circle">3</span></Link>
          </NavComponents>

        <Content>
            <AllText>
                <SubText>The Terminology ...</SubText>
                <MainTitle>Space capsule</MainTitle>
                <Description>
                   A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                  you'll spend your time during the flight. It includes a space gym, cinema, 
                  and plenty of other activities to keep you entertained.
                </Description>
            </AllText>

            <ImageBox>
                <Image src={ImageVehicle} alt='capsule' width={400} height={400}/>
            </ImageBox>

            <ImageBoxTwo>
                <Imagetwo src={ImageVehicletwo} alt='capsule' />
            </ImageBoxTwo>
        </Content>
    </MainContainer>

      </Box>
    </Container>
  )
}

export default Capsule

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













