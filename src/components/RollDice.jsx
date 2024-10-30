import styled from "styled-components";
const RollDice = (
  {rollDice, currentDice}
) => {
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice} >
        <img src={`/images/dice_${currentDice}.png `} />
      </div>
      <p> click on dice to roll</p>
    </DiceContainer>
    
  )
}

export default RollDice
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
 
  align-items: center;

  img{
    width: 100px;
    height: 100px;
    margin-top: 100px;
  }
  .dice{
    cursor: pointer;
  }
`;
