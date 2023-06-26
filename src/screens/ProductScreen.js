import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftCircleIcon,ShoppingBagIcon} from 'react-native-heroicons/outline'
import {HeartIcon}from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import {StarIcon,PlusIcon,MinusIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'

const ProductScreen = ({route}) => {
    const item = route.params
    const navigation = useNavigation()
    const [size,setSize]=useState("small")
    const [count,setCount]=useState(1)
  return (
    <SafeAreaView className="flex-1 ">
    
      
      <ScrollView>
      <Image source={require('../assets/images/beansBackground2.png')}
      style={{height:300,borderBottomLeftRadius:50,borderBottomRightRadius:50,}}
      className="w-full absolute "
      />
      <View className="space-y-4"
>
    <View className='mx-4 flex-row justify-between items-center'>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full border-2 border-white p-2" >
            <HeartIcon size={24} color="white"/>
        </TouchableOpacity>

    </View>
    <View className="flex-row justify-center"> 
        <Image source={item.image} className="h-60 w-60 "/>
    </View>

<View style={{backgroundColor:themeColors.bgLight}} className='flex-row items-center rounded-3xl  px-2 space-x-1 w-16 opacity-90 mx-4'>
<StarIcon size={15} color="white"/>
<Text className="text-base font-semibold text-white">{item.stars}
</Text>
    </View>
    <View className="mx-4 flex-row justify-between items-center">
<Text className='text-3xl font-semibold' style={{color:themeColors.text}}>
    {item.name}
</Text>
<Text className='text-3xl font-semibold' style={{color:themeColors.text}}>
    &#8373; {item.price}
</Text>
    </View>
  
    <View className="mx-4 space-y-2">
<Text className='text-lg font-semibold' style={{color:themeColors.text}}>
    Coffee size
</Text>
<View className='flex-row justify-between'>
<TouchableOpacity style={{backgroundColor:`${size==='small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}`}} 
onPress={()=>setSize('small')}
className=' p-3 px-8 rounded-full'>
    <Text className={`${size ==='small' ? 'text-white' : 'text-gray-700'}`}>Small</Text>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:`${size==='medium' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}`}} 
onPress={()=>setSize('medium')}
className=' p-3 px-8 rounded-full'>
    <Text className={`${size ==='medium' ? 'text-white' : 'text-gray-700'}`}>Medium</Text>
</TouchableOpacity>


<TouchableOpacity style={{backgroundColor:`${size==='large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}`}} 
onPress={()=>setSize('large')}
className=' p-3 px-8 rounded-full'>
    <Text className={`${size ==='large' ? 'text-white' : 'text-gray-700'}`}>Large</Text>
</TouchableOpacity>
</View>

    </View>
    <View className="mx-4 space-y-2 h-24">
<Text className='text-lg font-bold' style={{color:themeColors.text}}>
    About
</Text>
<Text className="text-gray-600">
    {item.desc}

</Text>
</View>
<View className="flex-row justify-between items-center mx-4 ">
    <View className="flex-row items-center space-x-1">
        <Text className="text-base text-gray-700 font-semibold opacity-60">
            Volume
        </Text>
        <Text className="text-base text-black font-semibold">
            {item.volume}
        </Text>
    </View>
<View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
    
    {count===1 ? (<TouchableOpacity onPress={()=>setCount((count)=>count -1)} disabled>
        <MinusIcon size={20} color={themeColors.text} strokeWidth={3}/>
    </TouchableOpacity>):
    (<TouchableOpacity onPress={()=>setCount((count)=>count -1)}>
        <MinusIcon size={20} color={themeColors.text} strokeWidth={3}/>
    </TouchableOpacity>)
}
    <Text className="font-extrabold text-lg" style={{color:themeColors.text}}>{count}</Text>
    <TouchableOpacity onPress={()=>setCount((count)=>count +1)}>
        <PlusIcon size={20} color={themeColors.text} strokeWidth={3}/>
    </TouchableOpacity>
</View>

</View>
<View className="flex-row justify-between mx-4 items-center space-x-3">
    <TouchableOpacity className="rounded-full p-4 border border-gray-400">
        <ShoppingBagIcon size={30} color='gray'/>
    </TouchableOpacity>
    <TouchableOpacity
    style={{backgroundColor:themeColors.bgLight}}
    className="rounded-full p-5 border border-gray-400 flex-1">
       <Text className="text-center text-base font-semibold text-white">Buy Now!</Text>
    </TouchableOpacity>
</View>


 
 




{/* buy button */}

    </View>
    
      </ScrollView>



    </SafeAreaView>


  )
}

export default ProductScreen