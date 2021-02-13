import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/navigation/MainStackNavigator";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <MainStackNavigator
            routeName={'HomePage'}
          />
        </NavigationContainer>
      </View>
    )
  }
}
