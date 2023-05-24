import { StyleSheet, Text, View, Pressable, ScrollView,TouchableOpacity,Dimensions } from 'react-native'
import React,{useContext,useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import MenuData from '../data/MenuData'
import FullMenu from './FullMenu'
import { CartItems } from './MenuATC'
import MenuModel from './MenuModel'

const MenuHeader = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const {cart,setcart} = useContext(CartItems);
  console.log(cart);
   let totalPrice = 0;
   for(let i=0;i<cart.length;i++){
    totalPrice += parseInt(cart[i].price) ;
   }
   const [modelShow, setmodelShow] = useState(false);
   const windowHeight = Dimensions.get('window').height;


  return (
    <>

      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 35,
          }}
        >
          <AntDesign
            style={{ marginLeft: 10 }}
            name="leftcircle"
            size={40}
            color="rgb(249,71,95)"
            onPress={() => navigation.navigate('Home')}
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Entypo
              style={{ marginRight: 15, marginTop: 5, color: 'black' }}
              name="camera"
              size={24}
              color="black"
            />
            <Entypo
              style={{ marginRight: 15, marginTop: 5, color: 'black' }}
              name="add-to-list"
              size={24}
              color="black"
            />
            <Entypo
              style={{ marginRight: 15, marginTop: 5, color: 'black' }}
              name="share"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',

            marginTop: 10,
            padding: 10,
          }}
        >
          <View style={{ width: '70%' }}>
            <Text style={{ fontSize: 26, fontWeight: '700' }}>
              {route.params.restName}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginTop: 3,
                color: 'darkblue',
              }}
            >
              {route.params.location}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginTop: 3,
                color: 'grey',
              }}
            >
              {route.params.desc}
            </Text>
          </View>
          <View style={{}}>
            <View
              style={{
                width: 70,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                backgroundColor: 'green',
                marginLeft: 40,
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                {route.params.rating}{' '}
                <AntDesign name="star" size={20} color="white" />
              </Text>
            </View>
            <Pressable
              style={{
                marginTop: 10,
                width: 100,
                marginLeft: 10,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                backgroundColor: 'rgb(241,71,95)',
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                30+ Photos
              </Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            width: '100%',
            paddingLeft: 10,
            paddingRight: 10,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View style={{ width: '30%', display: 'flex', flexDirection: 'row' }}>
            <View
              style={{
                width: '40%',
                backgroundColor: 'grey',
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MaterialCommunityIcons
                name="bike-fast"
                size={24}
                color="white"
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text>Mode</Text>
              <Text>Delivery</Text>
            </View>
          </View>
          <View style={{ width: '30%', display: 'flex', flexDirection: 'row' }}>
            <View
              style={{
                width: '40%',
                backgroundColor: 'grey',
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Entypo name="stopwatch" size={25} color="white" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text>Time</Text>
              <Text>30min for Free</Text>
            </View>
          </View>
          <View style={{ width: '30%', display: 'flex', flexDirection: 'row' }}>
            <View
              style={{
                width: '40%',
                backgroundColor: 'grey',
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 40,
              }}
            >
              <MaterialCommunityIcons
                name="brightness-percent"
                size={27}
                color="white"
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Offer</Text>
              <Text>View all</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderRadius: 20,
            marginTop: 15,
            height: 38,
            width: '90%',
            backgroundColor: 'rgb(222,222,222)',
            marginLeft: 10,
            marginRight: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 0 ,  paddingLeft:-20}}>
           <MaterialCommunityIcons name="scooter" size={24} color="black" />
            {' '}₹30 additional distance fee
          </Text>
        </View>

        <Text
          style={{
            width: '23%',
            marginLeft: 10,
            marginTop: 10,
            paddingBottom: 5,
            borderBottomColor: 'rgb(279,71,95)',
            borderBottomWidth: 3,
            fontSize: 19,
            fontWeight: '700',
          }}
        >
          Full Menu
        </Text>
      </ScrollView>
      <ScrollView style={{marginBottom:40}} showsVerticalScrollIndicator={false} scrollEnabled={true}>
      {MenuData.map((item) => (
        <FullMenu menu={item} cart={cart} setcart={setcart} />
      ))}
      </ScrollView>
  
     { modelShow ?   <MenuModel  totalPrice={totalPrice} restName={route.params.restName} 
      avgTime={route.params.avgTime} cart={cart}/> : ''}
      
      {cart.length >= 1 ?   <View style={{position:'absolute',top:windowHeight-12,width:"100%",height:50,
      display:"flex",flexDirection:'row',justifyContent:"space-between",
      alignItems:'center',backgroundColor:'white',padding:10}}>
     <Text style={{fontSize:19,letterSpacing:.5,fontWeight:'600'}}>Cart Item : ₹ {totalPrice}</Text>
      <TouchableOpacity onPress={()=>{
            setmodelShow(true);
      }}
       style={{width:"30%",height:40,display:"flex",borderRadius:10,
      justifyContent:"center",alignItems:"center",backgroundColor:"red"}}>
        <Text style={{color:"#fff",fontSize:18,letterSpacing:1}}>Buy</Text>
      </TouchableOpacity>
      </View> 
     : ""}

    </>
  )
}

export default MenuHeader

const styles = StyleSheet.create({})
