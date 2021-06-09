import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';

import Tabs from './Stacks/Tabs';
// import LiveStreamView from '../views/LiveStreamView';
import UserScreen from '../views/User';
import PendingStreamView from '../views/PendingStreamView';

import Login from '../views/Login';
import Register from '../views/Register';

import Header from './Header';
import BackButton from './BackButton';

import {View} from 'react-native';
import Icon from '../components/Icons';
import {Colors} from '../styles';

const Stack = createStackNavigator();

const Navigator = () => {
  const user = useSelector(state => state.user);

  return (
    <NavigationContainer>
      {user.user ? (
        <Stack.Navigator
          screenOptions={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: Colors.backgroundColor,
              borderBottomColor: Colors.bolderBackground,
              borderBottomWidth: 0,
            },
            // @ts-ignore
            headerTitle: <Header />,
          }}>
          <Stack.Screen name="Home" component={Tabs} />
          {/* <Stack.Screen
            name="LiveStreamView"
            component={LiveStreamView}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="PendingStreamView"
            component={PendingStreamView}
            options={{headerShown: false}}
          />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: Colors.backgroundColor,
              borderBottomColor: Colors.bolderBackground,
              borderBottomWidth: 0,
            },
            headerTitle: () => (
              <View>
                <Icon iconType="logo" color={Colors.primaryBlue} size={30} />
              </View>
            ),
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerLeft: () => <BackButton />,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
