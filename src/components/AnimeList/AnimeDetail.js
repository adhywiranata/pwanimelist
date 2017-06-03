import React from 'react';
import glamorous from 'glamorous';

import Card from '../core/Card';

const DetailWrapper = glamorous.div({
  padding: 20,
  paddingTop: 0,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const Cover = glamorous.img({
  width: '80%',
});

const Title = glamorous.h1({
  color: '#52B3D9',
});

const Score = glamorous.span({
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#EB9532',
});

export default class AnimeDetail extends React.Component {
  render() {
    return (
      <DetailWrapper>
      <Title>Shingeki no Kyojin Sisen dua</Title>
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column', padding: 20, alignItems: 'center' }}>
            <Cover src="https://myanimelist.cdn-dena.com/images/anime/4/84177.jpg" />
            <Score>8.53</Score>
            <p>
              Lorem ipsum dolor sit amet bla bla bla
              lorem ipsum dolor sit amet
            </p>
            <h5>Characters</h5>
          </div>
        </Card>
      </DetailWrapper>
    );
  }
}
