import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import HospitalCard from './cards/HospitalCard';
import { Link } from 'expo-router';
import allHospital from '@/app/(tabs)/Home/allHospital';



const Hospital = () => {
  const router=useRouter();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hospital</Text>   
        <Link href='/(tabs)/Home/allHospital'  style={styles.headerBtn}>See all</Link>  
      </View>

      <View style={styles.cardsContainer}>
        
        <HospitalCard/>
       
      </View>

      
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
  cardsContainer: {
    marginTop: 16,
    borderBottomWidth:1,
    borderColor:'#F0F2F6',
    width:368,
    height:120,
  },
})

export default Hospital