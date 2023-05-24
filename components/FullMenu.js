import { StyleSheet, Text, View,Pressable ,Image} from 'react-native'
import React,{useState} from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';


const FullMenu = ({menu,cart,setcart}) => {
    const [add, setadd] = useState(0);
    const data = menu;
    
  return (
    <View style={{width:"100%",display:"flex",flexDirection:"row",paddingLeft:15,
      paddingRight:5,
      paddingTop:20
   }}>
   <View style={{width:"50%"}}>
    <Text style={{fontSize:17,fontWeight:'500'}}>{data.name}</Text>
    <Text style={{fontSize:14,marginTop:10}}>₹{data.price}</Text>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center"
    ,width:"100%",marginTop:10,flexDirection:"row"}}>
    <Text
            style={{
              
              backgroundColor: "#FFFFF0",
              padding: 3,
              borderRadius: 4,
            }}
          >
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                key={`${data.id}-${i}`}
                style={{ margin: 2, marginHorizontal: 3 }}
                name={i < Math.floor(data.star) ? "star" : "star-o"}
                size={13}
                color="#FFD700"
              />
            ))}
          </Text>
        <Text style={{marginLeft:12,padding:3,backgroundColor:"rgb(237,223,225)",
        color:"rgb(249,71,95)",borderRadius:2,fontWeight:"500"}}>{data.bestSeller}</Text>
    </View>
    <View style={{marginTop:10,display:"flex",flexDirection:"row"}}>
        <Pressable style={{width:40,height:40,borderRadius:20,borderColor:"grey"
        ,borderWidth:1,display:"flex",justifyContent:"center",alignItems:"center" }}>
        <FontAwesome name="heart-o" size={21} color="rgb(249,71,95)" />
        </Pressable>
        <Pressable style={{width:40,height:40,borderRadius:20,borderColor:"grey"
        ,borderWidth:1,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:15 }}>
      <MaterialCommunityIcons name="share-outline" size={24} color="rgb(249,71,95)" />
                  </Pressable>
    </View>
   </View>
   
<View style={{width:"50%",paddingLeft:35}}>
<Image source ={{uri:data.image}}
 style={{width:"80%",height:100,borderRadius:10}}/>

          <Pressable style={{width:90,height:30,display:"flex",
          justifyContent:"center",alignItems:"center",
          flexDirection:"row",backgroundColor:"rgb(249,71,95)",borderRadius:4,paddingBottom:3
          ,position:"absolute",bottom:18,left:50}}>
            <Pressable onPress={()=> {
              setcart(cart.slice(0,cart.length-1))
             
              setadd(Math.max(0,add-1))
            }}>
                <Text style={{fontSize:22,color:"#fff",fontWeight:"700",width:30,textAlign:"center"}}>-</Text>
               
            </Pressable>
            <Text style={{fontSize:22,color:"#fff"}}>{add}</Text>
            <Pressable onPress={()=> 
            {
              setcart([...cart,menu])
              setadd(add+1)
            }
            }>
                <Text style={{fontSize:22,color:"#fff",marginLeft:10,fontWeight:"700",width:30,textAlign:"center"}}>+</Text>
            </Pressable>
          </Pressable>

       
</View>

</View>


  )
}

export default FullMenu

const styles = StyleSheet.create({})