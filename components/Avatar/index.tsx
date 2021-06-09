import React from 'react';
import {StyleSheet, Image} from 'react-native';

interface IProps {
  image?: string;
  style?: any;
}

const Avatar = (props: IProps) => {
  return (
    <Image
      source={
        props.image
          ? {uri: props.image}
          : {uri: 'http://localhost:4327/empty-user-image.png'}
      }
      style={{...styles.image, ...props.style}}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});

export default Avatar;
