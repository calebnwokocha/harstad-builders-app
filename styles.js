import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
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
      //justifyContent: 'center',
    },

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    homeUserArea: {
      height: windowHeight / 2.7,
      width: windowWidth,
    },
  
    // Universal text style
    text: {
      fontFamily: 'AvenirNext-Regular',
      color: '#000',
      marginLeft: (windowWidth / 2) / 2,
    },

    // Home button style
    homeButton: {
      padding: 10,
      marginTop: 40,
      borderRadius: 5,
      backgroundColor: '#63523F',
      borderColor: '#63523F',
      width: windowWidth / 2,
      marginLeft: (windowWidth / 2) / 2,
    },

    aboutButton: {
      marginTop: windowHeight - 467,
      width: 30, 
      height: 30,
      marginLeft: windowWidth - 48,
    },

    submitButton: {
      padding: 10,
      marginTop: 500,
      borderRadius: 5,
      backgroundColor: '#63523F',
      borderColor: '#63523F',
      width: windowWidth / 2,
      marginLeft: (windowWidth / 2) / 2,
    },


    projectStepOneContainer1: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'AvenirNext-Regular',
        flexDirection: 'row',
    },
  
    projectStepOneContainer2: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'AvenirNext-Regular',
      marginTop: (windowHeight - 50) / 4,
      flexDirection: 'row',
    },

    projectStepOneContainer3: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'AvenirNext-Regular',
      marginTop: (windowHeight - 50) / 4,
      flexDirection: 'row',
    },

    projectStepOneContainer4: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'AvenirNext-Regular',
      marginTop: (windowHeight - 50) / 4,
      flexDirection: 'row',
    }, 

    projectStepTwoContainer1: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'AvenirNext-Regular',
      flexDirection: 'row',
  },

  projectStepTwoContainer2: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'AvenirNext-Regular',
    marginTop: (windowHeight - 500) / 4,
    flexDirection: 'row',
  },

  projectStepTwoContainer3: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'AvenirNext-Regular',
    marginTop: (windowHeight - 500) / 4,
    flexDirection: 'row',
  },

  projectStepTwoContainer4: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'AvenirNext-Regular',
    marginTop: (windowHeight - 500) / 4,
    flexDirection: 'row',
  }, 

    // Button text style
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'AvenirNext-Regular',
    },

    // Project button style
    projectStepOneButton: {
        width: windowWidth / 2,
        height: (windowHeight - 50) / 4,
        backgroundColor: '#63523F',
    },

    projectStepTwo: {
      margin: 30,
      marginTop: windowHeight / 11,
    },

    projectStepTwoText: {
      fontSize: 20,
      fontFamily: 'AvenirNext-Regular',
      paddingBottom: 10,
    },

    multiOptionContainer: {
      backgroundColor: '#63523F',
    },

    PST_TextInput: {
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

    PST_Button: {
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
      fontFamily: 'AvenirNext-Regular',
      paddingTop: windowHeight - (windowHeight - 10),
      paddingBottom: windowHeight - (windowHeight - 10),
      color: '#000',
    },
  });
  
export default styles;