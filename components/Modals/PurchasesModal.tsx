import React, {useState} from 'react';
import {
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors, MediumText} from '../../styles';
import Icon from '../Icons';

import CreditCardModal from './CreditCardModal';
import {IconButton} from '../Buttons';

interface IProps {
  isVisible: boolean;
  handleClose: any;
}

const PurchasesModal = (props: IProps) => {
  const [showCreditCardModal, setShowCreditCardModal] = useState(false);

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <CreditCardModal
          isVisible={showCreditCardModal}
          onClose={() => setShowCreditCardModal(false)}
        />
        <IconButton
          onPress={props.handleClose}
          iconType="close"
          color={Colors.mediumColor}
          size={40}
          containerStyles={styles.closeButton}
        />

        {/* Default Card */}
        <View style={styles.defaultCardContainer}>
          <Icon iconType="card" size={30} color={Colors.mediumColor} />
          <MediumText>**** *** *** 4444</MediumText>
          <MediumText>Default Card</MediumText>
        </View>
        {/* Add Card */}
        <IconButton
          onPress={() => setShowCreditCardModal(true)}
          iconType="plus-circle-outline"
          color={Colors.mediumColor}
          size={40}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  defaultCardContainer: {
    borderColor: 'rgba(255,255,255, 0.38)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 75,
  },
});

export default PurchasesModal;
