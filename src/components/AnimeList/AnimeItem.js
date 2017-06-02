import React from 'react';
import glamorous from 'glamorous';

const Card = glamorous.div({
  width: '23%',
  padding: 5,
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  border: '1px solid rgba(0,0,0,0.1)',
  marginTop: 10,
});

const Title = glamorous.h2({
  fontSize: 18,
  fontWeight: 'normal',
});

const Cover = glamorous.img({
  width: '100%',
  borderRadius: 5,
});

export default () => (
  <Card>
    <Cover src="https://myanimelist.cdn-dena.com/images/anime/8/85593.jpg" />
    <Title>Rokudenashi Majutsu Koushi to Akashic Records</Title>
    <p>wow</p>
  </Card>
);
