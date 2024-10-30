import React from "react";
import styled from "styled-components";
import { Button } from "./styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src='./images/dices 1.png' alt="Dice" />
      <div className="content">
        <h1>Start Game</h1>
        <Button onClick={toggle}>LETS PLAY</Button>
      </div>
    </Container> 
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1110px;
  display: flex;
  gap: 100px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;


  .content {
 h1{
  font-size: 96px;
  white-space: nowrap;
  margin: 0;
 }
  }

`;





