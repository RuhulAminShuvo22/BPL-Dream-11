

import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers , setCoin, coin  }) => {

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(
            selectedPlayer => selectedPlayer.id !== player.id
        );
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)
    };

    return (
        <div>
            <div className='space-y-5'>
                {
                    selectedPlayers.length === 0 ?
                    <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
                        <h2 className='font-semibold text-2xl'>No players selected yet</h2>
                        <p>Go to Available tab to select players</p>
                    </div> 

                    : selectedPlayers.map((player) => {
                        return (
                            <div 
                                key={player.id} 
                                className='flex items-center gap-6 justify-between p-10 rounded-2xl border'
                            >

                                <div className='flex items-center gap-6'>
                                    <img 
                                        src={player.playerPicture} 
                                        alt={player.playerName} 
                                        className='h-[75px] w-[75px] rounded-md' 
                                    />
                                    <div>
                                        <h2 className='flex items-center gap-2 font-semibold text-2xl'>
                                            <FaUserSecret /> {player.playerName}
                                        </h2>
                                        <p>{player.playerType}</p>
                                    </div>
                                </div>

                                <button 
                                    className='btn text-red-500'
                                    onClick={() => handleDeleteSelectedPlayer(player)}
                                >
                                    <MdDelete />
                                </button>

                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;

