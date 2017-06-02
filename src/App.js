import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Helmet } from 'react-helmet';

import Header from './components/core/Header';
import AnimeList from './components/AnimeList';

const AppContainer = glamorous.div({
  minHeight: '100vh',
});

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>PWAnimeList</title>
          <link rel="canonical" href="http://pwanimelist" />
        </Helmet>
        <Header />
        <AnimeList />
      </AppContainer>
    );
  }
}

export default App;
