import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  // initial state
  state = { albums: [] };

  // get called before this component to be rendered
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // always set data via method in `Component`
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
