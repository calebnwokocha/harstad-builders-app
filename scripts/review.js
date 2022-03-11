import React from 'react'
import { View, Text, TouchableOpacity, 
    Touchable, ScrollView, Alert, Linking} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';
import { useLayoutEffect } from 'react';
import qs from 'qs';

const ReviewPage = ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
            style={styles.headerButton}
            accessibilityLabel='Home'
            onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Home</Text> 
            </TouchableOpacity> 
          ),
        });
    }, [navigation]);

    // Get projectData from previous page.
    var completeProjectData = route.params;

    var title = completeProjectData.projectData.userData.title;
    var firstName = completeProjectData.projectData.userData.firstName;
    var lastName = completeProjectData.projectData.userData.lastName;
    var homeAddress = completeProjectData.projectData.userData.homeAddress;
    var phoneNumber = completeProjectData.projectData.userData.phoneNumber;
    var emailAddress = completeProjectData.projectData.userData.emailAddress;

    var area = completeProjectData.projectData.area;

    var services = [];
    for (i = 0; i < completeProjectData.selectedServices.length; i++) {
      services.push(completeProjectData.selectedServices[i].item);
    }

    var note = completeProjectData.note;

    // DEBUG RESOURCE
/*     console.log(title + " " + firstName + " " + lastName + " " + 
    homeAddress + " " + phoneNumber + " " + emailAddress); */

/*     console.log(area);
    console.log(services);
    console.log(note); */

    async function sendEmail() {
      /* let to = "calebnwokocha@gmail.com"; //"darrell@harstadbuilders.com";
      let subject = title + " " + lastName + "started a project"; 
      let body = "Contact Details: \n\n\t" + 
                  title + " " + firstName + " " + lastName + "\n\t" + 
                  homeAddress + "\n\t" + 
                  phoneNumber + "\n\t" +
                  emailAddress + "\n\n\n" +
                  "Project Details: \n\n\t" +
                  "Building Area: " + area + "\n\t" +
                  "Service(s): ";
      let url = "mailto: $" + to;

      const query = qs.stringify({
        subject: subject,
        body: body,
      });

      if (query.length) {
        url += "?$" + query;
      }

      // check if we can use this link
      const canOpen = await Linking.canOpenURL(url);

      if (!canOpen) {
          throw new Error('Provided URL can not be handled');
      }

      return Linking.openURL(url); */

      Alert.alert("Submitted!");
      navigation.push('Home');
    }

    return (
      <View style={styles.reviewContainer}>  
        <View style={styles.userInfoContainer}>
          <Text style={styles.heading}>Contact Details</Text>
          <ScrollView style={styles.userScrollable}>
            <Text style={styles.reviewText_1}>{title} {firstName} {lastName}</Text>
            <Text style={styles.reviewText_1}>{homeAddress}</Text>
            <Text style={styles.reviewText_1}>{phoneNumber}</Text>
            <Text style={styles.reviewText_1}>{emailAddress}</Text>
          </ScrollView>
        </View>
        <View style={styles.projectInfoContainer}>
          <Text style={styles.heading}>Project Details</Text>
          <ScrollView style={styles.projectScrollable}>
            <Text style={styles.reviewText_2}>Building Area: {area}</Text>
            <Text style={styles.reviewText_2}>Service(s) Required:</Text>
            {services.map((item, key) => (
              <Text  key = {key}> - { item } </Text>
            ))}
            <Text style={styles.reviewText_3}>Note: {note}</Text>
          </ScrollView>
        </View>
        <TouchableOpacity
            style={styles.submitButton}
            accessibilityLabel='Submit project'
            onPress={() => sendEmail()}>
            <Text style={styles.buttonText}>Submit project</Text> 
        </TouchableOpacity> 
      </View>
    )
}

export default ReviewPage;