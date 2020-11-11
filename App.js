import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Image source={{uri:'https://randomuser.me/api/portraits/men/9.jpg'}} style={styles.img}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#79768d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  
  },
  text:{
    fontSize: 30
  },
  img:{
    height: 100,
    width: 100,
    borderRadius: 100/2
  }

  
})
