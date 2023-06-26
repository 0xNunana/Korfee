import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import { useState } from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeIcon as HomeOutline,HeartIcon as HeartOutline,ShoppingBagIcon as BagOutline} from 'react-native-heroicons/outline'
import {HomeIcon as HomeSolid,HeartIcon as HeartSolid,ShoppingBagIcon as BagSolid} from 'react-native-heroicons/solid'
import Favorite from './src/screens/Favorite';
import Cart from './src/screens/Cart';
import { themeColors } from './src/theme';
import ProductScreen from './src/screens/ProductScreen';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator()
export default function App() {
  const [signedIn,setSignedIn]=useState(false)
  return (
   <NavigationContainer>
{!signedIn ? (
<Welcome sign={()=>setSignedIn(true)}/>
):(<Stack.Navigator screenOptions={{
  contentStyle:{backgroundColor:'white'}
}}>
  <Stack.Screen name='Home' component={HomeTabs} options={{headerShown:false}}/>
  <Stack.Screen name='Product' component={ProductScreen} options={{headerShown:false}}/>
</Stack.Navigator>

)}
    
    {/* <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Favorite" component={Favorite}/>
      <Tab.Screen name="Cart" component={Cart}/>
    </Tab.Navigator> */}
   </NavigationContainer>
   
  );
}

function HomeTabs(){
  return(
    <Tab.Navigator screenOptions={({route})=>({
      headerShown:false ,tabBarStyle:{marginBottom:10,borderRadius:50,backgroundColor:themeColors.bgLight},
      tabBarShowLabel:false, 
       tabBarIcon:({focused,color,size})=>menuIcons(route,focused)
      })}>


      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Favorite" component={HomeScreen}/>
      <Tab.Screen name="Cart" component={HomeScreen}/>
    </Tab.Navigator>
  )
}

const menuIcons =(route,focused)=>{
  let icon;
  if(route.name ==='Home'){
    icon= focused ? <HomeSolid size={20} color={themeColors.bgLight}/> :<HomeOutline size={20} color='white' strokeWidth={2}/>
  }else if(route.name === 'Favorite'){
    icon = focused ? <HeartSolid size={20} color={themeColors.bgLight}/>:<HeartOutline size={20} color="white" strokeWidth={2} />
  }else if(route.name=='Cart'){
    icon = focused ? <BagSolid size={20} color={themeColors.bgLight}/>:<BagOutline size={20} color='white' strokeWidth={2}/>
  }

  let buttonClass = focused ? 'bg-white':''
  return (<View className={`flex items-center rounded-full p-3 shadow ${buttonClass}`}>
    {icon}
  </View>)
}