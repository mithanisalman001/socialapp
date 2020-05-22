import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import NotficationScreen from './screens/NotficationScreen'
import MessageScreen from './screens/MessageScreen'
import * as firebase from 'firebase'
import PostScreen from './screens/PostScreen'

var firebaseConfig = {
  apiKey: "AIzaSyAqK2AJEZ7p2HaFfPsNTubCjzUsvHFORjQ",
  authDomain: "social-f3eb1.firebaseapp.com",
  databaseURL: "https://social-f3eb1.firebaseio.com",
  projectId: "social-f3eb1",
  storageBucket: "social-f3eb1.appspot.com",
  messagingSenderId: "92447579704",
  appId: "1:92447579704:web:c26a382c022f740eb710cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor}/>
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}/>
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons 
        name="ios-add-circle" 
        size={45} 
        color="#E9446A"
        style={{ shadowColor: "#E9446A", 
        shadowOffset : { width:0, height:0 },
        shadowRadius: 10, 
        shadowOpacity: 0.5
        }}
        />
      }
    },
    Notification: {
      screen: NotficationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor}/>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor}/>
      }
    }

  },
  {
    tabBarOptions:{
      activeTintColor: "#E9446A",
      inactiveTintColor: "#B8BBC4",
      showLabel: false
    }
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)