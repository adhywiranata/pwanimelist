import React from 'react';
import glamorous from 'glamorous';

import CoverImg from '../../images/cover.jpg';

const CoverContainer = glamorous.div({
  width: '100%',
  background: '#F5F5F5',
  marginTop: -80,
  '@media(max-width: 1024px)': {
    marginTop: 70,
  },
});

export default () => (
  <CoverContainer>
    <img src={CoverImg} width="100%" alt="cover" />
  </CoverContainer>
);
