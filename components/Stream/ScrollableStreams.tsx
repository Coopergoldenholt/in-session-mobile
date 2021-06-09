import React from 'react';
import {FlatList, View} from 'react-native';

import {IStream} from '../../types';
import {Colors} from '../../styles';

import StreamTemplate from './StreamTemplate';

interface IProps {
  streamData: [IStream] | [];
  navigation: any;
}

const ScrollableStream = (props: IProps) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.bolderBackground}}>
      <FlatList
        data={props.streamData}
        renderItem={({item}: any) => {
          return (
            <StreamTemplate
              key={item.streamID}
              navigation={props.navigation}
              streamData={item}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ScrollableStream;
