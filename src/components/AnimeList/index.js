import React from 'react';
import glamorous from 'glamorous';

import AnimeItem from './AnimeItem';

const ListWrapper = glamorous.div({
  marginTop: 100,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
});

export default class AnimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
    }
  }
  render() {
    return (
      <ListWrapper>
        { [1, 2, 3, 4].map(anime => <AnimeItem />) }
      </ListWrapper>
    )
  }
}
