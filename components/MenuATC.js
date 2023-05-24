import { StyleSheet, Text, View } from 'react-native'
import React,{createContext,useState} from 'react'
const CartItems = createContext();

const MenuATC = ({children}) => {
  const [cart, setcart] = useState([]);
  return (
   <CartItems.Provider value={{cart,setcart}}>
        {children}
   </CartItems.Provider>
  )
}

export {CartItems,MenuATC}

const styles = StyleSheet.create({})