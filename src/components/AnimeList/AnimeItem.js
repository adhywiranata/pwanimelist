import React from 'react';
import glamorous from 'glamorous';

const Card = glamorous.div({
  width: '23%',
  padding: 10,
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  marginTop: 10,
  border: '1px solid rgba(0,0,0,0.1)',
  boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media(max-width: 1024px)': {
    width: '45%',
  },
  '@media(max-width: 720px)': {
    width: '85%',
  },
  '@media(max-width: 400px)': {
    width: '100%',
  },
});

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
    <Cover>
      <img src={cover_image} alt={title} style={{ width: '100%' }} />
    </Cover>
    <Content>
        <Title>{ title }</Title>
        <Score>{ score }</Score>
    </Content>
  </Card>
);
