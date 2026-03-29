

// import React from 'react';
// import { MdDelete } from "react-icons/md";
// import { FaUserSecret } from "react-icons/fa6";

// const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers , setCoin, coin  }) => {

//     const handleDeleteSelectedPlayer = (player) => {
//         const filteredPlayers = selectedPlayers.filter(
//             selectedPlayer => selectedPlayer.id !== player.id
//         );
//         setSelectedPlayers(filteredPlayers);
//         setCoin(coin + player.price)
//     };

//     return (
//         <div>
//             <div className='space-y-5'>
//                 {
//                     selectedPlayers.map((player) => {
//                         return (
//                             <div 
//                                 key={player.id} 
//                                 className='flex items-center gap-6 justify-between p-10 rounded-2xl border'
//                             >

//                                 <div className='flex items-center gap-6'>
//                                     <img 
//                                         src={player.playerPicture} 
//                                         alt={player.playerName} 
//                                         className='h-[75px] w-[75px] rounded-md' 
//                                     />
//                                     <div>
//                                         <h2 className='flex items-center gap-2 font-semibold text-2xl'>
//                                             <FaUserSecret /> {player.playerName}
//                                         </h2>
//                                         <p>{player.playerType}</p>
//                                     </div>
//                                 </div>

//                                 <button 
//                                     className='btn text-red-500'
//                                     onClick={() => handleDeleteSelectedPlayer(player)}
//                                 >
//                                     <MdDelete />
//                                 </button>

//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         </div>
//     );
// };

// export default SelectedPlayers;

import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) => {
        // Remove player from selected list
        const filteredPlayers = selectedPlayers.filter(
            selectedPlayer => selectedPlayer.id !== player.id
        );
        setSelectedPlayers(filteredPlayers);

        // Add player price back to coin using functional update
        setCoin(prevCoin => prevCoin + player.price);
    };

    return (
        <div>
            <div className='space-y-5'>
                {selectedPlayers.length === 0 && (
                    <p className='text-center text-gray-500'>No players selected.</p>
                )}

                {selectedPlayers.map((player) => (
                    <div 
                        key={player.id} 
                        className='flex items-center gap-6 justify-between p-6 rounded-2xl border'
                    >
                        <div className='flex items-center gap-4'>
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
                                <p className='text-sm text-gray-600'>Price: {player.price}</p>
                            </div>
                        </div>

                        <button 
                            className='text-red-500 text-2xl'
                            onClick={() => handleDeleteSelectedPlayer(player)}
                        >
                            <MdDelete />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectedPlayers;