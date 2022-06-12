import React from 'react'
import styled from 'styled-components'


const Dots = () => {
  return (
    <Container>
        <Box>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </Box>
    </Container>
  )
}

export default Dots

const Container = styled.div`
  
`

const Box = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 17%;  
    margin-left: 13%;
`


const Button = styled.button`
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  border: 1px solid #bbb;
  display: inline-block;
  cursor: pointer;
`