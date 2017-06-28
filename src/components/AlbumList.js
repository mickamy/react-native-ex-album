import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const endpoint = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {

  // initial state
  state = { albums: [] };

  // get called before this component to be rendered
  componentWillMount() {
    axios.get(endpoint)
      // always set data via method in `Component`
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
