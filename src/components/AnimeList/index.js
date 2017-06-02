import React from 'react';
import glamorous from 'glamorous';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('http://localhost:1234/animes')
      .then(res => this.setState({ animes: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { animes } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: 'center', marginTop: 30 }}>Top Anime List</h1>
        <ListWrapper>
          { animes.map(anime => <AnimeItem key={anime.id} {...anime} />) }
        </ListWrapper>
      </div>
    )
  }
}
