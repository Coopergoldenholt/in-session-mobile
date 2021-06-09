import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, BrightText} from '../../styles';

const StartLiveStreamModal = props => {
  return (
    <Modal
      style={{
        backgroundColor: 'rgba(0, 0, 0, .8)',
      }}
      animationType="slide"
      transparent={true}
      visible={props.isVisible}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, .8)',
          height: '100%',
          justifyContent: 'flex-end',
        }}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => props.onClose()}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 2,
            }}>
            <Icon2 name="close" color={Colors.brightColor} size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.scheduleStreamPress(false)}>
            <Icon
              name="calendar"
              color={Colors.brightColor}
              size={30}
              style={styles.icon}
            />
            <BrightText style={styles.textStyle}>Schedule a Stream</BrightText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.scheduleStreamPress(true)}>
            <Icon
              name="play-circle"
              color={Colors.brightColor}
              size={30}
              style={styles.icon}
            />
            <BrightText style={styles.textStyle}>Start a Stream</BrightText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: Colors.bolderBackground,
    borderRadius: 15,
    width: '100%',
    height: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    elevation: 2,
    margin: 20,
  },
  icon: {
    marginLeft: 20,
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default StartLiveStreamModal;
