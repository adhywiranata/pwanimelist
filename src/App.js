import React, { Component } from 'react';
import glamorous from 'glamorous';

import Header from './components/core/Header';
import AnimeList from './components/AnimeList';

const AppContainer = glamorous.div({
  minHeight: '100vh',
});

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <AnimeList />
      </AppContainer>
    );
  }
}

export default App;
