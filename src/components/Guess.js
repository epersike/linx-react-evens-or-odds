import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {

    const style_even = guess === 'even' ? {border: '2px solid #43a047'} : null;
    const style_odd = guess === 'odd' ? {border: '2px solid #43a047'} : null;


    return (
        <div>
            <h3>Será par ou ímpar?</h3>
            <div>
                <button style={style_even} onClick={setGuessEven}>Par</button>
                { ' ' }
                <button style={style_odd} onClick={setGuessOdd}>Ímpar</button>
            </div>
        </div>
    )
}

export default connect(
    ({gameState: { guess }}) => ( { guess }),
    { setGuessEven, setGuessOdd }
)(Guess);