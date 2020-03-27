import * as React from 'react';
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View, PixelRatio, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.gameTitleMath}>MATH</Text><Text style={styles.gameTitle24}>24</Text>
      </View>

      <View style={styles.helpContainer}>
        <Button title='Play' color="red" style={styles.testButton} onPress={() => navigation.navigate('GameScreen')} />
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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    textAlign: 'center',
    display: 'flex',
    paddingLeft: 15,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
});
