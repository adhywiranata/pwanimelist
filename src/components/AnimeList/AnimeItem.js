import React from 'react';
import glamorous from 'glamorous';

const Card = glamorous.div({
  width: '18%',
  padding: 5,
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  border: '1px solid rgba(0,0,0,0.1)',
  marginTop: 10,
});

const Title = glamorous.h2({
  fontSize: 18,
  fontWeight: 'normal',
  textAlign: 'center',
});

const A = glamorous.a({
  textDecoration: 'none',
  color: '#353535',
});

const Cover = glamorous.img({
  width: '100%',
  borderRadius: 5,
});

export default ({ title, cover_image, mal_url }) => (
  <Card>
    <Cover src={ cover_image } />
    <A href={ mal_url } target="_blank" rel="noopener">
      <Title>{ title }</Title>
    </A>
  </Card>
);
