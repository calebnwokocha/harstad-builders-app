import React from 'react';
import { View, Text, TouchableOpacity, 
    Touchable, ImageBackground, SafeAreaView} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import styles from './styles';

const PP_One = ({navigation}) => {
    return (
        <View>
            <SafeAreaView style={styles.ppOneContainer1}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Kitchen'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/kitchen.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Kitchen</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Dinning Room'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/dinning_room.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Dinning Room</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.ppOneContainer2}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Fireplace'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/fireplace.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Fireplace</Text>
                    </ImageBackground>                    
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Living Room'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/living_room.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Living Room</Text> 
                    </ImageBackground>       
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.ppOneContainer3}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Bathroom'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/bathroom.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Bathroom</Text>
                    </ImageBackground> 
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Shower'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/shower.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Shower</Text> 
                    </ImageBackground> 
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.ppOneContainer4}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Modern Bathroom'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/modern_bathroom.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Modern Bathroom</Text> 
                    </ImageBackground> 
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Attic'
                onPress={() => navigation.navigate('PP_Two')}>
                    <ImageBackground source={require('../assets/attic.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Attic</Text> 
                    </ImageBackground> 
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
  };
  
export default PP_One;