import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import MenuScreen from './screens/MenuScreen';
import { MenuATC } from './components/MenuATC';
// import PaymentScreen from './screens/PaymentScreen';
import FinalScreen from './components/FinalScreen'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <MenuATC>
 <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}  
       options={{
          title: 'Zomato',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: 'rgb(249,71,95)',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}
        />

<Stack.Screen name="Menu" options={{headerShown:false}} component={MenuScreen} />






<Stack.Screen name="FinalScreen" component={FinalScreen} />


      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
    </NavigationContainer>

    </MenuATC>
   
  );
}

