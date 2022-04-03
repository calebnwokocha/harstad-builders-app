import React, { useLayoutEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, 
    Touchable, ImageBackground, Image, SafeAreaView, Linking } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';

const url = "https://www.harstadbuilders.com";

const HomePage = ({ navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          accessibilityLabel='About Harstad Builders'
          style={styles.headerButton}
          onPress={() => navigation.navigate('About')}>
          <Image source={require('../assets/images/info_icon.png')} 
          style={styles.aboutButton}/>
        </TouchableOpacity>  
      ),
    });
  }, [navigation]);

  const goToWebsite = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      //Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.homeContainer}>
      <ImageBackground source={require('../assets/images/home_background.jpg')} 
        resizeMode='cover'imageStyle= {{opacity:0.2}} style={styles.hbackgroundImage}>
            <SafeAreaView style={styles.homeUserArea}>
           <Text style={styles.text}>Hello,</Text> 
              <StatusBar style="auto" />
      
              <TouchableOpacity
              style={styles.homeButton}
              accessibilityLabel='Get Quote'
              onPress={() => navigation.navigate('')}>
              <Text style={styles.buttonText}>Get Quote</Text> 
              </TouchableOpacity> 

              <TouchableOpacity
              style={styles.homeButton}
              accessibilityLabel='Start a project'
              onPress={() => navigation.navigate('ProfilePage')}>
              <Text style={styles.buttonText}>Start a project</Text> 
              </TouchableOpacity> 

              <TouchableOpacity
              style={styles.homeButton}
              accessibilityLabel=''
              onPress={goToWebsite}>
              <Text style={styles.buttonText}>[Pictures will display here]</Text> 
              </TouchableOpacity> 
              
            </SafeAreaView>
        </ImageBackground>
      </View>
    );
  };

export default HomePage;