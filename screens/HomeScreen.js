import * as React from 'react';
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View, PixelRatio, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.gameTitleMath}>MATH</Text><Text style={styles.gameTitle24}>24</Text>
      </View>

      <View style={styles.helpContainer}>
        <Button title='Play' color="red" style={styles.testButton} onPress={() => navigation.navigate('LinksScreen')} />
      </View>
    </View>
  );
}

const fontFamilyPicker = Platform.select({
  android: { fontFamily: 'Roboto' },
  web: { fontFamily: './assets/fonts/Roboto' }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003466',
  },
  gameTitleMath: {
    color: '#CE2B2B',
    fontSize: 72,
    lineHeight: 169,
    ...fontFamilyPicker,  // Decides what font to use depending on web or android
    fontStyle: 'normal',
    fontWeight: 'bold',
    // letterSpacing: '-0.055em',
  },
  gameTitle24: {
    color: '#CE2B2B',
    fontSize: 140,
    lineHeight: 260,
    ...fontFamilyPicker,  // Decides what font to use depending on web or android
    fontStyle: 'normal',
    fontWeight: 'normal',
    // letterSpacing: '-0.055em',
    // textShadowColor:'#585858',
    // textShadowOffset:{width: 5, height: 5},
    // textShadowRadius:10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    textAlign: 'center',
    display: 'flex',
    paddingLeft: 15,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
