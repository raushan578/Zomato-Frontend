import { StyleSheet, Text, View,FlatList, Pressable,Image } from 'react-native'
import React from 'react'


const Dishes = () => {
    const data= [
        {index:'1',dishes1:'Pizza',image1:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',url1:'',dishes2:'Biryani',image2:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',url2:''},
        {index:'2',dishes1:'Burger',image1:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',url1:'',dishes2:'Roll',image2:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',url2:''},
        {index:'3',dishes1:'Chicken',image1:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',url1:'',dishes2:'Cake',image2:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',url2:''},
        {index:'4',dishes1:'Sandwich',image1:'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png',url1:'',dishes2:'Noodles',image2:'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png',url2:''},
        {index:'5',dishes1:'Chole Bhature',image1:'https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png',url1:'',dishes2:'Dosa',image2:'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',url2:''},
        {index:'6',dishes1:'Paneer',image1:'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png',url1:'',dishes2:'Special Thali',image2:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',url2:''}
    ]
  return (
    <View style={{backgroundColor:"#fff"}}>

         <View style={{display:"flex",flexDirection:"row", marginLeft:"auto",
        marginRight:"auto",marginTop:15,
        width:"90%",justifyContent:"center",alignItems:"center"}}>
        <Text style={{width:"21%",height:1,backgroundColor:"rgb(197,201,198)"}}></Text>
          <Text style={{letterSpacing:1,color:"rgb(89,92,90)",width:"62%",textAlign:"center"}}>WHAT'S ON YOUR MIND?</Text>
          <Text style={{width:"21%",height:1,backgroundColor:"rgb(197,201,198)"}}></Text>

        </View>
           

        {/* Dishes */}
        <View style={{paddingTop:15,paddingBottom:15}}>
         
         <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(key) =>{return key.index}} horizontal data={data} renderItem={(e)=>{
            return(
             <View style={{display:"flex",justifyContent:"center",
             alignItems:"center",flexDirection:"column"}}>
              
              <Pressable style={{width:80,height:80,borderRadius:40,margin:10,marginBottom:10}}>
                <Image style={{width:"100%",height:"100%",borderRadius:40}} source={{uri:e.item.image1}}/>
                <Text style={{textAlign:'center',fontWeight:'500'}}>{e.item.dishes1}</Text>
              </Pressable>
              <Pressable style={{width:80,height:80,borderRadius:40,margin:10,marginBottom:30,marginTop:30}}>
              <Image style={{width:"100%",height:"100%",borderRadius:40}} source={{uri:e.item.image2}}/>
              <Text style={{textAlign:'center',fontWeight:'500'}}>{e.item.dishes2}</Text>
              </Pressable>


             </View>

            )
         }} />

        </View>
       
          {/* vote */}

          <View style={{width:"90%",height:130,borderRadius:10,backgroundColor:"grey",marginLeft:"auto",marginRight:"auto",marginBottom:10}}>
            <Image source={{uri:'https://www.zomato.com/blog/wp-content/uploads/2023/03/blog-image-01-scaled.jpg'}} style={{width:"100%",height:"100%",borderRadius:10}} />
          </View>
    </View>
  )
}

export default Dishes

const styles = StyleSheet.create({})