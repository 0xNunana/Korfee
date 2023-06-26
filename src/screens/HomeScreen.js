import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MapPinIcon} from 'react-native-heroicons/solid'
import {BellIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { themeColors } from '../theme'
import { categories, coffeeItems } from '../constants'
import Carousel from 'react-native-snap-carousel';
import Coffeecard from '../components/Coffeecard'


const HomeScreen = () => {
  const [activeCategory,setActivecategory]=useState(1)
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <StatusBar/>
      
      <Image source={require('../assets/images/beansBackground1.png')}
      className='w-full absolute -top-10 opacity-10'
      style={{height:220}}
      />
<ScrollView className='flex-1'>
  {/* Avatar and bell icon */}
  <View className='flex-row px-4 justify-between items-center'>
    <Image source={require('../assets/images/me.png')}
    className="rounded-full h-10 w-10  overflow-hidden aspect-auto"
   
    />
    <View className="flex-row items-center space-x-2">
      <MapPinIcon size='25' color={themeColors.bgLight}/>
      <Text className='font-semibold text-base'>Pesewa Labs,Ghana</Text>
    </View>
    <BellIcon size={27} color='black'/>
  </View>

  {/* search bar */}
<View className="mx-5 mt-14">
<View className="flex-row justify-center rounded-full  bg-[#e6e6e6] items-center">
  <TextInput placeholder='Search ' className='p-4 flex-1 font-semibold text-gray-700'/>
<TouchableOpacity className=" rounded-full p-2 mr-2" style={{backgroundColor:themeColors.bgLight}}>
  <MagnifyingGlassIcon size={25} color='white' strokeWidth={2}/>
</TouchableOpacity>
</View>
</View>

{/* categories */}

<View className="px-5 mt-6">
<FlatList
horizontal
showsHorizontalScrollIndicator={false}
data={categories}
className='overflow-visible'
keyExtractor={(item)=>(item.id)}
renderItem={({item})=>{
  let isActive = item.id===activeCategory;
  let activetextClass = isActive ?'text-white':'text-gray-700'
  return(
    <TouchableOpacity style={{backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}} 
    onPress={()=>setActivecategory(item.id)}
    className="p-4 px-5 rounded-full mr-2 shadow">
      <Text className={`font-semibold ${activetextClass}`}>{item.title}</Text>
    </TouchableOpacity>
  )
    

}}
/>
</View>

{/* coffee cards */}
<View className="mt-10 py-1">
  {/* use a carousel here */}
<Carousel
containerCustomStyle={{overflow:'visible'}}
loop={true}
data={coffeeItems}
renderItem={({item})=><Coffeecard image={item.image} name={item.name} stars={item.stars} volume={item.volume} price={item.price} desc={item.desc}/>}
firstItem={1}
inactiveSlideOpacity={0.75}
inactiveSlideScale={0.77}
sliderWidth={400}
itemWidth={240}
slideStyle={{display:'flex',alignItems:'center'}}
/>
{/* <FlatList
horizontal
data={coffeeItems}
keyExtractor={item=>item.id}
renderItem={({item})=><Coffeecard image={item.image} name={item.name}/>}

/> */}
</View>

</ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})