import React from 'react';
import glamorous from 'glamorous';

const Card = glamorous.div({
  width: '23%',
  padding: 5,
  backgroundColor: '#353535',
  borderRadius: 5,
  border: '1px solid rgba(0,0,0,0.1)',
  marginTop: 10,
  position: 'relative',
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

const Overlay = glamorous.div({
  position: 'absolute',
  bottom: '20%',
  left: 0,
  backgroundColor: 'rgba(0,0,0, 0.8)',
  width: '100%',
});

const A = glamorous.a({
  textDecoration: 'none',
  color: '#353535',
});

const Title = glamorous.h2({
  fontSize: 18,
  fontWeight: 'normal',
  textAlign: 'center',
  color: '#FFFFFF',
});

const Cover = glamorous.img({
  width: '100%',
  borderRadius: 5,
});

export default ({ title, cover_image, mal_url }) => (
  <Card>
    <Cover src={ cover_image } />
    <Overlay>
      <A href={ mal_url } target="_blank" rel="noopener">
        <Title>{ title }</Title>
      </A>
    </Overlay>
  </Card>
);
