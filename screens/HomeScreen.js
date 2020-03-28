import * as React from 'react';
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.gameTitleMath}>MATH</Text><Text style={styles.gameTitle24}>24</Text>
      </View>

      <TouchableOpacity style={styles.playContainer} onPress={() => navigation.navigate('GameScreen')}>
        <Text style={styles.playButton}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const fontFamilyPicker = Platform.select({
  android: { fontFamily: 'Roboto' },
  web: { fontFamily: './assets/fonts/Roboto' }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003466',
    alignItems: 'center',

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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    textAlign: 'center',
    display: 'flex',
    paddingLeft: 15,
  },
  playContainer: {
    width: 200,
    height: 80,
    backgroundColor: '#CE2B2B',
    borderRadius: 10,
  },
  playButton: {
    fontSize: 60,
    ...fontFamilyPicker,
    alignSelf: 'center',
  }
});
