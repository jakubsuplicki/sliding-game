import React, { Component } from 'react';
import levelFactory from './../lib/levels-factory';
import Game from './Game';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import  {gameLevel} from '../index'
class App extends Component {
  constructor(props) {
    super(props);

    const level = props.level ? props.level : levelFactory(gameLevel);
    const originalLevel = Object.assign({}, level);

    this.state = {
      original: originalLevel,
      level,
    };
  }

  onResetClick = () => {
    this.setState({
      level: {
        tileSet: this.state.original.tileSet,
      },
    });
  };

  onNewClick = () => {
    const newLevel = levelFactory(gameLevel);
    const newOriginalLevel = Object.assign({}, newLevel);
    this.setState({
      level: newLevel,
      original: newOriginalLevel,
    });
  };

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Game
          onScore={this.props.onScore}
          gridSize={4}
          tileSize={90}
          numbers={this.state.level.tileSet}
          onResetClick={this.onResetClick}
          onNewClick={this.onNewClick}
          original={this.state.original.tileSet}
        />
      </div>
    );
  }
}

App.propTypes = {
  level: PropTypes.shape({
    tileSet: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  onScore: PropTypes.any
};

export default styled(App)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
