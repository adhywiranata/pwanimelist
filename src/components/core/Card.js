import React from 'react';
import glamorous from 'glamorous';

export default glamorous.div({
  width: '31%',
  padding: 0,
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
