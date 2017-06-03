import React from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import localforage from 'localforage';

import AnimeItem from './AnimeItem';

const ListWrapper = glamorous.div({
  marginTop: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  padding: 20,
});

export default class AnimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:1234/animes')
      .then(res => {
        const animes = res.data;
        // set to local state
        this.setState({ animes });
        // set to local storage
        localforage.setItem('animes', animes).then(() => {
          return localforage.getItem('animes');
        }).then((value) => {
          console.log(value);
        }).catch((err) => {
          console.log(err);
        });
      })
      .catch(err => {
        localforage.getItem('animes')
        .then((value) => {
          this.setState({ animes: value });
        })
        .catch((err) => { console.log(err) });
      });
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
