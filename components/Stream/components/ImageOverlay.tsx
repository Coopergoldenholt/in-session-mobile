import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

import {BrightText} from '../../../styles';

interface IProps {
  viewers: number;
  image: string;
  live: boolean;
  totalInterested: number;
}

const ImageOverlay = (props: IProps) => {
  let {viewers, image, live, totalInterested} = props;

  const configViewers = () => {
    if (viewers >= 999 && viewers <= 999999) {
      let formattedViewers = viewers / 100;
      formattedViewers = Math.round(formattedViewers);
      return `${formattedViewers / 10}K`;
    } else {
      return `${viewers}`;
    }
  };
  console.log(image);
  return (
    <View>
      {image ? (
        <Image
          style={{
            height: 300,
            width: '100%',
          }}
          source={{
            uri: image,
          }}
        />
      ) : (
        <ActivityIndicator style={{height: 300}} />
      )}

      {live ? (
        <Image
          style={{
            position: 'absolute',
            height: 50,
            width: 50,
            bottom: 10,
            left: 10,
          }}
          source={require('../../../assets/Live-PNG-Image.png')}
        />
      ) : null}
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          position: 'absolute',
          borderRadius: 3,
          bottom: 20,
          right: 10,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          height: 20,
        }}>
        {live ? (
          <BrightText
            style={{
              zIndex: 1,
            }}>
            {configViewers()} viewers
          </BrightText>
        ) : (
          <BrightText
            style={{
              zIndex: 1,
            }}>
            {totalInterested} interested
          </BrightText>
        )}
      </View>
    </View>
  );
};

export default ImageOverlay;
