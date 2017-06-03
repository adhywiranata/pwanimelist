import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

import Card from '../core/Card';

const Cover = glamorous.div({
  flex: 1,
});

const Content = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const A = glamorous.a({
  textDecoration: 'none',
  color: '#353535',
});

const Title = glamorous.h2({
  fontSize: 18,
  fontWeight: 'normal',
  textAlign: 'center',
  color: '#353535',
  padding: 10,
});

const Score = glamorous.span({
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#EB9532',
});

export default ({ title, score, cover_image, mal_url }) => (
  <Card>
    <Link to="/wow" style={{ display: 'flex', flexDirection: 'row', padding: 20, textDecoration: 'none' }}>
    <Cover>
      <img src={cover_image} alt={title} style={{ width: '100%' }} />
    </Cover>
    <Content>
        <Title>{ title }</Title>
        <Score>{ score }</Score>
    </Content>
    </Link>
  </Card>
);
