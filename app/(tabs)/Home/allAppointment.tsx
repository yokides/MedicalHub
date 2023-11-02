import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const allAppointment = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>              
        <TouchableOpacity style={styles.mapButton} onPress={() =>{router.back();}}>
          <AntDesign name='left' size={24} color={'#fff'}/>
        </TouchableOpacity>
        <Text style={styles.title}>Appointment</Text>
      </View>

      <View style={styles.cardContain}>
        <Text>Appointment Cards</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default allAppointment

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:Colors.primary,
  },
  container:{
    height: 60,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    gap:90,
    paddingHorizontal:10,
  },
  title:{
    color:'#FFF',
    fontSize:16,
    fontWeight:'bold',
  },
  mapButton:{
    padding:10,
    borderRadius:50,
  },
cardContain:{
  backgroundColor:'#fff',
  height:750,
  borderTopLeftRadius:16,
  borderTopRightRadius:16,
  padding:20,
}
});
