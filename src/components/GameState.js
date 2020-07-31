import React from 'react';
import { connect } from 'react-redux';

const GameState = ( { remaining, correctGuesses }) => {
    return (
        <div>
            <p>{remaining} cartas restantes</p>
            <p>{correctGuesses} acertos!</p>
        </div>
    )
}

export default connect (
    ( {
        deck: { remaining },
        gameState: { correctGuesses }
    }) => ( {remaining, correctGuesses })
)(GameState);