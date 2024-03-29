import {React, Component} from 'react';
import{ Image } from 'react-native';
//import { Component } from 'react/cjs/react.production.min';
import HomePage from './scripts/home';
import ProfilePage from './scripts/profile';
import PP_One from './scripts/pp_one';
import PP_Two from './scripts/pp_two';
import AboutPage from './scripts/about';
import ReviewPage from './scripts/review';
import styles from './scripts/styles';
import * as ScreenOrientation from 'expo-screen-orientation';

// For screen navigation control buttons
import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function logoTitle() {
  return (
    <Image
      style={styles.logo}
      source={require('./assets/images/logo.png')}
    />
  );
}

export default function App() {
  // Disable auto-rotation of app UI
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  return (
    // Allow switching of multiple screens
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home' 
          component={HomePage} 
          options={{ 
            headerTitle: () => logoTitle(), 
            headerStyle: {
              backgroundColor: '#63523F',
              //fontFamily: 'AvenirNext_Regular',
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name='PP_One' 
          component={PP_One}
          options={{
            title: 'Select area',
            headerStyle: {
              backgroundColor: '#63523F',
            },
            headerTitleStyle: {
              color: '#fff',
              //fontFamily: 'AvenirNext_Regular',
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name='PP_Two' 
          component={PP_Two}
          options={{
            title: 'Services',
            headerStyle: {
              backgroundColor: '#63523F',
            },
            headerTitleStyle: {
              color: '#fff',
              //fontFamily: 'AvenirNext_Regular',
              fontWeight: 'bold',
            },
          }}
        />
           
        <Stack.Screen
          name='ProfilePage' 
          component={ProfilePage}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#63523F',
            },
            headerTitleStyle: {
              color: '#fff',
              //fontFamily: 'AvenirNext_Regular',
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name='About' 
          component={AboutPage}
          options={{
            headerTitle: () => logoTitle(),
            headerStyle: {
              backgroundColor: '#63523F',
            },
            headerTitleStyle: {
              color: '#000',
              //fontFamily: 'AvenirNext_Regular',
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name='Review' 
          component={ReviewPage}
          options={{
            title: 'Review',
            headerStyle: {
              backgroundColor: '#63523F',
            },
            headerTitleStyle: {
              color: '#fff',
              //fontFamily: 'AvenirNext_Regular',
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





