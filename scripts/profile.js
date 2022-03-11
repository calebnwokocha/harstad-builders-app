import React, { useLayoutEffect, Component, useState } from 'react';
import { Text, TextInput, SafeAreaView, ScrollView, navigation,
  Touchable, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert} from 'react-native';
import styles from './styles';

const ProfilePage = ({navigation}) => {

  var title = "";
  var firstName = "";
  var lastName = "";
  var homeAddress = "";
  var phoneNumber = "";
  var emailAddress = ""; 
  
  function updateData (titleUpdate, firstNameUpdate, lastNameUpdate, 
    homeAddressUpdate, phoneNumberUpdate, emailAddressUpdate)
  {
    title = titleUpdate;
    firstName = firstNameUpdate;
    lastName = lastNameUpdate;
    homeAddress = homeAddressUpdate;
    phoneNumber = phoneNumberUpdate;
    emailAddress = emailAddressUpdate;
  }

  const goToProject = () => {
    // DEBUG RESOURCE
/*     console.log(title + " " + firstName + " " + lastName + " " + 
    homeAddress + " " + phoneNumber + " " + emailAddress); */

    // Check if the form is completely filled before
    // proceeding to project area page.
    if (title != "" && firstName != "" && 
      lastName != "" && homeAddress != "" &&
      phoneNumber != "" && emailAddress != "") 
    {
      // Send user data to next page.
      navigation.push('PP_One', {title, firstName, lastName,  
      homeAddress, phoneNumber, emailAddress});
    } else {
      // Display a warning text.
      Alert.alert("Please complete the form");
    }
  } 

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
        style={styles.headerButton}
        accessibilityLabel='Edit'
        nativeID='editButtom'
        onPress={goToProject}>
          <Text style={styles.buttonText}>Next</Text> 
        </TouchableOpacity> 
      ),
    });
  }, [navigation]);

  return (
    <ScrollView keyboardDismissMode='on-drag'>
      <SafeAreaView style={styles.Form}>
        <Text style={styles.FormText}>Title</Text>
        <TextInput        
          style={styles.FormInput}
          onChangeText={value => updateData(value, firstName, lastName, 
          homeAddress, phoneNumber, emailAddress)}
          placeholder='e.g Mr.'
        />
        <Text style={styles.FormText}>First name</Text>
        <TextInput
          style={styles.FormInput}
          onChangeText={value => updateData(title, value, lastName, 
          homeAddress, phoneNumber, emailAddress)}
          placeholder='e.g Joe'
        />
      
        <Text style={styles.FormText}>Last name</Text>
        <TextInput        
          style={styles.FormInput}
          onChangeText={value => updateData(title, firstName, value, 
          homeAddress, phoneNumber, emailAddress)}
          placeholder='e.g Anderson'
        />

        <Text style={styles.FormText}>Home address</Text>
        <TextInput        
          style={styles.FormInput}
          onChangeText={value => updateData(title, firstName, lastName, 
          value, phoneNumber, emailAddress)}
          placeholder='e.g 275 North Lake Dr, Winnipeg MB R3T 2X9'
        />

        <Text style={styles.FormText}>Phone number</Text>
        <TextInput        
          style={styles.FormInput}
          onChangeText={value => updateData(title, firstName, lastName, homeAddress, value, emailAddress)}
          placeholder='e.g 2047617902'
          keyboardType='phone-pad'
        />

        <Text style={styles.FormText}>Email address</Text>
        <TextInput        
          style={styles.FormInput}
          onChangeText={value => updateData(title, firstName, lastName, homeAddress, phoneNumber, value)}
          placeholder='e.g joeanderson@example.com'
          keyboardType='email-address'
        />
      </SafeAreaView>
    </ScrollView>
  )
}

export default ProfilePage;