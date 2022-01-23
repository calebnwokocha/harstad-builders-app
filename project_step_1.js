import React from 'react';
import { View, Text, TouchableOpacity, 
    Touchable, ImageBackground, SafeAreaView} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';

const ProjectPageOne = ({navigation}) => {
    return (
        <View>
            <SafeAreaView style={styles.projectStepOneContainer1}>
                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Kitchen'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/kitchen.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Kitchen</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Dinning Room'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/dinning_room.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Dinning Room</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.projectStepOneContainer2}>
                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Fireplace'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/fireplace.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Fireplace</Text>
                    </ImageBackground>                    
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Living Room'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/living_room.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Living Room</Text> 
                    </ImageBackground>       
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.projectStepOneContainer3}>
                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Bathroom'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/bathroom.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Bathroom</Text>
                    </ImageBackground> 
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Shower'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/shower.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Shower</Text> 
                    </ImageBackground> 
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.projectStepOneContainer4}>
                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Modern Bathroom'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/modern_bathroom.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Modern Bathroom</Text> 
                    </ImageBackground> 
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.projectStepOneButton}
                accessibilityLabel='Attic'
                onPress={() => navigation.navigate('ProjectStepTwo')}>
                    <ImageBackground source={require('./assets/attic.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Attic</Text> 
                    </ImageBackground> 
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
  };
  
export default ProjectPageOne;