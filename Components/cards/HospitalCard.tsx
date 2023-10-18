import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HospitalCard = () => {
  return (
    <TouchableOpacity style={style.container}>
        <View>
            <Text>HospitalCard</Text>
        </View>
    </TouchableOpacity>
    
  )
}

const style = StyleSheet.create({
    container:{
        marginTop: 10,
        width:368,
        height:100,
    },
})
export default HospitalCard