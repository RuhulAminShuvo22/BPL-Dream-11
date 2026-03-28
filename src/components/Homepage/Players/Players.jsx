import React, { use } from 'react';

const Players = ({playerPromise}) => {

    console.log(playerPromise)
    const data = use(playerPromise)
    console.log(data.playerName)


    return (
        <div>
            players: {data.length}
        </div>
    );
};

export default Players;