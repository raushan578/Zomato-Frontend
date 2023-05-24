import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Dishes from '../components/Dishes'
import Restaurants from '../components/Restaurants'

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
   <Header/>
   <Dishes/>
   <Restaurants/>

   </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})