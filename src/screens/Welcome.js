import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

const Welcome = ({sign}) => {
    
  return (
    
    <View className="flex-1 justify-center items-center opacity-60 " style={{backgroundColor:themeColors.bgLight,}}>
      <View >
        <Text className="font-bold text-xl">Welcome to Korfee</Text>
      </View>

      <View className="w-[80%] mx-auto">
        <Text className="py-3 text-lg font-semibold">Sign In</Text>
        <View className="border rounded-md w-full space-y-4 p-3">
            <TouchableOpacity>
            <TextInput placeholder='Username' className="w-full bg-white px-2" />
            </TouchableOpacity>
            <TouchableOpacity>
            <TextInput placeholder='Password' className="w-full bg-white px-2" />
            </TouchableOpacity>
            <TouchableOpacity className="justify-center items-center  bg-amber-500 rounded-full py-2"
            onPress={sign}
            >
           <Text className="text-white">Login</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between">
        <Text>Dont have an Account?</Text>
        <Text>Register</Text>
        </View>
        <View className="justify-center items-center mt-5">
            <Text>OxNunana</Text>
            <Text>Pesewa labs</Text>
        </View>
        
      </View>
    </View>
  )
}

export default Welcome