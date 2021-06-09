import React, {useState} from 'react';
import {Modal, View, TouchableOpacity, ScrollView} from 'react-native';

import {BrightText, MediumText, Colors} from '../../styles';
import {IconButton} from '../Buttons';

import Icon from '../Icons';
// import {Avatar} from 'react-native-paper';

interface IProps {
  isVisible: boolean;
  onModalClose: any;
}

const QuestionsModal = (props: IProps) => {
  const [displayQuestions, setDisplayQuestions] = useState(true);
  return (
    <Modal
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View
        style={{
          height: 490,
          marginTop: 'auto',
          backgroundColor: '#222222',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <TouchableOpacity
              onPress={() => setDisplayQuestions(!displayQuestions)}
              style={{flexDirection: 'row'}}>
              <BrightText
                style={{
                  marginRight: 10,

                  fontSize: 25,
                }}>
                {displayQuestions ? 'Questions' : 'Comments'}
              </BrightText>
              <MediumText>24</MediumText>
              <View>
                <Icon
                  iconType="chevron-up"
                  color={Colors.bold}
                  size={20}
                  style={{marginBottom: -8}}
                />
                <Icon iconType="chevron-down" color={Colors.bold} size={20} />
              </View>
            </TouchableOpacity>
            {/* <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={displayQuestions ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setDisplayQuestions(!displayQuestions)}
              value={displayQuestions}
            /> */}
          </View>
          <IconButton
            iconType="close"
            color={Colors.mediumColor}
            size={35}
            onPress={props.onModalClose}
            containerStyles={{marginRight: 20}}
          />
        </View>
        <ScrollView style={{marginBottom: 40}}>
          <View
            style={{
              borderColor: 'rgba(255,255,255, 0.38)',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              width: '100%',
              minHeight: 90,
              marginTop: 10,

              flexDirection: 'row',
            }}>
            {/* <Avatar.Image size={30} style={{marginLeft: 20, marginTop: 20}} /> */}
            <View style={{marginTop: 20}}>
              <MediumText
                style={{
                  marginLeft: 10,

                  fontSize: 12,
                }}>
                Nick Mercs
              </MediumText>
              <BrightText
                style={{
                  marginLeft: 10,
                  marginBottom: 10,
                  fontSize: 15,
                  marginRight: 70,
                  lineHeight: 25,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                blandit porta magna. Curabitur ut vulputate eros. Ut convallis
                elit iaculis nisl tempor, sit amet elementum massa viverra.
                Proin porta et ex vitae lacinia. Praesent a ultricies ligula.
                Quisque auctor est at elit luctus, vel pretium velit tempus.
                Fusce facilisis tincidunt lobortis. Nunc tempor faucibus
                egestas. Curabitur ultricies finibus tellus, eu maximus nisl
                facilisis in. Integer id mauris tellus. Ut consectetur, augue
                eget ultricies ullamcorper, velit eros dictum arcu, at fringilla
                lorem felis eget nisi. Nulla facilisi. Mauris consectetur eros
                sed venenatis interdum. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Sed quis
                molestie ante, a blandit tortor.
              </BrightText>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default QuestionsModal;
