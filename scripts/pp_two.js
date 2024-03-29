import React, { useState } from 'react'
import { View, Text, TouchableOpacity, 
    Touchable, ImageBackground, SafeAreaView, ScrollView, TextInput, Alert} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';
import { useLayoutEffect, useEffect } from 'react';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import {LogBox} from 'react-native';

const PP_Two = ({navigation, route}) => {
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

  // Get userData and area from previous page.
  var projectData = route.params;
  //console.log(projectData);

  var note = "";

  function updateNote (noteUpdate) {
    note = noteUpdate;
  }

  const goToNextScreen = () => {

    // DEBUG RESOURCE
    console.log(selectedServices);

    // Send projectData, selectedServices, and note to review page
    // if user select a service. Otherwise, show alert message.
    if (selectedServices.length != 0) {
      navigation.push('Review', {projectData, selectedServices, note});
    } else {
      Alert.alert("Please select service(s)");
    }
  }

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])

  // Options data must contain 'item' & 'id' keys
  const services = [
    {
      item: 'Air Conditioning',
      id: 'Air Conditioning',
    },
    {
      item: 'Brick',
      id: 'Brick',
    },
    {
      item: 'Carpentry',
      id: 'Carpentry',
    },
    {
      item: 'Concrete',
      id: 'Concrete',
    },
    {
      item: 'Crown Moulding',
      id: 'Crown Moulding',
    },
    {
      item: 'Deck',
      id: 'Deck',
    },
    {
      item: 'Demolition',
      id: 'Demolition',
    },
    {
      item: 'Door',
      id: 'Door',
    },
    {
      item: 'Drywall',
      id: 'Drywall',
    },
    {
      item: 'Electrial',
      id: 'Electrial',
    },
    {
      item: 'Excavation',
      id: 'Excavation',
    },
    {
      item: 'Fence',
      id: 'Fence',
    },
    {
      item: 'Flooring',
      id: 'Flooring',
    },
    {
      item: 'Garage Door',
      id: 'Garage Door',
    },
    {
      item: 'General Contracting & Handyman',
      id: 'General Contracting & Handyman',
    },
    {
      item: 'Heating',
      id: 'Heating',
    },
    {
      item: 'Insulation',
      id: 'Insulation',
    },
    {
      item: 'Masonry',
      id: 'Masonry',
    },
    {
      item: 'Painting',
      id: 'Painting',
    },
    {
      item: 'Plumbing',
      id: 'Plumbing',
    },
    {
      item: 'Railing & Siding',
      id: 'Railing & Siding',
    },
  
    {
      item: 'Renovation',
      id: 'Renovation',
    },
    {
      item: 'Stucco Removal',
      id: 'Stucco Removal',
    },
    {
      item: 'Trimwork',
      id: 'Trimwork',
    },
    {
      item: 'Ventilation',
      id: 'Ventilation',
    },
    {
      item: 'Waterproofing',
      id: 'Waterproofing',
    },
    {
      item: 'Windows & Doors',
      id: 'Windows & Doors',
    }
  ]

  //const [selectedService, setSelectedService] = useState({})
  const [selectedServices, setSelectedServices] = useState([])
    
  return (
    <View style={styles.ppTwo}>
      <ScrollView keyboardDismissMode='on-drag'scrollEnabled={false}>
        <Text style={styles.ppTwoText}>What should we do for you?</Text>
        <SelectBox
          label="Pick from the list"
          options={services}
          selectedValues={selectedServices}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          searchIconColor='#63523F'
          toggleIconColor='#63523F'
          arrowIconColor='#63523F'
          multiOptionContainerStyle={styles.multiOptionContainer}
          />
        <TextInput 
          style={styles.ppTwoTextInput} 
          placeholder='Add note'
          multiline={true}
          numberOfLines={10}
          textAlignVertical='top'
          scrollEnabled={true}
          onChangeText={value => updateNote(value)}
        />
      </ScrollView>

      <TouchableOpacity
          style={styles.ppTwoButton}
          accessibilityLabel='Review project'
          onPress={() => goToNextScreen()}>
          <Text style={styles.buttonText}>Review project</Text> 
      </TouchableOpacity> 
    </View>
  )

  function onMultiChange() {
    return (item) => setSelectedServices(xorBy(selectedServices, [item], 'id'))
  }

/*     function onChange() {
    return (val) => setSelectedService(val)
  } */
}

export default PP_Two;