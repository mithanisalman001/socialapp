import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },
    button:{
        marginTop: 32,
        width: 123,
        marginTop:40,
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})