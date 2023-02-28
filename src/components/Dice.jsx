import { useState } from 'react';
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"


const Dice = ()=>{
    const images = [dice1, dice2, dice3, dice4, dice5, dice6 ]
     const [dice, setDice] = useState (images[0])
    
      function handleClick (){
        const diceRandom = Math.floor(Math.random() * 5) + 1;
        setDice (diceEmpty)
        setTimeout ( ()=>{
            setDice (images[diceRandom])
        },1000)
      }
return (
    <div>
<img src={dice} alt ="diceRandom" width="193" height="130" onClick={handleClick}/>
       </div>
  );
}; 

export default Dice