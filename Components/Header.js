import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({name}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height: 40,
        width: "100%",
        backgroundColor: 'purple',
    },
    text:{
        color: 'white',
        textAlign:'center',
        fontSize:25,
    }
    
});
