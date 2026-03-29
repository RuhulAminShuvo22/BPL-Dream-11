import React from 'react';

import Card from '../../../UI/Card';

const AvailablePlayers = ({players , setCoin, coin , selectedPlayers , setSelectedPlayers}) => {
    console.log(players, "players")
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                
               players.map(player => {
                //console.log(player, 'player')

                return (
                    <Card key={player.playerName} player={player} setCoin = {setCoin} coin={coin} selectedPlayers={selectedPlayers}  setSelectedPlayers={setSelectedPlayers}  ></Card>
                
                )
               }) 
            }
            </div>
            
        </div>
    );
};

export default AvailablePlayers;