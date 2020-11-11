import React from 'react'
import { Image, StyleSheet, Text, View ,SafeAreaView, Button} from 'react-native'
import Header from './Components/Header';
import { Provider as PaperProvider } from "react-native-paper";




const App = () => {
  return (
    <PaperProvider>
    <SafeAreaView>
    <View style={styles.head}>
      <Header name="header"/>
    </View>
    </SafeAreaView>
    
    <View style={styles.container}>
      <Text style={styles.text}>Let's connect</Text>
      <Image source={{uri:'https://randomuser.me/api/portraits/men/2.jpg'}} style={styles.img}/>
      <Button title="Follow" color='purple'></Button>
      <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/>
      <Button title="Follow" color='purple'></Button>
      <Image source={{uri:'https://randomuser.me/api/portraits/men/3.jpg'}} style={styles.img}/>
      <Button title="Follow" color='purple'></Button>
      <Image source={{uri:'https://randomuser.me/api/portraits/men/9.jpg'}} style={styles.img}/>
      <Button title="Follow" color='purple'></Button>
    </View>
    <View style={styles.head}>
      <Header name="footer"/>
    </View>
    </PaperProvider>
    
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
  },
  head:{
    width: "100%"
  }

})
