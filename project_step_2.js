import React, { useState } from 'react'
import { View, Text, TouchableOpacity, 
    Touchable, ImageBackground, SafeAreaView, ScrollView, TextInput} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';
import { useLayoutEffect, useEffect } from 'react';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
//import { TextInput } from 'react-native-paper';
import {LogBox} from 'react-native';

const ProjectPageTwo = ({navigation}) => {
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
    <View style={styles.projectStepTwo}>
      <ScrollView 
      keyboardDismissMode='on-drag'
      scrollEnabled={false}>
        {/*       <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
        </View>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
        <SelectBox
          label="Select single"
          options={services}
          value={selectedService}
          onChange={onChange()}
          hideInputFilter={false}
        /> */}
        
        <Text style={styles.projectStepTwoText}>What should we do for you?</Text>
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
          style={styles.PST_TextInput} 
          placeholder='Add note'
          multiline={true}
          numberOfLines={10}
          textAlignVertical='top'
          scrollEnabled={true}
        />
      </ScrollView>

      <TouchableOpacity
          style={styles.PST_Button}
          accessibilityLabel='Review project'
          onPress={() => navigation.navigate('Review')}>
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

export default ProjectPageTwo;