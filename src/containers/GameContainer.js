import React from 'react';
import Board from '../components/Board.js';

class GameContainer extends React.Component {
  render(){
    return (
      <div className="game-container">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}

export default GameContainer;
