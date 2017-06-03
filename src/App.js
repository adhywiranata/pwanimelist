import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/core/Header';
import Cover from './components/core/Cover';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeList/AnimeDetail';

const OfflineStatus = () => (
  <div style={{ position: 'fixed', bottom: 0, width: '89%', backgroundColor: 'rgba(0,0,0,0.8)', margin: 10, padding: 10, textAlign: 'center', zIndex: '+999' }}>
    <span style={{ color: '#FFFFFF' }}>You Are Offline</span>
  </div>
);

const AppContainer = glamorous.div({
  minHeight: '100vh',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppOnline: true,
    };
  }
  componentWillMount() {
    //After DOM Loaded
    const self = this;
    document.addEventListener('DOMContentLoaded', function(event) {
      //On initial load to check connectivity
      if (!navigator.onLine) {
        updateNetworkStatus();
      }

      window.addEventListener('online', updateNetworkStatus, false);
      window.addEventListener('offline', updateNetworkStatus, false);
    });

    //To update network status
    function updateNetworkStatus() {
      if (navigator.onLine) {
        self.setState({ isAppOnline: true });
      }
      else {
        self.setState({ isAppOnline: false });
      }
    }
  }

  render() {
    const { isAppOnline } = this.state;
    return (
      <BrowserRouter>
        <AppContainer>
          <Helmet>
            <meta charSet="utf-8" />
            <title>MyPWAnimeList</title>
            <link rel="canonical" href="http://pwanimelist" />
          </Helmet>
          <Header />
          <Cover />
          { !isAppOnline && <OfflineStatus /> }
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
