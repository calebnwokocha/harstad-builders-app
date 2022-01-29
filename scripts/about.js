import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, 
    Touchable, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';

const AboutPage = ({ navigation }) => {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>PROFILE</Text>
        <Text style={styles.aboutText}>Hårstad Builders is collaborative construction team based in Winnipeg, MB. 
        Our approach to the design build process is firmly rooted in Nordic principles and is delivered through quality craftsmanship.
        As a result, we've grown exclusively through client and professional referrals.</Text>
        <Text style={styles.aboutText}>APPROACH</Text>
        <Text style={styles.aboutText}>Hårstad Builders is future focused. We use streamlined and innovative approaches to project management 
        and communication to keep our residential and commercial clients engaged. Working in tandem with our clients 
        ensures efficient and effective project execution.</Text>
        <Text style={styles.aboutText}>PRINCIPLES</Text>
        <Text style={styles.aboutText}>Courage, truth, honour, fidelity, industriousness, discipline, perseverance, teamwork, generorsity.</Text>
      </View>
    );
  };

export default AboutPage;