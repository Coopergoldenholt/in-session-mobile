import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BrightText, MediumText, DullText, Colors} from '../../styles';
import {connect} from 'react-redux';
import axios from 'axios';
import {saveUser} from '../../ducks/reducers/userReducer';
import {URL} from '../../config/urlConfig';

import {Button} from '../../components/Buttons';
import Icon from '../../components/Icons';

interface IProps {
  navigation: any;
  saveUser: (user: any) => {};
}

const Register = (props: IProps) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(true);
  const [checks, setChecks] = useState({username: false, email: false});
  const [validName, setValidName] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [sendingRegister, setSendingRegister] = useState(false);

  useEffect(() => {
    if (userInfo.email) {
      const valid = validateEmail(userInfo.email);
      setValidEmail(valid);
    }
    if (userInfo.password) {
      const valid = checkPassword(userInfo.password);
      setValidPassword(valid);
    }
    if (userInfo.password && userInfo.confirmPassword) {
      const valid = userInfo.password === userInfo.confirmPassword;
      setPasswordsMatch(valid);
    }
  }, [userInfo]);

  useEffect(() => {
    setChecks({...checks, username: false});
  }, [userInfo.username]);

  useEffect(() => {
    setChecks({...checks, email: false});
  }, [userInfo.email]);

  useEffect(() => {
    if (
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.username &&
      validEmail &&
      passwordsMatch &&
      validPassword &&
      !checks.username &&
      !checks.email
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [userInfo, validEmail, checks, passwordsMatch, validPassword]);

  const registerUser = async () => {
    setSendingRegister(true);
    if (userInfo.firstName && userInfo.lastName) {
      const user = await axios
        .post(`${URL}/api/user/register`, {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          password: userInfo.password,
          username: userInfo.username,
        })
        .then(res => {
          setSendingRegister(false);
          if (typeof res.data.email === 'boolean') {
            setChecks({username: res.data.username, email: res.data.email});
          } else {
            props.saveUser(res.data);
          }
        })
        .catch(err => {
          setSendingRegister(false);
          console.log(err);
        });
    } else {
      setSendingRegister(false);
      setValidName(false);
    }
  };

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function checkPassword(str: string) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }

  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <BrightText style={{fontSize: 25}}>Create your account</BrightText>
      </View>

      {/* Info Container */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderBottomColor: '#D3D3D3',
          borderTopColor: '#D3D3D3',

          minHeight: 80,
          maxWidth: '100%',
        }}>
        {/* Name Container */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* First Name */}
          <View>
            {validName ? null : (
              <Text
                style={{
                  color: '#ff0033',
                  position: 'absolute',
                  width: 300,
                  top: -15,
                }}>
                * Both first and last name must be filled in.
              </Text>
            )}
            {userInfo.firstName ? (
              <MediumText
                style={{
                  fontSize: 15,
                  // marginLeft: 20,
                  marginTop: 15,
                }}>
                First Name
              </MediumText>
            ) : null}

            <TextInput
              placeholder="First Name"
              placeholderTextColor="rgba(255,255,255, 0.38)"
              style={{...styles.inputs, marginLeft: 0}}
              onChangeText={text => setUserInfo({...userInfo, firstName: text})}
              value={userInfo.firstName}
              multiline={true}
            />
          </View>
        </View>

        {/* Last Name */}
        <View>
          {userInfo.lastName ? (
            <MediumText
              style={{
                fontSize: 15,

                marginTop: 15,
              }}>
              Last Name
            </MediumText>
          ) : null}
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="rgba(255,255,255, 0.38)"
            style={{...styles.inputs, marginLeft: 0}}
            onChangeText={text => setUserInfo({...userInfo, lastName: text})}
            value={userInfo.lastName}
            multiline={true}
          />
        </View>
      </View>

      {/* Username */}
      <View style={styles.inputContainer}>
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
              {!checks.username ? null : (
                <Text style={{color: '#ff0033'}}>- Username in use</Text>
              )}
            </View>
          ) : null}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="rgba(255,255,255, 0.38)"
              style={{...styles.inputs}}
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

      {/* Email */}
      <View style={styles.inputContainer}>
        <View>
          {userInfo.email ? (
            <View style={{flexDirection: 'row'}}>
              <MediumText
                style={{
                  fontSize: 15,
                  marginLeft: 20,
                  // marginTop: 15,
                  marginRight: 5,
                }}>
                Email
              </MediumText>
              {validEmail ? (
                checks.email ? (
                  <Text style={{color: '#ff0033'}}>- Email in use</Text>
                ) : null
              ) : checks.email ? (
                <Text style={{color: '#ff0033'}}>- Email in use</Text>
              ) : (
                <Text style={{color: '#ff0033'}}>- Not a valid email</Text>
              )}
            </View>
          ) : null}

          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255, 0.38)"
            style={styles.inputs}
            onChangeText={text => setUserInfo({...userInfo, email: text})}
            value={userInfo.email}
            multiline={true}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <View>
          {userInfo.password ? (
            <View style={{flexDirection: 'row'}}>
              <View>
                <MediumText
                  style={{
                    fontSize: 15,
                    marginLeft: 20,
                    marginTop: 5,
                  }}>
                  Password
                </MediumText>
                <DullText
                  style={{
                    fontSize: 12,
                    marginLeft: 20,
                    marginTop: 3,
                    marginRight: 5,
                    maxWidth: 300,
                  }}>
                  * Must be 8 characters long, contain one capital letter, one
                  number, and one special character.
                </DullText>
              </View>
              {validPassword ? null : (
                <Text
                  style={{
                    color: '#ff0033',
                    position: 'absolute',
                    left: 90,
                    top: 5,
                  }}>
                  - Not a valid password
                </Text>
              )}
            </View>
          ) : null}
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
              style={{...styles.inputs, width: 300}}
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

      {/* Confirm Password */}
      <View style={{...styles.inputContainer, borderBottomWidth: 0.5}}>
        <View>
          {userInfo.password ? (
            <View style={{flexDirection: 'row'}}>
              <View>
                <MediumText
                  style={{
                    fontSize: 15,
                    marginLeft: 20,
                    marginTop: 5,
                  }}>
                  Confirm Password
                </MediumText>
              </View>

              {passwordsMatch ? null : (
                <Text
                  style={{
                    color: '#ff0033',
                    position: 'absolute',
                    left: 145,
                    top: 5,
                  }}>
                  - Passwords don't match
                </Text>
              )}
            </View>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginLeft: 20,
              marginRight: 20,
              // marginBottom: 10,
            }}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="rgba(255,255,255, 0.38)"
              style={{...styles.inputs, width: 300}}
              onChangeText={text =>
                setUserInfo({...userInfo, confirmPassword: text})
              }
              value={userInfo.confirmPassword}
              // textContentType="newPassword"
              autoCapitalize="none"
              secureTextEntry={showConfirmedPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmedPassword(!showConfirmedPassword)}>
              {!showConfirmedPassword ? (
                <Icon iconType="eye" color={Colors.dullColor} size={30} />
              ) : (
                <Icon iconType="eye-off" color={Colors.dullColor} size={30} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Register Button */}
      <View style={{alignSelf: 'center', marginTop: 50}}>
        <Button
          loading={sendingRegister}
          text="Register"
          disabled={buttonDisabled}
          buttonStyles={{width: 200, height: 45}}
          onPress={() => registerUser()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'grey',
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

export default connect(null, {saveUser})(Register);
