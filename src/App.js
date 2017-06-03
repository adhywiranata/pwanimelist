import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/core/Header';
import Cover from './components/core/Cover';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeList/AnimeDetail';

const AppContainer = glamorous.div({
  minHeight: '100vh',
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Helmet>
            <meta charSet="utf-8" />
            <title>PWAnimeList</title>
            <link rel="canonical" href="http://pwanimelist" />
          </Helmet>
          <Header />
          <Cover />
          <Switch>
            <Route exact path="/" component={AnimeList} />
            <Route path="/:id" component={AnimeDetail} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
