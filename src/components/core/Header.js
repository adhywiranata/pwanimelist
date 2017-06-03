import React from 'react';
import glamorous from 'glamorous';

const Header = glamorous.header({
  padding: 5,
  backgroundColor: '#52B3D9',
  position: 'fixed',
  width: '100%',
  top: 0,
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  boxShadow: '0px 3px 5px 0px rgba(0,0,0, 0.2)',
  zIndex: '+999',
});

const Logo = glamorous.h1({
  fontSize: 25,
  textAlign: 'center',
  color: '#FFFFFF',
});

export default () => (
  <Header>
    <Logo>
      PwaAnimeList
    </Logo>
  </Header>
)
