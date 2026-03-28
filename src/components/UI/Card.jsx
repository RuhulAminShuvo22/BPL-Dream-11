import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Card = ({player , setCoin , coin}) => {

    const [isSelected , setIsSelected] = useState(false) ;

    console.log(player.price);
    

    const handleChosePlaer = ()=>{

        let newCoin = coin - player.price
        if(newCoin >=0){
            setCoin(coin - player.price);
        }
        else{
            alert("SORRY!!! You don't have enough balance for buying this player");
            return;
        }
        

        alert(`${player.playerName} is selected`) 
        setIsSelected(true);

   
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                <img
                  src={player.playerPicture}
                  alt="Player Picture" />
                </figure>
                <div className="card-body">
                <h2 className="card-title">
                     <FaUser/>
                     {player.playerName}
                </h2>
            
                <div className='flex justify-between gap-2 items-center'>
                    <div className='flex justify-between gap-2'>
                        <FaFlag/>
                        <p>{player.playerCountry}</p>
                    </div>
            
                    <button className='btn '>{player.playerType} </button>
            
                </div>
            
                <div className="divider"></div>
            
                <h2 className='font-bold'>Rating ({player.rating})</h2>
            
                <div className='flex justify-between gap-4 font-bold'>
                    <p>{player.battingStyle}</p>
                    <p className='text-right'>{player.bollingStyle}</p>
                </div>
            
                <div className="card-actions justify-between items-center">
            
                    <p className='font-semibold'>Price:${player.price}</p>
            
                  <button className="btn" onClick={handleChosePlaer} 
                  disabled={isSelected ? true : false} >{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Card;