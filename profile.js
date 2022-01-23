import React, { useLayoutEffect } from 'react';
import { Text, TextInput, SafeAreaView, ScrollView, navigation,
  Touchable, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';
import { render } from 'react-dom';
//import Database from './database';

class ProfilePage extends React.Component {
  constructor () {
    super();
    this.state = {
      edit: 'Edit',
      save: 'Save',
    }
  }

  ProfilePage = ({navigation}) => {

    // Disable edit button, enables save button, 
    // and cause profile editable in form
    function editProfile() {
      getSelection.nativeID('editButton')
    }
  
    // Disable save button, enables edit button, 
    // and cause profile uneditable in form
    function saveProfile() {
   
    }
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
          style={styles.headerButton}
          accessibilityLabel='Edit'
          nativeID='editButtom'
          onPress={() => {this.setState({edit: 'Save'})}}>
            <Text style={styles.buttonText}>{this.state.edit}</Text> 
          </TouchableOpacity> 
        ),
      });
    }, [navigation]);
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
          style={styles.headerButton}
          accessibilityLabel='Save'
          nativeID='saveButtom'
          onPress={() => {this.setState({save: 'Edit'})}}>
            <Text style={styles.buttonText}>{this.state.save}</Text> 
          </TouchableOpacity> 
        ),
      });
    }, [navigation]); 
  
    /*
    var fs = require('fs');
  
    function readFromFile(fileName) {
      fs.readFile(fileName, function(err, data) {
        return data;
      });
    }
    
    function writeFile(fileName, text) {
      fs.writeFile(fileName, text, function (err) {
        if (err) throw err;
        console.log('File content replaced.');
      })
    }
  
    */
  }

  render () {
    return (
      this.ProfilePage = ({navigation}),
      <ScrollView keyboardDismissMode='on-drag'>
        <SafeAreaView style={styles.Form}>
          <Text style={styles.FormText}>Title</Text>
          <TextInput        
            style={styles.FormInput}
            //value={readFromFile('title.txt')}
            //onChangeText={val => writeFile('title.txt', val)}
            placeholder='e.g Mr.'
          />
          <Text style={styles.FormText}>First name</Text>
          <TextInput
            style={styles.FormInput}
            //value={readFromFile('first_name.txt')}
            //onChangeText={val => writeFile('first_name.txt', val)}
            placeholder='e.g Joe'
          />
        
          <Text style={styles.FormText}>Last name</Text>
          <TextInput        
            style={styles.FormInput}
            //value={readFromFile('last_name.txt')}
            //onChangeText={val => writeFile('last_name.txt', val)}
            placeholder='e.g Anderson'
          />

          <Text style={styles.FormText}>Home address</Text>
          <TextInput        
            style={styles.FormInput}
            //value={readFromFile('home_address.txt')}
            //onChangeText={val => writeFile('home_address.txt', val)}
            placeholder='e.g 275 North Lake Dr, Winnipeg MB R3T 2X9'
          />

          <Text style={styles.FormText}>Mobile number</Text>
          <TextInput        
            style={styles.FormInput}
            //value={readFromFile('mobile_number.txt')}
            //onChangeText={val => writeFile('mobile_number.txt', val)}
            placeholder='e.g 2047617902'
            keyboardType='phone-pad'
          />
          
          <Text style={styles.FormText}>Home number</Text>
          <TextInput        
            style={styles.FormInput}
            //value={readFromFile('home_number.txt')}
            //onChangeText={val => writeFile('home_number.txt', val)}
            placeholder='e.g 2045024856'
            keyboardType='phone-pad'
          />

          <Text style={styles.FormText}>Work number</Text>
          <TextInput        
            style={styles.FormInput}
            //value={readFromFile('work_number.txt')}
            //onChangeText={val => writeFile('work_number.txt', val)}
            placeholder='e.g 2047047235'
            keyboardType='phone-pad'
          />

          <Text style={styles.FormText}>Email address</Text>
          <TextInput        
            style={styles.FormInput}
            //value={readFromFile('email_address.txt')}
            //onChangeText={val => writeFile('email_address.txt', val)}
            placeholder='e.g joeanderson@example.com'
            keyboardType='email-address'
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default ProfilePage;