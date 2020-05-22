import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import Constants from 'expo-constants'
  
export default class HomeScreen extends React.Component{
  state= {
    email: "",
    displayName: ""
  }
  componentDidMount(){
    const { email, displayName } = firebase.auth().currentUser

    this.setState({ email, displayName })
  }
  signOutUser = ()=> {
    firebase.auth().signOut()
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.email}</Text>
        <TouchableOpacity onPress={this.signOutUser}>
          <Text>signOut</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    padding: Constants.statusBarHeight
    }
})