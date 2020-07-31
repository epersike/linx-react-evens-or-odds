import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame, cancelGame } from '../actions/settings';
import { fetchDeckResult, fetchNewDeck } from '../actions/deck';

import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

import { fetchStates } from '../reducers/fetchStates';

class App extends Component {

  startGame = () => {
    this.props.startGame();

    this.props.fetchNewDeck();
  }
  
  render() {
    console.log('this', this);

    if (this.props.fetchState == fetchStates.error) {
      return (
        <div>
          <h3>Ocorreu um erro, tente reiniciar a aplicação:</h3>
          <p>{this.props.message}</p>
        </div>
      )
    }

    return (
      <div>
        <h2>♡ ♠ Evens or Odds ♣ ♢</h2>
        {
          this.props.gameStarted ? (
              <div>
                <h3>O jogo começou!</h3>
                <br />
                <GameState />
                <br />
                <Guess />
                <br />
                <DrawCard />
                <br />
                <Card />
                <br />
                <button onClick={this.props.cancelGame}>Cancelar o jogo</button>
              </div>
          ) : (
            <div>
              <h3>Um novo jogo lhe aguarda!</h3>
              <br />
              <button onClick={this.startGame}>Começar jogo</button>
            </div>
          )
        }
        <hr />
        <Instructions />
      </div>
    );
  }
}

const mapStateToProps = state => {

  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  // const { gameStarted } = state.settings;
  // const { fetchState, message } = state.deck;

  return { gameStarted, fetchState, message };

}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchDeckResult: json => dispatch(fetchDeckResult(json)),
//     fetchNewDeck: () => fetchNewDeck(dispatch)
//   }
// }

const componentConnector = connect(
  mapStateToProps, 
  { startGame, cancelGame, fetchNewDeck }
);

export default componentConnector(App);
