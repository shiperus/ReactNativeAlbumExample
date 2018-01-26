//class component = to fetch data
// functional component = can only return jsx

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] };


  componentWillMount() {
    // console.log('Component will mount here');
    // debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => (this.setState({ albums: response.data })));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
  render() {
    const { scrollviewStyle } = styles;
    console.log(this.state);
    return (
      <ScrollView style={scrollviewStyle}>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

const styles = {
    scrollviewStyle: {
      backgroundColor: '#fff'
    }
};

export default AlbumList;
