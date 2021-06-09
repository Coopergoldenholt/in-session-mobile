import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../components/Icons';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../styles';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        iconType="left-chevron"
        size={45}
        color={Colors.dullColor}
        style={{marginLeft: 10}}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
