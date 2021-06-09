import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import axios from 'axios';
import {connect} from 'react-redux';
import {saveUser} from '../../ducks/reducers/userReducer';
import {URL} from '../../config/urlConfig';

import {BrightText, MediumText, Colors} from '../../styles';
import {Button} from '../../components/Buttons';
import Icon from '../../components/Icons';

interface IProps {
  navigation: any;
  saveUser: (user: any) => {};
}

const Login = (props: IProps) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const [loginFail, setLoginFail] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const loginUser = async () => {
    setLoggingIn(true);
    await axios
      .post(`${URL}/api/user/login`, {
        username: userInfo.username,
        password: userInfo.password,
      })
      .then(res => {
        setLoggingIn(true);
        props.saveUser(res.data);
      })
      .catch(() => {
        setLoggingIn(false);
        Alert.alert('Username or Password Incorrect');
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <BrightText style={{fontSize: 25}}>Login to your account</BrightText>
      </View>
      {loginFail ? (
        <Text style={{color: '#ff0033', marginTop: 20, marginLeft: 20}}>
          * Username or password incorrect
        </Text>
      ) : null}
      {/* Username */}
      <View style={{...styles.inputContainer, borderTopWidth: 0}}>
        <Icon
          style={{paddingLeft: 20}}
          iconType="account-circle"
          size={30}
          color={Colors.mediumColor}
        />
        <View>
          {userInfo.username ? (
            <View style={{flexDirection: 'row'}}>
              <MediumText
                style={{
                  fontSize: 15,
                  marginLeft: 20,

                  marginRight: 5,
                }}>
                Username
              </MediumText>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="rgba(255,255,255, 0.38)"
              style={{...styles.inputs, marginLeft: 0, marginBottom: 5}}
              onChangeText={text => setUserInfo({...userInfo, username: text})}
              value={userInfo.username}
              multiline={true}
              autoCapitalize="none"
              autoCorrect={false}
              // textContentType="emailAddress"
            />
          </View>
        </View>
      </View>
      {/* Password */}
      <View style={{...styles.inputContainer, borderBottomWidth: 0.5}}>
        <Icon
          style={{paddingLeft: 20}}
          iconType="key"
          size={30}
          color={Colors.mediumColor}
        />
        <View>
          <View
            style={
              userInfo.password === ''
                ? {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // marginLeft: 20,
                    marginRight: 20,
                    // marginBottom: 10,
                  }
                : {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 10,
                  }
            }>
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255, 0.38)"
              style={{...styles.inputs, width: 250}}
              onChangeText={text => setUserInfo({...userInfo, password: text})}
              value={userInfo.password}
              textContentType="newPassword"
              autoCapitalize="none"
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? (
                <Icon iconType="eye" color={Colors.dullColor} size={30} />
              ) : (
                <Icon iconType="eye-off" color={Colors.dullColor} size={30} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* User not registered */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 20,
        }}>
        <MediumText>Don't have an account? </MediumText>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={{color: Colors.primaryBlue}}>Register here</Text>
        </TouchableOpacity>
      </View>
      {/* Login Button */}
      <View style={{alignSelf: 'center', marginTop: 50}}>
        <Button
          loading={loggingIn}
          text="Login"
          disabled={!userInfo.username || !userInfo.password}
          buttonStyles={{width: 200, height: 45}}
          onPress={() => loginUser()}
        />
      </View>
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
  inputs: {
    minHeight: 30,
    marginLeft: 20,
    color: 'rgba(255,255,255, 0.87)',
    fontSize: 20,
    marginRight: 10,
    // marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: '#D3D3D3',
    borderTopColor: '#D3D3D3',
    borderTopWidth: 0.5,

    minHeight: 80,
    alignItems: 'center',
  },
});

export default connect(null, {saveUser})(Login);
