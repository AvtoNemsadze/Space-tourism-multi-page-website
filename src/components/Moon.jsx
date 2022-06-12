import React from 'react'
import styled from 'styled-components'


function Moon() {
  return (
    <Container>
        <ImgBox>
            <Img src='./assets/destination/image-moon.png' alt='' width={300} height={300}/>
        </ImgBox>

    <Content>
        <TextBox>
            <Headline>MOON</Headline>
            <Description>
            See our planet as you've never seen it before. A perfect relaxing trip away to help 
            regain perspective and come back refreshed. While you're there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites.
            </Description>
        </TextBox>

        <Footer>
            <Line>______________________________________________</Line>

            <Texts>
                <FirstText>Avg. distance</FirstText>
                <FirstText>Est. travel time</FirstText>
            </Texts>

            <Maths>
                <SecondText>384,400 km</SecondText>
                <SecondText>3 days</SecondText>
            </Maths>
        </Footer>
    </Content>
    </Container>
  )
}

export default Moon


const Footer = styled.div`
    margin-left: 24%;
    @media screen and (max-width: 650px) {
        display: none;
    }
`


const Texts = styled.div`
    display: flex;
    gap: 100px;
    margin-top: 15px;
`
const FirstText = styled.div`
    color: #c4c3c3;
`

const Maths = styled.div`
    display: flex;
    gap: 70px;
    margin-top: 5px;
`
const SecondText = styled.div`
    font-size: 24px;
    color: #c4c3c3;
`



const Line = styled.div`
    color: #636060;
@media screen and (max-width: 850px) {
    align-items: center;
    margin: 0 auto;
    display: flex;
}
`

const Content= styled.div`
    display: grid;
`

const TextBox = styled.div`
    margin: 0 auto;
    margin-left: 24%;

@media screen and (max-width: 860px) {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;
}
    
`


const Headline = styled.div`
    font-size: 84px;
    color: #e7e0e0;
`


const Description = styled.div`
      margin: 0 auto;
      text-align: flex-start;
      justify-content: flex-start;
      align-items: flex-start;
      width: 420px;
      color: #c4c3c3;
@media screen and (max-width: 650px) {
    display: none;
}
`



const Container = styled.div`
    color: white;
    display: flex;

    @media screen and (max-width: 912px) {
        margin-left: -75px;
    }

    @media screen and (max-width: 850px) {
        display: grid;
        margin-left: 1px;
    }
`


const ImgBox = styled.div`
  @media screen and (max-width: 850px) {
    display: flex;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}
`

const Img = styled.img`
    margin-left: -140px;

@media screen and (max-width: 860px) {
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}
`
