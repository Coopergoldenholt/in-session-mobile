import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Emoji from 'react-native-emoji';

import {IStream} from '../../types';
import {BrightText, MediumText, Colors} from '../../styles';
import {DoublePressButton, IconButton} from '../../components/Buttons';

interface IProps {
  route: any;
  navigation: any;
}

const PendingStreamView = (props: IProps) => {
  const [stream] = useState<IStream>(props.route.params.stream);

  return (
    <View style={styles.container}>
      <IconButton
        iconType="left-chevron"
        size={50}
        onPress={() => props.navigation.goBack()}
        color={Colors.brightColor}
      />
      <Image
        style={{
          height: '40%',
          width: '100%',
        }}
        source={{
          uri: stream.thumbnail,
        }}
      />
      <View style={styles.headerContainer}>
        <BrightText style={styles.headerText}>
          {stream.stream_title}
          <MediumText style={styles.headerText}> | </MediumText>
          <MediumText style={styles.infoText}>{stream.stream_info}</MediumText>
        </BrightText>
      </View>

      <View style={styles.buttonContainer}>
        <DoublePressButton pressed={false} text="Interested?">
          <Emoji name="wave" style={{fontSize: 20, marginLeft: 5}} />
        </DoublePressButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  headerContainer: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 25,
  },
  infoText: {
    fontSize: 17,
  },
});

export default PendingStreamView;
