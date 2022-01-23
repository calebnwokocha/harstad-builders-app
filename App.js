import React from 'react';
import{ Image } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import HomePage from './home';
import ProfilePage from './profile';
import ProjectPageOne from './project_step_1';
import ProjectPageTwo from './project_step_2';
import AboutPage from './about';
import ReviewPage from './review';
//import CreateDatabase from './database';
import styles from './styles';
import * as ScreenOrientation from 'expo-screen-orientation';

// For screen navigation control buttons
import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function logoTitle() {
  return (
    <Image
      style={styles.logo}
      source={require('./assets/logo.png')}
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
              fontFamily: 'AvenirNext-Regular',
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name='ProjectStepOne' 
          component={ProjectPageOne}
          options={{
            title: 'Select area',
            headerStyle: {
              backgroundColor: '#63523F',
            },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'AvenirNext-Regular',
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name='ProjectStepTwo' 
          component={ProjectPageTwo}
          options={{
            title: 'Services',
            headerStyle: {
              backgroundColor: '#63523F',
            },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'AvenirNext-Regular',
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
              fontFamily: 'AvenirNext-Regular',
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
              fontFamily: 'AvenirNext-Regular',
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
              fontFamily: 'AvenirNext-Regular',
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





