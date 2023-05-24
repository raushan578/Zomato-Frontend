import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinalScreen = () => {
  return (
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto"}}>
      <Text style={{fontWeight:'500',letterSpacing:.5}}>Horray! Your Order has been Confirmed!!!</Text>
      <Text style={{fontSize:25,color:"#cb202d",fontWeight:'bold'}}>Zomato</Text>
    </View>
  )
}

export default FinalScreen

const styles = StyleSheet.create({})