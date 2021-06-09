import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {DullText, BrightText, Colors} from '../../styles';
import Icon from '../Icons';
import axios from 'axios';
import {URL} from '../../config/urlConfig';
import {useSelector} from 'react-redux';

interface IProps {
  isVisible: boolean;
  onClose: any;
}

const CreditCardModal = (props: IProps) => {
  const user = useSelector((state: any) => state.user.user);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiration: {
      month: '',
      year: '',
    },
    cvv: '',
  });
  const [cardValid, setCardValid] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // useEffect(() => {
  //   if (
  //     cardInfo.cardNumber &&
  //     cardInfo.expiration.month &&
  //     cardInfo.expiration.year &&
  //     cardInfo.cvv
  //   ) {
  //     setCardInfo(true);
  //   } else {
  //     setCardInfo(false);
  //   }
  // }, [cardInfo]);

  const handleSubmit = async () => {
    axios
      .post(`${URL}/api/card`, {stripeId: user.stripeId})
      .then(res => console.log(res.data));
  };

  return (
    <View style={{}}>
      <Modal visible={props.isVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,.8)',
          }}>
          <View
            style={{
              margin: 20,
              height: 500,
              backgroundColor: Colors.backgroundColor,
              borderRadius: 10,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 5}}
              onPress={props.onClose}>
              <Icon iconType="close" color={Colors.mediumColor} size={40} />
            </TouchableOpacity>
            <BrightText>Add Credit/Debit Card</BrightText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'rgba(255,255,255, 0.38)',
                borderRadius: 5,
                width: 300,
                marginTop: 25,
                marginBottom: 20,
              }}>
              <TextInput
                placeholder="Card Number"
                placeholderTextColor="rgba(255,255,255, 0.38)"
                style={{
                  minHeight: 40,

                  color: 'rgba(255,255,255, 0.87)',
                  fontSize: 20,
                }}
                onChangeText={text =>
                  setCardInfo({...cardInfo, cardNumber: text})
                }
                value={cardInfo.cardNumber}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 300,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255, 0.38)',
                    borderRadius: 5,
                    width: 135,
                  }}>
                  <Icon
                    iconType="calendar-blank"
                    size={30}
                    color={Colors.brightColor}
                    style={{marginRight: 8, marginLeft: 5}}
                  />
                  <TextInput
                    placeholder="MM"
                    placeholderTextColor="rgba(255,255,255, 0.38)"
                    maxLength={2}
                    style={{
                      minHeight: 40,

                      color: 'rgba(255,255,255, 0.87)',
                      fontSize: 20,
                    }}
                    onChangeText={text =>
                      setCardInfo({
                        ...cardInfo,
                        expiration: {...cardInfo.expiration, month: text},
                      })
                    }
                    value={cardInfo.expiration.month}
                  />
                  <DullText
                    style={{marginLeft: 5, marginRight: 5, fontSize: 20}}>
                    /
                  </DullText>

                  <TextInput
                    placeholder="YY"
                    placeholderTextColor="rgba(255,255,255, 0.38)"
                    style={{
                      minHeight: 40,
                      color: 'rgba(255,255,255, 0.87)',
                      fontSize: 20,
                      marginRight: 10,
                    }}
                    maxLength={2}
                    onChangeText={text =>
                      setCardInfo({
                        ...cardInfo,
                        expiration: {...cardInfo.expiration, year: text},
                      })
                    }
                    value={cardInfo.expiration.year}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255, 0.38)',
                  borderRadius: 5,
                  width: 135,
                }}>
                <TextInput
                  placeholder="CVV"
                  placeholderTextColor="rgba(255,255,255, 0.38)"
                  style={{
                    minHeight: 40,

                    color: 'rgba(255,255,255, 0.87)',
                    fontSize: 20,
                  }}
                  maxLength={4}
                  onChangeText={text => setCardInfo({...cardInfo, cvv: text})}
                  value={cardInfo.cvv}
                />
              </View>
            </View>
            <View style={{marginTop: 40}}>
              <TouchableOpacity
                disabled={buttonDisabled}
                onPress={() => handleSubmit()}
                style={buttonDisabled ? styles.disabledButton : styles.button}>
                {buttonDisabled ? (
                  <DullText style={{fontSize: 18}}>Add Card</DullText>
                ) : (
                  <BrightText style={{fontSize: 18}}>Add Card</BrightText>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: Colors.primaryBlue,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  disabledButton: {
    width: 200,
    backgroundColor: Colors.disabledColor,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
  },
});

export default CreditCardModal;
