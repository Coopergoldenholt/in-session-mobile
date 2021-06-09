import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {IconButton} from '../components/Buttons';
import Icon from '../components/Icons';
import StartLiveStreamModal from '../components/Modals/StartLiveStreamModal';
import StreamQuestionsModal from '../components/Modals/StreamQuestionsModal';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../styles';
import Avatar from '../components/Avatar';

const Header = () => {
  const [displayLiveStreamModal, setDisplayLiveStreamModal] = useState(false);
  const [displayStreamQuestionsModal, setDisplayStreamQuestionsModal] =
    useState(false);
  const [startLiveStream, setStartLiveStream] = useState(false);

  const scheduleStreamPress = (startStream: boolean) => {
    setStartLiveStream(startStream);
    setDisplayLiveStreamModal(false);
    setDisplayStreamQuestionsModal(true);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StartLiveStreamModal
        isVisible={displayLiveStreamModal}
        onClose={() => setDisplayLiveStreamModal(false)}
        scheduleStreamPress={scheduleStreamPress}
      />
      <StreamQuestionsModal
        isVisible={displayStreamQuestionsModal}
        closeModal={() => setDisplayStreamQuestionsModal(false)}
      />
      <View style={styles.logoContainer}>
        <Icon iconType="logo" color={Colors.primaryBlue} size={30} />
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          onPress={() => setDisplayLiveStreamModal(true)}
          color={Colors.brightColor}
          size={30}
          iconType="video-call"
        />
        <IconButton
          onPress={() => setDisplayLiveStreamModal(true)}
          color={Colors.brightColor}
          size={30}
          iconType="search"
        />
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Avatar style={styles.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoContainer: {justifyContent: 'center', marginLeft: 20},
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    justifyContent: 'space-around',
  },
  avatar: {height: 30, width: 30},
});

export default Header;
