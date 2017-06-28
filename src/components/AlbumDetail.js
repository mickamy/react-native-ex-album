import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
  } = album;

  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    textContainerStyle,
    headerTextStyle,
    albumThumbnailStyle,
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumThumbnailStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button text='Click Me!' />
      </CardSection>

    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  thumbnailStyle: {
    width: 50,
    height: 50,
  },

  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  headerTextStyle: {
    fontSize: 18,
  },

  albumThumbnailStyle: {
      width: null,
      height: 300,
      flex: 1,
  },
};

export default AlbumDetail;
