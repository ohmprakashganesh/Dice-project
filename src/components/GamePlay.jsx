import React, { useState } from 'react';
import styled from "styled-components";
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { Button } from './styled/Button';
import Protocols from './Protocols';

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectNumber, setSelectNumber] = useState();
    const [error, setError]=useState("");
    const [show, setShow]= useState(false)

    const genRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    const rollDice = () => {
        if(!selectNumber){
            setError("please select number first ");
            return;
        } else{
            setError(" ")
        }
        const randomnum = genRandomNumber(1, 7);
        setCurrentDice(randomnum);
        // Compare selected number with the rolled number and update the score
        if (selectNumber === randomnum) {
            setScore(prev => prev + 2);
        } else {
            setScore(prev => prev - 1); // Subtract 2 from the score if not matched
        }

        setSelectNumber(undefined);
    };
     const resetDice=()=>{
        setScore(0);
     }
    return (
        <MainContainer>
            <div className='top'>
                <TotalScore score={score} />
                <NumberSelector
                    selectNumber={selectNumber}
                    setSelectNumber={setSelectNumber}
                    error={error}
                    setError={setError}
                />
            </div>
            <RollDice 
                currentDice={currentDice}
                rollDice={rollDice}
            />
            <div className="btns">
                <Button onClick={resetDice}>RESET</Button>
                <Button onClick={()=> setShow(prev =>!prev)}>Rules of Game</Button>
            </div>
         {show && <Protocols />}
        </MainContainer>
    );
}

export default GamePlay;

const MainContainer = styled.main`
    .top{
        display: flex;
        justify-content: space-around;
    }
 .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
    width: 100%;

}

`;
