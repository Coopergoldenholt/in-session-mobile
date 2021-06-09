import React, {useState} from 'react';
import {Modal, ActivityIndicator, View, Image, StyleSheet} from 'react-native';

import {IconButton} from '../Buttons';
import {Colors} from '../../styles';

interface IProps {
  onPress: any;
  isVisible: any;
  uri: string;
}

const ImageModal = (props: IProps) => {
  const [loadingImage, setLoadingImage] = useState(true);

  const onClose = () => {
    props.onPress();
    setLoadingImage(true);
  };
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={props.isVisible}>
        <View style={styles.container}>
          <IconButton
            onPress={onClose}
            iconType="close"
            color={Colors.mediumColor}
            size={40}
            containerStyles={styles.closeButton}
          />
          {loadingImage ? (
            <ActivityIndicator style={{position: 'absolute'}} />
          ) : null}
          <Image
            onLoad={() => setLoadingImage(false)}
            style={styles.image}
            source={{uri: props.uri}}
          />
        </View>
      </Modal>
    </View>
  );
};
export default ImageModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.8)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {position: 'absolute', top: 60, right: 20},
  image: {
    width: '100%',
    height: 300,
  },
});
