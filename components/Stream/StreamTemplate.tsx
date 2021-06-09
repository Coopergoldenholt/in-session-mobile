import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import ImageOverlay from './components/ImageOverlay';
import axios from 'axios';
import {URL} from '../../config/urlConfig';
import Avatar from '../Avatar';
import {BrightText, MediumText, Colors} from '../../styles';
import {IStream} from '../../types';

interface IProps {
  streamData: IStream;
  navigation: any;
}

const StreamTemplate = (props: IProps) => {
  const [stream] = useState<IStream>({...props.streamData});

  const handleStreamPress = () => {
    if (stream.live) {
      props.navigation.navigate('LiveStreamView', {
        stream: stream,
      });
    } else {
      props.navigation.navigate('PendingStreamView', {
        stream: stream,
      });
    }
  };

  return (
    <TouchableOpacity
      style={{backgroundColor: Colors.backgroundColor}}
      onPress={() => handleStreamPress()}>
      <View></View>
      <ImageOverlay
        // @ts-ignore
        viewers={stream.viewers}
        image={stream.thumbnail}
        live={stream.live}
        totalInterested={stream.total_interested}
      />

      <View style={{marginTop: 10, flexDirection: 'row'}}>
        <Avatar style={{marginLeft: 10, marginRight: 10}} />
        <View
          style={{
            marginRight: 10,
          }}>
          <BrightText
            style={{
              marginTop: 5,
              fontSize: 20,

              marginRight: 50,
              lineHeight: 25,
            }}>
            {props.streamData.stream_title}
          </BrightText>
          <MediumText
            style={{
              marginTop: 5,
              fontWeight: 'bold',
              fontSize: 15,
              marginBottom: 10,
            }}>
            {props.streamData.username}
          </MediumText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StreamTemplate;
