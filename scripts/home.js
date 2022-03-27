import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, 
    Touchable, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';

const HomePage = ({ navigation }) => {
    return (
      <View style={styles.homeContainer}>
        <ImageBackground source={require('../assets/images/home_background.jpg')} 
        resizeMode='cover'imageStyle= {{opacity:0.2}} style={styles.hbackgroundImage}>
            <SafeAreaView style={styles.homeUserArea}>
           <Text style={styles.text}>Hi there,</Text> 
              <StatusBar style="auto" />
      
              <TouchableOpacity
              style={styles.homeButton}
              accessibilityLabel='Get Quote'
              onPress={() => navigation.navigate('ProfilePage')}>
              <Text style={styles.buttonText}>Get Quote</Text> 
              </TouchableOpacity> 

              <TouchableOpacity
              style={styles.homeButton}
              accessibilityLabel='Start a project'
              onPress={() => navigation.navigate('ProfilePage')}>
              <Text style={styles.buttonText}>Start a project</Text> 
              </TouchableOpacity> 

              <TouchableOpacity
              accessibilityLabel='About Harstad Builders'
              onPress={() => navigation.navigate('About')}>
              <Image source={require('../assets/images/info_icon.png')} 
              style={styles.aboutButton}/>
              </TouchableOpacity> 
            </SafeAreaView>
        </ImageBackground>
      </View>
    );
  };

export default HomePage;