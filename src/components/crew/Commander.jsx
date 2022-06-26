import styled from 'styled-components'
import Navbar from '../../pages/Navbar'
import {Link} from 'react-router-dom'
import Profile from '/assets/crew/image-douglas-hurley.png'
import '../../styles/dots.css'

function Commander() {
  return (
    <Container>
      <Box>
        <Navbar />


      <TextBox>
         <Text><span>02</span> MEET YOUR CREW</Text>
      </TextBox>

      <Content>
            <TextContent>
                <Role>Commander</Role>
                <Name>Douglas Hurley</Name>
                <Description>
                  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                  and former NASA astronaut. He launched into space for the third time as 
                  commander of Crew Dragon Demo-2.
                </Description>
            </TextContent>

            <Image>
              <Img src={Profile} alt='img'/>
            </Image>
      </Content>

    <Components>
      <nav className='all-dots'>
        <Link to='/pilot'><span className="dot"></span></Link>
        <Link to='/commander'><span className="dot-commander"></span></Link>
        <Link to='/specialist'><span className="dot"></span></Link>
        <Link to='/engineer'><span className="dot"></span></Link>
      </nav>
    </Components> 
    </Box>
    </Container>
  )
}

export default Commander

const Content = styled.div`
  display:flex;
  justify-content: space-between;
  margin-left: 7%;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
`

const TextContent = styled.div`
  margin-top: 10%;
  margin-left: 13%;
  flex-direction: column;
  column-gap: 100px;
  @media screen and (max-width: 850px) {
      margin: 100px auto;
       text-align: center;
       justify-content: center;
       align-items: center;
       grid-gap: 20px;
  }
`

const Role = styled.h2`
  text-transform: uppercase;
  color: #a7a2a288;
  margin-top: -20px;
  font-weight: 400;
`
const Name = styled.h1`
  text-transform: uppercase;
  font-size: 45px;
  color: #cfc9c9;
  letter-spacing: 3px;
  font-weight: 400;
  @media screen and (max-width: 1025px) {
       font-size: 27px;
  }

  @media screen and (max-width: 850px) {
    text-align:center;
    margin-top: 30px;
  }
  `

const Description = styled.p`
 max-width: 440px;
 margin-top: 15px;
 color: #949090;
 font-size: 16px;
 line-height: 23px;
`


const Image = styled.div`
  margin-right: 8%;

`
const Img = styled.img`
  width: 500px;
  height: 500px;
  @media screen and (max-width: 1024px) {
      width: 400px;
      height: 400px;
  }

  @media screen and (max-width: 850px) {
      display: none;
  }
`



const Components = styled.div`
  margin-top:-102px;
  margin-left: 7%;

  @media screen and (max-width: 1024px) {
       margin-top: -130px;
  }

  @media screen and (max-width: 950px) {
       margin-top: -80px;
  }

  @media screen and (max-width: 880px) {
       margin-top: 80px;
  }
`

const Box = styled.div`
  justify-content: flex;
`


const Text = styled.h1`
  color: #dfd9d5;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-left: 19%;

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
`

const TextBox = styled.div`
  @media screen and (max-width: 850px) {
    text-align:center;
    margin-right: 140px;
  }
  @media screen and (max-width: 760px) {
    text-align:center;
    margin-right: 80px;
  }
`



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



