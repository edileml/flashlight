import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import imagex from './assets/icons/eco-light-off.png';

const App = () => {
const toggle = true; //false

 return ( 
 <View style={toggle ? style.containerLight : style.container}>
<Image 
style={toggle ? style.lightingOn : style.lightingOff} 
source={
  toggle
  ? require('./assets/icons/eco-light.png')
  : require('./assets/icons/eco-light-off.png')
  } 
  
  />
  </View>
);
};


export default App;


const style = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'black',
   alignItems: 'center',
   justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
   backgroundColor: 'white',
   alignItems: 'center',
   justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white', 
    width: 150,
    height: 150,
  },
