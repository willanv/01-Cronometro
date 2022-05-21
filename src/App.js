import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #A7AEB2;
  }
`

const Box = styled.div`
  background-color: white;
  height: 30vh;
  width: 30vw;
  border-radius: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Boxmax = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Button = styled.button`
  border-radius: 0.3vw;
  width: 4vw;
  margin: 0 1vh 0 0;
`
export default class app extends React.Component{

  state={
    n: 0
  }

  add = () => {
    const setinter = setInterval(() => {
      this.setState({
        n: this.state.n + 1
      })
    }, 1000);
  
    this.stop = () => {
      clearInterval(setinter)
    }
  }

  restart = () => {
    this.setState({n:0})
  }



  render(){
    return(
      <Boxmax>
        <h2>CRONÔMETRO</h2>
      <Box>
        <GlobalStyle/>
        <h1>{this.state.n}</h1>
        <div>
          <Button onClick={this.add}>ADD</Button>
          <Button onClick={this.stop}>STOP</Button>
          <Button onClick={this.restart}>RES</Button>
        </div>
      </Box>
      </Boxmax>
    )
  }
}

