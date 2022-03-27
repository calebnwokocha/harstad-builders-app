import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { Component } from 'react/cjs/react.production.min';

// Dimensions of device display
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Style configuration component
const styles = StyleSheet.create({

    logo: {
      width: 30, 
      height: 30,
    },

    // Home screen container style
    homeContainer: {
      width: windowWidth,
      height: windowHeight,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    hbackgroundImage: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
  },

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    homeUserArea: {
      height: windowHeight / 4.7,
      width: windowWidth,
      marginTop: 40,
    },
  
    // Universal text style
    text: {
      //fontFamily: 'AvenirNext_Regular',
      color: '#000',
      marginLeft: windowWidth / 20,
    },

    // Home button style
    homeButton: {
      //padding: 10,
      paddingTop: 85,
      marginTop: 20,
      borderRadius: 5,
      backgroundColor: '#63523F',
      borderColor: '#63523F',
      //width: windowWidth / 2,
      width: windowWidth / 1.1,
      height: windowHeight / 4,
      //marginLeft: (windowWidth / 2) / 2,
      marginLeft: windowWidth / 21,
    },

    aboutButton: {
      ...Platform.select({
        ios: {
          marginTop: windowHeight - 435,
        },
        android: {
          marginTop: windowHeight - 495,
        },
      }),
      width: 30, 
      height: 30,
      marginLeft: windowWidth - 48,
    },

    ppOneContainer1: {
        //flex: 1,
        backgroundColor: '#fff',
        //fontFamily: 'AvenirNext_Regular',
        flexDirection: 'row',
    },
  
    ppOneContainer2: {
      //flex: 1,
      backgroundColor: '#fff',
      //fontFamily: 'AvenirNext_Regular',
      //marginTop: (windowHeight - 50) / 4,
      flexDirection: 'row',
    },

    ppOneContainer3: {
      //flex: 1,
      backgroundColor: '#fff',
      //fontFamily: 'AvenirNext_Regular',
      //marginTop: (windowHeight - 50) / 4,
      flexDirection: 'row',
    },

    ppOneContainer4: {
      //flex: 1,
      backgroundColor: '#fff',
      //fontFamily: 'AvenirNext_Regular',
      //marginTop: (windowHeight - 50) / 4,
      flexDirection: 'row',
    }, 

    // Button text style
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      //fontFamily: 'AvenirNext_Regular',
    },

    // Project button style
    ppOneButton: {
        width: windowWidth / 2,
        height: (windowHeight - 50) / 4,
        backgroundColor: '#63523F',
    },

    ppTwo: {
      margin: 30,
      marginTop: windowHeight / 11,
    },

    ppTwoText: {
      fontSize: 20,
      //fontFamily: 'AvenirNext_Regular',
      paddingBottom: 10,
    },

    multiOptionContainer: {
      backgroundColor: '#63523F',
    },

    ppTwoTextInput: {
      marginTop: 20,
      height: 100,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 2,
      paddingLeft: 2,
      borderWidth: 1,
      borderColor: '#7f7f7f',
      borderRadius: 5,
    },

    ppTwoButton: {
      padding: 10,
      marginTop: 40,
      borderRadius: 5,
      backgroundColor: '#63523F',
      borderColor: '#63523F',
      width: windowWidth / 2,
      marginLeft: windowWidth / 6,
    },

    //  Style for edit button on profile page
    headerButton: {
      padding: 5,
      paddingRight: 20,
      paddingLeft: 20,
      borderRadius: 5,
      backgroundColor: '#63523F',
      borderColor: '#000',
      borderWidth: 1,
    },

    Form: {
      backgroundColor: '#fff',
      height: windowHeight + 200,
      width: '100%',
      flex: 1,
      //marginBottom: 60,
    },

    FormText: {
      color: '#7f7f7f',
      marginTop: '2%',
      marginLeft: '5%',
      marginRight: '5%',
    },

    FormInput: {
      height: '5%',
      borderWidth: 1,
      borderTopColor: '#fff',
      borderBottomColor: '#7f7f7f',
      borderLeftColor: '#fff',
      borderRightColor: '#fff',
      marginLeft: '5%', 
      marginRight: '5%',

    },

    aboutContainer: {
      width: windowWidth,
      height: windowHeight,
      paddingLeft: windowWidth - (windowWidth - 20),
      paddingRight: windowWidth - (windowWidth - 20),
      paddingTop: windowHeight - (windowHeight - 10),
      paddingBottom: windowHeight - (windowHeight - 10),
      backgroundColor: '#fff',
    },

    aboutText: {
      //fontFamily: 'AvenirNext_Regular',
      paddingTop: windowHeight - (windowHeight - 10),
      paddingBottom: windowHeight - (windowHeight - 10),
      color: '#000',
    },
    
    reviewContainer: {
      width: windowWidth,
      height: windowHeight,
      paddingLeft: windowWidth - (windowWidth - 20),
      paddingRight: windowWidth - (windowWidth - 20),
      paddingTop: windowHeight - (windowHeight - 50),
      paddingBottom: windowHeight - (windowHeight - 10),
      backgroundColor: '#fff',
    },

    userInfoContainer: {
      marginTop: windowHeight - (windowHeight - 5),
      marginBottom: windowHeight - (windowHeight - 30),
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#63523F',
    },

    projectInfoContainer: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#63523F',
    },

    heading: {
      fontWeight: "bold",
    },

    reviewText_1: {
      paddingTop: windowHeight - (windowHeight - 10),
      paddingBottom: windowHeight - (windowHeight - 1),
    },

    reviewText_2: {
      paddingTop: windowHeight - (windowHeight - 10),
      paddingBottom: windowHeight - (windowHeight - 10),
    },

    reviewText_3: {
      paddingTop: windowHeight - (windowHeight - 20),
      paddingBottom: windowHeight - (windowHeight - 10),
    },

    userScrollable: {
      height: windowHeight - (windowHeight - 120) 
    },

    projectScrollable: {
      height: windowHeight - (windowHeight - 250) 
    },

    submitButton: {
      padding: 10,
      marginTop: 50,
      borderRadius: 5,
      backgroundColor: '#63523F',
      borderColor: '#63523F',
      width: windowWidth / 2,
      marginLeft: (windowWidth / 2) / 2.5,
    }
  });
  
export default styles;