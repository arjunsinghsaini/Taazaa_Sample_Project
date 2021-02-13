import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  HomePage,
  AlbumDetail
} from '../screens/index'

const Stack = createStackNavigator()

export function MainStackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomePage' component={HomePage} />
      <Stack.Screen name='AlbumDetail' component={AlbumDetail} />
    </Stack.Navigator>
  )
}