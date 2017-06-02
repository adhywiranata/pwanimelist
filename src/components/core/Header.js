import React from 'react';
import glamorous from 'glamorous';

const Header = glamorous.header({
  padding: 5,
  backgroundColor: '#F5F5F5',
  position: 'fixed',
  width: '100%',
  top: 0,
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  zIndex: '+999',
});

const Logo = glamorous.h1({
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
});

export default () => (
  <Header>
    <Logo>
      PwaAnimeList
    </Logo>
  </Header>
)
