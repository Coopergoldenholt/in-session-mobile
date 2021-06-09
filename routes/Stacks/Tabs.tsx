import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from '../../styles';

// import SubscriptionsDisplay from '../../views/Subscirptions/SubscriptionsDisplay';
import Home from '../../views/Discover';

const Tab = createBottomTabNavigator();

const DiscoverStack = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.brightColor,
      inactiveTintColor: Colors.dullColor,
      // activeBackgroundColor: '#212121',
      // inactiveBackgroundColor: '#212121',
      style: {
        backgroundColor: Colors.backgroundColor,
        borderBottomColor: Colors.backgroundColor,
        borderWidth: 1,
      },
    }}
    screenOptions={{
      // @ts-ignore
      tabBarOptions: {
        style: {
          backgroundColor: Colors.bolderBackground,
          borderTopWidth: 0,
        },
      },
    }}>
    <Tab.Screen name="Home" component={Home} />
    {/* <Tab.Screen name="Trending" component={Home} /> */}
    {/* <Tab.Screen name="Following" component={SubscriptionsDisplay} /> */}
  </Tab.Navigator>
);

export default DiscoverStack;
