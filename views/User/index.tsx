import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BrightText, Colors} from '../../styles';

import PurchasesModal from '../../components/Modals/PurchasesModal';

const User = props => {
  const [showPurchasesModal, setShowPurchasesModal] = useState(false);
  return (
    <View style={{backgroundColor: '#222222', flex: 1}}>
      {/* Modals */}
      <PurchasesModal
        isVisible={showPurchasesModal}
        handleClose={() => setShowPurchasesModal(false)}
      />
      {/* End Modals */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          paddingLeft: 20,
          paddingBottom: 20,
          borderBottomColor: 'rgba(255,255,255, 0.38)',
          borderBottomWidth: 1,
        }}>
        {/* <Avatar.Image size={60} style={{marginRight: 10}} /> */}
        <View>
          <BrightText style={{fontSize: 25}}>Cooper Holt</BrightText>
          <BrightText style={{fontSize: 15, marginTop: 3}}>
            Coopergoldenholt@outlook.com
          </BrightText>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.individualContainer}>
          <Icon
            name="personal-video"
            color="rgba(255,255,255, 0.87)"
            size={35}
          />
          <BrightText style={styles.settingsText}>Your Channel</BrightText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowPurchasesModal(true)}
          style={styles.individualContainer}>
          <Icon name="attach-money" color="rgba(255,255,255, 0.87)" size={35} />
          <BrightText style={styles.settingsText}>Purchases</BrightText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualContainer}>
          <Icon name="settings" color="rgba(255,255,255, 0.87)" size={35} />
          <BrightText style={styles.settingsText}>Settings</BrightText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualContainer}>
          <Icon name="help-outline" color="rgba(255,255,255, 0.87)" size={35} />
          <BrightText style={styles.settingsText}>Help & Feedback</BrightText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.individualContainer, marginBottom: 20}}>
          <Icon name="logout" color="rgba(255,255,255, 0.87)" size={35} />
          <BrightText style={styles.settingsText}>Logout</BrightText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    marginTop: 20,
    backgroundColor: Colors.backgroundColor,
  },
  individualContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  settingsText: {
    fontSize: 18,
    marginLeft: 15,
  },
});

export default User;
