import { StyleSheet, Text, View ,Modal,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  CheckBox  from "expo-checkbox";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
const MenuModel = ({totalPrice,restName,avgTime,cart}) => {
    const [checkbox, setcheckbox] = useState(false);
    const [visibleSort, setvisibleSort] = useState(true);
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('FinalScreen');
    };

  

  return (
   
      <Modal transparent={true} visible={visibleSort} animationType="fade" >
<View style={{width:"100%",height:"45%",backgroundColor:"#000",opacity:.9}}></View>
<Entypo style={{position:"absolute",top:"37%",left:"45%"}} name="circle-with-cross" size={45} color="#fff"
 onPress={()=> setvisibleSort(!visibleSort)} />
 <ScrollView showsVerticalScrollIndicator={false}>
  <View style={[styles.container]}> 
  <View style={{width:"100%",height:60,backgroundColor:"#fff"}}>
     <Text style={{textAlign:"center",fontWeight:'400',fontSize:22,marginTop:13,color:"rgb(249,71,95)",fontWeight:"700"}}>{restName}</Text>
  </View>

  {/* //Sort list */}
  <View style={{width:"100%",flexDirection:"row",height:22,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500",fontSize:18}}><Entypo name="stopwatch" size={18} color="rgb(13, 214, 73)" /> Delivery in  {avgTime} minutes</Text></View>
 <View><Text></Text></View>
  </View>

  <Text style={{width:"100%",height:.5,backgroundColor:"grey",marginTop:7}}></Text>
{cart.map((e)=>{
  return(
    
  <View style={{width:"100%",flexDirection:"row",height:30,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500",color:"rgb(249,71,95)",fontSize:16}}>{e.name}</Text></View>
 <View><Text style={{fontWeight:"500",color:"rgb(249,71,95)",fontSize:16}}>₹{e.price}</Text></View>
  </View>

  )
})}
<Text style={{width:"100%",height:.5,backgroundColor:"grey",marginTop:7}}></Text>

<View style={{width:"100%",flexDirection:"column",height:60,paddingLeft:15,paddingRight:10,display:"flex",marginTop:7}}>
 <View><Text style={{fontWeight:"500",fontSize:18}}>Offers</Text></View>
 <View><Text style={{marginTop:5,fontWeight:'500'}}><MaterialCommunityIcons name="brightness-percent" size={24} color="blue" /> Select a Promo Code</Text></View>
  </View>

  <Text style={{width:"100%",height:.5,backgroundColor:"grey",marginTop:7}}></Text>



  <View style={{width:"100%",height:80,paddingLeft:15,
paddingRight:10,display:"flex"}}>

 <View><Text style={{fontWeight:"500",color:"black",fontSize:18}}>Climate consicous delivery</Text></View>
 <View style={{display:'flex',flexDirection:"row"}}>
 <FontAwesome name="cutlery" size={24} color="green" style={{marginTop:10}} /> 

<View style={{display:'flex',flexDirection:"column"}}>
<Text style={{fontWeight:"500",color:"green",fontSize:16}}> Donot send cutlery,tissues and straws </Text>
<Text style={{fontWeight:"500",color:"black",fontSize:16}}> Thank you for caring about the environment </Text>

</View>
<CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "green" : undefined}/>
</View>

  </View>
  <Text style={{width:"90%",height:.5,backgroundColor:"grey",marginTop:7,}}></Text>
 <View  style={{width:"100%",padding:7,marginLeft:"auto",marginRight:'auto',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
 <Entypo name="leaf" size={24} color="rgb(93, 199, 143)" />
  <Text style={{fontWeight:'500',padding:10}}> We fund environmental projects to offset carbon footprints of out deliveries  </Text>
 </View>
 <Text style={{width:"90%",height:.5,backgroundColor:"grey",marginTop:7,}}></Text>

   <View style={{width:"100%",padding:10,backgroundColor:"rgb(214, 203, 171)",display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Text>Item Total </Text>
      <Text>₹{totalPrice} </Text>
    </View>

    <View style={{width:"100%",padding:10,display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Text style={{fontWeight:'700',fontSize:18,letterSpacing:.5,color:'red'}}>Grand Total </Text>
      <Text style={{fontWeight:'700',fontSize:18,letterSpacing:.5,color:'red'}}>₹{totalPrice} </Text>
    </View>

    <TouchableOpacity style={{width:"100%",padding:15,backgroundColor:'red',display:'flex',justifyContent:"center",alignItems:"center"}}  onPress={handlePress}>
      <Text style={{fontWeight:'700',fontSize:20,letterSpacing:.5,color:'white'}} >Place Order </Text>
    </TouchableOpacity>
</View>
    </ScrollView>

</Modal>
  )
}

export default MenuModel

const styles = StyleSheet.create({
    container:{
     width:"100%",
     
     backgroundColor:"white",
     marginLeft:'auto',
     marginRight:'auto',
   
    },
    shadow:{
      shadowColor:"#000",
      shadowOffset:{
        width:0,
        height:.2
      },
      shadowOpacity:.3,
      shadowRadius:5,
      elevation:3
    }
  })
   