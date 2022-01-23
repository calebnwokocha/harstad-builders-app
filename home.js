import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, 
    Touchable, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';

const HomePage = ({ navigation }) => {
    return (
      <View style={styles.homeContainer}>
        <ImageBackground source={require('./assets/home_background.jpg')} 
        resizeMode='cover'imageStyle= {{opacity:0.2}} style={styles.backgroundImage}>
            <SafeAreaView style={styles.homeUserArea}>
              <Text style={styles.text}>Welcome to Hårstad Builders</Text>
              <StatusBar style="auto" />
      
              <TouchableOpacity
              style={styles.homeButton}
              accessibilityLabel='Start a project'
              onPress={() => navigation.navigate('ProjectStepOne')}>
              <Text style={styles.buttonText}>Start a project</Text> 
              </TouchableOpacity> 
      
              <TouchableOpacity
              style={styles.homeButton}
              accessibilityLabel='Go to profile'
              onPress={() => navigation.navigate('ProfilePage')}>
              <Text style={styles.buttonText}>Go to profile</Text> 
              </TouchableOpacity> 

              <TouchableOpacity
              accessibilityLabel='About Harstad Builders'
              onPress={() => navigation.navigate('About')}>
              <Image source={require('./assets/info_icon.png')} 
              style={styles.aboutButton}/>
              </TouchableOpacity> 
            </SafeAreaView>
        </ImageBackground>
      </View>
    );
  };

export default HomePage;