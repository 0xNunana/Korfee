import { View, Text, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import {StarIcon,PlusIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const Coffeecard = ({image,name,stars,volume,price,desc}) => {
    const navigation = useNavigation()
  return (
    <View style={{
        borderRadius:40,
        backgroundColor:themeColors.bgDark,
        height:350,
        width:250,
    }}>
        <View style={{
               ...Platform.select({
                ios: {
                  shadowColor:'black',
                  shadowRadius:30,
                  shadowOffset:{width:0,height:40},
                  shadowOpacity: 0.8,
                },
                android: {
                  elevation: 5,
                },
              }),
            
        }}
         className="flex-row justify-center  "
        >
            <Image source={image} className='h-40 w-40 z-50  '/>
        </View>
<View className="px-5 mt-2 space-y-3 ">

    <Text className="text-3xl text-white font-semibold z-10">
        {name}
    </Text>
    <View style={{backgroundColor:'rgba(255,255,255,0.2)'}} className='flex-row items-center rounded-3xl  px-2 space-x-1 w-16'>
<StarIcon size={15} color="white"/>
<Text className="text-base font-semibold text-white">{stars}
</Text>
    </View>
    <View className="flex-row space-x-1 z-10 ">
        <Text className="text-base text-white font-semibold opacity-60">
            Volume
        </Text>
        <Text className="text-base text-white font-semibold">
         {volume}
        </Text>

    </View>
<View  className="flex-row justify-between items-center ">
    <Text className='text-white font-bold text-lg'>&#8373; {price}</Text>
<TouchableOpacity className='p-4 bg-white rounded-full' onPress={()=>navigation.navigate('Product',{volume,image,price,name,stars,desc})}
style={{
   
    shadowColor:'black',
    shadowRadius:25,
    shadowOffset:{width:0,height:40},
    shadowOpacity:0.8
}}
>
    <PlusIcon size={25} strokeWidth={2} color={themeColors.bgDark}/>
</TouchableOpacity>
</View>


</View>


      
    </View>
  )
}

export default Coffeecard