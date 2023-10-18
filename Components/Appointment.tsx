import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { Link, useRouter, useNavigation } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import AppointmentCard from './cards/AppointmentCard'
import allAppointment from '@/app/(tabs)/Home/allAppointment'

const Appointment = () => {
  const router=useRouter();
  const [selectedAppointment, setSelectedAppointment] = useState();
  const handleCardPress = () =>{}; 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
        <TouchableOpacity>  
          <Link href='/(tabs)/Home/allAppointment' style={styles.headerBtn}>See all</Link>
        </TouchableOpacity>   
      </View>
      <ScrollView horizontal>
        <View style={styles.cardContainer}>
          <AppointmentCard/>

        </View>
      </ScrollView> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal:20, 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight:'600',
    color: Colors.mediumDark,
  },
  headerBtn: {
    color: Colors.primary,
  },
  cardContainer: {
    marginLeft:3,
    marginTop: 10,
    marginBottom: 20,
    //flexDirection:'row',
    width:368,
    height:200,
    backgroundColor:'#fff',
    borderRadius:10,
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:2,
    shadowOffset:{
      width:1,
      height:1,
    }
    
    
  
  },
})

export default Appointment