import React, { useState } from 'react'
import { View, Text, TouchableOpacity, 
    Touchable, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';
import { useLayoutEffect } from 'react';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { TextInput } from 'react-native-paper';

const ReviewPage = ({navigation}) => {
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
     
    return (
      <View>  
        <Text>Review page coming soon...</Text>
        <TouchableOpacity
            style={styles.submitButton}
            accessibilityLabel='Submit project'
            onPress={() => navigation.navigate('Review')}>
            <Text style={styles.buttonText}>Submit project</Text> 
        </TouchableOpacity> 
      </View>
    )
}

export default ReviewPage;