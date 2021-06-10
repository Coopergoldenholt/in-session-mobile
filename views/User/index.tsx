import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {BrightText, Colors} from '../../styles';
import Avatar from '../../components/Avatar';
import PurchasesModal from '../../components/Modals/PurchasesModal';
import {IconButton} from '../../components/Buttons';

const User = () => {
  const [showPurchasesModal, setShowPurchasesModal] = useState(false);
  return (
    <View style={styles.container}>
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
        <Avatar />
        <View>
          <BrightText style={{fontSize: 25}}>Cooper Holt</BrightText>
          <BrightText style={{fontSize: 15, marginTop: 3}}>
            Coopergoldenholt@outlook.com
          </BrightText>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <IconButton
          iconType="channel"
          color={Colors.brightColor}
          size={35}
          containerStyles={styles.individualContainer}>
          <BrightText style={styles.settingsText}>Your Channel</BrightText>
        </IconButton>
        <IconButton
          iconType="dollar-sign"
          color={Colors.brightColor}
          size={35}
          containerStyles={styles.individualContainer}>
          <BrightText style={styles.settingsText}>Purchases</BrightText>
        </IconButton>
        <IconButton
          iconType="settings"
          color={Colors.brightColor}
          size={35}
          containerStyles={styles.individualContainer}>
          <BrightText style={styles.settingsText}>Settings</BrightText>
        </IconButton>
        <IconButton
          iconType="question-mark"
          color={Colors.brightColor}
          size={35}
          containerStyles={styles.individualContainer}>
          <BrightText style={styles.settingsText}>Help & Feedback</BrightText>
        </IconButton>
        <IconButton
          iconType="logout"
          color={Colors.brightColor}
          size={35}
          containerStyles={{...styles.individualContainer, paddingBottom: 20}}>
          <BrightText style={styles.settingsText}>Logout</BrightText>
        </IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bolderBackground,
    flex: 1,
  },
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
