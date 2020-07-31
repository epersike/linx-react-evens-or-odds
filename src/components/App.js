import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame, cancelGame } from '../actions/settings';
import { fetchDeckResult, fetchNewDeck } from '../actions/deck';

import Instructions from './Instructions';

class App extends Component {

  startGame = () => {
    this.props.startGame();

    this.props.fetchNewDeck();
  }
  
  render() {
    console.log('this', this);
    return (
      <div>
        <h2>♡ ♠ Evens or Odds ♣ ♢</h2>
        {
          this.props.gameStarted ? (
              <div>
                <h3>O jogo começou!</h3>
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
  console.log('state', state);

  return { gameStarted: state.gameStarted };
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    fetchDeckResult: json => dispatch(fetchDeckResult(json)),
    fetchNewDeck: () => fetchNewDeck(dispatch)
  }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);
