import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


const doctor_detail = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>              
        <TouchableOpacity style={styles.mapButton} onPress={() =>{router.back();}}>
          <AntDesign name='left' size={24} color={'#fff'}/>
        </TouchableOpacity>
        <Text style={styles.title}>Doctor Detail</Text>
      </View>

      <View style={styles.cardContain}>
        <Text>doctor details</Text>
      </View>
      
      
    </SafeAreaView>
  )
}

export default doctor_detail

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
    gap:94,
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
  },
});