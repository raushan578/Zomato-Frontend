import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import RestaurantsData from '../data/RestaurantsData'
import { FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const Restaurants = () => {
  const data = RestaurantsData
  const navigation = useNavigation()
  return (
    <View style={{ backgroundColor: '#fff', padding: 5, paddingBottom: 20 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 15,
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            width: '21%',
            height: 1,
            backgroundColor: 'rgb(197,201,198)',
          }}
        ></Text>
        <Text
          style={{
            letterSpacing: 1,
            color: 'rgb(89,92,90)',
            width: '62%',
            textAlign: 'center',
          }}
        >
          {data.length}+ RESTAURANTS
        </Text>
        <Text
          style={{
            width: '21%',
            height: 1,
            backgroundColor: 'rgb(197,201,198)',
          }}
        ></Text>
      </View>

      <FlatList
        style={{ marginTop: 15 }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={(e) => {
          return (
            <View
              style={{
                width: '90%',
                height: 320,
                backgroundColor: '#fff',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 15,
                borderRadius: 20,
              }}
            >
              <Pressable
                style={[
                  {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  },
                  styles.shadow,
                ]}
                onPress={() => {
                  navigation.navigate('Menu', {
                    restName: e.item.restName,
                    location: e.item.location,
                    avgTime: e.item.delTime,
                    rating: e.item.rating,
                    offer: e.item.offer,
                    desc: e.item.desc,
                    totalorder: e.item.totalOrderPlaced,
                  })
                }}
              >
                <Image
                  source={{ uri: e.item.image }}
                  style={{
                    width: '100%',
                    height: '75%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    zIndex: 1,
                    position: 'absolute',
                    borderRadius: 20,
                    width: '88%',
                    padding: 5,
                    backgroundColor: 'rgb(37, 111, 239)',
                    paddingLeft: 10,
                    top: '72.5%',
                    left: '6%',
                  }}
                >
                  <MaterialCommunityIcons
                    name="brightness-percent"
                    size={24}
                    color="white"
                  />
                  <Text
                    style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}
                  >
                    {' '}
                    {e.item.offer}
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 80,
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    backgroundColor: 'black',
                    opacity: 0.5,
                    zIndex: 0,
                    border: 'none',
                  }}
                ></View>
                <Text
                  style={{
                    position: 'absolute',
                    top: '52%',
                    left: '4%',
                    fontSize: 24,
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  {e.item.restName}
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    top: '62%',
                    left: '4%',
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 500,
                    marginBottom: 5,
                  }}
                >
                  {e.item.desc}
                </Text>

                <Text
                  style={{
                    position: 'absolute',
                    top: '84.5%',
                    left: '4%',
                    fontSize: 11,
                    color: '#a78414',
                    fontWeight: 500,
                  }}
                >
                  <MaterialCommunityIcons
                    name="gold"
                    size={18}
                    color="#DAA550"
                  />{' '}
                  Free delivery with Gold
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    top: '91.5%',
                    left: '4%',
                    fontSize: 11,
                    color: 'black',
                    fontWeight: 500,
                  }}
                >
                  <Entypo name="stopwatch" size={18} color="rgb(13, 214, 73)" />{' '}
                  {e.item.delTime}-{e.item.delTime - '0' + 5} min •{' '}
                  {e.item.dist}
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    top: '87.5%',
                    right: '4%',
                    fontSize: 13,
                    color: 'rgb(77,76,76)',
                    fontWeight: 700,
                  }}
                >
                  {e.item.avgPrice}
                </Text>
              </Pressable>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
})
