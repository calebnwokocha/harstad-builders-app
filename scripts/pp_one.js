import React, { useLayoutEffect, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, 
    Touchable, ImageBackground, SafeAreaView} from 'react-native';
import styles from './styles';

const PP_One = ({navigation, route}) => {
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

    // Get userData from previous page.
    var userData = route.params;
    //console.log(userData[0]);

    // Send userData and area to next page.
    const goToNextScreen = (area) => {
        navigation.push('PP_Two', {area, userData});
    }

    return (
        <View>
            <SafeAreaView style={styles.ppOneContainer1}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Kitchen'
                onPress={() => goToNextScreen("Kitchen")}>
                    <ImageBackground source={require('../assets/images/kitchen.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Kitchen</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Dinning Room'
                onPress={() => goToNextScreen("Dinning room")}>
                    <ImageBackground source={require('../assets/images/dinning_room.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Dinning Room</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.ppOneContainer2}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Fireplace'
                onPress={() => goToNextScreen("Fireplace")}>
                    <ImageBackground source={require('../assets/images/fireplace.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Fireplace</Text>
                    </ImageBackground>                    
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Living Room'
                onPress={() => goToNextScreen("Living room")}>
                    <ImageBackground source={require('../assets/images/living_room.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Living Room</Text> 
                    </ImageBackground>       
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.ppOneContainer3}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Bathroom'
                onPress={() => goToNextScreen("Bathroom")}>
                    <ImageBackground source={require('../assets/images/bathroom.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Bathroom</Text>
                    </ImageBackground> 
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Shower'
                onPress={() => goToNextScreen("Shower")}>
                    <ImageBackground source={require('../assets/images/shower.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Shower</Text> 
                    </ImageBackground> 
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.ppOneContainer4}>
                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Modern Bathroom'
                onPress={() => goToNextScreen("Modern bathroom")}>
                    <ImageBackground source={require('../assets/images/modern_bathroom.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Modern Bathroom</Text> 
                    </ImageBackground> 
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.ppOneButton}
                accessibilityLabel='Attic'
                onPress={() => goToNextScreen("Attic")}>
                    <ImageBackground source={require('../assets/images/attic.png')} 
                        resizeMode='cover'imageStyle= {{opacity:0.3}} style={styles.backgroundImage}>
                        <Text style={styles.buttonText}>Attic</Text> 
                    </ImageBackground> 
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
  };
  
export default PP_One;