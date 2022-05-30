import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import levelFactory from './lib/levels-factory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
export const gameLevel = 16

injectTapEventPlugin();

const MuiTheme = ({onScore}) => (
  <MuiThemeProvider>
    <App level={levelFactory(gameLevel)} onScore={onScore} />
  </MuiThemeProvider>
);

ReactDOM.render(<MuiTheme onScore={(() => {})} />, document.getElementById('root'))

export const main = (element, onEvent) => {
    ReactDOM.render(<MuiTheme onScore={onEvent} />, element)
}

window.runMiniGame = main
