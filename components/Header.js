import { StyleSheet, Text, View,SafeAreaView,TextInput,FlatList, Pressable , Image,Modal} from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import  CheckBox  from "expo-checkbox";
import { useNavigation } from '@react-navigation/native';




//249,71,95
const Header = () => {
  const items = [
    {index : '1', itemName:"Sort",sort:'sort'},
    {index : '2', itemName:"Nearest"},
    {index : '3', itemName:"Great Offers"},
    {index : '4', itemName:"Rating 4.0+"},
    {index : '5', itemName:"Pure Veg"},
    {index : '6', itemName:"Cuisines"},
    {index : '7', itemName:"More"},
  ]
  const [checkbox, setcheckbox] = useState(false);

const [visibleSort, setvisibleSort] = useState(false);
const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:"#fff",paddingTop:5}}>


<View
      style={[{backgroundColor:"#fff",position:"relative",marginTop:10, width:"90%",height:35,borderRadius:10,
      display:"flex",justifyContent:"center",
      alignItems:"center",flexDirection:"row",
      marginLeft:"auto",marginRight:"auto",padding:5},styles.shadow]}
      >
         <AntDesign name="search1" size={24} color="black" style={{position:"absolute",left:7,color:"rgb(249,71,95)"}} />
        <TextInput placeholder='Restaurant name or a dish...'  style={{padding:10,position:"absolute",left:30,paddingLeft:10,paddingRight:5,width:"80%",color:"grey"}}  />
        <FontAwesome name="microphone" size={24} color="black"  style={{position:"absolute",right:8,color:"rgb(249,71,95)"}} />
        
      </View>




       <View style={{marginTop:15}}>
        <FlatList  showsHorizontalScrollIndicator={false} keyExtractor={(key) => {return(key.index)}} horizontal  data={items}  renderItem={(e) =>{
              return(
                <View style={[{paddingLeft:15,paddingRight:15,padding:10,
                borderRadius:7,marginLeft:10,marginRight:10,backgroundColor:"#fff",marginBottom:10},styles.shadow]}>
              <Pressable>  
               <Text>{e.item.sort === 'sort'  ? <Foundation name="filter" size={15} color="black" onPress={()=>setvisibleSort(!visibleSort)} /> :''} {e.item.itemName} {e.item.sort === 'sort' ? <FontAwesome onPress={()=>setvisibleSort(!visibleSort)} name="sort-down" size={15} color="black"  /> :''} </Text>
               </Pressable>
                </View>
              )
        }}/>

       </View>




        <View style={{position:"relative",width:"100%",padding:15,height:220,display:"flex",
        justifyContent:"center",alignItems:"center",flexDirection:"row"}}>

          <Pressable style={{width:"46%",height:"100%",backgroundColor:"red",borderRadius:10}} onPress={()=> {navigation.navigate("Camera")}}> 
            <Image source={{uri: 'https://pbs.twimg.com/media/DKOUeJkX0AABDha?format=jpg&name=large'}} style={{width:"100%",height:"100%",borderRadius:10}}/>
          </Pressable>
          <Pressable  style={{width:"46%",height:"100%",borderRadius:10,marginLeft:15}}> 
          <Image source={{uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ramadan-iftar-menu-flyer-design-template-10049b31b8050361ee38187f5b7a2aee_screen.jpg?ts=1618410114'}} style={{width:"100%",height:"100%",borderRadius:10}}/>

          
</Pressable>
</View>



        <View style={{display:"flex",flexDirection:"row", marginLeft:"auto",
        marginRight:"auto",
        width:"90%",justifyContent:"center",alignItems:"center"}}>
        <Text style={{width:"37%",height:1,backgroundColor:"rgb(197,201,198)"}}></Text>
          <Text style={{marginLeft:10,marginRight:10,letterSpacing:1,color:"rgb(89,92,90)",textAlign:"center"}}>EXPLORE</Text>
          <Text style={{width:"37%",height:1,backgroundColor:"rgb(197,201,198)"}}></Text>

        </View>



        <View style={{position:"relative",width:"100%",padding:15,height:100,display:"flex",
        justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:10}}>

          <Pressable style={[{width:"46%",height:"100%",backgroundColor:"white",
          borderRadius:10,display:"flex",flexDirection:"row",
          justifyContent:"center",alignItems:"center"},styles.shadow]}> 
             <View style={{width:"50%",paddingLeft:10}}>
              <Text style={{fontWeight:"bold"}}>Gourmet</Text>
              <Text style={{fontSize:12,color:"grey"}}>Selections</Text>
             </View>
            <Image source={{uri: 'https://img.freepik.com/premium-vector/noodles-bowl-cartoon-vector-illustration_87720-8510.jpg'}} style={{width:"50%",height:"100%",borderRadius:10}}/>
          </Pressable>
          <Pressable  style={[{width:"46%",height:"100%",borderRadius:10,
          marginLeft:15,display:"flex",flexDirection:"row",backgroundColor:"#fff",
          justifyContent:"center",alignItems:"center"},styles.shadow]}> 
          <View style={{width:"50%",paddingLeft:10}}>
              <Text style={{fontWeight:"bold"}}>Healthy</Text>
              <Text style={{fontSize:12,color:"grey",width:"120%"}}>Curated dish</Text>
             </View>
          <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwtN0-OxeO__QUFBQO4X-nNktBiWqtl_xKTRRTkugZRlSvqRXl5BezYcD2TNgI6RBU7s&usqp=CAU'}} style={{width:"50%",height:"100%",borderRadius:10,backgroundColor:"white"}}/>

          
</Pressable>
        </View>
<Modal transparent={true} visible={visibleSort} animationType="fade" >
<View style={{width:"100%",height:"51%",backgroundColor:"#000",opacity:.9}}></View>
<Entypo style={{position:"absolute",top:"42%",left:"45%"}} name="circle-with-cross" size={45} color="#fff" onPress={()=> setvisibleSort(!visibleSort)} />

  <View style={[styles.container,styles.shadow]}> 
  <View style={{width:"100%",height:60,borderBottomColor:"grey",backgroundColor:"#fff",borderBottomWidth:.5,}}>
     <Text style={{marginLeft:10,fontWeight:'400',fontSize:22,marginTop:13}}>Sort</Text>
  </View>

  {/* //Sort list */}
  <View style={{width:"100%",flexDirection:"row",height:50,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500"}}>Relevance</Text></View>
 <View><CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "rgb(249,71,95)" : undefined}/></View>
  </View>

  <View style={{width:"100%",flexDirection:"row",height:50,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500"}}>Rating: High To Low</Text></View>
 <View><CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "rgb(249,71,95)" : undefined}/></View>
  </View>

  <View style={{width:"100%",flexDirection:"row",height:50,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500"}}>Delivery Time : Low To High</Text></View>
 <View><CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "rgb(249,71,95)" : undefined}/></View>
  </View>

  <View style={{width:"100%",flexDirection:"row",height:50,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500"}}>Delivery Time : High To Low</Text></View>
 <View><CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "rgb(249,71,95)" : undefined}/></View>
  </View>

  <View style={{width:"100%",flexDirection:"row",height:50,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500"}}>Cost : Low To High</Text></View>
 <View><CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "rgb(249,71,95)" : undefined}/></View>
  </View>

  <View style={{width:"100%",flexDirection:"row",height:50,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500"}}>Cost : High To Low</Text></View>
 <View><CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "rgb(249,71,95)" : undefined}/></View>
  </View>

  <View style={{width:"100%",flexDirection:"row",height:50,paddingLeft:15,paddingRight:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <View><Text style={{fontWeight:"500"}}>Distance : Low To High</Text></View>
 <View><CheckBox value={checkbox} onValueChange={() =>setcheckbox(!checkbox)}
             color={checkbox ? "rgb(249,71,95)" : undefined}/></View>
  </View>







</View>

</Modal>


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
   width:"100%",
   height:"50%",
   backgroundColor:"white",
   borderRadius:20,
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
 
export default Header

